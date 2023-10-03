 import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css'
import { useState } from 'react';
 const Login = () => {
    const[form,setDataForm]=useState(
        {
            name:'',
            password:''
        });
    const handleInputChange=(event)=>{
        const{name,value}=event.target;
        setDataForm((prevFormData)=>({
            ...prevFormData,
            [name]:value
        }))
    };
    const router=useRouter();

      const handleSubmit=(event)=>{
            event.preventDefault();
            if(form.name==='kristian'){
                if(form.password==='1234'){
                    window.localStorage.setItem('user',{name:form.name,password:form.password})
                    router.push('/')
                }
            }
          };

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
        <div className={styles.title}>
                <h1>Sign IN</h1>
            </div>       
        <div className={styles.containerform}>
            <div className={styles.left}></div>
            <div className={styles.right}>
                <div className={styles.form}>
                    <form id='myForm' onSubmit={handleSubmit}>
                        <p>Username</p>
                        <input onChange={handleInputChange} value={form.name}  type='text' name='name' placeholder='Online'></input>
                        <p>Password</p>
                        <input onChange={handleInputChange} value={form.password} type='Password'  name='password' placeholder='******'></input>
                        <button type='submit' >Sign In</button>
                        <a>Toggle Theme</a>
                        <label className="switch" >
                    <input type="checkbox" id="theme-toggle"/>
                    <span className="slider round"></span>
                    </label>
                    </form>
                </div>
            </div>
            
        </div>
        </>
     );
}
 
export default Login;