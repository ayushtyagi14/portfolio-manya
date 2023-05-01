import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-[#F3E1DD]">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:pt-32 sm:pb-8 sm:px-6 lg:px-8">
          <div className="flex md:flex-row flex-col-reverse w-full justify-between items-center">
            <div className="md:w-[40%] mt-5 md:mt-0">
              <h1 className="md:text-[30px] text-[26px] font-bold text-[#89023E] sm:text-4xl text-center md:text-left">
                Welcome to My Portfolio!
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
                Hey! This is Manya Gandhi , 19 year old girl from India. My
                portfolio will give you a closer look into my skills. I'm a
                creative person and a quick learner.
              </p>
              <div className="mt-5 max-w-md mx-auto flex flex-col gap-2">
                <a
                  href="https://drive.google.com/file/d/1X6rKBQJRTYqKuQebHBSYnR4xAnyMJwYe/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#89023E] text-white hover:text-[#C7D9B7] py-3 px-6 font-bold text-lg mx-auto"
                >
                  My Resume
                </a>
              </div>
            </div>
            <div className="md:mt-10 sm:mt-0 md:w-[50%]">
              <img
                src="/manya.jpg"
                alt="Portfolio Owner"
                className="rounded-full mx-auto h-64 sm:h-80"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
