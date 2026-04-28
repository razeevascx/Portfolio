import * as motion from "motion/react-client";
import Link from "next/link";
import { quicklink } from "@/lib/constants";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { ArrowRight } from "lucide-react";

function Navbar() {
  return (
    <nav className="py-4 px-4 z-50 sticky top-0 shadow-md backdrop-blur-sm ">
      <Container>
        <div className="container mx-auto flex justify-between items-center ">
          <motion.div whileTap={{ scale: 1.05 }} className="cursor-pointer">
            <Link href="/">
              <Logo
                width={60}
                height={30}
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </motion.div>
          <div className="flex space-x-4">
            {quicklink.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                className="flex items-center hover:text-blue-500 text-lg"
                whileTap={{ scale: 1.2 }}
              >
                <span className="font-bold">{link.title}</span>
              </motion.a>
            ))}
          </div>
          <div className="flex space-x-4 gap-4">
            <motion.a
              href="mailto:contact@rajeevpuri.com.np"
              className="flex items-center hover:text-blue-500 text-lg"
            >
              <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all">
                Lets Talk <ArrowRight size={14} />
              </button>
            </motion.a>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
