import React from 'react';
import { text, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import '../../src/index.css';
import Input, { InputType } from '../../src/components/Commons/Input/index';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';

export default { 
    title: 'Input',
};

export const Normal = () => (
    <div style={{ margin: '20px', width: '200px' }}>
        <Input inputType={object<InputType>('inputType: text, password, number', 'text')}
            defaultValue={text('defaultValue', '')}
            placeholder={text('placeholder', '入力してください')}
            onInput={action('onInput')} />
    </div>
);

export const WithActions = () => (
    <div style={{ margin: '20px', width: '200px' }}>
        <Input inputType={object<InputType>('inputType: text, password, number', 'text')}
            defaultValue={text('defaultValue', '')}
            placeholder={text('placeholder', '入力してください')}
            onInput={action('onInput')}>
            <CheckCircleOutline
                fontSize='large'
                style={{ color: '#5fd464' }} />
        </Input>
    </div>
);