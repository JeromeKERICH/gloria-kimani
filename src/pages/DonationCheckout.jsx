// DonationCheckout.jsx
import { useEffect, useState, useRef } from 'react';
import { FaLock, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function DonationCheckout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const paystackLoadedRef = useRef(false);
  const scriptRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Load Paystack script once
    if (!window.PaystackPop) {
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.async = true;
      script.onload = () => {
        paystackLoadedRef.current = true;
      };
      script.onerror = () => {
        console.error('Failed to load Paystack script.');
      };
      document.body.appendChild(script);
      scriptRef.current = script;
    } else {
      paystackLoadedRef.current = true;
    }

    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateReference = () => {
    // Simple reference: timestamp + random suffix
    return `don_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const { name, email, amount } = formData;

    if (!name.trim() || !email.trim() || !amount) {
      alert('Please fill in name, email, and amount.'); 
      setIsSubmitting(false);
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Enter a valid donation amount greater than zero.');
      setIsSubmitting(false);
      return;
    }

    if (!paystackLoadedRef.current || !window.PaystackPop) {
      alert('Payment processor is still loading. Please wait a moment.');
      setIsSubmitting(false);
      return;
    }

    // Amount in lowest unit (e.g., cents/kobo)
    const amountInLowestUnit = Math.round(parsedAmount * 100);

    try {
      const handler = window.PaystackPop.setup({
        key: import.meta.env.VITE_PAYSTACK_KEY, 
        email: email.trim(),
        amount: amountInLowestUnit,
        currency: 'KES',
        reference: generateReference(),
        metadata: {
          custom_fields: [
            {
              display_name: 'Donor Name',
              variable_name: 'donor_name',
              value: name.trim()
            }
          ]
        },
        callback: function (response) {
          // Payment success - redirect or show thank you
          window.location.href = `/thank-you?reference=${encodeURIComponent(response.reference)}&amount=${encodeURIComponent(parsedAmount)}`;
        },
        onClose: function () {
          alert('Payment window closed. You can complete your donation later.');
        }
      });

      handler.openIframe();
    } catch (err) {
      console.error('Paystack initialization error:', err);
      alert('Failed to initialize payment. Check console for details.');
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
          <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white p-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold font-righteous">
              Complete Your Donation
            </h1>
            <p className="mt-2 font-opensans">
              Your support makes a difference
            </p>
          </div>

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
                    min="1"
                    required
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full pl-12 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent font-opensans"
                    placeholder="1000"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg flex items-start">
              <FaLock className="text-[#FF6B6B] mt-1 mr-3" />
              <div>
                <p className="text-sm text-gray-600 font-opensans">
                  Your donation is secure and protected by Paystack's bank-level encryption.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:opacity-90 text-white py-4 px-6 rounded-lg font-bold transition-opacity font-opensans flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : (
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
