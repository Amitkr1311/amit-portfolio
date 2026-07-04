"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function Navbar() {
  const controls = useAnimation();
  const [isFlying, setIsFlying] = useState(false);
  const [isAirplane, setIsAirplane] = useState(false);
  const [showHappyFace, setShowHappyFace] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;
    
    const runAnimation = async () => {
      // Wait a moment for the page load animation to finish
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (!isMounted || !logoRef.current) return;

      const rect = logoRef.current.getBoundingClientRect();
      
      // Dynamically calculate target positions based on viewport and initial position
      const bottomY = window.innerHeight - rect.top - 100; // 100px buffer from bottom edge
      const rightX = window.innerWidth - rect.left - 100; // 100px buffer from right edge

      // 1. Fall Down (Top Left -> Bottom Left)
      setIsFlying(true);
      await controls.start({
        y: bottomY,
        x: 0,
        scale: 2,
        rotate: 15,
        transition: { duration: 2.0, ease: "easeIn" },
      });

      if (!isMounted) return;

      // 2. Transform & Fly Right (Bottom Left -> Bottom Right)
      setIsAirplane(true);
      
      await controls.start({
        y: bottomY,
        x: rightX,
        scale: 2.5,
        rotate: 60, // Point generally towards the right
        transition: { duration: 2.5, ease: "easeInOut" },
      });

      if (!isMounted) return;
      
      // 3. Return Home (Bottom Right -> Top Left)
      await controls.start({
        y: 0,
        x: 0,
        scale: 1,
        rotate: -360, // Spin backwards to 0 seamlessly
        transition: { duration: 3.0, ease: "easeOut" },
      });

      if (!isMounted) return;

      // Finish and align
      setIsAirplane(false);
      controls.set({ rotate: 0 }); // reset rotation seamlessly
      setIsFlying(false);
      setShowHappyFace(true);
    };

    runAnimation();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  const [activeSection, setActiveSection] = useState('projects');

  const navLinks = [
    { name: 'Experience', href: '#experiance' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 bg-[#e7e2d7]/50 shadow-[0_40px_60px_-15px_rgba(136,82,0,0.06)] backdrop-blur-xl"
    >
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
        
        {/* Animated Logo */}
        <div className="text-2xl font-bold tracking-tighter text-primary select-none whitespace-nowrap flex items-center">
          <motion.div
            ref={logoRef}
            animate={controls}
            className="relative z-50 origin-center inline-flex items-center justify-center cursor-default w-[24px]"
          >
            {isAirplane ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4Z" />
              </svg>
            ) : (
              "A"
            )}
            
            {/* The Trail */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={
                isAirplane
                  ? {
                      opacity: [0, 1, 0.8, 0],
                      height: [0, 160, 80, 0],
                    }
                  : { opacity: 0, height: 0 }
              }
              transition={{ duration: 5.0, times: [0, 0.4, 0.8, 1] }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-primary to-transparent rounded-full origin-top pointer-events-none"
            />
          </motion.div>
          <span className="inline-block text-2xl -mx-1">mit kumar</span>
          
          {/* Happy Face */}
          <motion.span
            initial={{ opacity: 0, scale: 0, x: -15 }}
            animate={
              showHappyFace
                ? { opacity: 1, scale: 1, x: 6 }
                : { opacity: 0, scale: 0, x: -15 }
            }
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-block text-primary ml-1 font-extrabold"
          >
            :)
          </motion.span>
        </div>

        <div className="hidden md:flex items-center gap-10 font-medium tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name.toLowerCase())}
              className={
                activeSection === link.name.toLowerCase()
                  ? "text-primary font-bold border-b-2 border-primary/20 pb-1 transition-all"
                  : "text-secondary hover:text-primary transition-colors cursor-pointer"
              }
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a
            href={process.env.NEXT_PUBLIC_RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block border-2 border-primary text-primary px-6 py-2.5 rounded-full font-bold tracking-tight hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="bg-linear-to-r from-primary to-secondary-container text-on-primary px-8 py-3 rounded-full font-bold tracking-tight scale-95 active:scale-100 transition-transform duration-300"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
