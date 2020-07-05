import React, { useState, MouseEvent, FormEvent, useEffect } from 'react';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import HighlightOff from '@material-ui/icons/HighlightOff';
import Input, { InputType } from './Input';
import Button from './Button';
import Form from './Form';
import style from './Register.module.scss';

const Register = () => {
    const [passwordInputType, setPasswordInputType] = useState<InputType>('password');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [nickName, setNickName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [nickNameValid, setNickNameValid] = useState<boolean | undefined>(undefined);
    const [userNameValid, setUserNameValid] = useState<boolean | undefined>(undefined);
    const [passwordValid, setPasswordValid] = useState<boolean | undefined>(undefined);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

    const submitButton = <Button isDisabled={submitButtonDisabled}
        buttonType='submit'
        buttonText='登録する' />;

    useEffect(() => {
        if (userNameValid &&
            nickNameValid &&
            passwordValid) {
                setSubmitButtonDisabled(false);
                return;
            }

        setSubmitButtonDisabled(true);
    }, [userNameValid, nickNameValid, passwordValid]);

    const handlePasswordDisplayButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (passwordVisible) {
            setPasswordInputType('password');
            setPasswordVisible(false);
            return;
        }

        setPasswordInputType('text');
        setPasswordVisible(true);
    };

    const handleNickNameInput = (value: string) => {
        setNickName(value);
        setNickNameValid(validateNickName(value));
    };

    const handleUserNameInput = (value: string) => {
        setUserName(value);
        setUserNameValid(validateUserName(value));
    };

    const handlePasswordInput = (value: string) => {
        setPassword(value);
        setPasswordValid(validatePassword(value));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('登録～！', nickName, userName, password);
        alert('登録～！');
    };

    const validateNickName = (value: string): boolean => {
        if (value.length < 3) {
            return false;
        }

        return true;
    };

    const validateUserName = (value: string): boolean => {
        if (value.length < 3) {
            return false;
        }

        return true;
    };

    const validatePassword = (value: string): boolean => {
        // 8文字以上
        // アルファベットと数字をそれぞれ1文字以上含む
        if (!value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm)) {
            return false;
        }

        return true;
    };

    return (
        <div className={style['register']}>
            <section className={style['container']}>
                <h2 className={style['title']}>Dummistagram</h2>
                <p className={style['sub-title']}>とりあえず登録しよう</p>

                <Form submitButton={submitButton}
                    onSubmit={handleSubmit}>
                    <Input inputType='text'
                        placeholder='ニックネーム'
                        defaultValue=''
                        onInput={handleNickNameInput}>
                        {nickNameValid === undefined
                            ? null
                            : nickNameValid
                                ? <CheckCircleOutline
                                    fontSize='large'
                                    style={{ color: '#5fd464' }} />
                                : <HighlightOff
                                    fontSize='large'
                                    color='secondary' />
                        }
                    </Input>

                    <Input inputType='text'
                        placeholder='ユーザーネーム'
                        defaultValue=''
                        onInput={handleUserNameInput}>
                        {userNameValid === undefined
                            ? null
                            : userNameValid
                                ? <CheckCircleOutline
                                    fontSize='large'
                                    style={{ color: '#5fd464' }} />
                                : <HighlightOff
                                    fontSize='large'
                                    color='secondary' />
                        }
                    </Input>

                    <Input inputType={passwordInputType}
                        placeholder='パスワード'
                        defaultValue=''
                        onInput={handlePasswordInput}>
                        {passwordValid === undefined
                            ? null
                            : passwordValid
                                ? <CheckCircleOutline
                                    fontSize='large'
                                    style={{ color: '#5fd464' }} />
                                : <HighlightOff
                                    fontSize='large'
                                    color='secondary' />
                        }
                        {password !== '' &&
                            <button className={style['password-display-button']}
                                onClick={handlePasswordDisplayButtonClick}>{passwordVisible ? '非表示にする' : '表示する'}</button>
                        }
                    </Input>
                </Form>
            </section>
        </div>
    );
};

export default Register;