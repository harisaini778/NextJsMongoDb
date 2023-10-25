"use client"
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const AddNewMeetup = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [time, setTime] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = async () => {
        const url = 'http://localhost:3000/api/products';

        const data = {
            name: name,
            address: address,
            time: time,
            image: image,
            description: description
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            console.log(result);
            setAlertMessage('Meetup added successfully!');
            setName('');
            setAddress('');
            setTime('');
            setImage('');
            setDescription('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Container className="mt-5 p-5" style={{border:"2px solid black",borderRadius:"20px"}}>
            {alertMessage && <div className="alert alert-success">{alertMessage}</div>}
            <h2 className="mb-4">Add a New Meetup</h2>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="text" placeholder="Enter time" value={time} onChange={(e) => setTime(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formImage">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter image URL" value={image} onChange={(e) => setImage(e.target.value)} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>Add New Meetup</Button>
            </Form>
        </Container>
    );
};

export default AddNewMeetup;

