import React,
{
    FormEvent,
    PropsWithChildren,
    useState,
    FocusEvent
} from 'react';
import style from './Input.module.scss';

export type InputType = 'text' | 'password' | 'number';

interface Props {
    inputType?: InputType;
    defaultValue: string | number | readonly string[];
    placeholder: string;
    onInput: (value: string) => void;
}

const Input = (props: PropsWithChildren<Props>) => {
    const [hasValueOrFocus, setHasValueOrFocus] = useState(false);

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        props.onInput(value);
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        setHasValueOrFocus(true);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (e.currentTarget.value !== '') return;

        setHasValueOrFocus(false);
    };

    return (
        <div className={`${style['input']} ${hasValueOrFocus && style['input--has-value']}`}>
            <label className={style['input__label']}>
                <input type={props.inputType ?? 'text'}
                    className={style['input__label__field']}
                    defaultValue={props.defaultValue}
                    onInput={handleInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur} />
                <span className={style['input__label__placeholder']}>{props.placeholder}</span>
            </label>
            <div className={style['input__actions']}>
                {props.children}
            </div>
        </div>
    );
};

export default Input;