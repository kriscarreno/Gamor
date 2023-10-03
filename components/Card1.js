import styles from '../styles/Home.module.css'
import Image from 'next/image';
const Card1 = ({imageSrc}) => {
    return ( 
        <div className={styles.card1}>
            <div className={styles.container}>
                <div>
               <p className={styles.anuncio}> start <br/> <span style={{color:'var(--anuncio)'}}>streaming</span> <br/> games <br/> differently</p>
                </div>
                <div>
                    <p>gamer now has a streaming party platform</p>
                </div>
                <div className={styles.btn_container}>
                <a className={styles.btn}><button>Create account</button></a> 
                   <a className={styles.btn}><button>Sign In</button></a>
                </div>
            
            </div>
            <div className={styles.container} style={{backgroundColor:'var(--primary-color)'}}>
                <h2 style={{textAlign:'center', color:'white'}}>Fornite Streaming Session</h2>
                <h4 style={{textAlign:'center',color:'gray'}}>Join Live Stream</h4>
                <div className={styles.btn_container}>
                   <a className={styles.btn}><button style={{backgroundColor:'white',color:'black'}}>11:45</button></a>
                </div>
                
            <Image src={'/starlord-removebg-preview.png'} width={'150'} height={'250'} layout='responsive'/>
            </div>
            <div className={styles.container}>
                <p style={{color:'var(--text)',marginTop:'50px'}}><spam style={{color:'gray'}}>01</spam>. Choose Platform</p>
                <div className={styles.selector}>
                    <a>1</a>
                    <a>2</a>
                    <a>3</a>
                </div>
            </div>
        </div>
     );
}
 
export default Card1;