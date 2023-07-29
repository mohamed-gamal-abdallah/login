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
    // window.location='./index.html'
    messagevaild.innerHTML=""
}


function vaild(){
    if(regex.test(emailsignup.value)===true){
        return true
    }else if(regex.test(emailsignup.value)===false){
        return false
    }
}



function match(){
if(database.length===0){
    console.log("kkkkkkkkkkkkkkkkk6666k")
    return false
}else if(database.length!==0){
    for(var i=0;i<database.length;i++){
        console.log(i)
        if(database[i].email===emailsignup.value ){
            return false
            
        }else {
            return true
        }
    }
}
    }



    


















signup.addEventListener("click",function(){
    
    // vaild()
    // console.log(vaild())
    // console.log(match())
    // console.log(typeof vaild.value)
    // console.log(typeof match())
    
        if(vaild()===true && match()===true){
            add()
            database = JSON.parse(localStorage.getItem("users"));
            console.log(database)
        }else if(vaild()===false){
            messagevaild.innerHTML="the email you enterd is not vaild try (ex:m@yahoo.com)"
            console.log("kkkkkkkkkkkkkkkkkk")
        }else if(vaild()===true && match()===false){
            messagevaild.innerHTML="the email you enter is excited"
            console.log("hhhhhhhhhh")
        }

        
    }
)







// {
//     name:"mohamed",
//         email:"m@yahoo.com",
//         password:123
// },{
//     name:"ahmed",
//         email:"m1@yahoo.com",
//         password:123
// }


// for(var i=0;i<database.length;i++){
//     console.log(database[i].email)
    

// }
