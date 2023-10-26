import React, {useState} from "react";
import './NewCardForm.css';
const NewCardForm = (props) => {
    const [enterTitle,setEnterTitle] = useState('');
    const titleChanger =(event)=> {
         setEnterTitle(event.target.value);
    };
    const [enterDesc, setEnterDesc] = useState ("");
    const descChanger =(event)=> {
        setEnterDesc(event.target.value);
    }
    const sumbitHandler=(event)=>{
        event.preventDefault();
        const cardData={
            title: enterTitle,
            desc: enterDesc,
        };
        props.onSaveCardData(cardData);
        setEnterTitle("");
        setEnterDesc('');
    };

   
return (<form onSubmit={sumbitHandler}>
<div className="newCard2">
    <div className="newCard3">
        <label>title</label>
        <input type="text" value={enterTitle} onChange={titleChanger}/>
    </div>
    <div>
        <label>description</label>
        <input type="text" value={enterDesc} onChange={descChanger}/>
    </div>
</div>
<div>
    <button type='submit'>Add a card</button>
</div>
</form>
);};
export default NewCardForm;




