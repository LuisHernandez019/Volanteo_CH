import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Contact = () => {
   return (
      <div className="container">
         <h2 className='text-center fw-bold' style={{color:"#502064"}}>Contáctanos</h2>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Nombre</Form.Label>
               <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Correo electrónico</Form.Label>
               <Form.Control type="email" placeholder="example@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCellphone">
               <Form.Label>Teléfono</Form.Label>
               <Form.Control type="text" placeholder="Teléfono" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicMessage">
               <Form.Label>Mensaje</Form.Label>
               <Form.Control type="text" placeholder="Mensaje" />
            </Form.Group>

            <Button variant="primary" type="submit">
               Enviar
            </Button>
         </Form>
      </div>
   )
}

export default Contact;