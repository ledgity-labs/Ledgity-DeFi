'use client'

import React, { useState, useEffect } from 'react';
import { IExecDataProtector, type ProtectedData } from "@iexec/dataprotector";
import { IExecWeb3mail, type Contact } from '@iexec/web3mail';
import { checkAppIsGrantedAccess, batchEmails } from '../mail/utils/utils';
import { LedgityAddress } from "@/utils/address";

// Initialize Web3Mail and DataProtector instances
const web3mail = new IExecWeb3mail(window.ethereum);
const dataProtector = new IExecDataProtector(window.ethereum);
const dataProtectorCore = dataProtector.core;


const SendMailForm: React.FC = () => {
    // State management
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [contentType, setContentType] = useState('text/plain');
    const [senderName, setSenderName] = useState('');
    const [label, setLabel] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [protectedData, setProtectedData] = useState<string>('');
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [chosenContact, setChosenContact] = useState<string>('Select a contact');
    const [isBatchSending, setIsBatchSending] = useState(false);

    // Effects
    useEffect(() => {
        fetchContactList();
    }, []);

    // Helper functions
    const fetchContactList = async () => {
        try {
            const contactsList: Contact[] = await web3mail.fetchUserContacts({ userAddress: LedgityAddress });

            // Filter contacts and check access for each
            const filteredContacts = await Promise.all(
                contactsList.map(async (contact) => {
                    const hasAccess = await checkAppIsGrantedAccess(contact.address);
                    return hasAccess ? contact : null;
                })
            );

            // Remove null values and set the filtered contacts
            const validContacts = filteredContacts.filter((contact): contact is Contact => contact !== null);
            setContacts(validContacts);
            return validContacts;
        } catch (err) {
            console.error('Error fetching contacts:', err);
            setError('Failed to fetch contacts. Please try again.');
        }
    };

    const handleContactSelection = async (contactAddress: string) => {
        try {
            // Get protected data for the selected contact
            const listProtectedData = await dataProtectorCore.getProtectedData({
                owner: contactAddress,
                requiredSchema: { email: 'string' },
            });

            // Find the first protected data that Ledgity has access to
            for (const data of listProtectedData) {
                const hasAccess = await checkAppIsGrantedAccess(data.address);
                if (hasAccess) {
                    setProtectedData(data.address);
                    setChosenContact(data.address)
                    return;
                }
            }

            // If no accessible protected data found
            setError('No accessible protected data found for this contact.');
            setProtectedData('');
        } catch (err) {
            console.error('Error fetching protected data:', err);
            setError('Failed to fetch protected data. Please try again.');
            setProtectedData('');
        }
    };

    const handleSendEmail = async () => {
        setIsSending(true);
        setError(null);
        setSuccess(false);

        try {
            await web3mail.sendEmail({
                protectedData,
                emailSubject: subject,
                emailContent: content,
                contentType,
                senderName: senderName || undefined,
                label: label || undefined
            });

            setSuccess(true);
        } catch (err) {
            console.error('Error sending email:', err);
            setError('Failed to send email. Please try again.');
        } finally {
            setIsSending(false);
        }
    };

    const handleBatchSendEmails = async () => {
        setIsBatchSending(true);
        setError(null);
        setSuccess(false);

        try {
            await batchEmails(subject, content, contentType, senderName, label);
            setSuccess(true);
        } catch (err) {
            console.error('Error batch sending emails:', err);
            setError('Failed to batch send emails. Please try again.');
        } finally {
            setIsBatchSending(false);
        }
    };

    // Render function
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Send Web3 Email</h2>

            {/* Recipient Selection */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                    Recipient
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contact"
                    value={protectedData}
                    onChange={(e) => handleContactSelection(e.target.value)}
                >
                    <option value="" >{chosenContact}</option>
                    {contacts.map((contact, index) => (
                        <option key={index} value={contact.owner}>
                            {contact.owner}
                        </option>
                    ))}
                </select>
            </div>

            {/* Email Subject */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                    Subject
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter email subject"
                    maxLength={78}
                />
            </div>

            {/* Email Content */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                    Content
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter email content"
                    rows={4}
                />
            </div>

            {/* Content Type Selection */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contentType">
                    Content Type
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="contentType"
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                >
                    <option value="text/plain">Plain Text</option>
                    <option value="text/html">HTML</option>
                </select>
            </div>

            {/* Sender Name */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senderName">
                    Sender Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="senderName"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Enter sender name"
                />
            </div>

            {/* Custom Label */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="label">
                    Custom Label
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="label"
                    type="text"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    placeholder="Enter custom label"
                />
            </div>

            {/* Send Button */}
            <div className="flex items-center justify-between">
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    type="button"
                    onClick={handleSendEmail}
                    disabled={isSending || !protectedData}
                >
                    {isSending ? 'Sending...' : 'Send Email'}
                </button>
            </div>

            {/* Batch Send Button */}
            <div className="flex items-center justify-between">
                <button
                    className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isBatchSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    type="button"
                    onClick={handleBatchSendEmails}
                    disabled={isBatchSending || !subject || !content}
                >
                    {isBatchSending ? 'Batch Sending...' : 'Batch Send Emails'}
                </button>
            </div>

            {/* Error and Success Messages */}
            {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
            {success && <p className="text-green-500 text-xs italic mt-2">Email sent successfully!</p>}
        </div>
    );
};

export default SendMailForm;