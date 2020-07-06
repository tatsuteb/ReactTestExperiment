import React, { ReactNode } from 'react';
import { object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import '../../src/index.css';
import Form from '../../src/components/Commons/Form/index';
import Button from '../../src/components/Commons/Button/index';
import Input from '../../src/components/Commons/Input/index';

export default { 
    title: 'Form',
};

const submitButton = <Button isDisabled={false}
    buttonType='button'
    buttonText='投稿' />;

export const Normal = () => (
    <div style={{ margin: '20px', width: '350px' }}>
        <Form submitButton={object<ReactNode>('submitButton', submitButton)}
            onSubmit={action('onSubmit')}>
                <Input inputType='text'
                        placeholder='入力してください'
                        defaultValue=''
                        onInput={() => {}}>
                </Input>
                <Input inputType='password'
                        placeholder='入力してください'
                        defaultValue=''
                        onInput={() => {}}>
                </Input>
        </Form>
    </div>
);