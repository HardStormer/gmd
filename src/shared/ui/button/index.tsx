import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

interface CommandLineButtonProps {
    label: string;
    onClick?: () => void;
    type?: string;
}

const Button: React.FC<CommandLineButtonProps> = ({ label, onClick , type = 'submit' }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        else {
            alert("Not implemented");
        }
    };

    return (
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
            {label}
        </button>
    );
};

export default Button;