// DonationCheckout.jsx
import { useEffect, useState } from 'react';
import { FaShieldAlt, FaLock, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DonationCheckout() {
    useEffect(() => {
        window.scrollTo(0, 0);
        // Load Paystack script dynamically
        const script = document.createElement('script');
        script.src = 'https://js.paystack.co/v1/inline.js';
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    

    const [donationType, setDonationType] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!donationType) {
            alert('Please select a donation type');
            setIsSubmitting(false);
            return;
        }

        if (!formData.name || !formData.email || !formData.amount) {
            alert('Please fill in all required fields');
            setIsSubmitting(false);
            return;
        }

        // Ensure Paystack is loaded
        if (!window.PaystackPop) {
            alert('Payment processor is still loading. Please try again in a moment.');
            setIsSubmitting(false);
            return;
        }

        try {
            const handler = window.PaystackPop.setup({
                key: import.meta.env.VITE_PAYSTACK_KEY, 
                email: formData.email,
                amount: formData.amount * 100, 
                currency: 'KES',
                metadata: {
                    custom_fields: [
                        {
                            display_name: "Donor Name",
                            variable_name: "donor_name",
                            value: formData.name
                        },
                        {
                            display_name: "Donation Type",
                            variable_name: "donation_type",
                            value: donationType
                        },
                        {
                            display_name: "Message",
                            variable_name: "message",
                            value: formData.message
                        }
                    ]
                },
                callback: function(response) {
                  // This is where you handle successful payment
                  window.location.href = `/thank-you?reference=${response.reference}&amount=${formData.amount}&type=${donationType}`;
                },
                onClose: function() {
                    alert('Payment window closed - you can complete your donation later');
                }
            });
            
            handler.openIframe();
        } catch (error) {
            console.error('Payment error:', error);
            alert('Error initializing payment. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-5 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white p-6 text-center">
                        <h1 className="text-2xl md:text-3xl font-bold font-righteous">
                            Complete Your Donation
                        </h1>
                        <p className="mt-2 font-opensans">
                            Your support makes a difference
                        </p>
                    </div>

                    {/* Donation Type Selection */}
                    <div className="p-6 border-b">
                        <h2 className="text-lg font-bold text-[#2B2D42] mb-4 font-righteous">
                            Select Donation Type
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setDonationType('gloria')}
                                className={`p-4 rounded-lg border-2 ${donationType === 'gloria' ? 'border-[#FF6B6B] bg-[#FF6B6B]/10' : 'border-gray-200'} transition-all`}
                            >
                                <div className="flex items-center">
                                    <div className={`mr-3 ${donationType === 'gloria' ? 'text-[#FF6B6B]' : 'text-gray-400'}`}>
                                        <FaShieldAlt className="text-xl" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold font-righteous">Gloria's Journey</h3>
                                        <p className="text-sm text-gray-600 font-opensans">Pageants, performances, costumes</p>
                                    </div>
                                </div>
                            </button>

                            <button
                                type="button"
                                onClick={() => setDonationType('foundation')}
                                className={`p-4 rounded-lg border-2 ${donationType === 'foundation' ? 'border-[#2B2D42] bg-[#2B2D42]/10' : 'border-gray-200'} transition-all`}
                            >
                                <div className="flex items-center">
                                    <div className={`mr-3 ${donationType === 'foundation' ? 'text-[#2B2D42]' : 'text-gray-400'}`}>
                                        <FaLock className="text-xl" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold font-righteous">Gloriasarah Foundation</h3>
                                        <p className="text-sm text-gray-600 font-opensans">Community outreach programs</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Donation Form */}
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-opensans mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent font-opensans"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-opensans mb-1">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent font-opensans"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700 font-opensans mb-1">
                                    Amount (KES) *
                                </label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">KES</span>
                                    <input
                                        type="number"
                                        id="amount"
                                        name="amount"
                                        min="100"
                                        required
                                        value={formData.amount}
                                        onChange={handleChange}
                                        className="w-full pl-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent font-opensans"
                                        placeholder="1000"
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-opensans mb-1">
                                    Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent font-opensans"
                                    placeholder="Your words of encouragement..."
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>
                        </div>

                        {/* Security Assurance */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-start">
                            <FaLock className="text-[#FF6B6B] mt-1 mr-3" />
                            <div>
                                <p className="text-sm text-gray-600 font-opensans">
                                    Your donation is secure and protected by Paystack's bank-level encryption.
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-6 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:opacity-90 text-white py-4 px-6 rounded-lg font-bold transition-opacity font-opensans flex items-center justify-center"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                'Processing...'
                            ) : (
                                <>
                                    Complete Donation
                                    <FaArrowRight className="ml-2" />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}