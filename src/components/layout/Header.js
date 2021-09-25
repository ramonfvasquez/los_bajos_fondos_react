import '../../styles/components/layout/Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={require('../../images/fotos/autor/maxim-gorki001.jpg').default} alt='' />
            <div className='header-title'>
                <h1>Los Bajos Fondos</h1>
                <h5>de Maxim Gorki</h5>
            </div>
        </div>
    );
};

export default Header;
