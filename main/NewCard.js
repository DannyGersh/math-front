import React from "react";
import "./NewCard.css";
import NewCardForm from "./NewCardForm";
const NewCard = (props) => {
    const saveDataHandler = (enteredData)=> {
        const cardData={
            ...enteredData,
            id: Math.random().toString()
        };
       console.log(cardData);
        props.onAddCard(cardData);
    };
    return (<div className="newCard1">
       <NewCardForm onSaveCardData={saveDataHandler}/>
    </div>

);};
export default NewCard;