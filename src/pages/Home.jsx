import React from "react";
import HomeSwiper from "../components/homePage/HomeSwiper";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import aboutus from "../assets/images/aboutus.jpg";
import logo from "../assets/logos/logo.png";
import certified from "../assets/logos/aboutcertified.svg";
import aboutbadge from "../assets/logos/aboutbadge.svg";
import chatsupport from "../assets/logos/chatsupport.svg";
import checklist from "../assets/logos/checklist.svg";
import clockcheck from "../assets/logos/clockcheck.svg";
import mobilesvg from "../assets/logos/mobilesvgy.svg";
import mobilesvgBlack from "../assets/logos/mobilesvgBlack.svg";
import emailblack from "../assets/logos/emailblack.svg";
import instagramblack from "../assets/logos/instagramblack.svg";
import emailsvg from "../assets/logos/email.svg";
import instagramsvg from "../assets/logos/instagramsvg.svg";
import servicesbanner from "../assets/images/servicesbanner.jpg";
import { servicesData } from "../data/servicesData.js";
import "./Home.css";
import SEO from "../components/SEO.jsx";

const Home = () => {
  return (
    <div className="flex flex-col w-full ">

    {/* meta */}

    <SEO title="Home Page" description="This is a Home Page"/>

    
      {/* hero section */}
      <section id="home">
        <div className="flex relative">
          <HomeSwiper image1={image1} image2={image2} image3={image3} />
          <div className="bg-[#1929ff] opacity-20 absolute left-0 top-0 h-full z-20 pointer-events-none w-[60vw] md:w-[60vw] lg:w-[45vw]"></div>
          <div className="flex pointer-events-auto absolute w-full left-5 lg:left-0 top-20 md:top-30 lg:top-0 lg:top-40 z-30">
            <div className="container small_container cursor-default">
              <h1 className="small-text  leading-none text-[1.2rem] md:text-[1.5rem] lg:text-[2rem]">
                Crafting your vision into
              </h1>
              <h1 className="small-text2 leading-none text-[1.8rem] ml-5 lg:ml-10 text-[#fcba03] md:text-[2rem] lg:text-[3.4rem] ">
                concrete reality
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}

      <section
        id="about"
        className="scroll-mt-[100px] mt-[8rem] cursor-default"
      >
        <div className="container flex flex-col gap-[5.5rem]">
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col gap-[4rem] lg:gap-0 lg:flex-row items-center justify-between">
              <div className="flex flex-col gap-[1rem] w-[85%] lg:w-[50%]">
                <div className="flex flex-col items-center gap-[1rem] lg:items-start justify-center lg:justify-start lg:gap-[1rem] mb-[1rem]">
                  <h3 className="text-[2.5rem] leading-none">Built to Last</h3>
                  <h2 className="text-[2.5rem]  text-center lg:text-start leading-none text-[#fcba03]">
                    Driven by Precision
                  </h2>
                </div>
                <p className="text-justify">
                  At Roopa Infrastructures, we don’t just construct buildings—we
                  craft strong foundations for communities, industries, and
                  futures. With decades of experience in civil engineering and
                  infrastructure development, we are proud to deliver projects
                  that stand tall in quality, safety, and design.
                </p>
                <p className="text-justify">
                  With a skilled team of engineers, architects, and project
                  managers, we combine technical precision with modern
                  construction practices to deliver results that exceed
                  expectations. From foundation to finishing, every project is a
                  reflection of our dedication to quality, safety, and client
                  satisfaction.
                </p>
              </div>
              <div className="relative">
                <div className="hidden md:block md:h-[20rem] md:w-[20rem] top-8 right-8 lg:h-[26rem] z-10 lg:w-[26rem] absolute border-2 border-white lg:right-10 lg:top-10"></div>
                <img
                  className=" h-[20rem] lg:h-[26rem] relative z-20 rounded-md md:rounded-[0rem]"
                  src={aboutus}
                  alt="aboutus"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* quality section */}

          <div className="flex flex-col items-center justify-center mt-[5rem]">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-center text-[2rem]">
                Quality Assurance You Can Rely On
              </h1>
              <p className="text-[1rem] lg:text-[1.2rem] w-[90%] lg:w-[80%] text-center">
                Quality is the cornerstone of our operations. We follow
                stringent quality control procedures at every stage of
                construction to ensure:
              </p>
            </div>
            <div className="flex flex-col gap-5 mt-10 border border-1 border-[#d3d3d3] box-border p-5 lg:p-10 rounded-md">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-[2rem] lg:gap-[5rem] ">
                <div className="flex flex-col items-center lg:items-start justify-center gap-[2rem]">
                  <div className=" flex flex-col lg:flex-row items-center justify-center gap-2">
                    <img
                      className="h-[4rem]"
                      src={aboutbadge}
                      alt="certified"
                    />
                    <p>Use of certified, durable materials</p>
                  </div>
                  <div className=" flex flex-col lg:flex-row  items-center justify-center gap-[2rem]">
                    <img className="h-[3rem]" src={checklist} alt="certified" />
                    <p>Thorough site inspections and structural testing</p>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-center gap-[2rem]">
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                    <img className="h-[3rem]" src={certified} alt="" />
                    <p>Adherence to industry codes and regulations</p>
                  </div>
                  <div className="flex flex-col lg:flex-row  items-center justify-center gap-3">
                    <img className="h-[3rem]" src={clockcheck} alt="" />
                    <p>Timely delivery without compromising standards</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-2 flex-col lg:flex-row  items-center justify-center gap-3">
                <img className="h-[3rem]" src={chatsupport} alt="" />
                <p>Strong focus on client feedback and satisfaction</p>
              </div>
            </div>
            <p className="text-[1.2rem] mt-[3rem] w-[80%] text-center">
              Our ISO-compliant practices and safety-first mindset ensure every
              project is not just completed—but completed to perfection.
            </p>
          </div>

          {/* mission vision section */}

          <div className="flex flex-col lg:flex-row items-center gap-[3rem] justify-center mt-[4rem]">
            <div className="flex-1 flex flex-col items-center justify-center gap-[1.5rem]">
              <h1 className="text-[4rem] text-[#fcba03]">Our Mission</h1>
              <p className="w-[88%] lg:w-full text-center">
                To construct durable, innovative, and sustainable spaces that
                uplift communities and empower progress.
              </p>
            </div>
            <div className="hidden lg:block h-[12rem] p-[0.1px] bg-[#d3d3d3]"></div>
            <div className="flex-1 flex flex-col items-center justify-center gap-[1.5rem]">
              <h1 className="text-[4rem] text-[#fcba03]">Our Vision</h1>
              <p className="w-[88%] lg:w-full text-center ">
                To be a leading force in the construction industry, known for
                our commitment to quality, sectoral expertise, and lasting
                client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* services section */}

      <section
        id="services"
        className="scroll-mt-[100px] mt-[10rem] cursor-default"
      >
        <div className="container">
          <div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-[3rem]">Our Services</h1>
              <p className="w-[90%] lg:w-[80%] text-[1rem] text-center">
                We offer expert construction services for residential and
                commercial projects, including new builds, renovations, and site
                work—delivered with quality and care.
              </p>
              <img
                className="h-[40vh]  lg:h-[60vh] mt-[3rem] object-cover w-[90%] lg:w-full object-[center_22%] rounded-[1.5rem]"
                src={servicesbanner}
                alt="services"
                loading="lazy"
              />
            </div>
            <div className="bg-black py-12 px-4 md:px-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {servicesData.map((data) => (
                  <div
                    key={data.id}
                    className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 shadow-md"
                  >
                    <div className="flex flex-col gap-4 h-full">
                      <h2 className="text-lg font-semibold text-yellow-400">
                        {data.title}
                      </h2>
                      <p className="text-gray-300 h-[3rem] lg:h-[2.5rem]">
                        {data.description}
                      </p>
                      <div className="mt-4 w-12 h-1 bg-yellow-400 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}

      <section id="contact" className="scroll-mt-[100px] mt-[8rem] mb-[1rem]">
        <div className="container flex flex-col gap-[5rem] ">
          <div className="flex flex-col items-center justify-center cursor-default">
            <h1 className="text-[3rem]">Contact Us</h1>
            <p className="text-[1.2rem]">
              Let’s Build Something Great Together
            </p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-[6em]">
            <iframe
              className="rounded-[1rem] w-[85%] lg:w-[70%] h-[400px] lg:h-[500px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62862.15946543925!2d76.27092132194205!3d10.026350560424161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080da53444d5e9%3A0xb46c57c6b1bc9aff!2sEdappally%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1753330448979!5m2!1sen!2sin"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
            <div className="flex flex-col items-center lg:items-start gap-[3rem] ">
              <div className="flex items-center lg:items-start flex-col gap-5 cursor-default">
                <h2 className="text-[1.5rem] w-[95%] lg:w-full lg:text-[2rem] leading-none text-center lg:text-start ">
                  Looking for a reliable civil construction partner for your
                  next project?
                </h2>
                <h2 className="text-[2.5rem] text-[#fcba03] ">Let's talk.</h2>
              </div>
              <div className="flex w-[80%] lg:w-full flex-col gap-[2rem] lg:gap-[1rem] border-1 border-[#d3d3d3] box-border p-[3rem] rounded-md">
                <div className="flex flex-col lg:flex-row gap-[0.5rem] lg:gap-5 items-center ">
                  <img src={mobilesvg} alt="mobile" className="h-[2rem]" />
                  <h3 className="text-[1.4rem]">+91 99955 53314</h3>
                </div>
                <div className="flex flex-col lg:flex-row gap-[0.5rem] lg:gap-5  items-center">
                  <img src={emailsvg} alt="email" className="h-[2rem]" />
                  <h3 className="text-[1.4rem]">
                    roopaandassociates@gmail.com
                  </h3>
                </div>
                <div className="flex flex-col lg:flex-row gap-[0.5rem] lg:gap-5  items-center">
                  <img src={instagramsvg} alt="email" className="h-[2rem]" />
                  <h3 className="text-[1.4rem]">@roopa_n_associates</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#fcba03] rounded-t-[1rem] text-black mt-[5rem] h-[70%] flex flex-col items-center justify-center">
        <div className="container flex flex-col gap-8 justify-center items-center mt-[4rem]">
          <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-0 w-full items-center justify-between">
            <div className="flex items-center justify-center gap-2 cursor-default">
              <img src={logo} alt="logo" className="h-[3rem] w-[3rem]" />
              <div>
                <h1 className="text-[2rem] font-bold leading-none">Roopa</h1>
                <h1 className="text-[2rem] font-bold leading-none">
                  Infrastructures
                </h1>
              </div>
            </div>
            <div className="flex gap-8">
              <button
                onClick={() => {
                  const element = document.getElementById("about");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="text-[1.3rem] cursor-pointer font-medium"
              >
                About
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("services");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="text-[1.3rem] cursor-pointer font-medium"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="text-[1.3rem] cursor-pointer font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="text-[1.3rem] font-medium"
              >
                Home
              </button>
            </div>
          </div>
          <div className="w-[80vw] bg-black h-[1.3px]"></div>
          <div className="flex flex-col items-center justify-center gap-[5rem]">
            <div className="flex flex-col lg:flex-row w-[60vw] gap-[2rem] items-center justify-between">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                <img src={mobilesvgBlack} alt="mobile" className="h-[1.8rem]" />
                <p>+91 99955 53314</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                <img src={emailblack} alt="mobile" className="h-[1.8rem]" />
                <p>roopaandassociates@gmail.com</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
                <img src={instagramblack} alt="mobile" className="h-[1.8rem]" />
                <p>@roopa_n_associates</p>
              </div>
            </div>
            <div className="flex mb-[1rem] cursor-default">
              <p>Copyright © 2025. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
