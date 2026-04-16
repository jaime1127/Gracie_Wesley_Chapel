"use client";

export default function Map() {
  return (
    <div className="mx-auto max-w-7xl py-9 bg-white">
      <h3 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mb-4">
        Gym Location
      </h3>
      <h3 className="text-pretty text-lg font-medium sm:text-xl/8 mb-4">
        Gracie Wesley Chapel | 24720 FL-54, Lutz, FL 33559
      </h3>
      <div
        style={{ position: "relative", width: "100%", paddingBottom: "66.67%" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.7260581352707!2d-82.4073562!3d28.185245499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ba1efbc772e5%3A0x1f761990011b89b!2sGracie%20Wesley%20Chapel!5e0!3m2!1sen!2sus!4v1776372302484!5m2!1sen!2sus"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
