import React ,{useState} from 'react'
import ReactMarkdown from 'react-markdown'
import './index.css'

const App = () => {
  const [markdown,setMarkdown] = useState("## marked Area ")
  return (<>
    <main>
      <section className='markdown'>
        <textarea className='input' value={markdown} onChange={(e)=>setMarkdown(e.target.value)} > </textarea>
        <article className='result'> 
        {markdown}
        <ReactMarkdown >{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
    
    </>
  )
}

export default App