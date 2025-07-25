
const currentDate=new Date()
      currentDate.setDate(currentDate.getDate()+1)


//const cookies=await cookieStore.set({name:'john',value:'doe',expires:currentDate.getTime()})

//const getCookie=await cookieStore.getAll()

const deleteCookie=await cookieStore.delete('john')
console.log(deleteCookie)