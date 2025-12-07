"use client";

import OurServices from "@/components/OurServices";
import ContactForm from "@/components/Contact";

export default function ServicesPage() {
  return (
    <>
      <div className="bg-white min-h-screen md:h-auto rounded-b-[250px]">
        <OurServices />
      </div>
      <ContactForm />
    </>
  );
}
