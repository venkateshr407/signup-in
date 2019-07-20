import React, { Component }  from 'react';
import  theImage from './accesspic.jpg';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Button } from  'reactstrap';
import { bgGreen } from 'ansi-colors';

class PeopleCard extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            
      <element className= "strapcard">
          <Card className="strapcard">
          <div className= "img_card"><CardImg src={theImage} className="img_card"/>
        <CardBody>
          <CardTitle><h2>Access - 2019</h2></CardTitle>
          <CardSubtitle>Session for Web technology</CardSubtitle>
          <CardText>Skill Devlopment program for CSE and EC Students</CardText>
          <Button>Okay</Button> 
    
        </CardBody>
     
      </div>
    </Card> </element>
          
        );
    }
}
export default PeopleCard;