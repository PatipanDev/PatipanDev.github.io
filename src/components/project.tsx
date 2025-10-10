"use client";
import React from "react";
import Image from "next/image";
import { FileText, Github } from "lucide-react";

export default function Project() {
    const projects = [
        {
            id: 1,
            title: "Muti-Liner Management System (MLMS)",
            description:
                "API Server สำหรับเว็บแอปพลิเคชัน “Muti-Liner Management System (MLMS)” พัฒนาร่วมกับทีม ระบบจองเรือใช้มาตรฐาน EDIFACT เป็นตัวกลางในการติดต่อระหว่าง Server กับ Liner พัฒนาด้วยภาษา Go โดยใช้ Fiber เป็น Web Framework และ GORM ในการเชื่อมต่อกับฐานข้อมูล PostgreSQL ใช้สถาปัตยกรรม Hexagonal Architecture. 2568.",
            image: "./images/project/multi_liner_management_system.webp",
            languages: ["Api server", "Go", "Fiber", "Gorm", "PostgresQL", "Backend"],
            link_github: "",
            project_doce: "https://drive.google.com/file/d/1GrQ0d0hEMA4fCw1XVa3et0aDasRKJEbM/view?usp=sharing"
        },
        {
            id: 2,
            title: "เว็บแอปพลิเคชันบริหารจัดการร้านอาหาร",
            description:
                "เว็บแอปพลิเคชัน สำหรับบริหารจัดการร้านอาหาร ครอบคลุมการจัดการการสั่งอาหาร การชำระเงิน การจัดการวัตถุดิบ เมนูอาหาร และการบริหารจัดการพนักงาน ส่วน Frontend พัฒนาด้วย React (TypeScript) ใช้ MUI เป็นส่วนติดต่อผู้ใช้ (UI) และใช้สถาปัตยกรรม MVC ส่วน Backend พัฒนาด้วย Node.js และ Express เชื่อมต่อกับ ฐานข้อมูล MongoDB โดยใช้ Mongoose. 2567.",
            image: "./images/project/food_management.webp",
            languages: ["React", "Node.js", "Express", "Mongoose", "MongoDB", "MUI"],
            link_github: "https://github.com/PatipanDev/restaurant-pos-mern",
            project_doce: "https://drive.google.com/file/d/17wd7ImW7aFMbKv8HzY3Be6dpemvmyAYo/view?usp=sharing"
        },
        {
            id: 3,
            title: "เว็บแอพพลิเคชัน “inlover”",
            description:
                "เว็บแอพพลิเคชัน “inlover” ซึ่งเป็นเว็บไซต์ที่มีแรงบันดาลใจมาจาก แอปพลิเคชันหาคู่ หรือ แอปฯ หาคู่ พัฒนาด้วยภาษา HTML, CSS, JavaScript, PHP และใช้ ระบบจัดการฐานข้อมูล MySQL หรือ ฐานข้อมูล MySQL. 2566.",
            image: "./images/project/inlover_page.webp",
            languages: ["JavaScript", "HTML", "CSS", "PHP", "MySql"],
            link_github: "https://github.com/PatipanDev/Inlover-html-javascript-php-web",
            project_doce: "https://drive.google.com/file/d/1eFXiuaRpqluh0-xuM3injgpQmWLCuC13/view?usp=sharing"
        },

    ];

    return (
        <section className="py-12" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="textcl text-3xl font-bold text-gray-800 mb-10 text-center">
                    My Projects
                </h2>

                <div className="flex flex-col gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="rounded shadow-md overflow-hidden hover:shadow-xl flex flex-col md:flex-row transform transition-transform duration-300 hover:scale-110"
                        >
                            {/* รูปภาพโปรเจกต์ */}
                            <div className="w-full md:w-3/5 flex-shrink-0 relative">
                                {/* Parent container ต้องเป็น relative สำหรับ Image fill */}
                                <div className="w-full aspect-[18/9] relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-center rounded md:rounded-l-none md:rounded"
                                        loading="lazy"
                                        quality={20}
                                        placeholder="empty"
                                    />
                                </div>
                            </div>

                            {/* รายละเอียดโปรเจกต์ */}
                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="textcl text-2xl font-semibold text-gray-800 mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="textcl text-gray-600 mb-4 text-sm md:text-base">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex justify-between">
                                    {/* ภาษาโปรแกรมและเครื่องมือ */}
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.languages.map((lang, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                                            >
                                                {lang}
                                            </span>
                                        ))}
                                    </div>

                                    {/* ปุ่มลิงก์ GitHub และ Docs */}
                                    <div className="flex items-center gap-4">
                                        {project.link_github ? (<a
                                            href={project.link_github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"

                                        >
                                            <Github className="w-7 h-7" />
                                        </a>) : null}
                                        {project.project_doce ? (
                                            <a
                                                href={project.project_doce}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"

                                            >
                                                <FileText className="w-7 h-7" />
                                            </a>
                                        ) : null}



                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
