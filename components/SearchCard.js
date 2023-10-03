import { useState } from 'react';
import styles from '../styles/SearchCard.module.css'
import { games } from '@/data/games';
const SearchCard = () => {
    const [searchResult,setSearchResult]=useState([])
    const [term,setTerm]=useState('')
    const handleSearch=(event)=>{
        const value=event.target.value;
        setTerm(value);
        const results= games.filter((item)=>
        item.name.toLowerCase().includes(value.toLowerCase())||item.rank.toLowerCase().includes(value.toLowerCase()))
        setSearchResult(results)
    }
    return ( 
       <>
       <div className={styles.container}>
        <div className={styles.containersearchbar}>
            <input type='text' value={term} onChange={handleSearch} className={styles.searchbar}/>
        </div>
        <ul className={styles.games}>
            {searchResult.map(result=>
                <li className={styles.game} key={result.name}>
                <h5>{result.rank}: {result.name}</h5>
            </li>)}
        </ul>
       </div>
       </>
     );
}
 
export default SearchCard;