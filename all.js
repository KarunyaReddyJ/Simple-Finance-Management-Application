const body=document.querySelector('body')
var displayed=false
var money=0
setInterval(() => {
    for(const key of Object.keys(localStorage)){
        if(isNaN(localStorage.getItem(key)))
            localStorage.removeItem(key)
    }
},1000);

document.querySelector('#show').addEventListener('click',()=>{
    if(!displayed){
        displayAll()
        displayed=true
    }
    else{
        console.log('already displayed')
    }
})
document.querySelector('#submit').addEventListener('click',()=>{
    var k=document.querySelector('#name').value
    deleteTag(k)
    localStorage.removeItem(k)
    document.querySelector('#name').value=''
})
const displayAll=()=>{
        for(const key of Object.keys(localStorage)){
            let p=document.createElement('p')
            p.innerHTML=`<b> ${key} : ${localStorage.getItem(key)} </b> <br>`
            body.appendChild(p)
            money+=parseInt(localStorage.getItem(key))
        }
    
}
const deleteTag=(key)=>{
    let p=document.querySelectorAll('p')
    p.forEach((i)=>{
        if(i.innerHTML===`<b> ${key} : ${localStorage.getItem(key)} </b> <br>`)
            i.style.display='none'
    })
}