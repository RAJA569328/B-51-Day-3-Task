// THIRD QUESTION
let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all' );
xhr.onload = function() {
    let data = JSON.parse(xhr.responseText)

    // console.log(data)
    for(let flag of data){
        console.log('Name: '+ flag.name.common)
        console.log('Population: '+ flag.population)
        console.log('Region: '+ flag.region)
        console.log('Subregion: '+ flag.subregion)
        console.log('__________________________')
    }
};
xhr.send();