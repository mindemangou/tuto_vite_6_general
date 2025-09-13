import {define} from "@mindemangou/magiccomponents"



let startScrollPosition=window.scrollY

const header=document.querySelector('header')


const headerHeight=header.offsetHeight
    console.log( ((window.innerHeight+startScrollPosition)/document.body.offsetHeight ) * 100 )
window.addEventListener('scroll',()=>{
    
    const newScrollPosition=window.scrollY
    // if(newScrollPosition>startScrollPosition){
    //     header.style.setProperty('transform',`translateY(-${headerHeight}px)`)
    //     console.log('up')
    // }else {
    //     header.style.setProperty('transform',`translateY(0)`)
    //     console.log('down')
    // }

    startScrollPosition=newScrollPosition
})



// const res=await fetch('http://localhost:8000',{
//     signal:AbortSignal.timeout(3000)
// })

// const data=await res.json()
// console.log(data)

// define({tagname:'essai-essai',adaptater:'react'},({slots,element,props})=>{
//     console.log(slots,element,props)
// })