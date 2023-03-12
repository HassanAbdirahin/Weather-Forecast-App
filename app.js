const input = document.querySelector('.input');
const btn =  document.querySelector('.btn');
const name = document.querySelector('.name');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');


btn.addEventListener('click', find);

function find() {
const value = input.value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=0f860e2a936a95f3e1a6b5acddd131b4`)
.then(res => res.json())
.then(data => {
    console.log(data);
    const nameValue = data['name'];
    const tempDec = data['main']['temp'] - 273;
    const descValue = data['weather'][0]['description'];

    tempValue = tempDec.toFixed(2)

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue + '&#xb0;C';
    desc.innerHTML = descValue;
})

.catch(err => alert('city name does not exist!'))
}