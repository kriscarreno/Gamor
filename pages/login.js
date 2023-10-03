 import styles from '../styles/Login.module.css'
 const Login = () => {
    return ( 
        <div className={styles.containerform}>
            <form className={styles.form} action="/ruta-procesamiento" method="post">
            <div>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" />
            </div>
            <div>
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
            </form>
        </div>
     );
}
 
export default Login;