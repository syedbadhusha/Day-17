var res = fetch("https://restcountries.com/v3.1/all").then((data)=>data.json()).then((data1)=>bar(data1))

var container = document.createElement('div')
container.className='container';

var row = document.createElement('div')
row.className='row'

var toptitle = document.createElement('h1')
toptitle.innerHTML="Weather Details of Countries"
toptitle.className='text-center'
toptitle.id='title'

function bar(data1){
    data1.sort((a,b)=>
    {   
        var nameA = a.name.common.toUpperCase()
        var nameB = b.name.common.toUpperCase()
        if (nameA<nameB){
            return -1
        }
        if(nameA>nameB){
        return 1
        }
        return 0;
    }
    )
    
    for(i=0;i<data1.length;i++){
        var col = document.createElement('div');
        col.className='col-lg-4 col-sm-12'
        col.innerHTML +=`<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${data1[i].name.common}</h5>
        <img src="${data1[i].flags.png}" class="card-img-top" alt="">
        <p class="card-text">Capital : ${data1[i].capital}</p>
        <p class="card-text">Region : ${data1[i].region}</p>
        <p class="card-text">Country Code : ${data1[i].fifa}</p>
        <a href="#" class="btn btn-primary" onClick = "displayWeather(${data1[i].latlng},this)">Click for Weather</a>
        <div class="temprature"></div>
        </div>
    </div>`
    row.append(col);
    container.append(row)
    document.body.append(toptitle,container);
}
}
function displayWeather(lat,lon,crntbutton){
    var res = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1ae39e8c84ff4caa54449168b0da58d`)
    .then((data2)=>data2.json()).then((data3)=>{
        var temp = data3.main.temp
        var weatherDiv = crntbutton.parentElement.querySelector('.temprature')
        weatherDiv.innerHTML=`temperature : ${temp}`
    });
    event.preventDefault()
}   