import React from 'react';
import '../styles/aboutMe.css';
import gitHubIcon from '../assets/github-icon.png';
import linkedInIcon from '../assets/linkedin-icon.png';

const AboutMe = () => {
  return (
      <section className="about">
        <div className="about-container">
            <h1 className="about-primary-title">Sobre mí.</h1>
            <h2 className="about-secondary-title">Hola! Soy Nicolas, FullStack Developer actualmente orientado al Frontend.</h2>
            <p className="about-text">Comencé a estudiar programación en 2019 realizando cursos en los cuales fui adquiriendo diferentes habilidades que hoy en dia me pocisionan en un perfil completo para el desarrollo web. </p>
        </div>
        <div className="links-container">
        <button className="about-btn">
            Descargar Cv
        </button>
        <a href="https://github.com/NicolasBomben" target={"_blank"} rel="noreferrer">
          <img src={gitHubIcon} className="about-icon" alt="link to github"/>
        </a>
        <a href="https://www.linkedin.com/in/nicolas-bomben-a74992209/" target={"_blank"} rel="noreferrer">
          <img src={linkedInIcon} className="about-icon" alt="link to linkedin"/>
        </a>
        </div>
    </section>
  )
}

export default AboutMe;