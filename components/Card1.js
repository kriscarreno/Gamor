import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { useState,useEffect } from 'react';
import SearchCard from './SearchCard';
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
    return ( 
        <div className={styles.card1}>
            <div className={styles.container}>
                <div>
               <p className={styles.anuncio}> start <br/> <span style={{color:'var(--anuncio)'}}>streaming</span> <br/> games <br/> differently</p>
                </div>
                <div>
                    <p>gamer now has a streaming party platform</p>
                </div>
                {loggedIn===true?<div className={styles.btn_container}>
                <a className={styles.btn}><button>Join to discord</button></a> 
                   <a className={styles.btn}><button>start streaming</button></a>
                </div>:<div className={styles.btn_container}>
                <a className={styles.btn}><button>Create account</button></a> 
                   <a className={styles.btn}><button>Sign In</button></a>
                </div>}
                
            
            </div>
            <div className={styles.container} style={{backgroundColor:'var(--primary-color)'}}>
                <h2 style={{textAlign:'center', color:'white'}}>Fornite Streaming Session</h2>
                <h4 style={{textAlign:'center',color:'gray'}}>Join Live Stream</h4>
                <div className={styles.btn_container}>
                   <a className={styles.btn}><button style={{backgroundColor:'white',color:'black'}}>11:45</button></a>
                </div>
                
            {/* <Image src={'/starlord-removebg-preview.png'} alt='avatar' width={'150'} height={'250'} layout='responsive'/> */}
            <div className={styles.image}></div>
            </div>
            <div className={styles.container}>
                <p style={{color:'var(--text)',marginTop:'50px'}}><spam style={{color:'gray'}}>01</spam>. Choose Platform</p>
                <div className={styles.selector}>
                    <button>Party</button>
                    <button>Stream</button>
                    <button>Friends</button>
                </div>
                <p style={{color:'var(--text)',marginTop:'50px'}}><spam style={{color:'gray'}}>02</spam>. Searching Game</p>
                <SearchCard/>
            </div>
        </div>
     );
}
 
export default Card1;