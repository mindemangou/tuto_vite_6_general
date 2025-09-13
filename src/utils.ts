import getCustomElementConstructor from "./globaleElement.ts"


const  registerCustomElement=(tagName:string, ClassRef:CustomElementConstructor)=>{
    if (!customElements.get(tagName)) {
      customElements.define(tagName, ClassRef);
    }
  }
 


export const define=(name:string,connected:(element:HTMLElement,props:object)=>void,disconnected:((element:HTMLElement)=>void)|null=null)=> {
    
    registerCustomElement(name,getCustomElementConstructor(connected,disconnected)) 
}


