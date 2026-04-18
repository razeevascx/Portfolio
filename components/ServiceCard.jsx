import * as motion from "motion/react-client";

const ServiceCard = ({ service }) => (
  <motion.div
    className="p-6 rounded-lg border-dashed  border-2  border-slate-700/50  hover:border-secondary/50
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
export default ServiceCard;
