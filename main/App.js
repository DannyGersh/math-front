import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Card from './Card';
import NewCard from './NewCard';
import { data } from 'autoprefixer';


const DummyData= [
  {title: 'Godel', desc: 'mathematician who starved himself to death',},
       {title: 'Cantor', desc: 'mathematician who spent his life in a metal house',} ,
];
const HeaderDummyData= [{title: 'Crazy mathematicians', desc: 'mathematicians who lost it',}];

function App() {
  const [cardData, setData] = useState(DummyData);
  const addCard= cardData => {
     setData((prevData) => {
      return [cardData, ...prevData];
     });
     console.log(cardData);

  }
  return (
    <div className='backroundDiv'>
        
        <Header title={HeaderDummyData[0].title} desc={HeaderDummyData[0].desc}/>
      
        <ul>
          
          <NewCard onAddCard={addCard}/>
          {cardData.map(function(data) {return (<Card title={data.title} desc={data.desc}/>)})}
          
         
        </ul>
     </div>
    
  );
}

export default App;
