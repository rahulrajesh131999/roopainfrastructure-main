import React, { useRef, useState } from "react";
import HomeSwiper from "../components/homePage/HomeSwiper";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import { useNavigate } from "react-router-dom";
import { homepageCards } from "../data/homepageCards.jsx";
import aboutus from "../assets/images/aboutus.jpg";
import certified from "../assets/logos/aboutcertified.svg";
import aboutbadge from "../assets/logos/aboutbadge.svg";
import chatsupport from "../assets/logos/chatsupport.svg";
import checklist from "../assets/logos/checklist.svg";
import clockcheck from "../assets/logos/clockcheck.svg";
import mobilesvg from '../assets/logos/mobilesvg.svg'
import emailsvg from '../assets/logos/email.svg'
import servicesbanner from "../assets/images/servicesbanner.jpg";
import { servicesData } from "../data/servicesData.js";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const [expandedId, setExpandedId] = useState(null);

  const expandHandler = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };
  const expandedCards = homepageCards.find((card) => card.id === expandedId);

  return (
    <div className="flex flex-col w-full ">
      {/* <p onClick={()=>navigate('/p')}>test</p> */}

      {/* banner section */}

      <section>
        <div className="flex relative">
          <HomeSwiper image1={image1} image2={image2} image3={image3} />
          <div className="bg-[#1929ff] opacity-20 absolute left-0 top-0 h-full z-20 pointer-events-none w-[60vw] lg:w-[45vw]"></div>
          <div className="flex pointer-events-auto absolute w-full left-0 top-14 md:top-16 lg:top-20 z-30">
            <div className="container mx-auto px-5 md:px-0 lg:px-0 flex flex-col gap-0">
              <h2 className="small-text text-[2.5rem] tracking-[0.13rem] md:text-[2rem] lg:text-[3rem] md:tracking-[0.52rem] lg:tracking-[0.95rem] m-0 leading-none ">
                Arcitecture
              </h2>
              <div className="flex place-items-start">
                <div className="flex flex-col md:mt-[0.1rem] lg:mt-[-0.5rem] ">
                  <h3 className="small-text2 leading-none text-[2rem] md:text-[1.9rem] lg:text-[4rem]">
                    is a
                  </h3>
                  <p className="small-text3 leading-none text-[1.5rem] font-light md:text-[1.8rem] lg:text-[3rem]">
                    visual
                  </p>
                </div>
                <h1 className="small-text4 leading-none text-[4.5rem] ml-1 text-[#fcba03] mt-[-0.5rem] md:text-[4.8rem] lg:text-[8rem] lg:mt-[-0.8rem]">
                  ART
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}

      <section className="mt-[8rem]">
        <div className="container flex flex-col gap-[5.5rem]">
          {/*           <div className="w-full flex items-center justify-center">
            <h1 className="leading-none text-[3rem] font-bold tracking-[0.2rem]">About Us</h1>
          </div> */}
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-[1rem] w-[50%]">
                <div className="flex flex-col justify-start gap-[1rem] mb-[1rem]">
                  <h3 className="text-[2.5rem] leading-none">Built to Last</h3>
                  <h2 className="text-[2.5rem] leading-none text-[#fcba03]">
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
                <div className="h-[26rem] z-10 w-[26rem] absolute border-2 border-white right-10 top-10"></div>
                <img
                  className="h-[26rem] relative z-20"
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
              <h1 className="text-[2rem]">Quality Assurance You Can Rely On</h1>
              <p className="text-[1.2rem] w-[80%] text-center">
                Quality is the cornerstone of our operations. We follow
                stringent quality control procedures at every stage of
                construction to ensure:
              </p>
            </div>
            <div className="flex flex-col gap-5 mt-10 border border-1 border-[#d3d3d3] box-border p-10 rounded-md">
              <div className="flex gap-[5rem] ">
                <div className="flex flex-col items-start justify-center gap-[2rem]">
                  <div className=" flex items-center justify-center gap-2">
                    <img
                      className="h-[4rem]"
                      src={aboutbadge}
                      alt="certified"
                    />
                    <p>Use of certified, durable materials</p>
                  </div>
                  <div className=" flex items-center justify-center">
                    <img className="h-[3rem]" src={checklist} alt="certified" />
                    <p>Thorough site inspections and structural testing</p>
                  </div>
                  {/*  */}
                </div>
                <div className="flex flex-col items-start justify-center gap-[2rem]">
                  <div className="flex items-center justify-center gap-3">
                    <img className="h-[3rem]" src={certified} alt="" />
                    <p>Adherence to industry codes and regulations</p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <img className="h-[3rem]" src={clockcheck} alt="" />
                    <p>Timely delivery without compromising standards</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-2 items-center justify-center gap-3">
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

          <div className="flex items-center gap-[3rem] justify-center mt-[4rem]">
            <div className="flex-1 flex flex-col items-center justify-center gap-[1.5rem]">
              <h1 className="text-[4rem] text-[#fcba03]">Our Mission</h1>
              <p className="w-full text-center">
                To construct durable, innovative, and sustainable spaces that
                uplift communities and empower progress.
              </p>
            </div>
            <div className="h-[12rem] p-[0.1px] bg-[#d3d3d3]"></div>
            <div className="flex-1 flex flex-col items-center justify-center gap-[1.5rem]">
              <h1 className="text-[4rem] text-[#fcba03]">Our Vision</h1>
              <p className="w-full text-center ">
                To be a leading force in the construction industry, known for
                our commitment to quality, sectoral expertise, and lasting
                client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* services section */}

      <section className="mt-[10rem]">
        <div className="container">
          <div>
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-[3rem]">Our Services</h1>
              <p className="w-[80%] text-[1rem] text-center">
                We offer expert construction services for residential and
                commercial projects, including new builds, renovations, and site
                work—delivered with quality and care.
              </p>
              <img
                className="h-[60vh] mt-[3rem] object-cover w-full object-[center_22%] rounded-[1.5rem]"
                src={servicesbanner}
                alt="services"
                loading="lazy"
              />
            </div>
            <div className="bg-black py-12 px-4 md:px-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
                {servicesData.map((data) => (
                  <div
                    key={data.id}
                    className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 shadow-md"
                  >
                    <div className="flex flex-col gap-4 h-full">
                      <h2 className="text-lg font-semibold text-yellow-400">
                        {data.title}
                      </h2>
                      <p className="text-gray-300 h-[2.5rem]">
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

      <section className="mt-[8rem] mb-[1rem]">
        <div className="container flex flex-col gap-[5rem]">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[3rem]">Contact Us</h1>
                <p className="text-[1.2rem]">Let’s Build Something Great Together</p>
            </div>
                <div className="flex items-center justify-between gap-[6em]">
                  <iframe className="rounded-[1rem] w-[70%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62862.15946543925!2d76.27092132194205!3d10.026350560424161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080da53444d5e9%3A0xb46c57c6b1bc9aff!2sEdappally%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1753330448979!5m2!1sen!2sin" height="500" style={{border:"0"}}  loading="lazy"></iframe>
                  <div className="flex flex-col gap-[3rem]">
                    <div className="flex flex-col gap-5">
                    <h2 className="text-[2rem] leading-none ">Looking for a reliable civil construction partner for your next project?</h2>
                    <h2 className="text-[2.5rem] text-[#fcba03] ">Let's talk.</h2>
                    </div>
                    <div className="flex flex-col gap-[1rem] border-1 border-[#d3d3d3] box-border p-[3rem] rounded-md">
                      <div className="flex gap-5 items-center ">
                        <img src={mobilesvg} alt="mobile" className="h-[2rem]" />
                        <h3 className="text-[1.4rem]">+91 99955 53314</h3>
                      </div>
                      <div className="flex gap-5 items-center">
                        <img src={emailsvg} alt="email" className="h-[2rem]" />
                        <h3 className="text-[1.4rem]">roopaandassociates@gmail.com</h3>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </section>

      {/*       <div
        className=" w-full flex flex-col items-center mt-10"
        onClick={() => setExpandedId(!expandedId)}
      >
        <div className="flex flex-col w-[50vw]">
          {expandedCards && (
            <div className="card flex h-[25rem] border rounded-md p-5 flex-col items-center ">
              <div>{<expandedCards.icon size={40} />}</div>
              <div className="flex flex-col items-center justify-center">
                <h1>{expandedCards.title}</h1>
                <p className="text-justify">{expandedCards.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="w-full flex items-center justify-center scale-80 md:scale-100"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 md:mt-[15vh] w-[98vw] md:w-[80vw] gap-7">
          {homepageCards.map((cards) => {
            const isExpanded = expandedId === cards.id;

            return (
              <div
                className="flex flex-col m-3"
              >
                <div
                  key={cards.id}
        onClick={(e) => {
          e.stopPropagation();
          expandHandler(cards.id);

          setTimeout(() => {
            window.scrollBy({
              top:180,
              behavior:'smooth'
            })
          }, 100);
        }}
                  className={`flex justify-center mt-[-3rem] transition-transform duration-[400ms] delay-150 duration ease-in-out hover:scale-110 cursor-pointer`}
                >
                  <div className="absolute z-20 translate-y-[-30px] bg-black ">
                    {<cards.icon size={40} fill="#fcba03" />}
                  </div>
                  <div
                    className={`flex flex-col items-center justify-center border z-10 relative py-2 rounded-md`}
                  >
                    <p className="mt-3 text-bold text-center">{cards.title}</p>
                    <p
                      className={`mt-2 mb-1 px-3 text-xs text-justify h-[5rem]`}
                    >
                      {cards.previewDesc.split(" ").length > 20
                        ? cards.previewDesc.split(" ").slice(0, 20).join(" ") +
                          " ..."
                        : cards.previewDesc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <div></div>
    </div>
  );
};

export default Home;
