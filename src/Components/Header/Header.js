

import React, { useState } from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';
import './Header.css';
const Header = (props) => {
    console.log(props.data)
    const { title, urlToImage, description } = props.data;
    const [open, setOpen] = useState(false);
    // const data = props.data;

    return (
      
            
            <div className="floating col-lg-3 col-md-6  col-sm-12">
                    <Card  className="card-height mx-auto m-3 shadowBox rounded bordered" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={urlToImage} width="120px" height="160px"/>
                        <Card.Body>
                            <Card.Title className="font-styling">{title}</Card.Title>
                            <Card.Text>
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>
                                    More
                                </Button>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                        {description}
                                    </div>
                                </Collapse>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
         

    );
};

export default Header;