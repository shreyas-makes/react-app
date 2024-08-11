import { Fragment } from "react";

function ListGroup(){
    const items = ["New york", "Tokyo", "London", "Bangalore", "Chennai"];

    return(
            <>
                <h1>hello</h1>    
                <ul className="list-group">
                {items.map(item => (<li>{item}</li>))}
                </ul>
            </> 
) 
}

export default ListGroup;