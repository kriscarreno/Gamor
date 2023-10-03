import styles from '../styles/Home.module.css'
import Navbar from './NavBar';
import Head from 'next/head';
const Layout = ({children}) => {
if(typeof window !=='undefined')
if(!window.localStorage.getItem('user')){
  window.localStorage.setItem('user','')
}
    return ( 
        <>
       <Head>
        <title>Gamor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main className={styles.main}>
         
        {children}
      </main>
        </>
     );
}
 
export default Layout;