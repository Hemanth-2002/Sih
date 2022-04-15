import React from 'react';
import './Home.css'
import {Card} from 'react-bootstrap'
import Navbar from '../Navbar/Navbar.js';

const Home = () => {
    const cardInfo = [
        {text:" Committee members"},
        {text:" Add members"},
        {text:" Schedule meet"},
        {text:" Event review"},
        {text:" Update profile "},
    ];
    console.log("hi");
    const renderCard = (card, index) => {
        
            return(            
            <>
            
            <Card style={{ width: "28rem" }} key={index} className="box">
            <Card.Img variant="top"  src={card.img} />
            <Card.Body>
                
                <div className='card-content'>
                    <div className='card-title'>
                        <h3>{card.time}</h3>
                    </div>
                    <div className='card-body'>
                        {card.text}
                    </div>
                </div>
                
            </Card.Body>
            </Card>
            </>
        );
    };

    return <><Navbar /> 
    <div className="grid">{cardInfo.map(renderCard)}</div>
    </> ;
}
    


export default Home;