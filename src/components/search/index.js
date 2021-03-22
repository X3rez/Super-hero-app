import { useState } from "react";

import { Input, Button,Form,Section,Div,H1} from "./styles";

import { Link} from "react-router-dom";

import Card from "../card";

import { IoSearchCircle } from "react-icons/io5";


const Search = ()=>{
    const [CharacterData,setCharacterData] = useState({})
    const [loading,setLoading] = useState(false)
    
    const FetchingData = async (e)=> {
        setLoading(true)
        e.preventDefault()
        const data = await fetch(`https://www.superheroapi.com/api.php/2789327074652475/search/${e.target[0].value}`)
        const res = await data.json();   
        setCharacterData(res)
        setLoading(false)
    }

    return (
        <>
           <Div><Link to="/myCollection">Collection</Link></Div>
            <Form onSubmit={FetchingData}>
                <Input type="text" placeholder="Find..."/>
                <Button>
                    <IoSearchCircle fontSize="3.4em" color="#fff"/>
                </Button> 
            </Form>
            <Section>
                {CharacterData.results && CharacterData.results.map(el=> <Card key={el.id} id={el.id} Name={el.name} CardImg={el.image.url}/>)}
                {loading && <H1>loading...</H1>}
            </Section>
        </>    
    )
}


export default Search