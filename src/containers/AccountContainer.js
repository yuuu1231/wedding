import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
    color: #616161;
    font-family: "MaruBuri";
    font-weight: 400;
    text-align: center;
    padding-bottom: 5%;
`;
export default function AccountContainer() {
    return (
        <div>
            <StyledContainer>계좌번호</StyledContainer>
            계좌번호
        </div>
    );
}