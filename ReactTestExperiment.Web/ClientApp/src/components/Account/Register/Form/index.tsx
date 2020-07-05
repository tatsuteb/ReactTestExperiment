import React, { PropsWithChildren, Children, ReactNode, FormEvent } from 'react';
import style from './Form.module.scss';

interface Props {
    submitButton: ReactNode;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = (props: PropsWithChildren<Props>) => {
    return (
        <form className={style['form']}
            onSubmit={props.onSubmit}>
            {Children.map(props.children, child => {
                return (
                    <div className={style['form__group']}>{child}</div>
                );
            })}
            {props.submitButton
                ? <div className={style['form__submit']}>{props.submitButton}</div>
                : null}
        </form>
    );
};

export default Form;