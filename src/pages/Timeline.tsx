import { FormEvent, useState,KeyboardEvent } from "react"
import Header from "../Components/Header"
import Separator from "../Components/Separator"
import Tweet from "../Components/Tweet"
import "./Timeline.css"




export default function Timeline(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Acabei de migrar um projeto React GIGANTE de create-react-app para Vite.',
    'Acabei de migrar um projeto React GIGANTE de create-react-app para Vite.',
    'Acabei de migrar um projeto React GIGANTE de create-react-app para Vite.'
  ])


  function createNewTweet(event: FormEvent){
   event.preventDefault() 

   setTweets([newTweet,...tweets])
  setNewTweet('')
  }
  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' &&(event.ctrlKey || event.metaKey)){
      setTweets([newTweet,...tweets])
  setNewTweet('')
    }
  }
  return(
    <main className="time">
        <Header title="Home"/>
        
        <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
         <img src="https://github.com/Jecilia.png" alt="Jecilia Teixeira" /> 
         <textarea id="tweet" placeholder="what´s happening?"
         value={newTweet}
         onChange={(event) => {
          setNewTweet(event.target.value)
        }}
        onKeyDown={handleHotkeySubmit}
          />
        </label>
        <button type="submit"> Tweet</button>
        </form>
        <Separator/>
      
      {tweets.map(tweet =>{
        return <Tweet key={tweet} 
        content={tweet}/>
      })}

      </main> 
  )
}