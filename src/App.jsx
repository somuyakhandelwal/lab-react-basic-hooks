import React, { useState } from 'react';
import './App.css';
import Comment from './components/Comment';
import Like from './components/Like';

function App() {
  const [likes, setLikes] = useState(0);
  const [isCommentVisible, IsCommentVisible] = useState(false);
  const [isContainerBlack, IsContainerBlack] = useState(true);

  const LikeClick = () => setLikes(likes + 1);

  const CommentClick = () => {
    IsCommentVisible(!isCommentVisible);
    alert('Comment button clicked');
  };
  const ToggleClick = () => IsContainerBlack(!isContainerBlack);
  return (
    <div className={`app ${isContainerBlack ? 'black' : 'grey'}`}>
      <div className="Container">
        <button className="ToggleBtn" onClick={ToggleClick}>
          Toggle
        </button>
      </div>
      <div >
        <Comment onCommentBtnClick={CommentClick} isCommentVisible={isCommentVisible} />
        <Like onLikeBtnClick={LikeClick} likes={likes} />
      </div>
    </div>
  );
}

export default App;