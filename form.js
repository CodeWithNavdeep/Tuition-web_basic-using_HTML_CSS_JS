let validEmail = false;
let formSubmition = document.getElementById(`formSubmition`);
const email = document.getElementById('email');
const textarea = document.getElementById("textarea"); 
const feed = document.getElementById('feed')
email.addEventListener('blur',()=>{
    // validate email here
 let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
let str = email.value;
if (regex.test(str)){
    email.classList.remove('is-invalid');
    feed.classList.add('invalid-feedback');
    validEmail = true;
}
else{
    email.classList.add('is-invalid');
    feed.classList.remove('invalid-feedback');
    validEmail = false;
}
});
let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
e.preventDefault();
//submit form here
if(validEmail)
    {
        console.log("valid info provided");
        fetch("https://jsonplaceholder.typicode.com/posts" ,{
            method: 'POST', 
            body: JSON.stringify({
                email_ID: email.value,
                content: textarea.value
            }),
            headers: {
                "Content-Type":"application/json"
            }
        }).then ((response) =>{
            return response.json();
        }).then((data)=>{
            console.log(data);
        })
        alert(`your form have been successfully submitted by the email_ID: ${email.value}`);
        localStorage.setItem(email.value,textarea.value);
        // formSubmition.innerHTML= `<h1>FORM HAVE BEEN SUCCESSFULLY SUBMITTED</h1>`
        email.value = null;
        textarea.value = null;
    }
})
