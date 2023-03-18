async function restdata()
{

let data=await fetch("https://restcountries.com/v2/all");
let data1= await data.json();
console.log(data1);
var container = document.createElement("div");
container.setAttribute("class","container");

var row = document.createElement("div");
row.setAttribute("class","row");
try
{
     
        for(var i=0;i<data1.length;i++)
        {
            var name = data1[i].name;
            var countryname = name.split(" ").join("");
            
            
            var lat = data1[i].latlng && data1[i].latlng[0];
            var lon = data1[i].latlng && data1[i].latlng[1];

            var btnclk = {name:countryname,lat:lat,lon:lon};
            btnclk = JSON.stringify(btnclk);
            
            var col=document.createElement("div");
            col.setAttribute("class","col-lg-4 col-sm-12");
            col.innerHTML = `<div class="smallbox">
                                <div class="card" style="width: 22rem;">
                                        <div class="card-header">
                                        ${name}
                                        </div>
                                    <img src="${data1[i].flag}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                    <p class="card-text">Capital : ${data1[i].capital}</p>
                                    <p class="card-text">Region : ${data1[i].region}</p>
                                    <p class="card-text">Country code : ${data1[i].alpha3Code}</p>
                                    <p class="card-text">Latitude : ${lat}</p>
                                    <p class="card-text">longitude : ${lon}</p>
                                    <button class="btn btn-primary" type="button" id="btn${i}" value=${btnclk} >Click for Whether</button>
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>`;
                            
            row.append(col);
            container.append(row);
            document.body.append(container);
            document.getElementById(`btn${i}`).addEventListener("click",(e)=>{
                e.preventDefault();
              var btn = e.target.value ;
              btn = JSON.parse(btn);
              opendata(btn.name,btn.lat,btn.lon);

        });
        }
}
catch (error) {
    console.log("invalid "+error.message);
}
}
restdata();
async function opendata(name,lat,lon)
{
    // console.log("opendata");
    try {
    let res=await fetch(`
    https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=15e4f3b5c1edde11fbf448aae0e5e8a2`);
    let res1= await res.json();


    alert(`Country name: ${name} , 
Temp: ${res1.main.temp}`);
    // alert(`Country name:${name}`);
    } catch (error) {
        console.log(error.message);
    }
}