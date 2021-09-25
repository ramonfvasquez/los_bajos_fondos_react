import '../../styles/components/layout/TextArea.css';

const TextArea = ({ labelText, name, placeholder, className }) => {
    return (
        <>
            <label htmlFor={name}>{labelText}</label>
            <br />
            <textarea name={name} id={name} className={`${className}`} placeholder={placeholder} required />
        </>           
    );
};

export default TextArea;