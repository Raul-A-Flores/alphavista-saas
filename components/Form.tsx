"use client"


interface FormProps{
  prompt: string,
  setPrompt: any,
  submitHandler: any,
  characterLimit: number;
}

const Form: React.FunctionComponent<FormProps> = ({submitHandler, prompt, characterLimit, setPrompt}) => {
  


  const isPromptValid = prompt.length < characterLimit;
  const updatePromptValue = (text: string) =>{
    setPrompt(text)
  }

  let statusColor = 'text-slate-500'
  let statusText = null;

  if (!isPromptValid){
    statusColor = 'text-red-400';
    statusText = `Input must be less than ${characterLimit} characters`
  }

  return (
    <>
      <div className="mb-6 text-slate-400">
        <h1 >Start up your business today!</h1>
      </div>
      <div>
        <input 
        className="p-2 w-full rounded-md focus:outline-teal-400 text-slate-700"
        type='text' 
        placeholder='Enter your brand'
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
        ></input>
        <div className="flex justify-between my-2 text-slate-300 mb-6">
          <div>This is a status</div>
          <div>{prompt.length}/32</div>
        </div>
      </div>
      <div>
        <button
            className="bg-gradient-to-r from-teal-400 to-blue-500 disabled:opacity-50 w-full rounded-md p-2"
            onClick={submitHandler}
            >Submit
        </button>
      </div>


    </>
  )
}

export default Form