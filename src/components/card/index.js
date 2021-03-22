import { Div, H3, Img, Span,Button } from "./styles";

import {Link} from "react-router-dom"

import { BsFillPlusCircleFill } from "react-icons/bs";

import { FaCheckCircle } from "react-icons/fa";

import { useState } from "react";


const Card = ({CardImg,Name,id})=>{

    const [saved,setSaved] = useState(false)

    const AddFavorite = ()=>{
        const saveFav = localStorage.getItem("FavCharacters");

        if(!saveFav){
            const dataToFav = JSON.stringify([{CardImg,Name,id}])
            localStorage.setItem("FavCharacters",dataToFav)
        }else{
            const favorites = JSON.parse(saveFav)
            
            favorites.push({CardImg,Name,id})
            const newFavorites = JSON.stringify(favorites)
            localStorage.setItem("FavCharacters",newFavorites)
        }

        setSaved(!saved)
    }

    return (
            <Div>
                <Span onClick={AddFavorite}>{saved ?<FaCheckCircle color="black" fontSize="2em"/> :<BsFillPlusCircleFill color="black" fontSize="2em"/>}</Span>
                    
                <Img src={CardImg} alt="Card"/>
                <H3>{Name || "name"}</H3>
                
                <Link to={`/character/${id}`}>
                    <Button>See character</Button>
                </Link>
            </Div>
        
    )
}


export default Card