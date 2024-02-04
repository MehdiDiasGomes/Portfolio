import "../../Styles/projet.css"
import { Link } from "react-router-dom";

import portfolioPic2 from "../../../assets/img/mockup/Devinette.png"
import portfolioPic1 from "../../../assets/img/mockup/Devinette-2.png"

import HTML from "../../../assets/img/logo/html.png"
import CSS from "../../../assets/img/logo/css.png"
import JS from "../../../assets/img/logo/js.png"

import FIGMA from "../../../assets/img/logo/figma.png"
import GIT from "../../../assets/img/logo/gitHub.png"
import VSCODE from "../../../assets/img/logo/vsCode.png"

import Fade from 'react-reveal/Fade';

export default function Portfolio() {

    return (
        <>
            <div className="portfolio">

                <div className="bigContainer">

                    <div className="container">

                        <Fade left >
                            <div className="titre">
                                <div className="link">
                                    <Link to="/"> <i className="ri-arrow-left-line"></i>RETOUR À ACCUEIL</Link>
                                </div>
                                <h2>Jeu de devinette en ligne</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia aliquid aliquam laboriosam dolorum minus nulla sequi porro quidem consequatur.</p>
                                <Link to="https://github.com/MehdiDiasGomes/Jeu-de-devinette" target="_blank" className="link-project">Voir le projet <i className="ri-github-line"></i></Link>
                            </div>
                        </Fade>

                        <div className="image">

                            <Fade left>
                                <img src={portfolioPic2} alt="portfolioPic2" />
                            </Fade>

                            <Fade left>
                                <img src={portfolioPic1} alt="portfolioPic2" />
                            </Fade>

                        </div>

                        <div className="outils">

                            <Fade left>
                                <div className="titre">
                                    <h3>Outils utilisés</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, beatae quas.</p>
                                </div>
                            </Fade>

                            <div className="logo">

                                <Fade left>
                                    <div className="langages">

                                        <div className="titre">
                                            <h4>Langages</h4>
                                        </div>

                                        <div className="img">
                                            <img src={HTML} alt="HTML pic" />
                                            <img src={CSS} alt="CSS pic" />
                                            <img src={JS} alt="JS pic" />
                                        </div>

                                    </div>
                                </Fade>

                                <div className="logiciels">

                                    <Fade left>
                                        <div className="langages">

                                            <div className="titre">
                                                <h4>Logiciels</h4>
                                            </div>

                                            <div className="img">
                                                <img src={FIGMA} alt="HTML pic" />
                                                <img src={GIT} alt="CSS pic" />
                                                <img src={VSCODE} alt="JS pic" />
                                            </div>

                                        </div>
                                    </Fade>
                                </div>

                            </div>
                        </div>

                        <div className="caroussel">
                            <div className="precedent">
                                <Link to="/portfolio"><i className="ri-skip-back-fill"></i> Projet precedent</Link>
                            </div>
                            <div className="suivant">
                                <Link to="/todolist">Projet suivant <i className="ri-skip-forward-fill"></i></Link>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    )
}
