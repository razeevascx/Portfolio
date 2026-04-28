import * as motion from "motion/react-client";
import Link from "next/link";
import Container from "@/components/Container";
import Socialicons from "@/components/ui/Socialicons";
import Marquee from "../ui/Marquee";

export default function Hero() {
  return (
    <>
      <Container id="home" className="w-full p-5 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-12"
        >
          <div className="grid  items-center min-h-[90dvh]">
            <div className="z-10">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-12 bg-blue-600"></div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-blue-500 font-bold">
                  A path back to wonder{" "}
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-8"
              >
                Relearn how to <br />
                wonder, feel, and{" "}
                <span className="mr-2 text-primary italic">Launch.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="border-l-2 border-white/10 pl-8 mb-12 "
              >
                <p className="text-zinc-400 text-lg md:text-xl font-light max-w-3xl leading-relaxed hover:text-white  transition-colors duration-300">
                  Hey there. I'm{" "}
                  <span className="text-white font-bold">Rajeev Puri</span>.
                  Currently a BSc Student and a software engineer. I'll guide
                  your creativity with calm, immersive products that blend
                  reflection, sound, and visual prompts so ideas feel natural
                  again. logical.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-[10px] text-zinc-400 font-medium mb-10 uppercase tracking-widest hover:text-white transition-colors duration-300"
              >
                No deadlines — No noise — Just space to rediscover your
                imagination
              </motion.p>

              <Socialicons showUsername className="m-2" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-6 pt-8"
              >
                <Link
                  href="/projects"
                  className="group flex items-center gap-3 text-xs px-10 py-5 border-2 border-white/20 bg-transparent font-black uppercase tracking-[0.2em] hover:border-white transition-all transform hover:-translate-y-1 active:scale-95"
                >
                  VIEW PROJECTS
                </Link>
                <Link
                  href="/contact"
                  className="px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 active:scale-95 border-2 border-white"
                >
                  CONTACT
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
      <Marquee />
    </>
  );
}
