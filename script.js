const submit=document.getElementById("submit")
const setNull=()=>{
    document.querySelector('#name').value=''
    document.querySelector('#amount').value=''
}
submit.addEventListener('click',()=>{
    const Name=document.getElementById('name').value
    const amount=document.getElementById('amount').value
    if(!isNaN(Name) && !isNaN(amount)){}
    else{
        var prevAmount=parseInt(localStorage.getItem(Name))
        if(!isNaN(prevAmount)){
            prevAmount+=parseInt(amount)
            localStorage.setItem(Name,prevAmount)
            console.log(prevAmount)
        }
        else{
            localStorage.setItem(Name,amount)
            console.log(amount)
        }
        setNull()
    }
})
