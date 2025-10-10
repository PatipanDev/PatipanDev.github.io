"use client";
import React from "react";
import Image from "next/image";

export default function Certificate() {
  const certificates = [
    {
      id: 1,
      title: "Certificate of Presentation",
      description: `ใบรับรองฉบับนี้รับรองว่า ได้เข้าร่วมนำเสนอผลงานวิจัยในหัวข้อ "Applying Machine Learning Techniques and Feature Selection Methods for Lung Cancer Prediction" ในงาน "Opportunities for Pioneering Practices in AI Student Workshop" ซึ่งจัดโดย IEEE Thailand Section และ IEEE SMC Thailand Chapter`,
      image: "./images/certificate/certi_connect_ai.webp",
      issuer: "IEEE Thailand Section – Systems, Man, and Cybernetics Society (SMC) Thailand Chapter",
      year: "2568",
    },
    {
      id: 2,
      title: "Certificate of Recognition – Best Paper Award",
      description:
        `ใบรับรองฉบับนี้รับรองว่า ผลงานวิจัยในหัวข้อ "Applying Machine Learning Techniques and Feature Selection Methods for Lung Cancer Prediction" ในงาน "Opportunities for Pioneering Practices in AI Student Workshop" ซึ่งจัดโดย IEEE Thailand Section และ IEEE SMC Thailand Chapter ได้รับรางวัล Best Paper Award`,
      image: "./images/certificate/certi_popular_ai.webp",
      issuer: "IEEE Thailand Section – Systems, Man, and Cybernetics Society (SMC) Thailand Chapter",
      year: "2568",
    },
    {
      id: 3,
      title: "Certificate of Election",
      description:
        "ใบรับรองฉบับนี้รับรองว่า นายปฏิภาณ อายุคง ได้รับการเลือกตั้งให้ดำรงตำแหน่ง นายกสโมสรนักศึกษา ประจำปีการศึกษา 2567",
      image: "./images/certificate/certi_boss_smo.webp",
      issuer: "Faculty of Science and Technology, SNRU University",
      year: "19 สิงหาคม 2568",
    },
    {
      id: 4,
      title: "Certificate of Appointment",
      description:
        "ใบรับรองฉบับนี้รับรองว่า นายปฏิภาณ อายุคง ได้รับการแต่งตั้งให้ดำรงตำแหน่ง คณะกรรมการสโมสรนักศึกษา ประจำปีการศึกษา 2566",
      image: "./images/certificate/certi_smo.webp",
      issuer: "Faculty of Science and Technology, SNRU University",
      year: "16 สิงหาคม 2567",
    },
    {
      id: 5,
      title: "Certificate of Participation",
      description:
        `ใบรับรองฉบับนี้รับรองว่า นายปฏิภาณ อายุคง ได้เข้าร่วม "กิจกรรมเรื่องเล่าชาวนักอ่าน"`,
      image: "./images/certificate/certi_svt.webp",
      issuer: "Academic Resources and Information Technology Group",
      year: "2566",
    },
    {
      id: 6,
      title: "Certificate of Participation",
      description:
        `ใบรับรองฉบับนี้รับรองว่า นายปฏิภาณ อายุคง ได้รับรางวัลเรียนดี"`,
      image: "./images/certificate/certi_good_learn.webp",
      issuer: "Faculty of Science and Technology, SNRU University",
      year: "27 กรกฎาคม 2566",
    },
    {
      id: 7,
      title: "Certificate of Completion",
      description:
        `ใบรับรองฉบับนี้รับรองว่า นายปฏิภาณ อายุคง สำเร็จการฝึกงานที่บริษัท ลุค โซเชียล จำกัด (Look Social Co., Ltd.) `,
      image: "./images/certificate/certi_look_social.webp",
      issuer: "Look Social Co., Ltd.",
      year: "19 พฤษภาคม 2568 - 26 กันยายน 2568",
    },
  ];

  return (
    <section className="py-12 " id="certificate">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="textcl text-3xl font-bold text-gray-800 mb-10 text-center">
          Certificates
        </h2>

        <div className="flex flex-col gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className=" rounded shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/3 flex-shrink-0 relative">
                {/* กำหนดความสูงเท่ากันทุกภาพ */}
                <div className="w-full relative h-64">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover object-center rounded md:rounded-l-none md:rounded"
                    loading="lazy"
                    placeholder="empty"
                    quality={20}

                  />
                </div>
              </div>

              {/* รายละเอียดใบเกียรติบัตร */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="textcl text-xl font-semibold text-gray-800 mb-1">
                    {cert.title}
                  </h3>
                  <p className="textcl text-gray-600 text-sm md:text-base mb-3">
                    {cert.description}
                  </p>
                  <p className="textcl text-gray-400 text-xs">
                    🏛️ {cert.issuer} — {cert.year}
                  </p>
                </div>

                {/* ปุ่มดูใบเกียรติบัตรเต็ม */}
                <div className="mt-4">
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="textcl inline-block text-sm bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transform transition-transform duration-300 hover:scale-110"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div
            className=" rounded shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/3 flex-shrink-0 relative">
              <div className="w-full relative">
                <Image
                  src="/images/certificate/certi_the_boss.webp"
                  alt="opopop"
                  width={500}
                  height={0}
                  className="w-full h-auto object-contain rounded md:rounded-l-none md:rounded"
                  loading="lazy"
                  placeholder="empty"
                  quality={20}
                />
              </div>
            </div>

            {/* รายละเอียดใบเกียรติบัตร */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  Certificate of Completion
                </h3>
                <p className="textcl text-gray-600 text-sm md:text-base mb-3">
                  {`ใบรับรองฉบับนี้รับรองว่า นายปฏิภาณ อายุคง ได้เข้าร่วมโครงการ "ค่ายผู้นำเยาวชน คนราชภัฏ ครั้งที่ 1"`},
                </p>
                <p className="textcl text-gray-400 text-xs">
                  🏛️ IEEE Thailand Section – Systems, Man, and Cybernetics Society (SMC) Thailand Chapter --- 15 - 19 พฤษภาคม 2567
                </p>
              </div>

              {/* ปุ่มดูใบเกียรติบัตรเต็ม */}
              <div className="mt-4">
                <a
                  href="./images/certificate/certi_the_boss.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transform transition-transform duration-300 hover:scale-110"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

