import React from 'react';

function Like({ onLikeBtnClick, likes }) {
  return (
    <>
      <p style={{fontSize:'40px'}}>{likes}</p>
      <button  style={{ marginBottom: '20px', fontSize:'20px', paddingLeft:'15px',paddingRight:'15px' }}  onClick={onLikeBtnClick}>Like</button>
    </>
  );
}

export default Like;