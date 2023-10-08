import React from 'react'
import logo from "../assets/images/astronout.png"
import logo1 from "../assets/images/astronout1.png"
import bg from "../assets/images/galaxie.jpg"
import Navbar from './Navbar'
import "../styles.css"

function Header() {
  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <div className="btn py-3">
          <button  className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Bienvenue sur mon porfolio</button>
        </div>
        <h1 className='text-white text-5xl font-bold'>Bonjour, je suis Joris 👋   </h1>
        <p className='text-white py-4 max-w-lg  '>

Je suis un développeur junior passionné par la création de sites web interactifs et d'applications modernes 
en utilisant React. Si vous cherchez un développeur junior React enthousiaste et déterminé pour votre prochain projet, je serais ravi de discuter de 
la façon dont je peux vous aider à le réaliser. N'hésitez pas à me contacter !</p>
      <a
        href="mailto:jorisbassole.dev@gmail.com"
        target="_blank"
        className="text-white text-2xl"
      >
        <button className=' text-white text-2xl'>Contactons-nous ! <i className="fa-solid fa-arrow-right text-lg  p-[2px] "
        
        ></i> </button>
      </a>

      </div>
      <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
      <img className='w-96 ast-img' src={logo1} alt="astronaut" />
    
      </div>
      <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
     
      <img className='w-96 ast-img' src={logo} alt="astronaut" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header