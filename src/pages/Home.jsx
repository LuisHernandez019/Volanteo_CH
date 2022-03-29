import React from 'react';
import Image from 'react-bootstrap/Image';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Services from '../components/Services';
import Contact from '../components/Contact';
import footer_image from '../assets/img/footer_image.jpg';
import wave from '../assets/img/wave.svg';

const Home = () => {
   return (
      <div>
         <Header />
         <div className='container' style={{color:"#502064"}}>
            <h2 className='text-center fw-bold mt-5'>Tu mejor opción está con nosotros.</h2>
            <p className='text-center mt-4 mb-5'>Incrementa tus ventas a un bajo costo y una excelente calidad adquiriendo cualquiera de nuestros servicios.</p>
         </div>
         <Slider />
         <div className='container' style={{color:"#502064"}}>
            <h2 className='text-center fw-bold mt-5'>¿Qué ofrecemos?</h2>
            <p className='text-center mt-4 mb-3'>Ofrecemos un equipo completo y profesional con seriedad y confianza en reparto publicitario concentrándonos en las zonas y puntos específicos que a usted más le convenga, alcanzando el perfil al que se desea llegar.</p>
            <p className='text-center mt-4 mb-5'>Brindamos asesoría especializada en análisis de mercado geográfico y estadístico, trámites de permisos en estado de México y realización de activaciones BTL en puntos específicos con modelos, Gios, botargas, Sampling, vallas móviles, edecanes o demostradores, volanteros, zanqueros, mimos para interacción, malabaristas, monociclo jirafa, belly dance, estatuas vivientes y un exclusivo show de batucada con tambor de agua para activaciones de noche.</p>
         </div>
         <Services />
         <div className="container" style={{color:"#502064"}}>
            <h2 className='text-center fw-bold mt-5'>Pregunta por promociones.</h2>
            <ul className='mt-4 mb-5'>
               <li>Volanteo profesional.</li>
               <li>Reparto de folletos, revistas, etc.</li>
               <li>Sampling.</li>
               <li>Activaciones.</li>
               <li>Alquiler de audio con micrófono.</li>
               <li>Sky Dancer.</li>
               <li>Carrito de palomitas con operador.</li>
               <li>Zanqueros.</li>
               <li>Mimo para interacción.</li>
               <li>Malabarista.</li>
               <li>Monociclo jirafa.</li>
               <li>Belly dance.</li>
               <li>Estatuas vivientes.</li>
               <li>Show de batucada con tambor de agua para activaciones de noche.</li>
            </ul>
         </div>
         <Image
            src={footer_image}
            className="mb-5"
            style={{width:"100%",}}
         />
         <Contact />
         <img src={wave} className="wave-bottom" alt="" />
      </div>
   );
};

export default Home;