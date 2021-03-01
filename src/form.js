
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import React from 'react';
import Form from 'react-bootstrap/Form'
import { StyledButtonsave, StyledButtonSub} from './global';


class Formcontent extends React.Component {

    render() {
        return (
            <Row>
                <Col sm={12}>
                    <Form>
                        <Form.Group controlId="formGroupName">

                            <Form.Control placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">

                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                    </Form>

                </Col>
                <br />
                <Col sm={12}>
                    <div className="float-right">
                        <StyledButtonsave>Save</StyledButtonsave>{' '}
                        <StyledButtonSub>Submit</StyledButtonSub>{' '}</div>

                </Col>
            </Row>

        );
    }

}

export default Formcontent;