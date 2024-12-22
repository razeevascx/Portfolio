import { motion } from 'framer-motion';
import { FaDatabase, FaPalette, FaLayerGroup } from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';

const services = [
  {
    icon: <BiCodeBlock size={40} aria-label="MERN Stack Development" />,
    title: 'MERN Stack Development',
    description:
      'Specialized in building full-stack applications using MongoDB, Express.js, React.js, and Node.js. Creating scalable and modern web solutions with the latest technologies.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux'],
  },
  {
    icon: <FaPalette size={40} aria-label="Graphic Design" />,
    title: 'Graphic Design',
    description:
      'Creating stunning visual content including logos, brand identity, marketing materials, and social media graphics. Focusing on unique and memorable designs.',
    technologies: ['Photoshop', 'Illustrator', 'Figma'],
  },
  {
    icon: <FaLayerGroup size={40} aria-label="UI/UX Design" />,
    title: 'UI/UX Design',
    description:
      'Designing intuitive and user-centered interfaces with a focus on user experience. Creating wireframes, prototypes, and implementing responsive designs.',
    technologies: ['Figma'],
  },
  {
    icon: <FaDatabase size={40} aria-label="Database Management" />,
    title: 'Database Management',
    description:
      'Expert in database design, optimization, and management. Handling both SQL and NoSQL databases with a focus on performance and security.',
    technologies: ['MongoDB', 'MySQL'],
  },
];

const ServiceCard = ({ service }) => (
  <motion.div
    className="p-6 rounded-lg bg-secondary-background/50 backdrop-blur-sm
               border border-secondary/20 hover:border-secondary/50
               transform hover:-translate-y-2 transition-all duration-300
               group shadow-md hover:shadow-lg"
  >
    <div className="text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
      {service.icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 text-primary-text">
      {service.title}
    </h3>
    <p className="text-secondary-text mb-4">{service.description}</p>

    {/* Technologies Tags */}
    <div className="flex flex-wrap gap-2 mt-4">
      {service.technologies.map((tech, techIndex) => (
        <span
          key={techIndex}
          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary
                   hover:bg-primary/20 transition-colors duration-300"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

const Service = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="w-full ">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div
          className="border-l-4 border-blue-500 pl-4 m-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-white">
            <span className="text-blue-500">02.</span> Services
          </h1>
        </motion.div>

        {/* Services Grid */}
        <div className="grid p-4 grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Service;
