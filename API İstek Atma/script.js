// const request =new XMLHttpRequest();

// request.addEventListener("readystatechange",()=>{
  
//       console.log(request.response)
   
//         console.log("Başarılı bir cevap alamadık.")

// })
// request.open("GET","https://jsonplaceholder.typicode.com/todos");
// request.send();

// const getData= (callback)=>{
// const request=new XMLHttpRequest();

// request.addEventListener("readystatechange",()=>{
//     if(request.readyState === 4 && request.status === 200){
//         callback(undefined,request.response);
       
//     }else if(request.readyState===4){
 // console.log("Başarılı bir cevap alamadık.")
//         callback("Başarılı bir giriş alamadık",undefined)
        
//     }

// })

// request.open("GET","https://jsonplaceholder.typicode.com/todos")
// request.send()
// }

// getData((err,data)=>{
// if(err){
//     console.log(err)
// }
// if(data){
//     console.log(data)
// }

// })

// const request= new XMLHttpRequest();


// request.addEventListener("readystatechange",()=>{
//     console.log(request.response)

// })

// request.open("GET","https://jsonplaceholder.typicode.com/todos")
// request.send()


const getData=(callback)