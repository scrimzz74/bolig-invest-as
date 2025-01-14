"use client";

import React, { useEffect, useState } from "react";

const ContactPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="max-w-2xl mx-auto p-10 font-lalezar">
      <h1 className="text-5xl text-center mb-5 text-blue-500">Kontakt oss</h1>{" "}
      {/* Increased the font size */}
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-gray-600">
            Fullt Navn
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Skriv ditt fulle navn"
            className="w-full p-3 border border-gray-400 rounded-md text-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-600">
            Email Adresse
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Skriv din e-postadresse"
            className="w-full p-3 border border-gray-400 rounded-md text-lg"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="details" className="text-gray-600">
            Prosjekt Detaljer
          </label>
          <textarea
            id="details"
            name="details"
            placeholder="Beskriv prosjektet ditt"
            className="w-full p-3 border border-gray-400 rounded-md text-lg h-32 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white text-xl font-semibold rounded-md hover:bg-blue-700 shadow-lg transform hover:scale-105 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
