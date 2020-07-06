import React from 'react';
import { boolean, text, object } from '@storybook/addon-knobs';
import '../../src/index.css';
import Button, { ButtonType } from '../../src/components/Commons/Button';

export default { 
    title: 'Button',
};

export const Normal = () => (
    <div style={{ margin: '20px', width: '200px' }}>
        <Button isDisabled={boolean('isDisabled', false)}
            buttonType={object<ButtonType>('buttonType: button, submit, reset', 'button')}
            buttonText={text('buttonText', 'ボタン')}
        />
    </div>
);