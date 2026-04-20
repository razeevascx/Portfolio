import * as motion from "motion/react-client";
import Button from "@/components/ui/Button";

interface TechItem {
  id: string;
  icon: React.ReactNode;
}

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  tech: Record<string, TechItem>;
  image?: string;
  date?: string;
  list?: string[];
  index?: number;
}

const Project = ({
  title,
  description,
  link,
  index = 0,
  tech,
  image,
  date = "2024",
  list,
}: ProjectProps) => {
  const code = `[0${String(index + 1)}]`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="border  transition-colors duration-300 flex items-center  p-6  border-slate-600/50 hover:border-blue-400/50 group "
    >
      <div className="max-w-4xl space-y-8">
        <div className="font-mono text-xs text-[#555] mb-3">{code}</div>

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
          <p className=" mb-2 font-medium  inline-block bg-white text-black px-3 py-1 text-xs tracking-wider">
            {date}
          </p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 "
          >
            <h3 className="text-3xl font-bold text-white hover:text-blue-400 hover:underline transition-colors duration-300">
              {title}
            </h3>
          </a>

          {list && list.length > 0 && (
            <ul className="text-gray-400 mt-4 space-y-2">
              {list.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="text-gray-400 mt-4 leading-relaxed">{description}</p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            {Object.values(tech).map((item, i) => (
              <Button
                key={i}
                className="text-lg  px-4 py-2 transition-all duration-300 flex items-center gap-2 cursor-pointer "
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium group-hover:text-white">
                  {item.id}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
