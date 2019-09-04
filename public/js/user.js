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
            let nextEvent = data.events[0];
            $(`#card-${leagueName} .card-text`).append(`<span>${nextEvent.strEvent}</span>`)
            if (data.events[1] && data.events[2] && data.events[3]) {
                $(`.future-events-${leagueName}`).append(`
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
                `)
            }
            if (data.events[4]) {
                $(`.future-events-${leagueName}`).append(`
                    <div class="future-match text-center">
                        <p>${data.events[3].strEvent} <p>
                        <p class="date">${data.events[0].dateEvent}</p>
                     <div>
                `)
            }
            const favoriteTeam = teams.find(obj => {
                return obj.team_id === parseInt(id);
            });
            $(`#${leagueName}fav`).text(favoriteTeam.team_name);
            $(`#logo-${leagueName}`).attr("src", favoriteTeam.logo_url);
            $(`#btn-${leagueName}`).attr("href", `/teaminfo?id=${id}`);
            console.log(favoriteTeam);
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