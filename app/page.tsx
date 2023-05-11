'use client'
import { useState } from 'react'
import Form from '../components/Form'
import Results from '../components/Results';
import dotenv from 'dotenv'



export default function Home() {

  const [snippit, setSnippit] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [hasResults, sethasResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const CHARACTER_LIMIT: number = 32;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  const [prompt, setPrompt] = useState("")
  // console.log(prompt)

  
  const onResult = (data: any) =>{
    console.log(data)
    setSnippit(data.Snippit);
    setKeywords(data.Keywords);
    sethasResults(true)
    setIsLoading(false)
  }

 /*  console.log(snippit);
  console.log(keywords) */

  const subtmitHandler = () =>{
    console.log("submitted " + prompt)
    setIsLoading(true)

    fetch(
      `${BASE_URL}/generate_brand?prompt=${prompt}`
    )
    .then((res) => res.json())
    .then(onResult);
    console.log('Step 1')
  }

  const backButton = ()=>{
    setSnippit("");
    setKeywords([])
    sethasResults(false)
  }
  let displayedElement = null
  let resultsElement = null;

  /*  resultsElement = (
     <div>
       Here are you results:
       <div>Snippit: {snippit }</div>
       <div>Keywords: {keywords }</div>
     </div>
   ) */
  if (hasResults){

    displayedElement= (
      <Results snippit={snippit} keywords={keywords} backButton={backButton} prompt={prompt}/>
    )
  }
  else{
    displayedElement=(
      <Form prompt={prompt} setPrompt={setPrompt} submitHandler={subtmitHandler} characterLimit={CHARACTER_LIMIT}/>

    )
  }


const gradientTextStyle=
"text-white text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-light mx-auto"

  return (
    <div className='h-screen flex'>
      <div className='max-w-md m-auto p-2'>
        <div className='bg-gray-800 p-6 rounded-md text-white'>
          <div className='text-center my-6'>
            <h1 className={gradientTextStyle + ' text-3xl'}>AlphaVista</h1>
            <div className={gradientTextStyle}>Your Ai Branding Assistant</div>
          </div>
          {displayedElement}
        </div>
      </div>
    </div>
  )
}
