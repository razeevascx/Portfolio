import { motion } from 'framer-motion';

const LocationAndRole = ({ variants }) => (
  <motion.div variants={variants} className="flex flex-col space-y-2">
    <div className="flex items-center space-x-2 text-gray-300">
      <span className="text-2xl">🎓</span>
      <h6 className="text-lg md:text-2xl">Computer Science Student</h6>
    </div>
    <div className="flex items-center space-x-2 text-gray-300">
      <span className="text-2xl">📆</span>
      <h6 className="text-lg md:text-2xl">18 yrs ( 2006 AD / 2062 BS )</h6>
    </div>
  </motion.div>
);

export default LocationAndRole;