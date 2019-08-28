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


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal",
        "method": "GET",
        "headers": {
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
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
});
