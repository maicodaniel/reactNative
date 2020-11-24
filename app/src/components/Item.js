import React from 'react';
import styled from 'styled-components/native';


const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    flex-direction: row;
`;

const Avatar = styled.Image`
    width: 88px;
`;

const InfoArea = styled.View``;

const UserName = styled.Text``;

const SeeProfileButton = styled.View``;

const SeeProfileButtonText = styled.Text``;

export default ({data}) => {
    return (
        <Area>
            <Avatar/>
            <InfoArea>
                <UserName></UserName>

                <SeeProfileButton>
                    <SeeProfileButtonText>Profile</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    )

}