var vg_1 = "map_country.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

var vg_5 = "violin.vg.json";
vegaEmbed("#violin1", vg_5).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

var vg_2 = "violin.vg.json";
vegaEmbed("#violin", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

var vg_3 = "radial.vg.json";
vegaEmbed("#radial", vg_3).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

var vg_4 = "sankey.vg.json";
vegaEmbed("#sankey", vg_4).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

const Select = document.getElementById("Select")

const IncomeT = document.getElementById("income_title")
const IncomeC = document.getElementById("income_content")

const PopT = document.getElementById("Pop_title")
const PopC = document.getElementById("Pop_content")

const InternetT = document.getElementById("internet_title")
const InternetC = document.getElementById("internet_content")

IncomeT.style.display = "none";
IncomeC.style.display = "none";
PopT.style.display = "none";
PopC.style.display = "none";
InternetT.style.display = "none";
InternetC.style.display = "none";

// Check if there's an initial selected option
handleVisibility(Select.value);

// Add event listener
Select.addEventListener("change", function(event) {
    handleVisibility(event.target.value);
});

// Function to control visibility (now using display)
function handleVisibility(value) {
    if (value === 'income') {
        IncomeT.style.display = "block";
        IncomeC.style.display = "block";
        PopT.style.display = "none";
        PopC.style.display = "none";
        InternetT.style.display = "none";
        InternetC.style.display = "none";
    } else if (value === 'pop_sqm') {
        IncomeT.style.display = "none";
        IncomeC.style.display = "none";
        PopT.style.display = "block";
        PopC.style.display = "block";
        InternetT.style.display = "none";
        InternetC.style.display = "none";
    } else if (value === 'internet') {
        IncomeT.style.display = "none";
        IncomeC.style.display = "none";
        PopT.style.display = "none";
        PopC.style.display = "none";
        InternetT.style.display = "block";
        InternetC.style.display = "block";
    }
}