import { Component } from "react";
import {Form, Button, OverlayTrigger, Tooltip} from "react-bootstrap";

class Inputs extends Component{


    render(){

        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
              Allows teams to be sorted by skill
            </Tooltip>
          )
      

        const { type, placeholder, handleInput, title, stateName,} = this.props

        return(
            <>
                {type === "text" ? 
                    <Form.Group controlId="formName">
                        <Form.Label>{title}</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder={placeholder}
                            onChange={(e) => handleInput(e, `${stateName}`)}
                        />
                    </Form.Group>
                    :

                type === "select" ? 
                    <Form.Group>
                        <Form.Label>{title}</Form.Label>                    
                        <OverlayTrigger
                            placement="right"
                            delay={{show: 250, hide: 400}}
                            overlay={renderTooltip}
                        >
                        <Button variant="info" className={"mb-2"} >?</Button>
                        </OverlayTrigger>
                        <Form.Control
                            as="select"
                            onChange={(e) => handleInput(e, `${stateName}`)}
                        >
                            <option>1</option>
                            <option>2</option> 
                            <option>3</option>  
                        </Form.Control>
                    </Form.Group>
                    :

                    null
            }
            </>
        )
    }

}

export default Inputs;
