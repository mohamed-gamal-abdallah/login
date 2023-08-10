// ======================== var signup inputs=================

var usernamesignup=document.getElementById("USERNAME1")
var emailsignup=document.getElementById("EMAIL1")
var passwordsignup=document.getElementById("PASSWORD1")
var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// ======================== buttons =================


var signup=document.getElementById("SIGNUP")
var messagevaild=document.getElementById("messagevaild")

// ======================== database =================


var database=[]



if (localStorage.getItem("users") !== null) {
    database = JSON.parse(localStorage.getItem("users"));
} 

function add(){
    var user={
        name:usernamesignup.value,
        email:emailsignup.value,
        password:passwordsignup.value
    }
    database.push(user)
    localStorage.setItem("users",JSON.stringify(database))
    usernamesignup.value=""
    emailsignup.value=""
    passwordsignup.value=""
    messagevaild.innerHTML=""
}


function vaild(){
    if(regex.test(emailsignup.value)===true){
        return true
    }else if(regex.test(emailsignup.value)===false){
        return false
    }
}


var matchname=false

function match(){
if(database.length===0){
    matchname=false

}else {
    for(var i=0;i<database.length;i++){
        if(database[i].email===emailsignup.value ){
            matchname=true
            
        }

    }
        
    }
}
    


    

signup.addEventListener("click",function(){
    match()
    vaild()
        if(vaild()===true && matchname===false){
            add()
            database = JSON.parse(localStorage.getItem("users"));
            messagevaild.innerHTML="success"
            messagevaild.classList.remove("text-danger")
            messagevaild.classList.add("text-success")

        }else if(vaild()===false){
            messagevaild.innerHTML="the email you enterd is not vaild try (ex:m@yahoo.com)"
            messagevaild.classList.remove("text-success")
            messagevaild.classList.add("text-danger")
            console.log("hiuhih")
        }else if(vaild()===true && matchname===true){
            messagevaild.innerHTML="the email you enter is excited"
            messagevaild.classList.remove("text-success")
            messagevaild.classList.add("text-danger")
            matchname=false

            
        }        
    }
)