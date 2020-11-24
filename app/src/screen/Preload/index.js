import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

import { useNavigation } from '@react-navigation/native';

import Corona from '../../assets/account.svg';
import { UserContext } from '../../contexts/UserContext';

export default () => {
    const{ dispath: userDispath} = useContext(UserContext);
    const navigation = useNavigation(); 

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token !== null){
                let res = await Api.checkToken(token);
                if(res.token){
                 /*   await AsyncStorage.setItem('token', json.token);

                    userDispath({
                        type: 'setAvatar',
                        payload:{
                            avatar: json.data.avatar
                        }
                    });
                    navigation.reset({
                        routes:[{'MainTab'}]
                    }); */
                } else{
                    alert('email ou password errados!!!')
                }
            } else {
                navigation.navigate('MainTab');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <Corona width='100%'/>
            <LoadingIcon size='large' color="red"/>
        </Container>
    );
}
    
