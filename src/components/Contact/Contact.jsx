import "./contact.css"
import { Link } from "react-router-dom";

export default function Contact() {

    const Texte = "À la recherche d'un développeur ? Un projet en tête ou une question à poser ? N'hésitez pas à me contacter !"

    return (
        <>
            <div className="contact">
                <div className="title">
                    <h2>Contact</h2>
                    <h3>{ Texte }</h3>
                </div>
                <div className="container">
                    <div className="info">
                        <div className="nom">
                            <h4>Mehdi <span>DIAS GOMES</span></h4>
                        </div>
                        <div className="coordonnees">
                            <Link to="https://maps.app.goo.gl/zv6A3NQ8mVZc9C586" className="lien" target="_blank"><i className="ri-map-pin-line"></i>Uckange (57), France</Link>
                            <Link to={`mailto:diasgomes.mehdicours@gmail.com`} className="lien" target="_blank"><i className="ri-mail-send-line"></i>diasgomes.mehdicours@gmail.com</Link>
                            <Link to={`tel:+33789626927`} className="lien" target="_blank"><i className="ri-smartphone-line"></i>+33 7 89 62 69 27</Link>
                        </div>
                    </div>

                    <form action="" className="formulaire">
                        <div className="titre">
                            <h2>Envoyer un message</h2>
                        </div>
                        <div className="input">
                            <div className="ligne1">
                                <input type="text" placeholder="Votre nom"/>
                                <input type="email" placeholder="votre@email.com"/>
                            </div>
                            <div className="ligne2">
                                <input type="text" placeholder="Objet du message"/>
                            </div>
                            <div className="ligne3">
                                <textarea name="" id="" placeholder="Votre message"></textarea>
                                <button>Soumettre</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
