console.log('started')
const search=document.querySelector('#submit')
search.addEventListener('click',()=>{
    var Name=document.querySelector('#name').value
    if(Name===""){
        alert("Empty Field")
    }
    else{
        const found=false
            for(const key of Object.keys(localStorage)){
                if(key===Name){
                    display(Name)
                    found=true
                    Name=""
                }
            }
            if(!found){
                alert("No such person is stored in the database")
            }
    }
})
const display=(Name)=>{
    let show=document.createElement('div');
    show.innerHTML=`<strong>Name:</strong> ${Name}  <br><strong>Amount:</strong> ${localStorage.getItem(Name)}`
    show.id='show'
    let display=document.querySelector("#display")
    display.appendChild(show)
}