const form=document.querySelector(".signupForm")
// const username=document.querySelector("#username")

// formUp.addEventListener("submit",e=>{
//     e.preventDefault()
//     console.log(username.value)
// })


const username="mertki";

const pattern=/^[a-z]{6,10}$/;

form.addEventListener("submit",e=>{
    e.preventDefault()
    const username=form.username.value;
    const usernamePattern=/^[a-z]{6,10}$/;

    if(usernamePattern.test(username)==false){
        var message=document.querySelector(".message")
        message.innerHTML=(`Lütfen <strong>6 ile 10 karakter</strong> arasında ve <span class="text-danger" style="font-weight:900;">sadece küçük harflerden </span> oluşan bir değer giriniz.`)
    }else{
        var message=document.querySelector(".message")
    message.innerHTML=(`<span  style="color:green; font-weight:700; padding-bottom:10px;"> Giriş Başarılı </span>`)

    }
})