import LogoTitle from '../../../src/assets/images/logo-s.png';
import './index.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi,<br/>I'm
                <img src={LogoTitle} alt="developer" />
                Lobodan
                <br/>
                Web developer
                </h1>
                <h2>Frontend Developer / JavaScript Expert / Youtuber</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;