import * as motion from "motion/react-client";
import Button from "@/components/ui/Button";

const Project = ({ title, description, link, tech, image, date = "2024" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border-b border-gray-800 pb-20 hover:border-gray-700 transition-colors duration-300"
    >
      <div className="max-w-4xl space-y-8">
        {image && (
          <div className=" shadow-lg">
            <img
              src={`/pictures/${image}`}
              alt={title}
              className="w-full hover:scale-100 transition-transform duration-500"
            />
          </div>
        )}
        <div>
          <p className="text-gray-500 text-sm mb-2 font-medium">{date}</p>
          <h3 className="text-3xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 mt-4 leading-relaxed">{description}</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {Object.values(tech).map((item, i) => (
              <Button
                key={i}
                className="text-lg rounded-full px-4 py-2 transition-all duration-300 flex items-center gap-2 cursor-pointer "
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium group-hover:text-white">
                  {item.id}
                </span>
              </Button>
            ))}
          </div>

          <Button
            name="View Project &rarr;"
            variant="ghost"
            link={link}
            className="text-lg rounded-4xl hover:bg-blue-500 hover:text-white transition-colors duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
