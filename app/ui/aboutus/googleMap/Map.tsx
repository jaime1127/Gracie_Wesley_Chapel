"use client";

export default function Map() {
  return (
    <div className="mx-auto max-w-7xl py-9 bg-white">
      <h3 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl pr-6 pl-6">
        Gym Location
      </h3>
      <iframe
        src="https://storage.googleapis.com/maps-solutions-g05phn0ug6/locator-plus/kqh6/locator-plus.html"
        width="100%"
        height="700"
        style={{
          border: 0,
          display: "block",
          marginTop: "2rem",
          height: "50vh",
        }}
        loading="lazy"
      ></iframe>
    </div>
  );
}
