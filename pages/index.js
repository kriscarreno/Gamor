import Layout from "@/components/layout"
import styles from "../styles/Home.module.css"
import Card1 from "@/components/Card1"
import Categories from "@/components/Categories";

export default function Home() {
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
    <>
    <Layout>
      <div className={styles.cardcontainer}>
      <label className="switch" >
        <input type="checkbox" id="theme-toggle"/>
        <span className="slider round"></span>
        </label>
        <p style={{color:'var(--text)'}}>Toggle Theme</p>
        <Card1  />
        <Categories/>
      </div>
    </Layout>
     
    </>
  )
}
