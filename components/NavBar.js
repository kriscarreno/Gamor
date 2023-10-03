import Link from 'next/link';
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
    <nav className={styles.header}>
         <h1>Gamor</h1>
         
        <ul className={styles.links}>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Streams</a></li>
          <li><a href='/'>Party</a></li>
          <li><a href='/'>Premium</a></li>
        </ul>

        

      <div >
      {loggedIn===true?<a className={styles.btn}><button onClick={logout}>Log out</button></a>:
      <>
            <a className={styles.btn}><button onClick={()=>router.push('/login')}>Sign In</button></a>
            <a className={styles.btn}><button>Create account</button></a></>
            }
            </div>

    </nav>
  );
}
