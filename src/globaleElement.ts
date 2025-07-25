import camelCase from "lodash.camelcase"
  
const getCustomElementConstructor=(connected:(element:HTMLElement,props:object)=>void,disconnected:((element:HTMLElement)=>void)|null)=> {
    
    class GlobalElement extends HTMLElement{

        constructor() {
            
            super();
          }

        connectedCallback() {
            
            const map=new Map()

            for (const element of this.attributes) {
                map.set(camelCase(element.name),element.value)
            }

            const template=this.querySelector('template')

            if(template) {
              //Get template content
              const content=template?.content.textContent?.trim()

              //Parse json
              const parseContent=content?JSON.parse(content):' '

              map.set('data',parseContent)
            }
            
            const props=Object.fromEntries(map)
            
            connected(this,props)

        }

        disconnectedCallBack() {

            if(disconnected) {
                disconnected(this)
            }
            
        }

    
    }
    
    return GlobalElement

 }


 export default getCustomElementConstructor
