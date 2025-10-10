"use client";
import Header from "@/components/header";
import HomePage from '../components/home_page';
import Project from "@/components/project";
import Activity from "@/components/activity";
import Skills from "@/components/about";
import Certificate from "@/components/certificate";
import Contact from "@/components/contact";
import { motion, useScroll } from "motion/react"
import React, { useState, useEffect } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [loading, setLoading] = useState(true);

  // ใช้ dynamic import เท่านั้น

  // Loader จะหายหลังจากโหลดเว็บเสร็จ (simulate ด้วย setTimeout)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 วินาที หรือใส่ logic ตรวจโหลดจริง
    return () => clearTimeout(timer);
  }, []);

    if (loading) {
    // Full-page loader
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <motion.div
          className="textcl w-16 h-16 rounded-full border-4 black border-t-transparent animate-spin"
        />
      </div>
    );
  }

  return (
    <div className="">
      <Header />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: "#000000",
          zIndex: 9999, // ✅ ให้สูงสุดเหนือทุก element
        }}
      />
      <article
      // style={{
      //   maxWidth: 500,
      //   padding: "150px 20px",
      //   display: "flex",
      //   flexDirection: "column",
      //   gap: 20,
      // }}
      className="relative"
      >
        <HomePage />
        <Skills />
        <Project />
        <Activity />
        <Certificate />
        <Contact />
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
      </article>

    </div>
  );
}
