import '../../styles/components/layout/Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>
                <a href='https://www.instagram.com'>
                    <img src={require('../../images/iconos/instagram.ico').default} alt='' />
                </a>
                <a href='https://www.facebook.com'>
                    <img src={require('../../images/iconos/facebook.ico').default} alt='' />
                </a>
                <a href='https://www.twitter.com'>
                    <img src={require('../../images/iconos/twitter.ico').default} alt='' />
                </a>
                <br />
                Sarasa - 2021
            </p>
        </footer>
    );
};

export default Footer;
