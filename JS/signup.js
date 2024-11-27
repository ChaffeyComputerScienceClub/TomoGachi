const signInButton=document.getElementById("signInButton");
const signOutButton=document.getElementById("signOutButton");

const nextpg=document.getElementById("nextpg");

const message=document.getElementById("message");
const userName=document.getElementById("userName");
signOutButton.style.display="none";
message.style.display="none";

const userSignIn=async()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        const user=result.user
    }).catch((error)=>{
        const errorCode=error.errorCode
        const errorMessage=error.message
    })
}

const userSignOut=async()=>{
    signOut(auth).then(()=>{
        alert("You have signed out successfully!")
    })
}

onAuthStateChanged(auth, (user)=>{
    if(user){
    signOutButton.style.display="block";
    message.style.display="block";
    userName.innerHTML=user.displayName;
    }else{
    signOutButton.style.display="none";
    message.style.display="none";
    }
})

function CreateUser(){
set(ref(db, user.displayName),{
    UserName: user.displayName
}).catch((error)=>{

})
}

function NextPage(){
window.location.href = "mainPage.html";
}
signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);
nextpg.addEventListener('click', NextPage);