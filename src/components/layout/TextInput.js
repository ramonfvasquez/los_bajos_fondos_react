import '../../styles/components/layout/TextInput.css';

const TextInput = ({ labelText, name, placeholder, className }) => {
    return (
        <>
            <label htmlFor={name}>{labelText}</label>
            <br />
            <input type='text' name={name} id={name} className={`text ${className}`} placeholder={placeholder} required />
        </>           
    );
};

export default TextInput;