$(document).ready(function(){

    const urlParams = new URLSearchParams(window.location.search);
    const userID = urlParams.get("id");

    console.log(userID);

    $.get(`/api/user/${userID}`).then(function(data){
        console.log(data);
    })



}) // document ready 