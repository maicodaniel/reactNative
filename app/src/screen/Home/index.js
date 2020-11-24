import React, { useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { Alert, Platform } from 'react-native';
import Api from '../../Api';


import { 
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    LocationArea,
    LocationFinder,
    LocationInput,
    LoadingIcon,
    ListArea
} from './styles';

import SearchIcon from '../../assets/search.svg'
import MyLocationIcon from '../../assets/my_location.svg'
import ListItem from '../../components/Item';

export default () => {

    const navigation = useNavigation();

    const[locationText, setLocationText] = useState('');

    const [coords, setCoords] = useState(null);

    const [loading, setLoading] = useState(false);

    const [list, setList] = useState([]);

    const handleLocationFinder = async () => {

        setCoords(null);
        let result = await request(
            Platform.OS === 'ios' ?
                PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                :
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if (result == 'granted') {

            setLoading(true);
            setLocationText('');
            setList([]);
            Geolocation.getCurrentPosition((info)=>{
                setCoords(info.coords);
                console.log(info)
                getItens();
            })
        }

    }
    const getItens = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getItens();
        if (res.error == '') {
            if (res.loc) {
                setLocationText(res.loc);
            }
            
            setList(res.data)
        } else {
            alert('Erro: ' +res.error);
        }

        setLoading(false);
    }

    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle>Home do aplicativo</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon/>
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder='Se ta onde corno?'
                        placeholderTextColor= '#FFFFFF'
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width='24' height='24'/>
                    </LocationFinder>
                </LocationArea>
                {loading && 
                <LoadingIcon size='large' color='#FFFFFF'/>
                }
                
                <ListArea>
                    {list.map((item, k)=>(
                        <ListItem key={k} data={item}/>
                    ))}
                </ListArea>

            </Scroller>
        </Container>
    )
}