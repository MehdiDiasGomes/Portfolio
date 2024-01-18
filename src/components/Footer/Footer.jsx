import './footer.css'
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <>
            <div className="footer">
                <div className="container">

                    <div className="text">
                        <div className="titre">
                            <h2>Mon <span>portfolio</span></h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et saepe, cum eius doloremque architecto quisquam.</p>
                        </div>
                        <div className="social">
                            <Link to="https://www.linkedin.com/in/mehdi-dias-gomes-056654239?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDkBK6c%2BHQVuWyoMAmnBX%2Bw%3D%3D">
                                <i className="ri-linkedin-box-fill"></i>
                            </Link>
                            <Link to="https://github.com/MehdiDiasGomes">
                                <i className="ri-github-fill"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="lien">
                        <Link to={`mailto:diasgomes.mehdicours@gmail.com`}>
                            <i className="ri-mail-line"></i>
                            <h6>diasgomes.mehdicours@gmail.com</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
