import React, { Component } from 'react';
import { Container,Row,Col } from 'reactstrap';
import PeopleCard from './PeopleCard';

class MainArea extends Component {
    constructor(){
        super();
    }
    render () {
        return (

         <Container fluid>
            <Row>
            <Col>
            <PeopleCard />
            </Col>
            </Row>
            </Container>
        )
    }
}
 export default MainArea;