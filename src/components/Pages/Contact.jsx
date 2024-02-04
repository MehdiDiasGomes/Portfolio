import "../Styles/contact.css"
import { Link } from "react-router-dom"

import Fade from 'react-reveal/Fade';

export default function Contact() {

    const Texte = "À la recherche d'un développeur ? Un projet en tête ou une question à poser ? N'hésitez pas à me contacter !"

    return (
        <>
            <Fade left>
                <div className="contact">
                    <div className="contact-container">

                        <div className="parag">

                            <div className="titre">
                                <h2>Me contacter</h2>
                                <p>{Texte}</p>
                            </div>

                            <div className="social">
                                <Link to={`mailto:diasgomes.mehdicours@gmail.com`}><i className="ri-mail-fill"></i> diasgomes.mehdicours@gmail.com</Link>
                                <Link to={`tel:+33789626927`}><i className="ri-phone-fill"></i> +33 7 89 62 69 27</Link>
                            </div>
                        </div>

                        <div className="input">

                            <div className="ligne l1">
                                <div className="sligne">
                                    <label>Prénom</label>
                                    <input type="text" />
                                </div>
                                <div className="sligne">
                                    <label>Nom de famille</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div className="ligne l2">
                                <div className="sligne">
                                    <label>E-mail <span>{`(obligatoire)`}</span> </label>
                                    <input type="text" id="mail" />
                                </div>
                            </div>

                            <div className="ligne l3">
                                <div className="sligne">
                                    <label>Message <span>{`(obligatoire)`}</span> </label>
                                    <textarea id="textArea"></textarea>
                                </div>
                            </div>

                            <div className="ligne l4">
                                <button>Envoyer</button>
                            </div>

                        </div>

                    </div>
                </div>
            </Fade>

        </>
    )

}
