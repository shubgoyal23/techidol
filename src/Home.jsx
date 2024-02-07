import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import CardTwo from "./CardTwo";

function Home() {
   return (
      <>
         <div className=" flex flex-col justify-center pt-20 mb-0 md:p-20 lg:p-24 p-8 w-full h-screen min-h-[500px] bg-left bg-cover bg-no-repeat bg-[url(/home-bg.jpg)]">
            <h1 className="text-white lg:text-5xl md:text-3xl text-2xl font-bold">
               <span className="text-cyan-500">Techidol</span> - Your Best
               Partner for Growth and Excellence
            </h1>
            <h2 className="text-gray-300 mt-2 lg:text-2xl md:text-xl text-lg font-medium">
               Redefining Excellence with Innovation, Integration, and
               Illumination !
            </h2>
            <button className="py-2 w-48 mt-6 rounded text-white bg-sky-600 hover:bg-sky-500 uppercase transition-all duration-100 ease-in">
               <FontAwesomeIcon icon={faCirclePlay} /> Know More
            </button>
         </div>
         <div className="flex flex-col md:flex-row justify-center py-28 bg-rose-50">
            <div className="flex-1 box-border rounded-lg overflow-hidden m-4">
               <img src="/logo-big.jpg" alt="logo" className="rounded-lg" />
            </div>
            <div className="flex-1 p-6 md:px-20 mt-4 md:mt-0 box-border">
               <h3 className="text-4xl text-gray-700 font-medium">
                  Leading the Way{" "}
                  <span className="font-bold text-gray-800">
                     in AI/ML, BPO, and IT Services
                  </span>
               </h3>
               <p className="text-gray-500 mt-8">
                  <span className="font-medium text-gray-700">
                     Techidol solutions
                  </span>{" "}
                  Pioneering AI/ML Solutions, Empowering Businesses to Thrive.
                  With Innovation, Integration, and Illumination, We Drive
                  Excellence in BPO, AI, and Digital Marketing on a Global
                  Scale.
               </p>

               <div className="flex justify-between items-center mt-12 text-indigo-900 text-center opacity-75">
                  <div>
                     <h5 className="text-6xl font-bold">15</h5>
                     <h6 className="text-base">Clients</h6>
                  </div>
                  <div>
                     <h5 className="text-6xl font-bold">17</h5>
                     <h6 className="text-base">Projects</h6>
                  </div>
                  <div>
                     <h5 className="text-6xl font-bold">1</h5>
                     <h6 className="text-base">Year</h6>
                  </div>
                  <div>
                     <h5 className="text-6xl font-bold">15</h5>
                     <h6 className="text-base">Team Members</h6>
                  </div>
               </div>
            </div>
         </div>

         <div className="p-6 bg-cyan-950 py-16 lg:px-36 px-8">
            <div className="relative mb-20">
               <span className="text-white text-2xl pl-6 font-bold">
                  SERVICES
               </span>
               <span className="absolute top-4 left-200 h-[2px] w-36 ml-4 bg-sky-700"></span>
            </div>
            <div className="w-full grid grid-rows-3 grid-cols-3 gap-4 md:gap-16 justify-center items-center">
               {[
                  {
                     name: "IT Services",
                     imageUrl:
                        "https://techidolsolutions.com/assets/img/android app1.svg",
                  },
                  {
                     name: "Customize Software",
                     imageUrl:
                        "https://techidolsolutions.com/assets/img/website3.svg",
                  },
                  {
                     name: "Digital Marketing",
                     imageUrl:
                        "https://techidolsolutions.com/assets/img/erp solutions2.svg",
                  },
                  {
                     name: "AI / ML Services",
                     imageUrl:
                        "https://techidolsolutions.com/assets/img/uiux.svg",
                  },
                  {
                     name: "SEO Ranking",
                     imageUrl:
                        "https://techidolsolutions.com/assets/img/seo.svg",
                  },
                  {
                     name: "BPO Services",
                     imageUrl:
                        "https://techidolsolutions.com/assets/img/itconsultancy (3).png",
                  },
                  {
                     name: "R&D Support",
                     imageUrl:
                        "https://techidolsolutions.com/assets/img/r&d3.svg",
                  },
                  {
                     name: "DataEntry and Management",
                     imageUrl:
                        "https://techidolsolutions.com/assets/img/webhosting.svg",
                  },
                  {
                     name: "Transcription Tools",
                     imageUrl:
                        "https://techidolsolutions.com/assets/img/it_training.svg",
                  },
               ].map((item) => (
                  <Card
                     key={item.name}
                     name={item.name}
                     image={item.imageUrl}
                  />
               ))}
            </div>
         </div>

         <div className="p-6 bg-rose-50 py-16 lg:px-36 px-8">
            <div className="relative mb-20">
               <span className=" text-2xl pl-6 font-bold text-black">
                  PRODUCTS
               </span>
               <span className="absolute top-4 left-200 h-[2px] w-36 ml-4 bg-sky-700"></span>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-16 justify-center items-center">
               {[
                  "Ecommerce",
                  "Business ERP",
                  "Certificate Generator",
                  "Education ERP",
                  "SEO Ranking",
                  "Persnol App/Site",
                  "CRM/CMS",
                  "Advertising Material",
                  "Billing & Invoice",
                  "Read-To-Use Websites",
                  "Online Examination",
                  "Promotional videos",
               ].map((item) => (
                  <CardTwo key={item} name={item} />
               ))}
            </div>
         </div>
      </>
   );
}

export default Home;
