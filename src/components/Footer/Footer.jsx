import { Link } from "react-router-dom"
import Categoria from "../NavBar/Categoria"
import './Footer.css'

const Footer = () => {

    const categorias = ['Celulares', 'Computadoras', 'Parlantes', 'Relojes']

    return (
        <footer>
            <div>
                <Link to={'/'}>TechShop</Link>
                <div>
                    <ul> {categorias.map(e => <Categoria categoria={e} />)} </ul>
                </div>
                <div>
                    <ul>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-whatsapp"></i></li>
                        <li><i class="fa-solid fa-envelope"></i></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer