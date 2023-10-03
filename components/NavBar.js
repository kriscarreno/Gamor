import Link from 'next/link';
import styles from '../styles/NavBar.module.css';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router=useRouter();

  return (
    <header className={styles.header}>

         <nav >
        <ul className={styles.links}>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>Streams</a></li>
          <li><a href='/'>Party</a></li>
          <li><a href='/'>Premium</a></li>
        </ul>
      </nav> 

      <div className={styles.title}>
        <h1>Gamor</h1>
      </div>

      <a className={styles.btn}><button onClick={()=>router.push('/login')}>Sign In</button></a>
      <a className={styles.btn}><button>Create account</button></a>
     

    </header>
  );
}
