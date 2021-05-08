import React from 'react';
import Button from '../button/Button';
import Title from '../../components/title/Title';
import './_helpYou.scss';

function HelpYou(props) {
    return (
        <div>
            <Title
                name='So, ¿How can i help you?'    
            />
            <Button
                name='Get in touch'
            />
        </div>
    );
}

export default HelpYou;
