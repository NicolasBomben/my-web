import React from 'react';
import '../styles/aboutMe.css';

const AboutMe = () => {
  return (
    <section className="about">
        <div className="about-container">
            <h1 className="about-primary-title">Sobre mí.</h1>
            <h2 className="about-secondary-title">Hola! Soy Nicolas, FullStack Developer actualmente orientado al Frontend.</h2>
            <p className="about-text">Comencé a estudiar programación en 2019 realizando cursos en los cuales fui adquiriendo diferentes habilidades que hoy en dia me pocisionan en un perfil completo para el desarrollo web. </p>
            <button className="about-btn">
            Descargar Cv
            </button>
        </div>
        
    </section>
  )
}

export default AboutMe;