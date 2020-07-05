import React from 'react';
import styles from './Button.module.scss';

export type ButtonType = 'button' | 'submit' | 'reset';

interface Props {
    isDisabled?: boolean;
    buttonType?: ButtonType;
    buttonText: string;
}

const Button = (props: Props) => {
    return (
        <button type={props.buttonType ?? 'button'}
            className={`${styles['button']} ${props.isDisabled && styles['button--disabled']}`}
            disabled={props.isDisabled}>
            {props.buttonText}
        </button>
    );
};

export default Button;