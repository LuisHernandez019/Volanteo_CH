import React from 'react';
import logo from '../assets/img/logo.png';
import '../styles/Header.css';

const Header = () => {
   const handleToggle = () => {
	   var menuToggle = document.querySelector('.toggle');
      var navigation = document.querySelector('.navigation');

      menuToggle.classList.toggle('active')
      navigation.classList.toggle('active')
	}

   return (
      <header>
         <a href="/"><img src={logo} className="logo" alt="logo" /></a>
         <h1>RodaPublicidad</h1>
         <div className="toggle" onClick={handleToggle}></div>
         <ul className="navigation">
            <li><a href="https://www.volanteodf.com.mx/">Inicio</a></li>
            <li><a href="https://www.volanteodf.com.mx/servicios.php">Servicios</a></li>
            <li><a href="https://www.volanteodf.com.mx/empresa.php">Empresa</a></li>
         </ul>
      </header>
   );
}

export default Header;