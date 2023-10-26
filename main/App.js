import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import Card from './Card';
import NewCard from './NewCard';


const DummyData= [{title: 'Crazy mathematicians', desc: 'mathematicians who lost it',},
  {title: 'Godel', desc: 'mathematician who starved himself to death',},
       {title: 'Cantor', desc: 'mathematician who spent his life in a metal house',} ,
];

function App() {
  const [cardData, setData] = useState(DummyData);
  const addCard= cardData => {
     setData((prevData) => {
      return [cardData, ...prevData];
     });

  }
  return (
    <div className='backroundDiv'>
        
        <Header title={DummyData[0].title} desc={DummyData[0].desc}/>
      
        <ul>
          
          <NewCard onAddCard={addCard}/>
          {/*<Card title={cardData.title} not sure how to make a newcard with entetred data/>*/}
          <Card title={DummyData[1].title} desc={DummyData[1].desc}/>
          
          <Card title={DummyData[2].title} desc={DummyData[2].desc}/>
         
        </ul>
     </div>
    
  );
}

export default App;
