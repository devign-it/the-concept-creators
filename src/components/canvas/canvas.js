import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Star, Text, Image } from 'react-konva';
import useImage from 'use-image';

// the first very simple and recommended way:
const LionImage = (props) => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return (
    <Image
      x={Math.random() * window.innerWidth}
      y={Math.random() * window.innerHeight}
      draggable
      image={image}
      rotation={Math.random() * 180}
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
    this.setState({
      isDragging: true,
    });
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
    this.setState({
      isDragging: false,
    });
    e.target.to({
      duration: 0.5,
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
            // <Star
            //   key={number.toString()}
            //   x={Math.random() * window.innerWidth}
            //   y={Math.random() * window.innerHeight}
            //   numPoints={3}
            //   innerRadius={20}
            //   outerRadius={40}
            //   fill={this.state.isDragging ? '#0000ed' : 'black'}
            //   opacity={0.8}
            //   draggable
            //   rotation={Math.random() * 180}
            //   shadowColor="rgba(0, 0, 0, 0.2)"
            //   shadowBlur={20}
            //   shadowOpacity={0.6}
            //   onDragStart={this.handleDragStart}
            //   onDragEnd={this.handleDragEnd}
            // />
            <LionImage key={number.toString()} />
          ))}
        </Layer>
      </Stage>
    );
  }
}
