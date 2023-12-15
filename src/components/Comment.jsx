import React from "react";
import './ComponentStyle.css';


function Comment({ onCommentBtnClick, isCommentVisible }) {
  return (
    <div>
      <button className="CommentBtn" onClick={onCommentBtnClick}>Comment</button>
      {isCommentVisible && (<p style={{fontSize: '30px'}}> Unseen but palpable, the room harbored a clandestine secret, inviting discovery to those who dared to enter. In the midst of this covert atmosphere, a flicker of hope persisted, refusing to be overshadowed</p>
)}
    </div>
  );
}

export default Comment;