document.addEventListener("DOMContentLoaded", function () {
    var vg_1 = "map_country.vg.json";
    var vg_2 = "pop.vg.json";
    var vg_3 = "radial.vg.json";
    var vg_4 = "sankey.vg.json";
    var vg_5 = "violin.vg.json";
    var vg_6 = "internet.vg.json";

    function renderVisualizations() {
        vegaEmbed("#map", vg_1, {"actions": false}).catch(console.error);
        vegaEmbed("#pop", vg_2, {"actions": false}).catch(console.error);
        vegaEmbed("#radial", vg_3, {"actions": false}).catch(console.error);
        vegaEmbed("#sankey", vg_4, {"actions": false}).catch(console.error);
        vegaEmbed("#violin1", vg_5, {"actions": false}).catch(console.error);
        vegaEmbed("#internet", vg_6, {"actions": false}).catch(console.error);
    }

    const Select = document.getElementById("Select");

    const IncomeT = document.getElementById("income_title");
    const IncomeC = document.getElementById("income_content");
    const PopT = document.getElementById("Pop_title");
    const PopC = document.getElementById("Pop_content");
    const InternetT = document.getElementById("internet_title");
    const InternetC = document.getElementById("internet_content");

    IncomeT.style.display = "none";
    IncomeC.style.display = "none";
    PopT.style.display = "none";
    PopC.style.display = "none";
    InternetT.style.display = "none";
    InternetC.style.display = "none";

    // Check if there's an initial selected option
    handleVisibility(Select.value);

    // Add event listener for dropdown changes
    Select.addEventListener("change", function(event) {
        handleVisibility(event.target.value);
        // Re-render the visualizations to ensure they display correctly
        setTimeout(renderVisualizations, 1); // Delay to ensure display change
    });

    // Function to control visibility
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

    // Initial render of visualizations
    renderVisualizations();
});