import React from 'react';

const Helmet = (props) => {
  document.title = props.title + ' - Foodilicious';
  return <div className='w-100'>{props.children}</div>;
};

export default Helmet;
