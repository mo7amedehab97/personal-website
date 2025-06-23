"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/smooth-scroll";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const t = useTranslations("header");
  const { direction } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: t("skills"), href: "skills" },
    { name: t("projects"), href: "projects" },
    { name: t("experience"), href: "experience" },
    { name: t("specialSkills"), href: "special-skills" },
    { name: t("education"), href: "education" },
    { name: t("contacts"), href: "contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Set header background opacity based on scroll
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((item) => item.href);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className={`sticky top-0 z-50 border-b border-secondary transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-sm" : "bg-primary"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={cn(
              "font-heading text-2xl font-medium flex items-center gap-2",
              direction === "rtl" && "font-arabic"
            )}
          >
            <Image
              src="/icon.svg"
              alt="MH Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            MOHAMED HELLES
          </a>
        </motion.div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden"
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-4">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.href}`}
                className={cn(
                  "font-sans text-xs tracking-wider transition-colors relative ",
                  activeSection === item.href
                    ? "text-accent"
                    : "text-primary-foreground hover:text-accent",
                  direction === "rtl" && "font-arabic text-sm"
                )}
                onClick={(e) => handleNavClick(item.href, e)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent px-2"
                    layoutId="activeSection"
                  />
                )}
              </motion.a>
            ))}
          </nav>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="absolute top-full left-0 right-0 bg-primary border-b border-secondary md:hidden"
            >
              <nav className="flex flex-col p-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={`#${item.href}`}
                    className={cn(
                      "py-2 font-sans text-sm tracking-wider mb-2",
                      activeSection === item.href
                        ? "text-accent"
                        : "text-primary-foreground hover:text-accent",
                      direction === "rtl" && "font-arabic"
                    )}
                    onClick={(e) => handleNavClick(item.href, e)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="mt-4">
                  <LanguageSwitcher />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
