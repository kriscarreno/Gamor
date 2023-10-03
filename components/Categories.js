import styles from '../styles/Categories.module.css'
import { categories } from '@/data/categories';
const Categories = () => {
    return ( 
        <div className={styles.categories}>
        <h1 style={{color:'var(--text)'}}>Trending Categories</h1>
        <div className={styles.categoriescontainer}>
        {
            categories.map(Categorie=>
                <div className={styles.categorie} style={{backgroundImage:`url(${Categorie.image})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                    <p style={{color:`${Categorie.color}`}}>/</p>
                    <p style={{color:'var(--text)'}}>{Categorie.number}</p>
                    <p style={{color:'var(--text)'}}>{Categorie.title}</p>
                </div>
            )
        }
        </div>
        </div>
     );
}
 
export default Categories;