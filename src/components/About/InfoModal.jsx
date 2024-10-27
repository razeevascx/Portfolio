import { motion } from "framer-motion";

const InfoModal = ({ setShowInfo }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        className="bg-white rounded-lg p-6 w-full max-w-md"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowInfo(false)} // Close the modal
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default InfoModal;
