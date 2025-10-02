import * as motion from "motion/react-client";
import { language } from "@/utils/SkillsData";
import Button from "../Button";

export default function Lancrd() {
  const languages = Object.values(language);

  return (
    <motion.div className="flex m-4 flex-wrap gap-8 whitespace-nowrap  border-2 border-dashed divide-dashed border-gray-500 p-4 rounded-lg justify-around">
      {languages.map((dta, idx) => (
        <div
          key={`first-${dta.label}-${idx}`}
          className="flex justify-center m-2 text-centers items-center group hover:scale-105  gap-4  "
        >
          <Button
            icon={dta.icon}
            variant={"ghost"}
            name={dta.label}
            className={"text-2xl rounded-4xl"}
          />
        </div>
      ))}
    </motion.div>
  );
}
