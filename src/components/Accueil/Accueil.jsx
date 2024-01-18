import "./accueil.css";
import picProfile from "../../assets/img/pic-profile.png";
import { Typewriter } from 'react-simple-typewriter'
import { Link } from "react-router-dom";

import portfolioPic from "../../assets/img/mockup/Mockup_portfolio.png"
import devinette from "../../assets/img/mockup/devinette-mockup_1.png"
import meteoControl from "../../assets/img/mockup/mockup-meteo-control_1.png"
import toDoList from "../../assets/img/mockup/mockup-todolist_1.png"

import Fade from 'react-reveal/Fade';

export default function Accueil() {

    const text = "Passionné par le développement logiciel et web, je recherche une entreprise pour un poste d'alternant développeur full stack afin de développer mes compétences tout en préparant un diplôme BAC+3."

    return (
        <>
            <Fade left >
                <div className="accueil">
                    <div className="titre">
                        <div className="header">
                            <div className="title">
                                <h1>Mehdi <span>DIAS GOMES</span></h1>
                                <h3>
                                    Apprenti développeur {' '}
                                    <span>
                                        <Typewriter
                                            words={['Js', 'React.js', 'HTML', 'CSS']}
                                            loop={false}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h3>
                            </div>
                            <div className="desc">
                                <h2>Recherche alternance développeur web fullstack <span>(BAC+3)</span></h2>
                                <p> {text} </p>
                            </div>
                            <div className="btn">
                                <Link to="/about">A propos</Link>
                                <a href="#"><i className="ri-mail-open-line"></i>Contact</a>
                            </div>
                        </div>
                        <div className="img">
                            <img src={picProfile} alt="Image de profil" />
                        </div>
                    </div>

                </div>
            </Fade>

            {/* Projet */}

            <div className="projet">
                <div className="container">

                    <div className="ligne l1">
                        <Fade left>
                            <Link className="project pr1" to="portfolio" >
                                <img src={portfolioPic} alt="Mockup portfolio" />
                                <div className="text">
                                    <h3>Mon portfolio</h3>
                                    <p>Apprentissage - 2023</p>
                                </div>
                            </Link>
                        </Fade>

                        <Fade left>
                            <Link className="project pr2" to="todolist">
                                <img src={toDoList} alt="Mockup to do list" />
                                <div className="text">
                                    <h3>To do list en ligne</h3>
                                    <p>Apprentissage - 2023</p>
                                </div>
                            </Link>
                        </Fade>
                    </div>

                    <div className="ligne l2">
                        <Fade right>
                            <Link className="project pr3" to="devinette">
                                <img src={devinette} alt="Mockup devinette" />
                                <div className="text">
                                    <h3>Jeu de devinette en ligne</h3>
                                    <p>Apprentissage - 2023</p>
                                </div>
                            </Link>
                        </Fade>

                        <Fade right>
                            <Link className="project pr4">
                                <img src={meteoControl} alt="Mockup meteo control" />
                                <div className="text">
                                    <h3>Security Control</h3>
                                    <p>BTS - 2023</p>
                                </div>
                            </Link>
                        </Fade>
                    </div>

                </div>
            </div>

        </>
    );
}
