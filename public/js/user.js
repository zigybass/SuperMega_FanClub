$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userID = urlParams.get("id");
    console.log(userID);
    console.log(teams);
    $.get(`/api/user/${userID}`).then(function (data) {
        console.log(data);
        const footballId = data.football;
        const basketballId = data.basketball;
        const baseballId = data.baseball;
        const soccerId = data.soccer;
        $("#userInfo").text(data.name);

        nextEvents("NFL", footballId);
        nextEvents("NBA", basketballId);
        nextEvents("MLB", baseballId);
        nextEvents("MLS", soccerId);
    })

    function nextEvents(leagueName, id) {
        $.get(`/api/user/${leagueName}/${id}/nextevents`).then(function (data) {
            console.log(leagueName);
            console.log(data);
            let nextEvent = {
                name: data.events[0].strEvent,
                date: data.events[0].dateEvent,
                awayTeamId: data.events[0].idAwayTeam,
                homeTeamId: data.events[0].idHomeTeam
            }
            console.log(nextEvent);
            if (data.events[1] && data.events[2] && data.events[3]) {
                $(`.future-events-${leagueName}`).append(`
                    <div class="future-match text-left">
                        <p>${data.events[1].strEvent} <span class="date">${data.events[1].dateEvent}</span><p>
                        
                    </div>
                    <div class="future-match text-left">
                        <p>${data.events[2].strEvent} <span class="date">${data.events[2].dateEvent}</span><p>
                        
                    <div>
                    <div class="future-match text-left">
                        <p>${data.events[3].strEvent} <span class="date">${data.events[3].dateEvent}</span><p>
                        
                    <div>
                `)
            }
            if (data.events[4]) {
                $(`.future-events-${leagueName}`).append(`
                    <div class="future-match text-left">
                        <p>${data.events[3].strEvent} <span class="date">${data.events[4].dateEvent}</span> <p>
                        
                     <div>
                `)
            }
            const favoriteTeam = teams.find(obj => {
                return obj.team_id === parseInt(id);
            });
            $(`#${leagueName}fav`).text(favoriteTeam.team_name);
            $(`#logo-${leagueName}`).attr("src", favoriteTeam.logo_url);
            $(`#btn-${leagueName}`).attr("href", `/teaminfo?id=${id}`);

            const awayTeam = teams.find(obj => {
                return obj.team_id === parseInt(nextEvent.awayTeamId);
            });
            const homeTeam = teams.find(obj => {
                return obj.team_id === parseInt(nextEvent.homeTeamId);
            });
            console.log(awayTeam)
            //Next Team
            $(`.next-event-${leagueName}`).append(`
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
        })
    }


    function matchID(teamLeague, teamID) {
        const favoriteTeam = league.teamLeague.find(obj => {
            return obj.team_id === teamID;
        });
        console.log(favoriteTeam);
    }


    // $("a").unbind("click").click(function (e) {
    //     e.preventDefault()
    //     console.log($(this).attr("id"))
    //     $.get(`/api/user/${userID}`).then(function (data) {
    //         const footballId = data.football;
    //         const basketballId = data.basketball;
    //         const baseballId = data.baseball;
    //         const soccerId = data.soccer;
    //         console.log(footballId)
    //         console.log(basketballId)
    //         console.log(baseballId)
    //         console.log(soccerId)
    //     });
    // });

}) // document ready 