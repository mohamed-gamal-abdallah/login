// ======================== var signin inputs =================

var EMAIL=document.getElementById("EMAIL")
var password=document.getElementById("PASSWORD")

// ======================== buttons =================

var login=document.getElementById("login")
var logout=document.getElementById("logout")

// ======================== database =================

var content=document.getElementsByClassName("content")



// ------------------------------------------------------------ login function------------------------------------------------------------


login.addEventListener("click",function(){

    for (let i = 0; i < database.length; i++) {
        if(EMAIL.value==database[i].email && password.value==database[i].password){
            content[0].classList.add("d-none")
            document.getElementById("massageshowcontiner").classList.remove("d-none")
            document.getElementById("massageshow").innerHTML=` welcome ${database[i].name}`
            document.getElementById("errorshow").innerHTML=''
            EMAIL.value=""
            password.value=""

        }else if(EMAIL.value==database[i].email && password.value!==database[i].password){
            document.getElementById("errorshow").innerHTML=`wrong password`
        }
        else if(EMAIL.value!==database[i].email && password.value!==database[i].password){
            document.getElementById("errorshow").innerHTML="the username is not found"
                    }
    }

})


// ---------------------------------------------------------logout---------------------------------------------------------------

logout.addEventListener("click",function(){
    document.getElementById("massageshowcontiner").classList.add("d-none")
    content[0].classList.remove("d-none")
    document.getElementById("errorshow").innerHTML=''
})
