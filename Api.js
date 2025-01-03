var inputval = document.querySelector('#cityinput') // queryselector is cammond line arguments
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "011d7d73e2c369fbc65b46ba92753fc8"

function convertion(val) 
{
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', () =>

{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
    // fetch used to set up api link
    .then(res => res.json()) // Json - javascrpit object notation

    .then(data =>
    {
        var nameval = data[`name`]
        var descrip = data[`weather`][`0`][`description`]
        var temperature = data[`main`][`temp`]
        var wndspd = data[`wind`][`speed`]

        city.innerHTML=Weatherof `<span>${nameval}<span>`
        temp.innerHTML =Temperature `<span>${convertion(temperature)} C</span>`
        description.innerHTML = SkyConditions  `<span>${descrip}<span>`
        wind.innerHTML = WindSpeed `<span>$ {wndspd} Km/h<span>`
    })

    .catch(err => alert('You entered wrong city name'))
})