import styled from 'styled-components';


export const StyledCell = styled.div`
 width: 80px;
 height: 20px;
 display: flex;
 justify-content: center;
 border: 1px solid black;


 &.header {
   background-color: #6600cc;
   color: white;
 }

 &.data {
   background-color: white;
   color: black;
 }

 &.Player {
   width: 200px;
 }
`;
