import React from 'react';
import { render } from 'react-dom';
import Newsticker from '../../lib';
import './styles.css';

const Demo = () => {
  const news = [
    'Hello World!',
    'Nice to meet you.',
    'Happy hour :)'
  ];

  return (
    <div>
      <h1>Newsticker Demo</h1>
      <Newsticker news={news}>Wow what a button</Newsticker>
    </div>
  );
}

render(<Demo />, document.getElementById('app'));