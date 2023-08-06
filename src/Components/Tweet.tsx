import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './Tweet.css';
import { Link } from 'react-router-dom';

interface TweetProps{
  content: string;
}

export default function Tweet(props: TweetProps){
return(
    <Link to="/Status" className='tweet'>
    <img src="https://github.com/Jecilia.png" alt="Jecilia Teixeira" />

    <div className="tweet-content">
      <div className="tweet-content-header">
        <strong>Jecilia Teixeira</strong>
        <span>@jeciliaTeixeira</span>
      </div>
      <p>{props.content}</p>
<div className="tweet-content-footer">
  <button type='button'>
    <ChatCircle/>
    20
  </button>
  <button type='button'>
    <ArrowsClockwise/>
    20
  </button>
  <button type='button'>
    <Heart/>
    20
  </button>
</div>
    </div>

    </Link>
  )
}