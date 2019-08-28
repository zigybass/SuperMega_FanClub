//*api-routes.js===================================================================================
//
//Notes:
//LeagueName(LeagueID) = NFL(4391), NBA(4387), MLB(4424), American Major League Soccer(4346)


// Requiring our models
var db = require("../models");

// Routes==========================================================================================
module.exports = function (app, anything) {


    //Get all teams by league======================================================================
    app.get("/api/:league", function (req, res) {
        const userLeague = req.params.league;
        const queryLe
        ague = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=" + userLeague;

        axios.get({
            url: queryLeague,
            headers: {
                "User-Agent": "PostmanRuntime/7.15.2",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "72d42e3e-4621-4a05-8aef-196e2b3de75c,5efe30c6-71ff-4866-8455-9e467d2cbb33",
                "Host": "www.thesportsdb.com",
                "Cookie": "__cfduid=df8323910954460c0cbcacea6b5df93961567006174",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            }
        }).then(function (league) {
            res.json(league);
        });
    });
    //teams[i].idTeam
    //teams[i].strTeam

    //Get team info by name========================================================================
    app.get("/api/:team", function (req, res) {
        const userTeamName = req.params.team;
        const queryTeam = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + userTeamName;

        axios.get({
            url: queryTeam,
            headers: {
                "User-Agent": "PostmanRuntime/7.15.2",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "72d42e3e-4621-4a05-8aef-196e2b3de75c,5efe30c6-71ff-4866-8455-9e467d2cbb33",
                "Host": "www.thesportsdb.com",
                "Cookie": "__cfduid=df8323910954460c0cbcacea6b5df93961567006174",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            }
        }).then(function (team) {
            res.json(team);
        });
    });
    //team[1].idTeam - team id
    //team[1].strTeam - team name
    //team[1].strSport - sport anem


    //Get players by team name query===============================================================
    app.get("/api/players/:team", function (req, res) {
        const userTeam = req.params.team;
        const queryTeamPlayers = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + userTeam;

        axios.get({
            url: queryTeamPlayers,
            headers: {
                "User-Agent": "PostmanRuntime/7.15.2",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "72d42e3e-4621-4a05-8aef-196e2b3de75c,5efe30c6-71ff-4866-8455-9e467d2cbb33",
                "Host": "www.thesportsdb.com",
                "Cookie": "__cfduid=df8323910954460c0cbcacea6b5df93961567006174",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            }
        }).then(function (teamPlayers) {
            res.json(TeamPlayers);
        });
    });

    //Get next 5 events by Team ID=================================================================
    app.get("/api/teamNext5Events/:teamId", function (req, res) {
        const userTeamId = req.params.teamId;
        const queryTeamId = "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=" + userTeamId;

        axios.get({
            url: queryTeamId,
            headers: {
                "User-Agent": "PostmanRuntime/7.15.2",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "72d42e3e-4621-4a05-8aef-196e2b3de75c,5efe30c6-71ff-4866-8455-9e467d2cbb33",
                "Host": "www.thesportsdb.com",
                "Cookie": "__cfduid=df8323910954460c0cbcacea6b5df93961567006174",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            }
        }).then(function (teamNext5) {
            res.json(teamNext5);
        })
    });

    //Get last 5 events by Team ID=================================================================
    app.get("/api/teamLast5Events/:teamId", function (req, res) {
        const userTeamId = req.params.teamId;
        const queryTeamId = "https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=" + userTeamId;

        axios.get({
            url: queryTeamPlayers,
            headers: {
                "User-Agent": "PostmanRuntime/7.15.2",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "72d42e3e-4621-4a05-8aef-196e2b3de75c,5efe30c6-71ff-4866-8455-9e467d2cbb33",
                "Host": "www.thesportsdb.com",
                "Cookie": "__cfduid=df8323910954460c0cbcacea6b5df93961567006174",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            }
        }).then(function (teamLast5) {
            res.json(teamLast5);
        })
    });

    //Get next 15 events by League ID=================================================================
    app.get("/api/leagueNext15Events/:leagueId", function (req, res) {
        const userLeagueId = req.params.leagueId;
        const queryLeagueId = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=" + userLeagueId;

        axios.get({
            url: queryLeagueId,
            headers: {
                "User-Agent": "PostmanRuntime/7.15.2",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "72d42e3e-4621-4a05-8aef-196e2b3de75c,5efe30c6-71ff-4866-8455-9e467d2cbb33",
                "Host": "www.thesportsdb.com",
                "Cookie": "__cfduid=df8323910954460c0cbcacea6b5df93961567006174",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            }
        }).then(function (leagueNext15) {
            res.json(leagueNext15);
        })
    });

    //Get last 15 events by League ID=================================================================
    app.get("/api/leagueLast15Events/:leagueId", function (req, res) {
        const userLeagueId = req.params.leagueId;
        const queryLeagueId = "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=" + userLeagueId;

        axios.get({
            url: queryLeagueId,
            headers: {
                "User-Agent": "PostmanRuntime/7.15.2",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "72d42e3e-4621-4a05-8aef-196e2b3de75c,5efe30c6-71ff-4866-8455-9e467d2cbb33",
                "Host": "www.thesportsdb.com",
                "Cookie": "__cfduid=df8323910954460c0cbcacea6b5df93961567006174",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            }
        }).then(function (leagueNext15) {
            res.json(leagueNext15);
        })
    });

    //Get all sports query=========================================================================
    app.get("/api/sports", function (req, res) {
        axios.get({
            url: "https://www.thesportsdb.com/api/v1/json/1/all_sports.php#",
            headers: {
                "User-Agent": "PostmanRuntime/7.15.2",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "72d42e3e-4621-4a05-8aef-196e2b3de75c,5efe30c6-71ff-4866-8455-9e467d2cbb33",
                "Host": "www.thesportsdb.com",
                "Cookie": "__cfduid=df8323910954460c0cbcacea6b5df93961567006174",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            }
        }).then(function (allTeams) {
            res.json(allTeams);
        });
    });
    //sports[i].idSport for i=0 to length
    //sports[i].strSport for i=0 to length

    //Get all leagues query========================================================================
    app.get("/api/leagues", function (req, res) {
        axios.get({
            url: "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php",
            headers: {
                "User-Agent": "PostmanRuntime/7.15.2",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "72d42e3e-4621-4a05-8aef-196e2b3de75c,5efe30c6-71ff-4866-8455-9e467d2cbb33",
                "Host": "www.thesportsdb.com",
                "Cookie": "__cfduid=df8323910954460c0cbcacea6b5df93961567006174",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            }
        }).then(function (allLeagues) {
            res.json(allLeagues);
        });
    });
    //leagues[i].idLeague for i=0 to length
    //leagues[i].strLeague for i=0 to length
};
