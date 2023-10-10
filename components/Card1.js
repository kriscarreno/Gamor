import styles from '../styles/Home.module.css'
import { useState,useEffect,useRef } from 'react';
import SearchCard from './SearchCard';
import {FaUserPlus} from 'react-icons/fa'
import {AiFillEye} from 'react-icons/ai'
const Card1 = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {      
      if (typeof window !== 'undefined' && localStorage.getItem('user')) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }, []);
    
    if (typeof window !== "undefined") {
        const toggleSwitch = document.querySelector('#theme-toggle');
        const switchTheme=(e)=> {
          let div1=document.getElementById('div1')
          let div2=document.getElementById('div2')
          if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            div1.style.order=1;
            div2.style.order=2;
          } else {
            document.documentElement.setAttribute('data-theme', 'light');
            div1.style.order=2;
            div2.style.order=1;
          }
        }
        if (toggleSwitch) {
          toggleSwitch.addEventListener('change', switchTheme, false);
        }
      }
    return ( 
      <>
        <div className={styles.card1}>
            <div className={styles.container}>
                <div>

                  <ul className={styles.circulos}>
                  <li className={styles.circulo}></li>
                  <li className={styles.circulo}></li>
                  <li className={styles.circulo}></li>
                  <p className={styles.anuncio}> start <br/> 
                  <span style={{color:'var(--anuncio)'}}>streaming</span> 
                  <br/> games <br/> differently</p>
                  </ul>

                 <p style={{color:'var(--message)'}}>gamor now has a <span style={{color:'var(--text)',fontWeight:'bold',borderBottom:'3px solid var(--primary-color)'}}>streaming party </span>platform</p>

                 {loggedIn===true?<span className={styles.btn_container}>
                <a className={styles.btn}>
                  <button >Join to discord</button>
                  </a> 
                <a className={styles.btn} >
                  <button style={{backgroundColor:'#f0f2f400'}}>Start Streaming</button>
                  </a>
                </span>:<div className={styles.btn_container}>
                <a className={styles.btn} >
                  <button style={{boxShadow:' 0px 8px 15px rgba(0, 0, 0, 0.1)'}} >Create account</button>
                  </a> 
                <a className={styles.btn}>
                  <button  style={{backgroundColor:'var(--button-focus)'}}>Sign In</button>
                  </a>
                </div>}  
                <span className={styles.toggle}>
                <p style={{color:'var(--text)',marginRight:'10px'}}>Toggle Theme</p>
                 <label className="switch" >
                <input type="checkbox" id="theme-toggle"/>
                <span className="slider round"></span>
                </label>       
                </span>
                </div> 
            </div>

            <div 
            className={styles.container} 
            style={{backgroundColor:'var(--primary-color)'}}
            >
                <h2 
                  style={{
                  textAlign:'center', 
                  color:'white',
                  fontSize:'x-large',
                  marginTop:'50px'}}
                  >Fornite New Session</h2>

                <h4 
                  style={{
                  textAlign:'center',
                  color:' var(--message)',
                  fontSize:'small'}}
                  >Join Live Stream</h4>

                <a className={styles.btn} style={{display:'flex',justifyContent:'center'}}>
                  <button 
                  style={{
                    borderRadius:'100%',
                    height:'50px',
                    width:'50px',
                    background:"linear-gradient( rgba(255, 255, 255, 0.25),rgba(255, 255, 255, 0.60))",
                    position:'relative',
                    bottom:'25%'}}
                    >
                      <FaUserPlus 
                      size={20} 
                      style={{color:'white'}} 
                      />
                      </button>

                      <button 
                      style={{
                        backgroundColor:'white',
                        color:'var(--primary-color)',
                        height:'50px',width:'120px',
                        fontSize:'large',
                        position:'relative',
                        right:'10%'}}
                        >11:45</button>
                  </a>
               <span className={styles.image}>
                <div 
                id='div1' 
                className={styles.cardAvatar} 
                style={{position:'relative', top:'10%'}}>
                  <span 
                  className={styles.btnAvatar}>
                    <AiFillEye size={15} style={{color:'white',padding:'2px'}}/>
                    </span>
                    <img src='/A1.png'/>
                    </div>
                <div 
                id='div2' 
                className={styles.cardAvatar}>
                  <img src='/A2.png' />
                  </div>
                </span>
                
            </div>
            
            <div className={styles.container}>
                <p style={{color:'var(--text)',marginTop:'20px'}}>
                  <span style={{color:'gray',fontSize:'larger'}}>01</span>. Choose Platform</p>
                <span className={styles.selector}>
                    <button style={{background:'var(--focus-button)'}}><img src="/party.png"/>Party</button>
                    <button >Stream</button>
                    <button >Friends</button>
                </span>
                <p style={{color:'var(--text)',marginTop:'30px'}}>
                  <span style={{color:'gray',fontSize:'larger'}}>02</span>
                  . Searching Game</p>
                <SearchCard/>
            </div>
        </div>
        </>
     );
}
 
export default Card1;