//*api-routes.js===================================================================================
//
//Notes:
//LeagueName(LeagueID) = NFL(4391), NBA(4387), MLB(4424), American Major League Soccer(4346)


// Requiring our models
const db = require("../models");
const axios = require("axios");

// Routes==========================================================================================
module.exports = function (app, anything) {

    
    //Get all teams by league======================================================================
    app.get("/api/sport/:league", function (req, res) {
        const userLeague = req.params.league;
        const queryLeague = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${userLeague}`;
        console.log(queryLeague);

        axios.get(queryLeague).then(function (league) {
            console.log
            res.json(league.data);
        });
    });
    //teams[i].idTeam
    //teams[i].strTeam

    //Get team info by name========================================================================
    app.get("/api/team/:name", function (req, res) {
        const userTeamName = req.params.name;
        const queryTeam = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${userTeamName}`;

        axios.get(queryTeam).then(function (team) {
            res.json(team.data);
        });
    });
    //team[1].idTeam - team id
    //team[1].strTeam - team name
    //team[1].strSport - sport anem


    //Get players by team name query===============================================================
    app.get("/api/team/:name/players", function (req, res) {
        const userTeam = req.params.name;
        const queryTeamPlayers = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${userTeam}`;

        axios.get(queryTeamPlayers).then(function (teamPlayers) {
            res.json(TeamPlayers.data);
        });
    });

    //Get next 5 events by Team ID=================================================================
    app.get("/api/team/:teamId/nextevents", function (req, res) {
        const userTeamId = req.params.teamId;
        const queryTeamId = `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${userTeamId}`;

        axios.get(queryTeamId).then(function (teamNext5) {
            res.json(teamNext5.data);
        });
    });

    //Get last 5 events by Team ID=================================================================
    app.get("/api/team/:teamId/lastevents/", function (req, res) {
        const userTeamId = req.params.teamId;
        const queryTeamId = `https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${userTeamId}`;

        axios.get(queryTeamPlayers).then(function (teamLast5) {
            res.json(teamLast5.data);
        });
    });
    //Get next 15 events by League ID=================================================================
    app.get("/api/sport/:leagueId/nextevents", function (req, res) {
        const userLeagueId = req.params.leagueId;
        const queryLeagueId = `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${userLeagueId}`;

        axios.get(queryLeagueId).then(function (leagueNext15) {
            res.json(leagueNext15.data);
        });
    });
    //Get last 15 events by League ID=================================================================
    app.get("/api/sport/:leagueId/pastevents", function (req, res) {
        const userLeagueId = req.params.leagueId;
        const queryLeagueId = `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${userLeagueId}`;

        axios.get(queryLeagueId).then(function (leaguePastEvents) {
            res.json(leaguePastEvents.data);
        });
    });

    app.get("/api/sport/:leagueId/teams", function (req, res) {
        const leagueId = req.params.leagueId;
        db.Team.findAll({
            where: {
                league_id: leagueId
            }
        }).then(function(teamInfo) {
            res.json(teamInfo);
        })
    });

    //     axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${leagueId}`).then(function (allTeams) {
    //         console.log(allTeams.data)
    //         res.json(allTeams.data);
    //     });
    // });

    //Get all sports query=========================================================================
    app.get("/api/sports", function (req, res) {
        axios.get("https://www.thesportsdb.com/api/v1/json/1/all_sports.php#")
            .then(function (allTeams) {
                res.json(allTeams.data);
            });
    });
    //sports[i].idSport for i=0 to length
    //sports[i].strSport for i=0 to length

    //Get all leagues query========================================================================
    // app.get("/api/leagues", function (req, res) {
    //     axios.get("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php").then(function (allLeagues) {
    //         res.json(allLeagues.data);
    //     });
    // });
    app.get("/api/leagues", function (req, res) {
        axios.get("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391").then(function (allTeams) {
            res.json(allTeams.data);
        });
    });

    app.post("/api/createUser", function (req, res) {

        db.Users.create(req.body).then(function (newUser) {
            res.json(newUser);
            console.log(newUser)
        })
    })


    app.get("/api/user/:id", function (req,res) {
        const userId = req.params.id;
        db.Users.findOne({ 
            where: {
                id: userId
            } 
        }).then(function(userInfo){
            console.log(userInfo)
            res.json(userInfo); 
        })
    })
}
