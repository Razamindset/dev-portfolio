"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Globe,
  Eye,
  Cpu,
  Code,
  MessageCircle,
  Terminal,
  Server,
  LayoutGrid,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiChessdotcom, SiLichess } from "react-icons/si";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -70% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row min-h-screen">
      {/* Left Sidebar Card */}
      <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[40%] xl:w-[35%] 2xl:w-[30%] lg:flex-col lg:justify-between py-10 lg:py-12 px-6 lg:px-10 xl:px-12 2xl:px-24 bg-[#0a0a0a]/90 backdrop-blur-md border-r border-zinc-800/50 shadow-2xl z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Profile image accent */}
            <div className="relative mb-4 group">
              <div className="absolute inset-0 bg-[#f4775b] rounded-full blur-md opacity-20 group-hover:opacity-35 transition-opacity duration-500"></div>
              <Image
                src="/2.webp"
                alt="Ali Raza Khalid"
                width={128}
                height={128}
                className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full border border-zinc-700/50 object-cover shadow-xl group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
              Ali Raza Khalid
            </h1>
            <h2 className="text-base lg:text-lg font-medium text-zinc-300 mb-3 flex items-center justify-center lg:justify-start gap-2">
              Machine Learning Engineer
            </h2>
          </div>
        </motion.div>

        <div className="mt-8 lg:mt-auto w-full flex-1 flex flex-col justify-center">
          {/* Navigation */}
          <nav className="hidden lg:block nav mb-8">
            <ul className="flex flex-col space-y-4">
              {[
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "research", label: "Research & Writing" },
                { id: "experience", label: "Experience & Education" },
              ].map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className={cn(
                      "nav-link relative block w-max transition-all uppercase tracking-widest text-xs group flex items-center",
                      activeSection === item.id
                        ? "active text-white"
                        : "text-zinc-500 hover:text-white font-bold"
                    )}
                  >
                    <span className="group-hover:translate-x-2 group-hover:text-[#ff9a7a] transition-all duration-300">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 lg:mt-auto w-full">
          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mb-8 flex justify-center lg:justify-start"
          >
            <a
              href="/Ali_Raza_Khalid_CV_RA.pdf"
              download="Ali_Raza_Khalid_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#f4775b]/10 text-[#ff9a7a] hover:bg-[#f4775b] hover:text-white transition-all font-semibold text-sm border border-[#f4775b]/20 hover:border-[#f4775b] group shadow-sm hover:shadow-[0_0_15px_rgba(244,119,91,0.4)]"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
              Download CV
            </a>
          </motion.div>

          {/* Social & Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-wrap justify-center lg:justify-start gap-5"
          >
            <a
              href="mailto:razamindset.official@gmail.com"
              aria-label="Email"
              className="text-zinc-400 hover:text-[#ff9a7a] transition-colors group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com/Razamindset"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 hover:text-[#ff9a7a] transition-colors group"
            >
              <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/razamindset"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 hover:text-[#ff9a7a] transition-colors group"
            >
              <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://razamindset.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="text-zinc-400 hover:text-[#ff9a7a] transition-colors group"
            >
              <Globe className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com/razamindset"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-400 hover:text-[#ff9a7a] transition-colors group"
            >
              <FaInstagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.chess.com/member/sinisterraza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chess.com"
              className="text-zinc-400 hover:text-[#ff9a7a] transition-colors group"
            >
              <SiChessdotcom className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="http://lichess.org/@/razamindset"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lichess"
              className="text-zinc-400 hover:text-[#ff9a7a] transition-colors group"
            >
              <SiLichess className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </header>

      {/* Right Content Area */}
      <main className="lg:w-[60%] xl:w-[65%] 2xl:w-[70%] flex flex-col">
        <div className="w-full max-w-5xl mx-auto px-6 py-12 lg:px-24 lg:py-24 flex flex-col gap-32">
          {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <Reveal>
            <div className="sticky top-0 z-10 bg-[#121212]/95 backdrop-blur py-5 mb-8 -mx-6 px-6 lg:static lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:m-0 lg:mb-8 border-b border-zinc-800/50 lg:border-none">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-100 flex items-center">
                <span className="w-8 h-px bg-[#f4775b] mr-4"></span> About
              </h2>
            </div>

            <div className="max-w-3xl">
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-white mb-5">
                I build machine-learning models <span className="text-[#ff9a7a]">and the products around them.</span>
              </h3>
              <p className="max-w-2xl text-zinc-400 text-base leading-relaxed">
                I work across computer vision, efficient edge AI, full-stack development, and chatbots.
              </p>
              <a
                href="https://github.com/Razamindset/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ff9a7a] hover:text-white transition-colors"
              >
                GitHub profile
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </a>

              <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f4775b]/10 text-[#ff9a7a]">
                    <Eye className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100 mb-1">Computer vision</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      Segmentation models and neural networks built from scratch.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f4775b]/10 text-[#ff9a7a]">
                    <Cpu className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100 mb-1">Efficient AI</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      Optimizing models for fast CPU and edge-device inference.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f4775b]/10 text-[#ff9a7a]">
                    <Code className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100 mb-1">Full-stack products</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      Web apps built from the interface through the backend.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f4775b]/10 text-[#ff9a7a]">
                    <MessageCircle className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100 mb-1">Chatbots & applied AI</h3>
                    <p className="text-sm leading-relaxed text-zinc-500">
                      Conversational tools that make AI useful in real products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <Reveal>
            <div className="sticky top-0 z-10 bg-[#121212]/95 backdrop-blur py-5 mb-8 -mx-6 px-6 lg:static lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:m-0 lg:mb-8 border-b border-zinc-800/50 lg:border-none">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-100 flex items-center">
                <span className="w-8 h-px bg-[#f4775b] mr-4"></span> Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skill Card */}
              <div className="group bg-[#1b1d20] p-6 rounded-xl border border-zinc-800/70 hover:border-[#f4775b]/50 hover:bg-[#202327] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgb(244,119,91,0.08)]">
                <h4 className="text-zinc-100 font-semibold mb-5 flex items-center text-sm tracking-wide">
                  <Terminal className="w-5 h-5 mr-3 text-[#f4775b] group-hover:text-[#ff9a7a] transition-colors" strokeWidth={1.5} />
                  Programming & Tools
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["Python", "C++", "JavaScript", "TypeScript", "SQL", "Docker"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-[#f4775b]/10 text-[#ffc0ad] text-xs rounded-md font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Card */}
              <div className="group bg-[#1b1d20] p-6 rounded-xl border border-zinc-800/70 hover:border-[#f4775b]/50 hover:bg-[#202327] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgb(244,119,91,0.08)]">
                <h4 className="text-zinc-100 font-semibold mb-5 flex items-center text-sm tracking-wide">
                  <Server className="w-5 h-5 mr-3 text-[#f4775b] group-hover:text-[#ff9a7a] transition-colors" strokeWidth={1.5} />
                  Deep Learning
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["PyTorch", "Scikit-learn", "CNNs", "Transformers", "RNN/LSTM"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-[#f4775b]/10 text-[#ffc0ad] text-xs rounded-md font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Card */}
              <div className="group bg-[#1b1d20] p-6 rounded-xl border border-zinc-800/70 hover:border-[#f4775b]/50 hover:bg-[#202327] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgb(244,119,91,0.08)]">
                <h4 className="text-zinc-100 font-semibold mb-5 flex items-center text-sm tracking-wide">
                  <Eye className="w-5 h-5 mr-3 text-[#f4775b] group-hover:text-[#ff9a7a] transition-colors" strokeWidth={1.5} />
                  Computer Vision
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["OpenCV", "Classification", "Segmentation", "U-Net"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-[#f4775b]/10 text-[#ffc0ad] text-xs rounded-md font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Card */}
              <div className="group bg-[#1b1d20] p-6 rounded-xl border border-zinc-800/70 hover:border-[#f4775b]/50 hover:bg-[#202327] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgb(244,119,91,0.08)]">
                <h4 className="text-zinc-100 font-semibold mb-5 flex items-center text-sm tracking-wide">
                  <Cpu className="w-5 h-5 mr-3 text-[#f4775b] group-hover:text-[#ff9a7a] transition-colors" strokeWidth={1.5} />
                  Edge Deployment
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["C++ AVX2", "INT8 Vector Ops", "CPU Inference", "Optimization"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-[#f4775b]/10 text-[#ffc0ad] text-xs rounded-md font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Full-Stack and AI Applications */}
              <div className="group md:col-span-2 md:flex md:items-center md:justify-between md:gap-6 bg-[#1b1d20] p-6 rounded-xl border border-zinc-800/70 hover:border-[#f4775b]/50 hover:bg-[#202327] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_30px_rgb(244,119,91,0.08)]">
                <h4 className="text-zinc-100 font-semibold mb-5 md:mb-0 flex items-center text-sm tracking-wide">
                  <LayoutGrid className="w-5 h-5 mr-3 text-[#f4775b] group-hover:text-[#ff9a7a] transition-colors" strokeWidth={1.5} />
                  Full-Stack & AI Applications
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {["React.js", "Next.js", "Node.js", "MongoDB", "Firebase", "Chatbots", "AI-Powered Applications"].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-[#f4775b]/10 text-[#ffc0ad] text-xs rounded-md font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <Reveal>
            <div className="sticky top-0 z-10 bg-[#121212]/95 backdrop-blur py-5 mb-8 -mx-6 px-6 lg:static lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:m-0 lg:mb-8 border-b border-zinc-800/50 lg:border-none">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-100 flex items-center">
                <span className="w-8 h-px bg-[#f4775b] mr-4"></span> Projects
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Image Segmentation with U-Net",
                  link: "https://github.com/Razamindset/image-segmentation-with-unet",
                  stack: "Python, PyTorch",
                  desc: "Built and trained a U-Net model predicting masks for objects. Added image augmentation for higher accuracy, achieving a validation Dice score of 0.85 and IoU of 0.76.",
                },
                {
                  title: "CNN Study on CIFAR",
                  link: "https://github.com/Razamindset/cifar10-cnn-experiments",
                  stack: "Python, PyTorch",
                  desc: "Improved a CNN from 75% to 87% accuracy. Implemented dropout, BatchNorm with GELU, learning rate schedulers, and fixed data augmentation leaks between training and evaluation.",
                },
                {
                  title: "Indus Dragon: Chess Engine",
                  link: "https://github.com/Razamindset/indus-dragon",
                  stack: "C++, PyTorch, AVX2",
                  desc: "Trained a custom MLP on 25M self-play positions. Deployed for ultra-fast CPU inference using AVX2 & INT8 vector operations. Achieved 3M+ nodes/second and 2200+ ELO.",
                },
                {
                  title: "Neural Networks from Scratch",
                  link: "https://github.com/Razamindset/sequence-modeling-from-scratch",
                  stack: "Python, NumPy",
                  desc: "Built MLPs, CNNs, RNNs, LSTMs, GRUs, and a full GPT-1 style Transformer entirely without ML libraries. Implemented core optimizers including Adam, SGD, and RMSprop.",
                },
              ].map((project) => (
                <div key={project.title} className="group relative flex flex-col items-start gap-4 bg-[#1b1d20] transition-all hover:bg-[#202327] p-6 rounded-xl border border-zinc-800/70 hover:border-[#f4775b]/40 shadow-sm hover:shadow-xl hover:-translate-y-1">
                  <div className="w-full">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 gap-2">
                      <h4 className="text-zinc-100 font-bold text-lg group-hover:text-[#ff9a7a] transition-colors">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="focus:outline-none flex items-center">
                          {project.title}
                          <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" strokeWidth={2} />
                        </a>
                      </h4>
                      <span className="text-xs text-[#ffc0ad] font-semibold tracking-wide bg-[#f4775b]/10 px-3 py-1 rounded-md">
                        {project.stack}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Research and Writing Section */}
        <section id="research" className="scroll-mt-24">
          <Reveal>
            <div className="sticky top-0 z-10 bg-[#121212]/95 backdrop-blur py-5 mb-8 -mx-6 px-6 lg:static lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:m-0 lg:mb-8 border-b border-zinc-800/50 lg:border-none">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-100 flex items-center">
                <span className="w-8 h-px bg-[#f4775b] mr-4"></span> Research & Writing
              </h2>
            </div>

            <div className="bg-[#1b1d20] p-6 sm:p-7 rounded-xl border border-zinc-800/70">
              <p className="text-white font-semibold text-lg leading-snug mb-2">Ideas I plan to explore and write about</p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                Practical research notes connecting machine-learning concepts with systems that work in the real world.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Computer Vision", "Efficient AI & Edge Inference", "Neural Networks from Scratch", "Applied AI"].map((topic) => (
                  <span key={topic} className="px-3 py-1.5 bg-[#f4775b]/10 text-[#ffc0ad] text-xs rounded-md font-medium">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="scroll-mt-24 mb-24">
          <Reveal>
            <div className="sticky top-0 z-10 bg-[#121212]/95 backdrop-blur py-5 mb-8 -mx-6 px-6 lg:static lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:m-0 lg:mb-8 border-b border-zinc-800/50 lg:border-none">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-100 flex items-center">
                <span className="w-8 h-px bg-[#f4775b] mr-4"></span> Experience & Education
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <h4 className="text-xl font-bold text-white mb-8 border-b border-zinc-800 pb-2">Experience</h4>
                <div className="border-l-2 border-zinc-800/80 pl-6 space-y-10">
                  <div className="relative group">
                    <div className="absolute w-3 h-3 bg-zinc-500 rounded-full -left-[1.7rem] top-1.5 border-2 border-[#121212] group-hover:bg-[#ff9a7a] group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(244,119,91,0)] group-hover:shadow-[0_0_8px_rgba(244,119,91,0.5)]"></div>
                    <h5 className="text-zinc-100 font-bold text-base">Co-founder</h5>
                    <p className="text-zinc-400 text-sm mt-1 mb-2">ScreenSnipper</p>
                    <a
                      href="https://screensnipper.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-[#f4775b] hover:text-[#ff9a7a] transition-colors uppercase tracking-wider"
                    >
                      Visit Site <ArrowUpRight className="w-3 h-3 ml-1" strokeWidth={2} />
                    </a>
                  </div>
                  <div className="relative group">
                    <div className="absolute w-3 h-3 bg-zinc-500 rounded-full -left-[1.7rem] top-1.5 border-2 border-[#121212] group-hover:bg-[#ff9a7a] group-hover:scale-125 transition-all shadow-[0_0_8px_rgba(244,119,91,0)] group-hover:shadow-[0_0_8px_rgba(244,119,91,0.5)]"></div>
                    <h5 className="text-zinc-100 font-bold text-base">Contributor</h5>
                    <p className="text-zinc-400 text-sm mt-1">Chesskit & Infinitunes</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xl font-bold text-white mb-8 border-b border-zinc-800 pb-2">Education</h4>
                <div className="bg-[#1b1d20] p-6 rounded-xl border border-zinc-800/70 shadow-lg hover:border-[#f4775b]/40 transition-all hover:-translate-y-1 duration-300">
                  <div className="flex flex-col mb-4">
                    <h5 className="text-zinc-100 font-bold text-lg">BS Artificial Intelligence</h5>
                    <span className="text-zinc-500 text-sm font-semibold tracking-wide mt-1">PAF-IAST, Pakistan &bull; Exp. 2028</span>
                  </div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#f4775b]/15 text-[#ffc0ad] text-xs rounded-md font-bold">CGPA: 3.91/4.0</span>
                  </div>
                  <div className="border-t border-zinc-800/50 pt-4 mt-2">
                    <p className="text-zinc-500 text-xs leading-relaxed font-medium">
                      <strong className="text-zinc-300">Coursework:</strong> Machine Learning, Deep Learning, Cloud Computing, Algorithms and Data Structures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
        </div>
      </main>
    </div>
  );
}
