import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Circle, Text, Rect, Image } from 'react-konva';
import useImage from 'use-image';

// the first very simple and recommended way:
const StaticImage = props => {
  const [image] = useImage(
    'https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/02/14090819/3D-Gold-Star-PNG-File.png'
  );
  // const [image] = useImage('../../images/icon.png');

  return (
    <Image
      x={Math.random() * window.innerWidth}
      y={Math.random() * window.innerHeight}
      // width={Math.random() * window.innerHeight / 2}
      // height={Math.random() * window.innerHeight / 2}
      style={{width: window.innerWidth / 2,}}
      draggable
      image={image}
      rotation={Math.random() * 180 }
      shadowColor="rgba(0, 0, 0, 0.2)"
      shadowBlur={20}
      shadowOpacity={0.6}
    />
  );
};

export default class Canvas extends Component {
  state = {
    isDragging: false,
  };

  handleDragStart = e => {
    // console.log('dragStart state',this.state.isDragging)
    // this.setState({
    //   isDragging: true,
    // });
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15,
      },
      scaleX: 1.1,
      scaleY: 1.1,
    });
  };
  handleDragEnd = e => {
    // console.log('dragEnd state',this.state.isDragging)

    // this.setState({
    //   // isDragging: false,
    // });
    e.target.to({
      duration: 2000,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
    });
  };
  render() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {numbers.map(number => (
            <>
              {/* <Circle
                key={number.toString()}
                x={Math.random() * window.innerWidth}
                y={Math.random() * window.innerHeight}
                radius={50}
                fill={this.state.isDragging ? '#0000ed' : 'black'}
                opacity={0.8}
                draggable
                rotation={Math.random() * 10}
                shadowColor="rgba(0, 0, 0, 0.2)"
                shadowBlur={20}
                shadowOpacity={0.6}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
              /> */}
              {console.log('test', 'test')}
              <StaticImage key={number.toString()} />
            </>
          ))}
        </Layer>
      </Stage>
    );
  }
}
