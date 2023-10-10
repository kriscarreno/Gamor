import styles from '../styles/Categories.module.css'
import { categories } from '@/data/categories';
import {BiSolidRightArrowAlt} from 'react-icons/bi'

const Categories = () => {
    return ( 
        <div className={styles.categories}>
        <h1 style={{color:'var(--text)'}}>Trending Categories</h1>
        <div className={styles.categoriescontainer}>
        {
            categories.map(Categorie=>
                <div key={Categorie.title} className={styles.categorie} style={{backgroundImage:Categorie.image,backgroundSize:'cover',backgroundPosition:'center'}}>
                    <p style={{color:`${Categorie.color}`,width:'100%'}}>/ 
                    <span style={{color:'var(--text)'}}> {Categorie.number}</span>
                    <br/>
                    <br/>
                    <span style={{color:'var(--text)'}}>{Categorie.title}<br/><BiSolidRightArrowAlt style={{marginTop:'10px'}} size={25}/></span>
                    </p>
                </div>
            )
        }
        </div>
        </div>
     );
}
 
export default Categories;