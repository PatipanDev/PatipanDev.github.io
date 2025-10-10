"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  const sections = [
    {
      title: "ทักษะและเทคโนโลยี",
      content: (
        <>
          <h3 className="textcl text-xl font-semibold text-gray-800 mb-2 border-l-4 border-blue-500 pl-3">Main Skills</h3>
          <ul className="textcl list-disc list-inside text-gray-700 space-y-1">
            <li><b>Frontend:</b> React.js, Next.js</li>
            <li><b>Backend:</b> Go (Fiber), Node.js</li>
            <li><b>Database:</b> PostgreSQL, MongoDB</li>
            <li><b>DevOps:</b> Docker</li>
            <li><b>Mobile:</b> Dart (Flutter)</li>
            <li><b>ทักษะ/เครื่องมืออื่น ๆ:</b> Laravel, C#, Angular, Firebase, PHP, python, Java, HTML, CSS, MiniO, MySql, SQL server</li>
            <li><b>ความสามารถอื่นๆ:</b> Word, Excel, Illustartor, Phothoshop, Davinci Resolve</li>
          </ul>
        </>
      ),
      image: "./images/activity/screen_code.webp",
    },
    {
      title: "จุดเด่นและทัศนคติ",
      content: (
        <p className="textcl text-gray-700 leading-relaxed">
          ผมเป็นคนเรียนรู้รวดเร็ว ใส่ใจในรายละเอียด และพร้อมพัฒนาตนเองเสมอ
          เชื่อว่า “ไม่มีอะไรที่ทำไม่ได้ ถ้ายังไม่ได้ทุ่มเทเวลาให้มัน”
          มีความสามารถทำงานเป็นทีม การแก้ปัญหาเชิงตรรกะ และออกแบบระบบเชิงสถาปัตยกรรม
        </p>
      ),
      image: "./images/activity/smoson.webp",
    },
    {
      title: "ความสนใจและประสบการณ์",
      content: (
        <p className="textcl text-gray-700 leading-relaxed">
          สนใจ Web App, Mobile App, Backend System
          ชอบสร้างสิ่งที่ผู้ใช้สามารถใช้งานได้จริงและแก้ปัญหาในชีวิตประจำวัน
          เคยฝึกงาน Backend Developer (Intern) ที่ Look Social Co., Ltd.
        </p>
      ),
      image: "./images/activity/look_social.webp",
    },
  ];

  return (
    <section id="about" className="py-16">
      <h2 className="textcl text-3xl font-bold text-gray-800 mb-10 text-center">
        About Me
      </h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
              }`}
          >
            <div className="w-full aspect-[16/9] relative">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover object-center rounded transform transition-transform duration-300 hover:scale-110"
                quality={20}
                loading="lazy"
                placeholder="empty"
              />
            </div>

            {/* Text */}
            <div className="textcl w-full transform transition-transform duration-300 hover:scale-110">
              <h2 className="textcl text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
