
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import React from 'react';



class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data1: this.props.data1,
            data2: this.props.data2,
        }
      }

    render (){
        return (
            <Row>
             <Col sm={6}>{this.state.data1}</Col>
              <Col sm={6}>{this.state.data2}</Col>
            </Row>
        );
    }
    
}

export default Content;