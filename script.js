// generate compliment
async function fetchCompliments(){
const response = await fetch('./data/compliments.json')
const data =  await response.json();
console.log(data);
return data.compliments;
}; 
// display comliment
function displayRandomCompliments(compliments){
const complimentElement = document.getElementById("compliment");
const randomIndex = Math.floor(Math.random() * compliments.length);
const randomCompliment = compliments[randomIndex];
complimentElement.textContent = randomCompliment
};
// cell functions ILFE - immediately invoked function expersion
(async ()=>{
    // load comliments
    const compliments = await fetchCompliments(); 
    // load butten
    console.log(compliments);
    const button = document.getElementById(`generate.btn`);
    button.addEventListener(`click`, ()=>displayRandomCompliments(compliments));
})();
