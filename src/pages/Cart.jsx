import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import products from '../data/products';
import { PaystackButton } from 'react-paystack';
import { motion } from 'framer-motion';

const CheckoutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  const [details, setDetails] = useState({
    name: '',
    email: '',
    size: '',
    color: '',
    location: '',
  });

  const publicKey = import.meta.env.VITE_APP_PAYSTACK_PUBLIC_KEY;
  if (!product) return <div className="p-6">Product not found.</div>;
  if (!publicKey)
    return (
      <div className="p-6 text-center text-red-600">
        Paystack key missing. Define <code>VITE_APP_PAYSTACK_PUBLIC_KEY</code> and restart.
      </div>
    );

  const rawPrice = Number(product.price);
  if (isNaN(rawPrice) || rawPrice <= 0) return <div className="p-6">Invalid product price.</div>;
  const amount = Math.round(rawPrice * 100); // cents for KES

  // Only enable payment when name and valid email are present
  const emailValid = /\S+@\S+\.\S+/.test(details.email);
  const canPay = details.name.trim() && emailValid;

  const handleSuccess = (reference) => {
    // Build full receipt with all choices + transaction ref
    const receiptLines = [
      `Order confirmed: ${product.name}`,
      `Name: ${details.name}`,
      `Email: ${details.email}`,
      `Size: ${details.size || 'N/A'}`,
      `Color: ${details.color || 'N/A'}`,
      `Location: ${details.location || 'N/A'}`,
      `Transaction Ref: ${reference.reference}`,
      `Amount: KES ${rawPrice.toLocaleString()}`,
    ];
    const receipt = receiptLines.join('\n');
    const whatsappURL = `https://wa.me/254721651705?text=${encodeURIComponent(receipt)}`;
    window.location.href = whatsappURL;
  };

  const componentProps = {
    email: details.email,
    amount,
    publicKey,
    text: "Complete Payment",
    onSuccess: handleSuccess,
    onClose: () => alert("Payment window closed."),
    metadata: {
      primary_name: details.name,
    },
    currency: "KES", 
  };
  


  return (
    <div className="bg-gradient-to-b from-[#FF6B6B]/10 to-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6"
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-[#2B2D42] mb-2 font-righteous">
            Complete Your Order
          </h1>
          <p className="text-lg text-[#FF6B6B] font-opensans">{product.name}</p>
          <p className="text-xl font-bold text-[#2B2D42] mt-2">
            KES {rawPrice.toLocaleString()}
          </p>
        </div>

        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#2B2D42] mb-1 font-opensans">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#2B2D42] mb-1 font-opensans">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={details.email}
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
            />
          </div>

          {/* Size */}
          <div>
            <label className="block text-sm font-medium text-[#2B2D42] mb-1 font-opensans">
              Size
            </label>
            <select
              value={details.size}
              onChange={(e) => setDetails({ ...details, size: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
            >
              <option value="">Select Size</option>
              {product.sizes.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium text-[#2B2D42] mb-1 font-opensans">
              Color
            </label>
            <select
              value={details.color}
              onChange={(e) => setDetails({ ...details, color: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
            >
              <option value="">Select Color</option>
              {product.colors.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-[#2B2D42] mb-1 font-opensans">
              Delivery Location
            </label>
            <input
              type="text"
              placeholder="Address for delivery"
              value={details.location}
              onChange={(e) => setDetails({ ...details, location: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent"
            />
          </div>

          {/* Payment */}
          <div className="pt-4">
            {canPay ? (
              <PaystackButton
                {...componentProps}
                className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] hover:opacity-90 text-white py-3 px-6 rounded-lg font-bold transition-opacity font-opensans text-lg"
              />
            ) : (
              <div className="text-red-500 text-center py-3 border border-red-300 rounded-lg">
                Enter your name and a valid email to enable payment.
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutPage;
