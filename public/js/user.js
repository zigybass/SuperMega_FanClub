$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
    const userID = urlParams.get("id");
    console.log(userID);

    $.get(`/api/user/${userID}`).then(function(data){
        console.log(data);
        console.log(data.name);
        const footballId = data.football;
        const basketballId = data.basketball;
        const baseballId = data.baseball;
        const soccerId = data.soccer;
        $("#userInfo").text(data.name);
        $("#NFLfav").text(data.football);
        $("#NBAfav").text(data.basketball);
        $("#MLBfav").text(data.baseball);
        $("#MLSfav").text(data.soccer);

        nextEvents("NFL", footballId);
        nextEvents("NBA", basketballId);
        nextEvents("MLB", baseballId);
        nextEvents("MLS", soccerId);
    })
    
    function nextEvents(league, id){
        $.get(`/api/user/${league}/${id}/nextevents`).then(function(data){
            console.log(league);
            console.log(data);
            let nextEvent = data.events[0];
            $(`#card-${league} .card-text`).append(`<span>${nextEvent.strEvent}</span>`)

            $(`.future-events-${league}`).append(`
                <div class="future-match text-center">
                    <p>${data.events[1].strEvent} <p>
                    <p class="date">${data.events[0].dateEvent}</p>
                </div>
                <div class="future-match text-center">
                    <p>${data.events[2].strEvent} <p>
                    <p class="date">${data.events[0].dateEvent}</p>
                <div>
                <div class="future-match text-center">
                    <p>${data.events[3].strEvent} <p>
                    <p class="date">${data.events[0].dateEvent}</p>
                <div>
                <div class="future-match text-center">
                    <p>${data.events[4].strEvent} <p>
                    <p class="date">${data.events[0].dateEvent}</p>
                <div>
            `)
        })
    }
    
    


}) // document ready 