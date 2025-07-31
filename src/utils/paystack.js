import { payWithPaystack } from './paystack';

const handlePayment = () => {
  payWithPaystack({
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    email: details.email,
    amount: product.price * 100,
    onSuccess: (response) => {
      const receipt = `Order confirmed: ${product.name}, Size: ${details.size}, Color: ${details.color}, Location: ${details.location}. Ref: ${response.reference}`;
      const whatsappURL = `https://wa.me/254716668668?text=${encodeURIComponent(receipt)}`;
      window.location.href = whatsappURL;
    },
    onClose: () => alert('Payment was cancelled'),
  });
};
