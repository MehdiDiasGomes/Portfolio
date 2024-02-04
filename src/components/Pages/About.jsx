import React from "react";
import "../Styles/about.css";
import cPlus from '../../assets/img/logo/cplus.png'
import cs from '../../assets/img/logo/cs.png'
import css from '../../assets/img/logo/css.png'
import html from '../../assets/img/logo/html.png'
import js from '../../assets/img/logo/js.png'
import reactPic from '../../assets/img/logo/react.png'
import sql from '../../assets/img/logo/sql.png'
import tailwind from '../../assets/img/logo/tailwind.png'
import php from '../../assets/img/logo/php.png'

import picProfile from "../../assets/img/pic-profile2.png";

import Fade from 'react-reveal/Fade';

export default function About() {
    const bio =
        "Je suis Mehdi DIAS GOMES, âgé de 20 ans, et je suis titulaire d'un BTS SNIR (Systèmes Numériques Informatiques & Réseaux). J'ai obtenu mon diplôme au LPO La Briquerie à Thionville. Passionné d'informatique et plus particulièrement de développement web depuis mon plus jeune âge, j'ai décidé de poursuivre mes études dans ce domaine afin d'approfondir mes connaissances en systèmes numériques, en informatique et en réseaux.";

    return (
        <>
            <div className="about">
                <div className="container">

                    <Fade left>
                        <div className="apropos">
                            <div className="logo">
                                <i className="ri-user-line"></i>
                            </div>
                            <div className="titre">
                                <h2>
                                    Qui <span>suis-je ?</span>
                                </h2>
                            </div>
                            <div className="aboutMe">
                                <div className="contenu">
                                    <img src={picProfile} alt="Photo à propos" />
                                </div>

                                <div className="text">
                                    <h3>Mehdi DIAS GOMES</h3>
                                    <p>{bio}</p>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade right >
                        <div className="skills">
                            <div className="logo">
                                <i className="ri-code-s-slash-line"></i>
                            </div>
                            <div className="titre">
                                <h2>
                                    Mes <span>compétences</span>
                                </h2>
                            </div>
                            <div className="my-skills">
                                <div className="colonne">
                                    <img src={html} alt="Html" />
                                    <img src={js} alt="JavaScript" />
                                    <img src={cPlus} alt="C++" />
                                </div>
                                <div className="colonne">
                                    <img src={reactPic} alt="React" />
                                    <img src={cs} alt="C#" />
                                    <img src={sql} alt="Sql" />
                                </div>
                                <div className="colonne">
                                    <img src={css} alt="Css" />
                                    <img src={tailwind} alt="Tailwind" />
                                    <img src={php} alt="Tailwind" />
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    );
}
