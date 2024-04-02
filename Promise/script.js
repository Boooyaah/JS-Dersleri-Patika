const getIt= () => {
    return new Promise((resolve,reject)=>{
        resolve("Başarılı Data")
        reject("Başarısız İstek")
    })
}


// getIt().then(data=> {
//     console.log("Başarılı",data)
// },error=>{
//     console.log("Başarısız",error)
// })

getIt().then(data=> {
    console.log("Başarılı",data)}
    
    ).catch(err=>{
        console.log("Başarısız",err)
    })