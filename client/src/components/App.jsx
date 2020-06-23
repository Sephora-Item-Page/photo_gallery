import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PhotoGallery = styled.div`
  outline: 1px dashed black;
  height: 412px;
  width: 300px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const ActivePhoto = styled.div`
  outline: 1px solid blue;
  height: 300px;
  width: 300px;
`;

const StaticText = styled.div`
  outline: 1px dashed purple;
  text-align: center;
  height: 12px;
  width: 300px;
  margin-top: 8px;
  margin-bottom: 24px;
  position: absolute;
  bottom: 13%;
`;

const Carousel = styled.div`
  outline: 1px dashed red;
  height: 68px;
  width: 252px;
  position: absolute;
  left: 8%;
  bottom: 0%;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      visiblePhotos: [],
      activeIndex: '',
      currentPicIdx: 0,
      carouselXCoord: 0,
      carouselLength: 0,
      moveForward: true,
      moveBack: false,
    };
    //bind functions here
    this.getItemPhotos = this.getItemPhotos.bind(this);

  }

  getItemPhotos() {
    axios.get('/items/212')
      .then((response) => {
        //console.log('this is the response data: ', response.data[0].highRes);
        var photoHRArr = response.data[0].highRes;
        this.setState({photos: photoHRArr, activeIndex: photoHRArr[0]})
      })
      .catch((error) => {
        console.log('Failed axios.get Client-Side: ', error);
      })
  }

  componentDidMount() {
    this.getItemPhotos();
  }


  render() {
    return (
      <div>
        <div>
          <h1>Hello from React</h1>
          <PhotoGallery>
            <ActivePhoto>Active Photo</ActivePhoto>
            <StaticText>Roll over or click image to zoom in</StaticText>
            <Carousel>Carousel</Carousel>
          </PhotoGallery>
        </div>
      </div>
    )
  }
}

export default App;