import { Link } from 'react-router-dom';
import '../../styles/components/layout/Nav.css';
import NavButton from './NavButton';

const Nav = () => {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <NavButton text='La Obra' className='first-btn' />
            </Link>
            <Link to='/autor'>
                <NavButton text='El Autor' />
            </Link>
            <Link to='/elenco'>
                <NavButton text='Elenco' />
            </Link>
            <Link to='/fotos'>
                <NavButton text='Fotos' />
            </Link>
            <Link to='/contacto'>
                <NavButton text='Contacto' className='last-btn' />
            </Link>
        </div>
    );
};

export default Nav;
