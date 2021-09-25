import '../styles/components/pages/ContactoPage.css';
import NavButton from '../components/layout/NavButton';
import TextArea from '../components/layout/TextArea';
import TextInput from '../components/layout/TextInput';

const ContactoPage = () => {
    return (
        <div className='section-container'>
            <form className='contacto-form'>
                <TextInput labelText='Nombre' name='nombre' placeholder='Maxim Gorki' />
                <br />
                <TextInput labelText='Mail' name='mail' placeholder='maxim.gorki@losbajosfondos.ru' />
                <br />
                <TextArea labelText='Mensaje' name='mensaje' placeholder='Algún pasaje de la obra' />
                <br />
                <NavButton text='Enviar' className='send-btn' />
            </form>
        </div>
    );
};

export default ContactoPage;
