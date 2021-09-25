import '../../styles/components/layout/NavButton.css';

const NavButton = ({ text, onClick, className }) => {
    return (
        <div className='nav-btn'>
            <button onClick={onClick} className={className}>{text}</button>
        </div>
    );
};

export default NavButton;
