

console.log('this is from app js from directorey public and js ')

const WeatherSearch=document.querySelector('form')
const search=document.querySelector('input')
const  messageOne=document.querySelector('#messege_one')
const  messageTwo=document.querySelector('#messege_two')



WeatherSearch.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    // console.log(location)
    fetch(`/weather?address=${location}`).then((resonse)=>{
        resonse.json().then((data)=>{
            if(data.error){
                messageOne.textContent=data.error
            }else{
                messageOne.textContent=data.location
                messageTwo.textContent=data.forecast
                console.log(data.address)
                
            }
            

            // console.log(data.forecast)
            // console.log(data.address)
            

        })
    })

})