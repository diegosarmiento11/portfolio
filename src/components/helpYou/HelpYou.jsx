import React from 'react';
import Button from '../button/Button';
import Title from '../../components/title/Title';
import './_helpYou.scss';

function HelpYou(props) {
    return (
        <div>
            <Title
                name='So, ¿How can i help you?' 
                link="CONTACTMETARGET"  
            />
            <Button
                name='Send me an email'
                url="mailto:me@diegosarmiento.co"
            />
        </div>
    );
}

export default HelpYou;
