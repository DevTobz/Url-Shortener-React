import '../components/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';


const Header = () => {
    const[navState, setNavState] = useState("nav-contain");
    const [toggleBurger,setToggleBurger] = useState(false);
    const [isResized, setIsResized] = useState(window.innerWidth<=720);

    useEffect(()=>{
        const handleResize = ()=>{
             setIsResized(window.innerWidth<=768)
        }
        window.addEventListener('resize',handleResize);

        return()=>{
            window.removeEventListener('resize', handleResize)
        };
       


    },[])

    const handleNavState =()=>{
        navState === "nav-contain" ? setNavState("nav-contain_active") : setNavState("nav-contain");
        setToggleBurger(prev=>!prev);
    }

    return ( 
        <>
        <div className="nav-starter">
            <div className='img-div'>
                    <p>Shortify</p>
            </div>
            <nav>
                {window.innerWidth <= 768 && 
                    <div  className={`menu-toggler ${toggleBurger ? '-active' : ''}`} onClick={handleNavState}>
                
                    {toggleBurger === true ?<FontAwesomeIcon icon={faXmark} size='xl'/>: <FontAwesomeIcon icon={faBars} size='xl'/>} 
                </div>
                }
                
              <div className={navState}>
              <div className="link-side">
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
               </div>
                <div className="btn-side">
                  <button id='b1'>Login</button>
                  <button id='b2'>Sign Up</button>
                </div>
               </div>
                
               
              
            
            </nav>
        </div>
       
        <div className='below-div'>
            <div className='huge-div'>
                <p id='text1'>More than just shorter links</p><br/>
                <p id='text2'>Build your brand recognition and get detailed insigths on how links are performing</p>

                <button>Get Started</button>
            </div>
            <div className='svg-div' >
             
            </div>

        </div>
        </>
        
     );
}
 
export default Header;