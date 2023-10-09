import { useState } from 'react';
import styles from '../styles/SearchCard.module.css'
import { games } from '@/data/games';
const SearchCard = () => {
    const [searchResult,setSearchResult]=useState(games)
    const [term,setTerm]=useState('')
    const handleChange=(event)=>{
        const value=event.target.value;
        setTerm(value);
    }
    const handleSearch=()=>{
        const results= games.filter((item)=>
        item.name.toLowerCase().includes(term.toLowerCase())||item.rank.toLowerCase().includes(term.toLowerCase()))
        setSearchResult(results)
    }
    return ( 
       <>
       <div className={styles.container}>
        {/* <div className={styles.containersearchbar}> */}
            <input type='text' value={term} onChange={handleChange}  className={styles.searchbar}/>
        <ul className={styles.games}>
            {searchResult.map(result=>
            (
                <li className={styles.game} key={result.name}>
                    <div className={styles.uno}>
                    <a><p>{result.friends}</p></a>
                    <p>{result.name}</p>
                    </div>
                    <div className={styles.dos}>
                    <a style={{backgroundColor:`${result.color1}`}}><img src={result.avatar} alt="avatar"/></a>
                    <a style={{backgroundColor:`${result.color2}`}}><img src={result.avatar} alt="avatar"/></a>
                    </div>
                    <div className={styles.tres}>
                    <button>+</button>
                    </div>
            </li>)
            
            )}
        </ul>
        <a><button onClick={handleSearch} className={styles.button}>Search now</button></a>
       </div>
       </>
     );
}
 
export default SearchCard;