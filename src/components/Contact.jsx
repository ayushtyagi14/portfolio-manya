import React from "react";

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:py-24 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#89023E] sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-[24px] text-gray-700 sm:mt-4">
            Feel free to reach out to me via email or Instagram:
          </p>
          <div className="flex md:flex-row flex-col items-center gap-2 justify-center mt-8 text-[20px]">
            <a
              href="mailto:mgandhi1@oldwestbury.edu"
              className="mr-6 text-[#89023E] hover:text-gray-700"
            >
              ✉️ mgandhi1@oldwestbury.edu
            </a>
            <a
              href="https://www.instagram.com/hey.newyorkers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#89023E] hover:text-gray-700 flex flex-row items-center"
            >
              <img
                src="https://img.icons8.com/fluency/48/null/instagram-new.png"
                alt="instagram"
              />
              <span className="md:hidden">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
