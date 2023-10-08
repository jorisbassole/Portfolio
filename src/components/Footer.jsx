import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex tl:grid tl:grid-cols-3 justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-2xl">Joris Bassole</h1>

          <a
              href= "/../assets/cv.pdf"
              download="cv.pdf" 
              className=" lg2:text-2xl lg2:mb-5">
                Télécharger mon cv
            <FontAwesomeIcon icon={faFolderOpen}  size='lg' className="tl:border-[1px] border-white p-2 lg2:ml-2 rounded-[100%] hover:bg-white hover:text-black " />
            </a>

          <div className="flex tl:flex-col gap-4 cursor-pointer tl:mx-8 ">
          <a href="https://www.linkedin.com/in/joris-bassole/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black" />
            </a>

            <a
              href="https://github.com/jorisbassole"
              target="_blank">
              <FontAwesomeIcon icon={faGithub} size='lg' className="border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black "/>
            </a>

            <a
              href="mailto:jorisbassole.dev@gmail.com"
              target="_blank">
              <FontAwesomeIcon icon={faEnvelope}  size='lg' className="border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black "/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
