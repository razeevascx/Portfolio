import * as motion from "motion/react-client";
import { language } from "@/utils/SkillsData";
import Items from "@/components/Items";

export default function Lancrd() {
  const languages = Object.values(language);

  return (
    <>
      <Items Number="01" title={"Languages"} />
      <motion.div className="flex gap-8 whitespace-nowrap justify-around">
        {languages.map((dta, idx) => (
          <div
            key={`first-${dta.label}-${idx}`}
            className="inline-flex justify-center text-center items-center group hover:scale-105 text-4xl gap-4"
          >
            {dta.icon}

            <h3 className="font-bold text-xl">{dta.label}</h3>
          </div>
        ))}
      </motion.div>
      <Items Number="02" title={"Framework && Tools"} />
    </>
  );
}
