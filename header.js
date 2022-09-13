console.log(`COMPOUND ACADEMY`);
let about = document.querySelector(".list2");
about.addEventListener('click',(e)=> {
 console.log("you clicked");
 window.scrollTo(0,870);
})
let our_Story= document.querySelector(".list");
our_Story.addEventListener('click',(e)=> {
 console.log("you clicked");
 window.scrollTo(0,100);
})
let contact = document.querySelector(".list4");
contact.addEventListener('click',(e)=> {
 console.log("you clicked");
 window.scrollTo(0,2420);
})
let query_Form = document.querySelector(".list3");
query_Form.addEventListener('click',(e)=> {
 console.log("you clicked");
 window.scrollTo(0,1635);
})
//------------------------------------------------------------------------------------------------------------------

//search_box
    let search =  document.getElementById('search_box');
    // search.value= null;
    search.addEventListener('blur', ()=>{
        let value = search.value;
        console.log(value);
        if(value!=''){
            console.log('true');
    }
else
{
    console.log('false');
}})
 
