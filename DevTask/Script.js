var account = document.querySelector("#createaccount");
var register = document.getElementById("register");
var codeblock1 = document.querySelector(".codeblock01");
var codeblock2 = document.querySelector(".codeblock02");
var codeblock3 = document.querySelector(".codeblock03");
var codeblock4 = document.querySelector(".codeblock04");
account.addEventListener("click",()=>{

    codeblock1.classList.add("active01");
    codeblock3.classList.add("active03");

})

register.addEventListener("click",()=>{
    codeblock1.classList.add("active01");
    codeblock2.classList.add("active02");
})


document.getElementById("registerbtn").addEventListener("click",function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cmpname = document.getElementById("cmpname").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users.find(function(u){
        return u.name===name;
    })

    if(user)
    {
        alert("User name already registered !!!");
    }
    else{
        users.push({name : name , password : password, phone : phone, email : email, cmpname: cmpname});
        localStorage.setItem("users",JSON.stringify(users));
        alert("registration Successful !!!")
    }
    }
);

var imgdetails = document.querySelector(".imgdetails"); 

document.querySelector("#loginbtn").addEventListener("click",function(event){
    event.preventDefault();
    var email = document.getElementById("email02").value;
    var password = document.getElementById("password02").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users.find(function(u){
        return u.email===email && u.password===password;
    })

    if(user)
    {
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        p1.innerHTML=`${user.name}`;
        p2.innerHTML=`${user.email}`;
        p1.classList.add("username");
        p2.classList.add("useremail");
        imgdetails.appendChild(p1);
        imgdetails.appendChild(p2);
        alert("login succesful !!!");
        codeblock4.classList.add("active04");
        codeblock2.classList.remove("active02");
        codeblock1.classList.add("active01");
    }
    else
    {
        alert("Invalid Email or Password");
    }
})
