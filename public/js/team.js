$(document).ready(function () {

    const urlParams = new URLSearchParams(window.location.search);
    const teamId = urlParams.get("id");
    console.log(teamId);
    const favoriteTeam = teams.find(obj => {
        return obj.team_id === parseInt(id); 
    })

    console.log(favoriteTeam)


    //get all info for userID from DB

    $.get(`/api/team/${teamId}/nextevents`, function (teamEvents) {
        console.log(teamId)
        console.log(teamEvents)
        for (let i = 1; i <= 4; i++) {
            $("#upcomingMatches").append(`<li class="list-group-item">${teamEvents.events[i].strEvent}</li>`)
            // console.log(teamEvents.events[i].strEvent)
        }
        let nextEvent = {
            name: teamEvents.events[0].strEvent,
            date: teamEvents.events[0].dateEvent,
            awayTeamId: teamEvents.events[0].idAwayTeam,
            homeTeamId: teamEvents.events[0].idHomeTeam
        }
        const favoriteTeam = teams.find(obj => {
            return obj.team_id === parseInt(teamId); 
        })
        $("#teamLogo").attr("src", favoriteTeam.logo_url)
        $("#headerLogo").text(favoriteTeam.team_name)
        const awayTeam = teams.find(obj => {
            return obj.team_id === parseInt(nextEvent.awayTeamId);
        });
        const homeTeam = teams.find(obj => {
            return obj.team_id === parseInt(nextEvent.homeTeamId);
        });
        console.log(awayTeam)
        //Next Team
        $(`#nextMatch`).append(`
                <div>
                <div class="match-detail text-center">
                    <div class="logos">
                    <div class="home">
                        <img src="${homeTeam.logo_url}">
                    </div>
                    <div class="vs">
                        VS
                    </div>
                    <div class="away">
                        <img src="${awayTeam.logo_url}">
                    </div>
                    </div>
                    <p>${nextEvent.name}</p>
                    <p class="date">${nextEvent.date}</p>
                <div>
                </div>
        `)
    
        console.log(favoriteTeam)
    });

    $.get(`/api/userplayers/${teamId}`, function (playerData) {
    }).then(function (playerData) {
        console.log(playerData)
        for (let i = 0; i < playerData.player.length; i++) {
            console.log(playerData.player[i].strPlayer)
            $("#players").append(`<li>
            <img src="${playerData.player[i].strThumb}">
            <span>${playerData.player[i].strPlayer}</span>
            </li>`)
        }
    })

    $.get(`/api/userteam/${teamId}`, function (teamData) {
    }).then(function (teamData) {
        
        console.log(teamData.teams[0].strDescriptionEN)
        $("#description").text(teamData.teams[0].strDescriptionEN)

        console.log(teamData.teams[0].strStadiumThumb)
        $("#stadium").append(`<img src="${teamData.teams[0].strStadiumThumb}" class="card-img-top" alt="...">`)

    })
});
