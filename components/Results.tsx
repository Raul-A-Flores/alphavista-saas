"use client"


interface ResultProps{
  prompt: string,
  snippit: string,
  keywords: string[],
  backButton: any
}

const Results: React.FunctionComponent<ResultProps> = ({snippit, keywords, backButton, prompt}) => {
  return (
    <>
      <div>
        <div className="bg-slate-700 p-4 my-2 rounded-md gap-2">
          <h2>Your prompt: {prompt} </h2>
        </div>
        <div className="bg-slate-700 p-4 my-2 rounded-md">
          <div>
            <b>Branding Snippet:</b>
          </div>
          <div>
          <p>{snippit }</p> 
          </div>
        </div>
        <div>
          <div className="bg-slate-700 p-4 my-2 rounded-md mb-6">
            <div>
              <b>Keywords:</b>
            </div>
            <div>
              {keywords }
            </div>
          </div>
            <button
              className="bg-gradient-to-r from-teal-400 to-blue-500 disabled:opacity-50 w-full rounded-md p-2"
              type="button"
              onClick={backButton}>Back
            </button>
        </div>
      </div>
    
    </>
  )
}

export default Results