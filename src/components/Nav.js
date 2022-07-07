import React,{useState,useEffect} from 'react'
import './nav.css'

function Nav() {

    const [show,setshow]=useState(false)

    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>100)
        {
            setshow(true)
        }
        else{
            setshow(false)
        }
      });
      return () =>{
    window.removeEventListener("scroll",()=>{})
      }
    }, [])
    

  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img className='nav-logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt='netflix-logo' />
        <img className='nav-avatar' src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png" alt='netflix-avatar' />
        </div>
  )
}

export default Nav