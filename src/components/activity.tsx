"use client";
import React from "react";
import Image from "next/image";

export default function Activity() {
  const activities = [
    {
      id: 1,
      title: "อบรมเชิงปฏิบัติการ",
      description:
        "ได้เข้าร่วมงาน การพัฒนาซอฟต์แวร์ด้วย Laravel Framework และการประยุกต์ใช้ Gitlap, GitHub Platform พร้อมทั้ง Deploy software ด้วย Docker Platform",
      image: "/images/activity/468841089_1192627309172539_3287697464858004235_n.webp",
      date: "23-24 พฤษจิกายน 2567",
      tags: ["Conference", "Technology", "Gitlap", "GitHub", "Docker", "Laravel", "Tool"],
    },
    {
      id: 2,
      title: "อบรมเชิงปฏิบัติการ",
      description:
        "การอบรมเชิงปฏิบัติการ Full Stack Web App ด้วย Next.js Prisma และ MySQL วันที่ 22 มีนาคม 2024",
      image: "/images/activity/434252452_3703579189884913_6605155723596537525_n.webp",
      date: "22 มีนาคม 2567",
      tags: ["Full Stack Web", "Next.js", "Prisma", "MySQL"],
    },
    {
      id: 3,
      title: "โครงการพัฒนาศักยภาพด้านวิทยาการคำนวณ Python Coding ระดับมัธยมปลาย",
      description:
        "พิธีกรสันทนาการ พี่เลี้ยง กิจกรรม โครงการพัฒนาศักยภาพด้านวิทยาการคำนวณ Python Coding ระดับมัธยมปลาย 15-16 ก.ค. 2566",
      image: "/images/activity/484551962_1281140040321265_5665296380392942641_n.webp",
      date: "15-16 กรกฎาคม 2566",
      tags: ["Code Camp"],
    },
    {
      id: 4,
      title: `การแข่งขันหุ่นยนต์ หาทางออกด้วยการเขียนโค้ด`,
      description:
        `พิธีกร การแข่งขันหุ่นยนต์ หาทางออกด้วยการเขียนโค้ด ประจำปี2565 และ 2566 เนื่องในวันวิทยาศาสตร์`,
      image: "/images/activity/486842326_4004666753109487_3880171603495635603_n.webp",
      date: "2565, 2566",
      tags: [],
    },
    {
      id: 5,
      title: `กิจกรรมเรื่องเล่าชาวนักอ่าน ประจำปี 2566`,
      description:
        `เข้าร่วมกิจกรรม “กิจกรรมเรื่องเล่าชาวนักอ่าน ประจำปี 2566 โครงการพัฒนาศักยภาพการศึกษาทักษะการเรียนรู้และสื่อดิจิทัลในศตวรรษที่ 21”`,
      image: "/images/activity/484134902_1149082143679474_4370347698686724607_n.webp",
      date: "2566",
      tags: [],
    },
    {
      id: 6,
      title: `พี่สอนน้อง "ค่าย Java Programming"`,
      description:
        `เข้าร่วมกิจกรรมพี่สอนน้อง "ค่าย Java Programming"`,
      image: "/images/activity/481822598_1271373341297935_3366328907725280336_n.webp",
      date: "2565",
      tags: ["Java"],
    },
  ];

  return (
    <section className="py-12" id="activities">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="textcl text-3xl font-bold text-gray-800 mb-10 text-center">
          Activities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className=" rounded shadow-md overflow-hidden hover:shadow-xl flex flex-col relative transform transition-transform duration-300 hover:scale-110"
            >
              {/* รูปภาพ */}
              <div className="w-full aspect-[4/3] relative">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  placeholder="empty"
                  quality={20}
                />
              </div>

              {/* รายละเอียด */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="textcl text-xl font-semibold text-gray-800 mb-2">
                    {activity.title}
                  </h3>
                  <p className="textcl text-gray-600 text-sm md:text-base mb-3">
                    {activity.description}
                  </p>
                  <p className="text-gray-400 text-xs">📅 {activity.date}</p>
                </div>

                {/* แท็ก */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {activity.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
