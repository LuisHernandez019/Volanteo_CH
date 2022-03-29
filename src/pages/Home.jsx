import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';

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
      </div>
   );
};

export default Home;