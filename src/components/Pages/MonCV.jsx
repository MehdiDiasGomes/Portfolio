import "../Styles/monCV.css";
import { Link } from "react-router-dom";
import picProfile from "../../assets/img/pic-profile.png";
import docCV from "../../assets/doc/CV_Mehdi_DIAS_GOMES.pdf"

export default function MonCV() {
    return (
        <>
            <section className="top-cv">
                <div className="img-title">
                    <img src={picProfile} alt="Photo de profil" />
                </div>             
                <div className="txt-title">
                    <h1>DIAS GOMES Mehdi</h1>
                    <h2>Apprenti développeur fullstack</h2>
                </div>
                <div className="info-title">
                    <h4><i className="ri-cake-2-line"></i> 23 décembre 2003</h4>
                    <h4><i className="ri-car-line"></i> Permis B</h4>
                    <h4><i className="ri-map-pin-line"></i> Uckange, France (57)</h4>
                </div>
                <div className="social-title">
                    <Link href="https://www.linkedin.com/in/mehdi-dias-gomes-056654239?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7v6sCNWiSVqUIB7jH83vGg%3D%3D"
                        target="_blank"><i className="ri-linkedin-fill"></i></Link>
                    <Link href="https://github.com/MehdiDiasGomes" target="_blank"><i className="ri-github-fill"></i></Link>
                </div>
            </section>

            <section className="middle-cv">
                <section className="about-cv">
                    <div className="container">
                        <h1>À propos</h1>
                        <h3>{`Passionné par le développement (logiciel et web) et l'informatique, je suis à la recherche d'une
                            entreprise qui serait ouverte à m'accueillir en tant qu'alternant développeur full stack pour
                            développer mes compétences en développement web et également préparer mon BAC+3. Je suis déterminé à
                            mettre en pratique mes connaissances et à contribuer au succès de l'entreprise tout en continuant
                            mon parcours académique.`}</h3>
                    </div>
                </section>

                <section className="contact-cv">
                    <div className="container">
                        <h1>Contact</h1>
                        <h3><i className="ri-mail-line"></i> diasgomes.mehdi270@gmail.com</h3>
                        <h3><i className="ri-smartphone-line"></i> +33 7 89 62 69 27</h3>
                        <h3></h3>
                    </div>
                </section>
            </section>

            <section className="bottom-cv">

                <section className="experience-pro">
                    <div className="container">

                        <div className="title">
                            <h1>Experiences professionnelles</h1>
                        </div>

                        <div className="content">
                            <h2>Informaticien / 2023</h2>
                            <h3>Collège Jean-Moulin <span>Uckange, France (57)</span></h3>
                        </div>
                        <div className="content-2">
                            <h4><i className="ri-circle-fill"></i> Maintenance systèmes informatiques</h4>
                            <h4><i className="ri-circle-fill"></i> Gestion des équipements informatiques</h4>
                        </div>


                        <div className="content">
                            <h2>Stage informatique / 2022</h2>
                            <h3>Mairie <span>Uckange, France (57)</span></h3>
                        </div>
                        <div className="content-2">
                            <h4><i className="ri-circle-fill"></i> Gestion du matériel informatique</h4>
                            <h4><i className="ri-circle-fill"></i> Installation de répéteur WI-FI</h4>
                            <h4><i className="ri-circle-fill"></i> {`Configuration d'une box fibre SFR`}</h4>
                        </div>


                        <div className="content">
                            <h2>Stage informatique / 2021</h2>
                            <h3>LDLC <span>Thionville, France (57)</span></h3>
                        </div>
                        <div className="content-2">
                            <h4><i className="ri-circle-fill"></i> Gestion du matériel informatique</h4>
                            <h4><i className="ri-circle-fill"></i> {`Montages d'ordinateurs`}</h4>
                            <h4><i className="ri-circle-fill"></i> {`Dépannages d'ordinateurs`}</h4>
                        </div>
                    </div>
                </section>

                <section className="experience-pro">
                    <div className="container">

                        <div className="title">
                            <h1>Formations</h1>
                        </div>
                        <div className="content">
                            <h2>BTS / 2021-2023</h2>
                            <h3>LPO La Briquerie <span>Thionville, France (57)</span></h3>
                        </div>
                        <div className="content-2">
                            <h4><i className="ri-circle-fill"></i> Développement informatique</h4>
                            <h4><i className="ri-circle-fill"></i> Base de données</h4>
                            <h4><i className="ri-circle-fill"></i> {`Système d'exploitation`} (Windows / Linux)</h4>
                            <h4><i className="ri-circle-fill"></i> Réseau</h4>
                        </div>

                        <div className="content">
                            <h2>BAC / 2018-2021</h2>
                            <h3>LPO La Briquerie <span>Thionville, France (57)</span></h3>
                        </div>
                        <div className="content-2">
                            <h4><i className="ri-circle-fill"></i> Informatique</h4>
                            <h4><i className="ri-circle-fill"></i> Électroménager</h4>
                            <h4><i className="ri-circle-fill"></i> {`Système d'exploitation`} (Windows / Linux)</h4>
                            <h4><i className="ri-circle-fill"></i> Réseau</h4>
                        </div>
                    </div>
                </section>

                <div className="open-cv">
                    <Link className="ouvrir-cv" to={docCV} target="_blank">📃 Ouvrir CV</Link>
                </div>

            </section>
        </>
    )
}
