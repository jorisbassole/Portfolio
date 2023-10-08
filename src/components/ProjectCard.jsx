import React, {useState} from 'react'
import Projects from './Projects'





function ProjectCard({item}) {
        
  return (
    <>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl" >
              <img src={item.img} alt="" className='w-full' />
              <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
                <h1 className="tl:text-sm tl:text-black font-bold text-3xl">{item.title}</h1>
                <p className="tl:text-sm tl:text-black tl:h-full font-bold mb-4 ">{item.description}</p>
                <button onClick={()=>{window.open(item.view)}}
                className=" tl:text-sm font-bold text-[19px] border-2  bg-[#171717] rounded-[10px] p-[4px]">Voir le projet</button>
                
              </div>
            </div>
    </>
  )
}

export default ProjectCard