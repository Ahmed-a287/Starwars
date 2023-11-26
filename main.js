//Kod från 25/11 klockan: 14:12


//Hämta data från API
//Loppa in alla namn (10) och tilldela de till en li 
//li får en unik id och button => ul append li elemntet och visar namnet på karaktär

//I theDetails hämta infon från API (t.ex. films, längd, föddelsedag....)

//addEventlistener och kopppla det till "theDetails"

//Loppa ut all info och koppla det till id från "li"

//Dela upp namn i två sidor men pill som tar dig mellan de två sidor!

// ***** Varibel *****
const planetPart = document.getElementById("planetPart")
const speciesPart = document.getElementById("speciesPart")
const vehiclesPart = document.getElementById("vehiclesPart")
const starshipsPart = document.getElementById("starshipsPart")
    
//Fetcha The people
async function getPeople() {
    const response = await fetch ("https://swapi.dev/api/people/")
    const data = await response.json ();
    
    //Loppa in alla namn (10) och tilldela de till en li 
    for (let i = 0; i < data.results.length; i++) {
        //li får en unik id och button => ul append li elemntet och visar namnet på karaktär
        const ul = document.getElementById("theList");
        const li = document.createElement("li");
        li.setAttribute('id', 'name' + `${[i]}`);
        ul.appendChild(li);
        let button = document.createElement("button");
        button.innerHTML = `${data.results[i].name}`;
        button.setAttribute('id', 'btn' + `${[i]}`);
        li.appendChild(button);

        const details = document.getElementById("theDetails");
        
        button.addEventListener('click', function() {
            displayDetails(i);
            getPlanet(data.results[i].homeworld);
            getSpecies(i);
            getVehicles(i);
    
        });
        
        // Funktion som visar infon i Display
        function displayDetails(i) {
            const ul = document.getElementById("detailsList")
            const li = document.createElement("li");
            const upHeader = document.getElementById("detailsUpHeader")
            li.setAttribute('id', 'upItem')
            upHeader.innerText = `${data.results[i].name}`
            ul.innerHTML = ''; 
            li.innerText = `
            Height: ${data.results[i].height} cm
            Mass: ${data.results[i].mass}kg
            Hair color: ${data.results[i].hair_color}
            Skin color: ${data.results[i].skin_color}
            Eye color: ${data.results[i].eye_color}
            Birth year: ${data.results[i].birth_year}
            Gender: ${data.results[i].gender}`; 
            ul.appendChild(li);  
            
        }
    }
}

getPeople();
//The Planet
async function getPlanet(planetUrl) { //kolla rad 67 - ett annat sätt att fetcha
    const response = await fetch(planetUrl);
    const data = await response.json();
    const planetHeader = document.getElementById("planetHeader")
    const planetList = document.getElementById("planetList")
    const planetLiItem = document.createElement("li");
    planetList.innerHTML = "";
    planetLiItem.setAttribute('id', 'planetItem')
    planetList.appendChild(planetLiItem);

    planetHeader.innerText = (data.name);
    planetLiItem.innerText = `
    Climte: ${data.climate}
    Diameter: ${data.diameter}
    Gravity: ${data.gravity}
    Orbital period: ${data.orbital_period}
    Population: ${data.population}
    Rotation period: ${data.rotation_period}
    Terrain: ${data.terrain}`
    ;
}


//The Species
async function getSpecies(i){
    const response = await fetch("https://swapi.dev/api/species/");
    const data = await response.json();
    for (let i = 0; i < data.results.length; i++){
    const speciesHeader = document.getElementById("speciesHeader")
    const speciesList = document.getElementById("speciesList")
    const speciesLiItem = document.createElement("li");
    speciesList.innerHTML = "";
    speciesLiItem.setAttribute('id', 'planetItem')
    speciesList.appendChild(speciesLiItem);
    speciesHeader.innerText = (data.results[i].name);
    speciesLiItem.innerText = `
    Average hight: ${data.results[i].average_height}
    Average lifespan: ${data.results[i].average_lifespan}
    classification: ${data.results[i].classification}
    Designation: ${data.results[i].designation}
    Language: ${data.results[i].language}`
    ;
    }
}


//The Vehicles        
async function getVehicles(i){
    const response = await fetch("https://swapi.dev/api/vehicles/");
    const data = await response.json();
    vehiclesList.innerHTML = "";
    vehiclesHeader.innerText = "";
    for (let i = 0; i < data.results.length; i++){
    //console.log(data.results[i]);
   
    const vehiclesHeader = document.getElementById("vehiclesHeader")
    const vehiclesList = document.getElementById("vehiclesList")
    const vehiclesLiItem = document.createElement("li");
    vehiclesLiItem.setAttribute('id', 'vehiclesItem')
    vehiclesList.innerHTML = "";
    vehiclesHeader.innerText = "";

    vehiclesList.appendChild(vehiclesLiItem);
    vehiclesHeader.innerText = (data.results[i].name);
    vehiclesLiItem.innerText = `
    Cargo capacity: ${data.results[i].cargo_capacity}
    Consumables: ${data.results[i].consumables}
    Crew: ${data.results[i].crew}
    Model: ${data.results[i].model}
    Passengers: ${data.results[i].passengers}`
    ;
    }
}

// Är det ett bug här? onclick funkar som den vill!
console.log(planetPart, speciesPart, vehiclesPart, starshipsPart);
function changeClassPlanet(){
    vehiclesPart.className="hide";
    starshipsPart.className="hide";
    speciesPart.className="hide";
    planetPart.className="show";
console.log("planet btn clicked");
}
            
function changeClassSpecies(){
    planetPart.className="hide";
    vehiclesPart.className="hide";
    starshipsPart.className="hide";
    speciesPart.className="show";
console.log("species btn clicked");
}
            
function changeClassVehicles(){
    starshipsPart.className="hide";
    speciesPart.className="hide";
    planetPart.className="hide";
    vehiclesPart.className="show";
console.log("vehicles btn clicked");
}
            
/*function changeClassStarships(){
    speciesPart.className="hide";
    planetPart.className="hide";
    vehiclesPart.className="hide";
    starshipsPart.className="show";
console.log("starships btn clicked");
}*/
    