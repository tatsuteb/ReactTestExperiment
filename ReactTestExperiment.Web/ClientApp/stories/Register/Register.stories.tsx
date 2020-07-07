import React from 'react';
import '../../src/index.css';
import Register from '../../src/components/Account/Register/index';

export default { 
    title: 'Register',
};

export const Normal = () => (
    <div style={{ margin: '20px', width: '350px' }}>
        <Register />
    </div>
);