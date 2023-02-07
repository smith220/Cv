import React from 'react'
import img from './component/pics/right.png'

function About() {
  return (
    <div id='about'>
       <div className='contains2 mb-60' style={{marginTop:'30px'}} >
       <h2 className=' text-center  about ' > About<span style={{color:'rgb(103, 160, 182)',letterSpacing:'3px',marginLeft:'4px'}}>Me</span> </h2>
       <h2 className='text-center  about2' style={{color:'rgb(117, 117, 117)'}}> My Introduction</h2>
       <div className=' '>
        <div className= "firstframe flex text-l justify-between text-center " >
            <div className='text-slate-200 mx-7' style={{marginTop:'120px'}}>Am a passionate programer that with the virtue of exellence,<br></br>
            I build responsive wed design with React Js  and other programming tools, <br/>I have worked i various personal and <br/>
            contract project with 2years of experience. with fast improving skills
              
              <div className='flex justify-between mt-11 text-slate-200'>

               
                <div className=' text-slate-100 text-3xl' >02<span className='text-sky-300 '>+</span><br/> <span>Years experience</span></div>
                <div className=' text-slate-100 text-3xl text' >12<span className='text-sky-300 '>+</span><br/> <span>Project Completed</span></div>
              
              </div>
              <a href="./component/Code_a_program.pdf" download>
                <button className="bg-sky-400 mt-20 h-9 w-32 rounded-2xl">Download CV</button>
              </a>
            
            </div>

            <div className='plus  p-10 bg-slate-500 h-96 w-96 rounded-xl origin-center rotate-12' 
              style={{marginTop:'80px', marginRight:'140px'}} > 
            <div className='plus2  p-10 bg-sky-400 h-96 w-96 rounded-xl '   style={{marginTop:'-30px'}} > 
            <img alt=''  src={img} />
            </div>
           
           
            </div>
        </div>
    
       </div>
     
    </div>
    </div>
  )
}

export default About
