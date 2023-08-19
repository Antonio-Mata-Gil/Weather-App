import {  useState } from "react"
import "../../styles/searcher.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searcher = ({Location}) =>{
    const [city, setcity] = useState();
    const onSubmit = (e)=>{
        e.preventDefault();
        if(city === "" || !city) ;
        Location(city)
    }
    return <div>
        <form className="form" onSubmit={onSubmit}>
            <div className="form-container">
                <input className="input-container" type="text" placeholder="Ciudad" onChange={(e)=> setcity(e.target.value)}/>
                <button className="button-container" type=" submit"> <FontAwesomeIcon icon={faSearch} /> </button>
            </div>
        </form>
    </div>
} 
export default Searcher