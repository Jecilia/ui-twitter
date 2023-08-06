import { FormEvent, useState, KeyboardEvent } from "react"
import Header from "../Components/Header"
import Separator from "../Components/Separator"
import Tweet from "../Components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export default function Status(){
  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
  'Concordo',
  'Parabéns',
  'Sucesso'
  ])


  function createNewAnswers(event: FormEvent){
   event.preventDefault() 

   setAnswers([newAnswers, ...answers])
  setNewAnswers('')
  }
  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' &&(event.ctrlKey || event.metaKey)){
      setAnswers([newAnswers, ...answers])
  setNewAnswers('')
    }
  }
  return(
    <main className="status">
        <Header title="Tweet"/>
      
        <Tweet content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, accusamus ad, quisquam temporibus suscipit aliquam dolores error mollitia praesentium eligendi beatae! Eveniet accusantium laboriosam consequuntur unde sapiente dignissimos id facilis?"/>
        <Separator/>
        <form onSubmit={createNewAnswers} className="answer-tweet-form">
        <label htmlFor="answer">
         <img src="https://github.com/Jecilia.png" alt="Jecilia Teixeira"/> 
         <textarea id="answer"
        placeholder="Tweet your answer" 
        onKeyDown={handleHotkeySubmit}
         value={newAnswers}
         onChange={(event)=> setNewAnswers(event.target.value)}
         />
        </label>
        <button type="submit">
          <PaperPlaneRight/> 
          <span>Answer</span></button> 
        </form>
        
      
      {answers.map(answer =>{
        return <Tweet key={answer} content={answer}/>
      })}

      </main> 
  )
}