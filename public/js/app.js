//==============================================================
$(document).ready(function () {


    function getSports() {

        $.get("/api/sports", function (data) {
            const sportsObj = {};
            for (let i = 0; i < data.length; i++) {
                sportsObj[data[i].idSport] = data[i].strSport
            };
        })
    };

    function getLeagues() {
        $.get("/api/leagues", function (data) {
            const leaguesObj = {};
            for (let i = 0; i < data.length; i++) {
                leaguesObj[data[i].idLeague] = data[i].strLeague
            };
        })
    };

    function getLeagueTeams(leaguesObj) {
        const leagueTeams = {};
        for (let key in leaguesObj) {

            $.get(`/api/leagues/${leaguesObj[key]}`, function (data) {
                for (let i = 0; i < data.length; i++) {
                    leagueTeams[data[i].idTeam] = data[i].strTeam;
                };
            });
        }
    };