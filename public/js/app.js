//FOUR SPORTS, FOOTBALL(4391), SOCCER, BASEBALL(4424), BASKETBALL(4387)
//TODO need four league id's

const queryNext15EventsByLeague = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=" + userLeagueID;



const queryTeam = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + userTeam;

const queryTeamPlayers = "https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=" + userTeam

//ajax query for random drinks for primary mood
$.ajax({
    url: queryDrinkURL1,
    method: "GET",
    headers: {
        "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
        "X-RapidAPI-Key": "d1d151fcf6msha9240c9ffb25a4bp14a1ddjsn58db10897e38"
    }
}).then(function (response) {