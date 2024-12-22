import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { name } from '../assets/assests';

const Name = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let interval;

    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 30);
    } else if (progress === 100) {
      setTimeout(() => setIsVisible(false), 500);
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div
      className={`h-[90vh] flex flex-col justify-center items-center overflow-hidden ${
        isVisible ? '' : 'hidden'
      }`}
    >
      <div className="flex justify-center items-center mb-4 w-full px-4">
        <motion.img
          src={name}
          whileHover={{
            scale: 1.1,
          }}
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          alt="Responsive Name Logo"
          className="max-w-[80%] md:max-w-[60%] lg:max-w-[40%] max-h-[70vh] w-auto h-auto object-contain"
        />
      </div>

      {/* Progress Bar */}
      {isVisible && (
        <motion.div
          className="absolute bottom-8 w-full px-4 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-600 to-indigo-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Name;
