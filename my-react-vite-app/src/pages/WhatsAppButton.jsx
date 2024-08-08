import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/62087782201855" // Ganti dengan nomor WhatsApp admin
      className="fixed bottom-4 right-4 p-4 rounded-full shadow-lg hover:bg-white-100 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.omueINbKob7b57oux2oTRgHaHd&pid=Api&P=0&h=180"
        alt="WhatsApp"
        className="w-12 h-12"
      />
    </a>
  );
};

export default WhatsAppButton;
