import React from 'react'
import './firstFrame.css';
import image from'./image.png' ;
import Skills from './Skills';
import Hireme from '../Hireme'
import Footer from '../Footer'
import About from '../About'
import Contact from './Contact'
import  Project from '../component/Project'
function firstFrame() {
  return (
  <div className='con bg-slate-900'>
 
    <div className='containes'>

<div className='firstItem '  id='home'   style={{marginBottom:'100px'}}>
     <div className='box'>
     <div className='img'><img  alt='image' src={image}/>    </div>
     </div>
     <div className='circle'></div>
     <div className='circle2'></div>
     <div className='circle3'></div>

    
</div>

         <div className='secondItem'> 
      < div className='first'>Hello!</div>
      <div className='second'>My Name is Smith Obi</div>
      <div className='third'>Front End Developer</div>
      <a href='#contact'>
      <button className="bg-sky-400 mt-20 h-9 w-32 rounded-2xl text-white"> Contact Me</button>
      
      </a>
      </div>
   
    </div >
    <About/>

   
      <div className='bg-slate-700 text-center' style={{height:'300px', width:'100%'}}> 
    
           <Skills/>
           <div className=' bg-slate-900'>

        
           <Project/>
           <Contact/>
             <Footer/>
             
           </div>
    </div>
    </div>
  
  )
}

export default firstFrame
