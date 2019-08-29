$(document).ready(function(){
    var urlParams = new URLSearchParams(window.location.search);
    const league = urlParams.get("league");
    console.log(league);
    // Create Account User Inputs
    // make get API request to backend `/api/${league}`
    $.get(`/api/sport/${league}`).then(function(data){
        console.log(data);
    })
    // Output data to your html

})//document.ready