// src/components/FloatingAd.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function FloatingAd() {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);


  useEffect(() => {
    // auto-hide after 3 seconds if no click
    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

 

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
        >
          {/* Poster Image */}
          <img
            src="/assets/ad.jpg"
            alt="YIFW M Universe International 2025"
            className="w-full h-60 object-cover"
          />

          <div className="p-4 text-center">
            <h3 className="text-sm font-bold text-[#FF6B6B] mb-1">
              Congratulations!
            </h3>
            <p className="text-xs text-gray-700 mb-3 leading-snug">
              Selected for <strong>YIFW M Universe International 2025!</strong>
            </p>

            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/p/DL9SnOCvFk9/?igsh=ZDhxdzZiNGh1cWhp" // replace with actual external URL
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => clearTimeout(timerRef.current)}
                className="flex-1 bg-[#FF6B6B] text-white text-xs font-semibold px-3 py-2 rounded-lg hover:opacity-90 transition"
              >
                View Details
              </a>
              
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
