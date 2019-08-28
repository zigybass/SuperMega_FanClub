

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    //Get team info by name========================================================================
    app.get("/api/:team", function (req, res) {
        const userTeamName = req.params.team;
        const queryTeam = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + userTeamName;

    }).then(function (team) {
        res.json(team);
    });
    //team[1].idTeam - team id
    //team[1].strTeam - team name
    //team[1].strSport - sport anem


    //Get all league info========================================================================
    app.get("/api/:league", function (req, res) {
        const userLeague = req.params.league;
        const queryLeague = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + userLeague;

    }).then(function (league) {
        res.json(league);
    });


    //Get players by team name query========================================================================
    app.get("/api/team/players", function (req, res) {
        const userTeam = req.body;
        const queryTeam = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + userTeam;

    }).then(function (teamPlayers) {
        res.json(teamPlayers);
    });//TODO update to include this in the team query above since they take the same parameters
};

    //Get all sports query========================================================================
    app.get("/api/sports", function (req, res) {
        const sports = "https://www.thesportsdb.com/api/v1/json/1/all_sports.php#"

    }).then(function (sports) {
        res.json(sports);
    });

    //sports[i].idSport for i=0 to length
    //sports[i].strSport for i=0 to length
};

    //Get all leagues query========================================================================
    app.get("/api/leagues", function (req, res) {
        const leagues = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"

    }).then(function (leagues) {
        res.json(leagues);
    });
    
    //leagues[i].idLeague for i=0 to length
    //leagues[i].strLeague for i=0 to length
};





// List All teams details in a league by Id
// https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328

// List All players in a team by Team Id
// https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=133604

// League Details by Id
// https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4346

// Team Details by Id
// https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604

// Player Details by Id
// https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34145937

// Next 5 Events by Team Id
// https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133602

// Next 15 Events by League Id
// https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328

// Last 5 Events by Team Id
// https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=133602

// Last 15 Events by League Id
// https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328