import { useState } from 'react';
import Comments from "./Comments"

function Display({video}) {

const [ isHidden, setIsHidden ] = useState(false)
const [upvotes, setUpvotes] = useState(video.upvotes);
const [downvotes, setDownvotes] = useState(video.downvotes);

const onVote = (e) => {
  const { name } = e.target;
  if (name === 'up') {
    setUpvotes(prev => prev + 1);
  } else if (name === 'down') {
    setDownvotes(prev => prev - 1);
  }
};

    return (
    <>
        <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <p>
      <button name="up" onClick={onVote}>{upvotes} 👍</button>
      <button name="down" onClick={onVote}>{downvotes} 👎</button>
      </p>
      <p>
      <button onClick={() => setIsHidden(!isHidden)}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
      </p>
      <hr />
      <>
      { isHidden ? "" :
     <Comments comments={video.comments}/>
      }
     </>

    </>
    )}

    export default Display

