import './DisplayCategory.css'
import computadora from '../../assets/img/matebook-16s-list.jpg'
import celular from '../../assets/img/celular-motorola-moto-edge-30-fusion-256gb-12gb-ram-blanco-opalo-990025896.webp'
import reloj from '../../assets/img/554207579_183567630_1200x721.jpg'
import parlante from '../../assets/img/D_NQ_NP_986025-MLA46348216325_062021-V.jpg'
import { Link } from 'react-router-dom'

const DisplayCategory = () => {

    return (
        <div className="categoryGrid">
            <div>
                <span>computadoras de escritorio y notebooks</span>
                <Link to={'/category/Computadoras'}>Ver más</Link>
                <img src={computadora} alt="" />
            </div>
            <div>
                <span>celulares</span>
                <Link to={'/category/Celulares'}>Ver más</Link>
                <img src={celular} alt="" />
            </div>
            <div>
                <span>relojes inteligentes</span>
                <Link to={'/category/Relojes'}>Ver más</Link>
                <img src={reloj} alt="" />
            </div>
            <div>
                <span>parlantes</span>
                <Link to={'/category/Parlantes'}>Ver más</Link>
                <img src={parlante} alt="" />
            </div>
        </div>
    )
}

export default DisplayCategory
