import React from "react";
import img from "../assets/images/contact-img.svg";

function Contact() {
  return (
    <>
      <div className="contact bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox ">
            <img className="w-[550px] h-full" src={img} alt="developpeur image" />
          </div>
        


        </div>

      </div>
    </>
  );
}

export default Contact;
