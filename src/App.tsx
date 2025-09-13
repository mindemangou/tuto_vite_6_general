import { use } from 'react'
import { createRoot } from 'react-dom/client'
import  {renderToString} from 'react-dom/server'


const Home=()=>{

    return <h1>HOME <slot onClick={()=>console.log('click')} style={{color:'rebeccapurple'}}>  NOT FOUND</slot> </h1>
}

createRoot(document.querySelector('#root')).render(<Home/>)

console.log(renderToString(<Home/>))