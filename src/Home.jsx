import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCirclePlay,
   faUserGroup,
   faLightbulb,
   faLaptop,
   faCloud,
   faSquareRss,
} from "@fortawesome/free-solid-svg-icons";
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

         <div className="p-6 py-16 bg-cyan-950 text-white lg:px-40 px-8">
            <div className="relative mb-10">
               <span className=" text-2xl pl-6 font-bold text-white">
                  HOW WE WORK
               </span>
               <span className="absolute top-4 left-200 h-[2px] w-20 md:w-36 ml-4 bg-sky-700"></span>
            </div>
            <div className="relative py-10">
               <div className="absolute top-0 left-6 lg:left-1/2 bottom-0 w-1 bg-white"></div>

               <div className="relative my-6 w-4/5 lg:w-1/2 left-20 lg:-left-10 box-border p-6 border-white border-2 rounded-lg bg-cyan-950">
                  <h3 className="text-xl">Meeting & Discussion</h3>
                  <p className="text-sm mt-4">
                     We connect with our clients for requirements and
                     specifications gathering before drawing any proposal for
                     them.
                  </p>
                  <span className="absolute top-6 right-[112%] lg:-right-16 h-10 w-10 bg-red-500 rounded-full flex justify-center items-center">
                     <FontAwesomeIcon icon={faUserGroup} />
                  </span>
                  <span className="absolute top-8 lg:-right-[15px] right-[100%] w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent lg:border-l-[15px] lg:border-l-white border-l-0 border-r-[15px] border-r-white lg:border-r-0"></span>
               </div>

               <div className="relative my-6 w-4/5 lg:w-1/2 left-20 lg:left-[55%] box-border p-6 border-white border-2 rounded-lg bg-cyan-950">
                  <h3 className="text-xl">Concepts & Initiatives</h3>
                  <p className="text-sm mt-4">
                     After knowing client's requirements, our specialists share
                     the best possible ideas and initiatives to deliver the best
                     solutions for selected IT services.
                  </p>
                  <span className="absolute top-6 lg:-left-[14%] -left-20 h-10 w-10 bg-red-500 rounded-full flex justify-center items-center">
                     <FontAwesomeIcon icon={faLightbulb} />
                  </span>
                  <span className="absolute top-8 -left-[15px] w-0 h-0 border-t-[15px] border-t-transparent border-r-[15px] border-r-white border-b-[15px] border-b-transparent"></span>
               </div>
               <div className="relative my-6 w-4/5 lg:w-1/2 left-20 lg:-left-10 box-border p-6 border-white border-2 rounded-lg bg-cyan-950">
                  <h3 className="text-xl">Testing & Trying</h3>
                  <p className="text-sm mt-4">
                     After finalizing plans and ideas, we start working
                     accordingly and give remarks on the outcomes and
                     adjustments.
                  </p>
                  <span className="absolute top-6 right-[112%] lg:-right-16 h-10 w-10 bg-red-500 rounded-full flex justify-center items-center">
                     <FontAwesomeIcon icon={faLaptop} />
                  </span>
                  <span className="absolute top-8 lg:-right-[15px] right-[100%] w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent lg:border-l-[15px] lg:border-l-white border-l-0 border-r-[15px] border-r-white lg:border-r-0"></span>
               </div>

               <div className="relative my-6 w-4/5 lg:w-1/2 left-20 lg:left-[55%] box-border p-6 border-white border-2 rounded-lg bg-cyan-950">
                  <h3 className="text-xl">Execute & Install</h3>
                  <p className="text-sm mt-4">
                     Once the final agreement is done, everything takes place as
                     per the arrangement.
                  </p>
                  <span className="absolute top-6 lg:-left-[14%] -left-20 h-10 w-10 bg-red-500 rounded-full flex justify-center items-center">
                     <FontAwesomeIcon icon={faCloud} />
                  </span>
                  <span className="absolute top-8 -left-[15px] w-0 h-0 border-t-[15px] border-t-transparent border-r-[15px] border-r-white border-b-[15px] border-b-transparent"></span>
               </div>

               <div className="relative my-6 w-4/5 lg:w-1/2 left-20 lg:-left-10 box-border p-6 border-white border-2 rounded-lg bg-cyan-950">
                  <h3 className="text-xl">Deployment & feedback</h3>
                  <p className="text-sm mt-4">
                     Finally, the product is delivered to the client and we take
                     the feedback and final changes from the client.
                  </p>
                  <span className="absolute top-6 right-[112%] lg:-right-16 h-10 w-10 bg-red-500 rounded-full flex justify-center items-center">
                     <FontAwesomeIcon icon={faSquareRss} />
                  </span>
                  <span className="absolute top-8 lg:-right-[15px] right-[100%] w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent lg:border-l-[15px] lg:border-l-white border-l-0 border-r-[15px] border-r-white lg:border-r-0"></span>
               </div>
            </div>
         </div>

         <div className="p-6 bg-rose-50 py-20 lg:px-36 px-8">
            <div className="relative mb-20">
               <span className=" text-2xl pl-6 font-bold text-black">
                  Reviews
               </span>
               <span className="absolute top-4 left-200 h-[2px] w-36 ml-4 bg-sky-700"></span>
            </div>
            <div>
               <figure className="max-w-screen-md mx-auto text-center">
                  <svg
                     className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="currentColor"
                     viewBox="0 0 18 14"
                  >
                     <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <blockquote>
                     <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                        "Techidol is simply outstanding! Their team of
                        professionals is top-notch, delivering projects promptly
                        and flawlessly. With their seamless coordination and
                        expertise, Techidol ensures excellence every step of the
                        way."
                     </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                     <img
                        className="w-6 h-6 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture"
                     />
                     <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                           Michael Gough
                        </cite>
                        <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                           CEO at Google
                        </cite>
                     </div>
                  </figcaption>
               </figure>
            </div>
         </div>

         <div className="p-6 bg-cyan-950 text-white py-16 lg:px-36 px-8">
            <div className="relative mb-20">
               <span className=" text-2xl pl-6 font-bold">CONNECT WITH US</span>
               <span className="absolute top-4 left-200 h-[2px] w-20 md:w-36 ml-4 bg-sky-700"></span>
            </div>
            <div className="flex justify-center flex-col lg:flex-row items-center">
               <div className="flex-1 mb-20 p-6">
                  <img src="/contact_us.svg" alt="contact us" />
               </div>
               <div className="flex-1 p-6 lg:ml-6 w-full">
                  <form className="w-full">
                     <div className="mb-5">
                        <label
                           htmlFor="name"
                           className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                        >
                           Your name
                        </label>
                        <input
                           type="name"
                           id="name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Isa Euripides"
                           required=""
                        />
                     </div>
                     <div className="mb-5">
                        <label
                           htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                        >
                           Your email
                        </label>
                        <input
                           type="email"
                           id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="name@flowbite.com"
                           required=""
                        />
                     </div>
                     <div className="mb-5">
                        <label
                           htmlFor="subject"
                           className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                        >
                           subject
                        </label>
                        <input
                           type="subject"
                           id="subject"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="subject"
                           required=""
                        />
                     </div>

                     <div className="mb-5">
                        <label
                           htmlFor="message"
                           className="block mb-2 text-sm font-medium text-gray-300 dark:text-white"
                        >
                           Your message
                        </label>
                        <textarea
                           id="message"
                           rows={4}
                           className="block p-2.5 w-full text-sm text-gray-300 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Leave a comment..."
                           defaultValue={""}
                        />
                     </div>

                     <button
                        type="submit"
                        className="text-white bg-cyan-600 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     >
                        SEND EMAIL
                     </button>
                     <a href="tel:+917238897498">
                        <button
                           type="button"
                           className="text-white lg:ml-10 mt-6 lg:mt-0 bg-cyan-600 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                           CALL US INSTEAD
                        </button>
                     </a>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;
