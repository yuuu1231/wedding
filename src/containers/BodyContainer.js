import styled from "styled-components";

const Text = styled.div`
    color: #e3e3e3;
    font-size: 20;
    text-align: center;
    padding: 20em 10em;
    font-family: "Kotra";
`;

export default function BodyContainer() {
    return (
        <div>
            <Text>
                <div>결혼합니다 어쩌구 저쩌구</div>
                <div>결혼합니다 어쩌구 저쩌구</div>
                <div>결혼합니다 어쩌구 저쩌구</div>
            </Text>

        </div>
    );
}