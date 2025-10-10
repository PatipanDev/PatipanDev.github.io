"use client";
import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      id="home"
    >
      <div className="max-w-7xl w-full rounded p-10 flex flex-col md:flex-row items-center gap-10">

        {/* ===== รูปภาพทางซ้าย ===== */}
        <div className="w-full aspect-square md:aspect-[3/4] relative">

          <Image
            src="./images/profile_image.webp" // 🔹 ใช้ path จาก public
            alt="Patipan Areyukong"
            fill
            className="w-full h-full object-cover object-center rounded transform transition-transform duration-300 hover:scale-110"
            priority={true}
            quality={20}
            placeholder="blur"
            blurDataURL="./images/photo-2-icon.png"
          />
        </div>

        {/* ===== เนื้อหาทางขวา ===== */}
        <div className="w-full md:w-2/3 space-y-8">
          {/* ชื่อและตำแหน่ง */}
          <header className="text-center md:text-left border-b pb-4">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 transform transition-transform duration-300 hover:scale-110 textcl">
              ปฏิภาณ อายุคง (Patipan Areyukong)
            </h1>
            <h2 className="text-2xl font-semibold text-blue-600">
              Junior Software Developer
            </h2>
          </header>

          {/* ข้อมูลเบื้องต้น */}
          <div className="space-y-2 transform transition-transform duration-300 hover:scale-110">
            <h3 className="textcl text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3">
              ข้อมูลเบื้องต้น
            </h3>
            <p className="text-lg">
              <span className="textcl font-semibold text-gray-900">ชื่อเล่น:</span> ปังปอนด์
            </p>
            <p className="text-lg">
              <span className="textcl font-semibold text-gray-900">เกิด:</span> 23 ตุลาคม 2546
            </p>
            <p className="text-lg">
              <span className="textcl font-semibold text-gray-900">อายุ:</span> 21 ปี
            </p>
            <p className="text-lg">
              <span className="textcl font-semibold text-gray-900">น้ำหนัก:</span> 62 kg
            </p>
            <p className="text-lg">
              <span className="textcl font-semibold text-gray-900">ส่วนสูง:</span> 170 cm
            </p>
            <p className="text-lg">
              <span className="textcl font-semibold text-gray-900" >การศึกษา:</span>{" "}
              ระดับปริญญาตรี วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์
            </p>

            <p className="text-lg">
              <span className="textcl font-semibold text-gray-900">เกรดเฉลี่ย (GPA):</span>{" "}
              <span className="text-green-600 font-bold">3.70</span> / 4.00
            </p>

            <p className="text-lg">
              <span className="textcl font-semibold text-gray-900" >สถานศึกษา:</span>{" "}
              มหาวิทยาลัยราชภัฏสกลนคร
            </p>
          </div>

          {/* สรุปความเชี่ยวชาญ */}
          <div className="space-y-2 transform transition-transform duration-300 hover:scale-110">
            <h3 className="textcl text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-3">
              สรุปความเชี่ยวชาญ
            </h3>
            <ul className="textcl list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>เชี่ยวชาญการพัฒนา Web Application (Frontend, Backend)</li>
              <li>สามารถสร้างและจัดการ REST API ได้อย่างมีประสิทธิภาพ</li>
              <li>ออกแบบ ดูแล ปรับปรุง และพัฒนา เว็บและแอพพลิเคชั่น รวมถึงระบบที่เกี่ยวข้อง</li>
              <li>สามารถทำงานเป็นทีมได้ รับแรงกดดันได้ และมีมนุษยสัมพันธ์ที่ดี</li>
              <li>พร้อมเรียนรู้เทคโนโลยีใหม่ๆ อย่างรวดเร็ว</li>
            </ul>
          </div>

          {/* คำกล่าวปิดท้าย */}
          <footer className="pt-4 border-t mt-6 text-center md:text-left transform transition-transform duration-300 hover:scale-110">
            <p className="textcl text-xl italic text-gray-600 mb-2">
              “ผมพร้อมนำความรู้และทักษะที่มีมาสร้างสรรค์ผลงานที่ดีที่สุดให้กับองค์กรครับ”
            </p>
            <p className="textcl text-sm text-gray-500">
              [ส่วนถัดไปของ Portfolio นี้จะรวบรวมผลงานและโปรเจกต์ต่างๆ ที่ผ่านมา]
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
}