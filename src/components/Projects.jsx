import React, { useState } from "react";
import movie from "../assets/images/myMoviz.png";
import melo from "../assets/images/melo.png";
import socialassur from "../assets/images/socialAssur.png";
import lunch from "../assets/images/lunchCard.png";
import email from "../assets/images/emailing.png";
import serenite from "../assets/images/serenite.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(0);

  const projects = [
    {
      id: 1,
      title: "My Movie App",
      description: "Site web pour répertorier les films au cinéma mis à jour via une API",
      img: movie,
      view:"https://my-moviz.netlify.app/"
    },
    {
      id: 2,
      title: "Social Assur",
      description: "Développement d'une landing page pour une assurance obsèques avec formulaire dynamique",
      img: socialassur,
      view:"https://social-assur.com/SocialAssurObseques/"
    },
    {
      id: 3,
      title: "MeloQuest ",
      description: "Application mobile personnelle d'évenement de musique",
      img: melo,
      view:"https://youtu.be/eY8FQevcRAA"
    },
   
  
    {
      id: 4,
      title: "Ticket Restaurant",
      description: "Développement d'une landing page pour une solution bancaire avec formulaire dynamique",
      img: lunch,
      view:"https://lunchcardsolutions.com/ticket-restaurante-españa/"
    },

    {
      id: 5,
      title: "Emailing Page web",
      description: "Développement d'une landing page/emailing pour une solution bancaire",
      img: email,
      view:"https://flextopay.com/flextopay-emailing/"
    },

    {
      id: 5,
      title: "Sérénité senior",
      description: "Développement d'une landing page pour une mutuelle santé sénior avec formulaire dynamique",
      img: serenite,
      view:"https://santeseniors.fr/SereniteSenior//"
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10 ">
        <div className="flex justify-center items-center gap-4 mt-12 mb-2  ">
          <button
            onClick={() => setDurum(1)}
            className={`font-extrabold tl:text-2xl text-4xl border-2 w-[50%] hover:bg-[#600b8c]  bg-[#171717] rounded-[10px] p-[10px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
           Découvrir mes projets
          </button>

        </div>


        <div className="grid grid-cols-3 p-10 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
          {durum === 1
            ? projects.map((item, i) => <ProjectCard key={i} item={item} />)
            : null}
        </div>
        
      </div>
    </>
  );
}

export default Projects;
