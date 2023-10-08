import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/meter1.svg";
import bg from "../assets/images/galaxie.jpg"
import tailwind from "../assets/images/Tailwind_CSS_Logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <>
      <div id="skills" style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="tl:text-xl text-4xl ">Compétences</h1>
          <p className="text-lg lg:py-3">
          </p>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
               
                  <FontAwesomeIcon icon={faReact}  style={{color:"#61d9fb"}}  className="tl:w-20 w-28 h-28" />
                  

                  <h1 className="tl:hidden font-bold tl:text-base text-2xl my-2">React JS</h1>
                  
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                <FontAwesomeIcon icon={faHtml5}  style={{color: "#f16529",}} className="tl:w-20 w-28 h-28"  />
                  <h1 className="tl:hidden font-bold tl:text-base lg2:text-2xl my-2">HTML5 </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                <FontAwesomeIcon icon={faCss3Alt} style={{color: "#2865f0",}} className="tl:w-20 w-28 h-28"  />
                  <h1 className="tl:hidden font-bold tl:text-base lg2:text-2xl my-2">CSS3</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717] tl:w-80">
                  <img src={tailwind} alt="tailwind image" className=" w-28 h-28" />
                  <h1 className="tl:hidden font-bold lg2:text-2xl my-8">Tailwind</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                <FontAwesomeIcon icon={faSquareJs} style={{color:"f1bf21"}} className="tl:w-20 w-28 h-28"  />
                  <h1 className="tl:hidden font-bold lg2:text-2xl my-2">Javascript</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
