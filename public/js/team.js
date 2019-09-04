$(document).ready(function () {

    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get("teamId");
    console.log(teamId);

    //get all info for userID from DB

    $.get(`/api/team/${teamId}/nextevents`, function (teamEvents) {
        for (let i = 0; i < 4; i++) {
            $("#upcomingMatches").append(`<li>${teamEvents.events[i].strEvent}</li>`)
            console.log(teamEvents.events[i].strEvent)
        }
    });


    $.get(`/api/userplayers/${teamId}`, function (playerData) {
    }).then(function (playerData) {
        for (let i = 0; i < playerData.player.length; i++) {
            console.log(playerData.player[i].strPlayer)
            $("#players").append(`<li>${playerData.player[i].strPlayer}</li>`)
        }
    })

    $.get(`/api/userteam/${teamId}`, function (teamData) {
    }).then(function (teamData) {
        console.log(teamData.teams[0].strDescriptionEN)
        $("#description").text(teamData.teams[0].strStadiumThumb)

        console.log(teamData.teams[0].strStadiumThumb)
        $("#stadium").append(`<img src="${teamData.teams[0].strStadiumThumb}" class="card-img-top" alt="...">`)

    })
});
