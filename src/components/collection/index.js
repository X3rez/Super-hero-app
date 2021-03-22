import {Link} from "react-router-dom"

import { Div,Section} from "./styles";

import Card from "../card";



const Collection = ()=>{
    const LStorage = JSON.parse(localStorage.getItem("FavCharacters"))
    return (
        <>
           <Div><Link to="/">HOME</Link></Div>
           <Section>
                {LStorage ? LStorage.map(el=> <Card id={el.id} Name={el.Name} CardImg={el.CardImg}/>) : <h1>You haven't favorites</h1>}
           </Section>


        </>
        )
}


export default Collection