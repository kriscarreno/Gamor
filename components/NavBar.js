import styles from '../styles/NavBar.module.css';
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';

export default function Navbar() {
  const router=useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Comprueba si hay un usuario en el local storage
    if (typeof window !== 'undefined' && localStorage.getItem('user')) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const logout=()=>{
    localStorage.setItem('user','')
    router.push('/login')
  }


  return (
    <header className={styles.headercontainer} >
      <nav className={styles.header}>
        <ul className={styles.links}>
        <li><a style={{position:'relative'}} href='/' className={router.pathname == '/' ? styles.current : ''}><span className={styles.circulo}></span>Home</a></li>
        <li><a href='/streams' className={router.pathname == '/streams' ? styles.current : ''}>Streams</a></li>
        <li><a href='/party' className={router.pathname == '/party' ? styles.current : ''}>Party</a></li>
        <li><a href='/premium' className={router.pathname == '/premium' ? styles.current : ''}>Premium</a></li>
        </ul>
      </nav>
        <h1 className={styles.title}>Gamor</h1>
    <div className={styles.btncontainer} >
      {loggedIn===true?<><a className={styles.btn}><button style={{backgroundColor:'#f0f2f400',border:'none'}} onClick={logout}>Log out</button></a>
      <a className={styles.btn}>
        <button style={{color:'var(--text_btn2)',border:'1px solid var(--message)'}}>
          Profile</button>
          </a>
      </>:
      <>
      <a className={styles.btn}>
        <button 
        style={{backgroundColor:'#f0f2f400',border:'none'}} 
        onClick={()=>router.push('/login')}
        >Sign In</button>
        </a>
      <a className={styles.btn}>
        <button style={{color:'var(--text_btn2)',border:'1px solid white'}}
        >Create account</button></a>
      </>
            }
    </div>
            </header>
   
  );
}
