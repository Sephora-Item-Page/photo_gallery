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

const MainPhoto = (props) => {
  var photo;
  if (props.tempMainPhoto !== '') {
    var photo = props.tempMainPhoto;
  } else {
    var photo = props.mainPhoto;
  }
  return (
      <ActiveImage src={photo} onClick={props.openModal}/>
  )
}

export default MainPhoto;

