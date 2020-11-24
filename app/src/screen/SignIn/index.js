import React, { useState, useContext } from 'react';
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
import Api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage'
import { UserContext } from '../../contexts/UserContext';

export default () => {

    const{ dispath: userDispath} = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField ] = useState('');
    const [passwordField, setPasswordField ] = useState('');

    const handleSignClick = () => {
     /*   if(emailField != '' && passwordField != ''){
            let json = await Api.signIn(emailField, passwordField);
            if(json.token){
                await AsyncStorage.setItem('token', json.token);

                userDispath({
                    type: 'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });
                navigation.reset({
                    routes:[{'MainTab'}]
                });
            } else{
                alert('email ou password errados!!!')
            }
        } else {
            alert('Erro ao preencher os campos!!!')
        }*/
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    return (
        <Container>
            <Corona width='100%' color='indigo'/>
            <InputArea>
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
                <SignMessageButtonText>So olha corno?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastrar</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}
    
