var inputval=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="7ba2556e87722fb5d4f41ab533222686"


function convertion(val){
    return (val - 273).toFixed(2)
}

btn.addEventListener('click',()=>
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik) // fetch() method is used to setup API in JS.
    .then(res => res.json())

    .then(data=>{
        var nameval=data['name']
        var descrip=data['weather'] ['0'] ['description']
        var tempature=data['main'] ['temp']
        var wndspd=data['wind']['speed']
        city.innerHTML=weather of <span>${nameval}</span>
        temp.innerHTML=Temperature: <span> ${convertion(tempature)}C</span>
        description.innerHTML=sky Condition:<span>${descrip}<span>
        wind.innerHTML=wind speed: <span>${wndspd} Km/h</span>
    })

    .catch(err => alert('you entered wrong city name'))
})