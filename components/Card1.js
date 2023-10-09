import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useState,useEffect } from 'react';
import SearchCard from './SearchCard';
import {FaUserPlus} from 'react-icons/fa'
const Card1 = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      // Comprueba si hay un usuario en el local storage
      if (typeof window !== 'undefined' && localStorage.getItem('user')) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }, []);
    if (typeof window !== "undefined") {
        const toggleSwitch = document.querySelector('#theme-toggle');
      
        function switchTheme(e) {
          if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
          } else {
            document.documentElement.setAttribute('data-theme', 'light');
          }
        }
        if (toggleSwitch) {
          toggleSwitch.addEventListener('change', switchTheme, false);
        }
      }
    return ( 
        <div className={styles.card1}>
            <div className={styles.container}>
                <div>
                  <ul className={styles.circulos}>
                  <li className={styles.circulo}></li>
                  <li className={styles.circulo}></li>
                  <li className={styles.circulo}></li>
                  </ul>
                <p className={styles.anuncio}> start <br/> <span style={{color:'var(--anuncio)'}}>streaming</span> <br/> games <br/> differently</p>
                 <p style={{color:'var(--message)'}}>gamor now has a <span style={{color:'var(--text)',fontWeight:'bold',borderBottom:'3px solid var(--primary-color)'}}>streaming party</span> platform</p>
                 {loggedIn===true?<div className={styles.btn_container}>
                <a className={styles.btn}><button style={{backgroundColor:'#f0f2f400'}}>Join to discord</button></a> 
                <a className={styles.btn} ><button>start streaming</button></a>
                </div>:<div className={styles.btn_container}>
                <a className={styles.btn} ><button style={{boxShadow:' 0px 8px 15px rgba(0, 0, 0, 0.1)'}} >Create account</button></a> 
                <a className={styles.btn}><button  style={{backgroundColor:'var(--button-focus)'}}>Sign In</button></a>
                </div>}  
                <div className={styles.toggle}>
                <p style={{color:'var(--text)',marginRight:'10px'}}>Toggle Theme</p>
                 <label className="switch" >
                <input type="checkbox" id="theme-toggle"/>
                <span className="slider round"></span>
                </label>       
                </div>
         
                </div> 
            </div>

            <div className={styles.container} style={{backgroundColor:'var(--primary-color)'}}>
              
                <h2 style={{textAlign:'center', color:'white',fontSize:'x-large',marginTop:'50px'}}>Fornite New Session</h2>
                <h4 style={{textAlign:'center',color:' var(--message)',fontSize:'small'}}>Join Live Stream</h4>
                <button className={styles.addbtn}><FaUserPlus style={{color:'white'}} /></button>
                <a className={styles.btn} style={{display:'flex',justifyContent:'center'}}><button style={{backgroundColor:'white',color:'var(--primary-color)',height:'50px',width:'120px',fontSize:'large'}}>11:45</button></a>
               <div className={styles.image}>
                <div className={styles.cardAvatar}><img src='/OIP.png' /></div>
                <div className={styles.cardAvatar}><img src='/A2.png' /></div>
                </div>
                
            </div>
            
            <div className={styles.container}>
                <p style={{color:'var(--text)',marginTop:'50px'}}><spam style={{color:'gray'}}>01</spam>. Choose Platform</p>
                <div className={styles.selector}>
                    <button><img src="/party.png"/>Party</button>
                    <button>Stream</button>
                    <button>Friends</button>
                </div>
                <p style={{color:'var(--text)'}}><spam style={{color:'gray'}}>02</spam>. Searching Game</p>
                <SearchCard/>
            </div>
        </div>
     );
}
 
export default Card1;