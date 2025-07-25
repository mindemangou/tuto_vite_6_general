import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { define } from './utils'
import './index.css'
import { createRoot } from 'react-dom/client'
import { Header } from './Header'

function App({name}:any) {
  const [count, setCount] = useState(0)

  const [newname,setNewName]=useState(name)

  useEffect(()=> {
    const element=document.querySelector('essai-essai')
    element?.setAttribute('name','gaut gaut gaut')
   console.log(element?.getAttribute('name')) 
  })

  const click=()=> {
      setNewName('test')
  }
  return (
    <>
    <p onClick={click} >{newname}</p>
    <Header />
    <form action="/okok" method='POST'>
      <input type="submit" name="" id="" />
      <button>click me</button>
    </form>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" /> 
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

define(
  'essai-essai',
  (element:HTMLElement,props)=> {
  createRoot(element).render(<App {...props} />)

  }
)

/* define(
  'header-header',
  (element:HTMLElement)=> {
    createRoot(element).render(<Header />)

  }
)
 */
