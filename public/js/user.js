$(document).ready(function(){

    const urlParams = new URLSearchParams(window.location.search);
    const userID = urlParams.get("id");
    console.log(userID);
    $.get(`/api/user/${userID}`).then(function(data){
        console.log(data);
        console.log(data.name);
        $("#userInfo").text(data.name);
        $("#NFLfav").text(data.football);
        $("#NBAfav").text(data.basketball);
        $("#MLBfav").text(data.baseball);
        $("#MLSfav").text(data.soccer);
    })

}) // document ready 