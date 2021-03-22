import { useEffect,useState } from "react";

import {H1,H2,H3,Img,Div,Stats } from "./styles";

import { IoIosArrowDropleftCircle } from 'react-icons/io';

import {Link,useParams} from "react-router-dom"


function Character() {
    const {id} = useParams();
    const [CharacterData,setCharacterData] = useState({})
    const [loaded,setLoaded] = useState(false)
    
    
    useEffect(()=>{
        
        const FetchingData = async ()=> {
            const data = await fetch(`https://www.superheroapi.com/api.php/2789327074652475/${id}`)
            const res = await data.json();   
            setCharacterData(res)
            setLoaded(true)
        }
      FetchingData()
    },[])
    
  return (
    <>
      <Link to={"/"}>
               <IoIosArrowDropleftCircle color="#fff" fontSize="2.6em" title="Back"/>
      </Link>
      {loaded ?       
            <>
              <H1>{CharacterData.name}</H1>
            <Div>
              <Stats>
                <H2>POWER STATS</H2>
                <H3>COMBAT: {CharacterData.powerstats.combat}</H3>
                <H3>DURABILITY: {CharacterData.powerstats.durability}</H3>
                <H3>INTELLIGENCE: {CharacterData.powerstats.intelligence}</H3>
                <H3>PAWER: {CharacterData.powerstats.power}</H3>
                <H3>SPEED: {CharacterData.powerstats.speed}</H3>
                <H3>STRENGTH: {CharacterData.powerstats.strength}</H3>  
              </Stats>
              <Img src={CharacterData.image.url} alt="character" />
            </Div>  
            </>
            : <H1>Loading...</H1>}
            
    </>
  );
}


export default Character
