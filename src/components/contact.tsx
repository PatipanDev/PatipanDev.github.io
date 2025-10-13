"use client";
import React from "react";
import { Mail, Phone, MapPin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b to-white py-16 px-6" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="textcl text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="textcl text-gray-600 mb-12">
          {`แรงบันดาลใจอาจไปไม่ถึงฝัน ถ้าขาดวินัย`}
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 ">
          {/* Email */}
          <a
            href="mailto:patipanareyukong@gmail.com"
            className=" rounded-2xl p-6 hover:shadow-lg block transform transition-transform duration-300 hover:scale-110"
          >
            <Mail className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
            <h3 className="textcl text-lg font-semibold mb-2">Email</h3>
            <p className="textcl text-gray-500">patipanareyukong@gmail.com</p>
          </a>

          {/* Phone */}
          <a
            href="tel:0968363484"
            className="rounded-2xl p-6 hover:shadow-lg block transform transition-transform duration-300 hover:scale-110"
          >
            <Phone className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
            <h3 className="textcl text-lg font-semibold mb-2">Phone</h3>
            <p className="textcl text-gray-500">096-836-3484</p>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=176/11%20บ้านโคกสว่าง%20ต.ธาตุ%20อ.วานรนิวาส%20จ.สกลนคร%2047120"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl p-6 hover:shadow-lg block transform transition-transform duration-300 hover:scale-110"
          >
            <MapPin className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
            <h3 className="textcl text-lg font-semibold mb-2">Location</h3>
            <p className="textcl text-gray-500">
              176/11 บ้านโคกสว่าง ต.ธาตุ อ.วานรนิวาส จ.สกลนคร 47120
            </p>
          </a>
        </div>


        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          {/* <a
            href="https://www.linkedin.com/in/patipanareyukong"
            target="_blank"
            rel="noopener noreferrer"
            className="textcl text-gray-500 hover:text-indigo-600 transition"
          >
            <Linkedin className="w-7 h-7" />
          </a> */}

          <a
            href="https://github.com/PatipanDev"
            target="_blank"
            rel="noopener noreferrer"
            className="textcl text-gray-500 hover:text-indigo-600 transition"
          >
            <Github className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
