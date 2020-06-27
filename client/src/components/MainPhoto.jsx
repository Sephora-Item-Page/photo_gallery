import React from 'react';
import styled from 'styled-components';


const ActiveImage = styled.img`
  height: 300px;
  width: 300px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  `;
  // margin: auto;


const MainPhoto = (props) => {
  var photo;
  if (props.tempMainPhoto !== '') {
    var photo = props.tempMainPhoto;
  } else {
    var photo = props.mainPhoto;
  }
  return (
    // <Container>
      <ActiveImage src={photo} onClick={props.openModal}/>
    // </Container>
  )
}

export default MainPhoto;

