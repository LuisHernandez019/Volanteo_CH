import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import volanteo from '../assets/img/servicios/volanteo.jpg';
import mochila_display from '../assets/img/servicios/mochila_display.png';
import activaciones from '../assets/img/servicios/activaciones.jpg';
import bici_vallas from '../assets/img/servicios/bici_vallas.jpg';
import payasos from '../assets/img/servicios/payasos.jpg';
import posteo from '../assets/img/servicios/posteo.jpg';


const Services = () => {
   return (
      <div className='container text-center'>
         <div className="row">
            <div className="col flex-column mb-5">
               <Image
                  height={"300px"}
                  src={volanteo}
                  roundedCircle
               />
               <Button variant='outline-primary mt-3 fw-bold d-block' style={{"border-radius": "15px", margin: "0 auto"}}>Promocion de volanteo</Button>
            </div>
            <div className="col flex-column mb-5">
               <Image
                  height={"300px"}
                  src={mochila_display}
                  roundedCircle
               />
               <Button variant='outline-primary mt-3 fw-bold d-block' style={{"border-radius": "15px", margin: "0 auto"}}>Volanteo con renta mochila display</Button>
            </div>
         </div>
         <div className="row">
            <div className="col flex-column mb-5">
               <Image
                  height={"300px"}
                  src={activaciones}
                  roundedCircle
               />
               <Button variant='outline-primary mt-3 fw-bold d-block' style={{"border-radius": "15px", margin: "0 auto"}}>Activaciones para 2 días seguidos</Button>
            </div>
            <div className="col flex-column mb-5">
               <Image
                  height={"300px"}
                  src={bici_vallas}
                  roundedCircle
               />
               <Button variant='outline-primary mt-3 fw-bold d-block' style={{"border-radius": "15px", margin: "0 auto"}}>Bici vallas (3 servicios continuos)</Button>
            </div>
         </div>
         <div className="row">
            <div className="col flex-column mb-5">
               <Image
                  height={"300px"}
                  src={payasos}
                  roundedCircle
               />
               <Button variant='outline-primary mt-3 fw-bold d-block' style={{"border-radius": "15px", margin: "0 auto"}}>Botargas, payasitos, zanqueros</Button>
            </div>
            <div className="col flex-column">
               <Image
                  height={"300px"}
                  src={posteo}
                  roundedCircle
               />
               <Button variant='outline-primary mt-3 fw-bold d-block' style={{"border-radius": "15px", margin: "0 auto"}}>Servicios de posteo</Button>
            </div>
         </div>
      </div>
   )
}

export default Services;