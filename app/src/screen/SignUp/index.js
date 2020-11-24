import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Corona from '../../assets/account.svg';
import {
        Container,
        InputArea,
        CustomButton,
        CustomButtonText,
        SignMessageButton,
        SignMessageButtonText,
        SignMessageButtonTextBold
        } from './styles';

import SignInput from '../../components/SignInput';
import EmailIcon from '../../assets/email2.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/garoto.svg';


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField ] = useState('');
    const [passwordField, setPasswordField ] = useState('');
    const [nameField, setNameField ] = useState('');

    const handleSignClick = () => {

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    return (
        <Container>
            <Corona width='100%'/>
            <InputArea>

                <SignInput
                    IconSvg={PersonIcon}
                    placeholder='Digite seu nome'
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />  
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder='Digite seu email'
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder='Digite sua senha'
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />  

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ja cadastrado?</SignMessageButtonText>
                <SignMessageButtonTextBold>Logar</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}
    

