import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";



import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";


function Navbar() {
  const [durum, setDurum] = useState(true);
  console.log(durum);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "black";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document.querySelector(".tl").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

  return (
    <>
      <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
        <h1 className="text-4xl  font-bold ">Joris Bassole</h1>

        <nav
          className={` flex justify-center items-center gap-x-10 ${
            durum && "lg:hidden"
          } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className=" flex gap-5 text-3xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="hover:text-purple-400">
              <AnchorLink href="#home">Accueil</AnchorLink>
            </li>
            <li className="hover:text-purple-400">
              <AnchorLink href="#skills">Compétences</AnchorLink>
            </li>
            <li className="hover:text-purple-400">
              <AnchorLink href="#projects">Projets</AnchorLink>
            </li>
          </ul>

          <div className=" text-lg flex gap-4 tl:mt-10 lg:my-0 ">
            
 
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
          
        </nav>

        <i
          onClick={(e) => setDurum(!durum)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar;
