import styled from "styled-components";
import colors from "../../colors";
export const ButtonContainer = styled.button`


font-size: 40px;
padding: 12px;
width:100%;
max-width: 85px;
margin: 6px;
align-items: center;
border-radius: 28px;


justify-content: center;
align-items: center;

border: 1px solid rgba(0, 0, 0, 0.00);

box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

cursor: pointer;

flex: 1;
color: ${(props) => props.color || "#FAFAFA"};
background: ${(props) => props.bgSpecial || colors.dark};
will-change: background;


  &:hover {

    background: ${(props) => props.hoverSpecial || '#101010'};




`;