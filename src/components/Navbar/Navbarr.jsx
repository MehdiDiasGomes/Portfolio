import "./navbar.css";
import picProfile from "../../assets/img/pic-profile.png"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


export default function navbar() {

    return (
        <>
            <nav className="navbar">
                <div className="titre_page">
                    <Link to="/">
                        <img src={picProfile} alt="Image de profil" />
                        <div className="text">
                            <h2>Mehdi DIAS GOMES</h2>
                            <h3>Dévloppeur fullstack</h3>
                        </div>
                    </Link>
                </div>
                <div className="nav-links">
                    <div className="home">
                        <ul>

                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <i className="ri-home-line"></i>Accueil
                            </NavLink>

                            <NavLink
                                to="/parcours"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <i className="ri-compass-3-line"></i>Parcours
                            </NavLink>


                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <i className="ri-user-line"></i>Qui suis-je ?
                            </NavLink>


                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <i className="ri-phone-line"></i>Contact
                            </NavLink>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
