const axios = require("axios");
const db = require("./models");
//LeagueName(LeagueID) = NFL(4391), NBA(4387), MLB(4424), American Major League Soccer(4346)
const teamsObjArr = [];
const leaguesObj = {};
// getLeagues();

// const promise1 = new Promise(function (resolve, reject) {

function aggregateTeams() {
    return new Promise(function (resolve, reject) {
        // if(err) {
        //     reject(err);//TODO not sure if this is right
        // }
        const userLeague = [4387, 4391, 4424, 4346];
        for (let i = 0; i < userLeague.length; i++) {
            console.log(userLeague[i]);
            const queryLeague = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${userLeague[i]}`;
            getTeamsByLeague(queryLeague).then(function () {
                console.log(leaguesObj);
                resolve(teamsObjArr);
            });
        };
    });
};

function getTeamsByLeague(queryLeague) {
    return axios.get(queryLeague).then(leagueTeams => {
        const allTeamsByLeague = leagueTeams.data.teams;
        for (let j = 0; j < allTeamsByLeague.length; j++) {
            teamsObjArr.push({
                team_id: allTeamsByLeague[j].idTeam,
                team_name: allTeamsByLeague[j].strTeam,
                sport_name: allTeamsByLeague[j].strSport,
                league_id: allTeamsByLeague[j].idLeague,
                logo_url: allTeamsByLeague[j].strTeamBadge
            });
        }
    });
};

aggregateTeams().then(function (value) {   ///value should equal the resolved teamsObjArr
    console.log('inside');
    db.sequelize.sync({ force: true }).then(function () {
        db.Team.bulkCreate(value).then(function (rows) {
            console.log(`\n${rows.length} Rows Inserted`);
        }).catch(function (err) {
            console.log(`\nError:, err`)
        });
    });
    // for (let i in teamsObjArr) {
    //     console.log(teamsObjArr[i]);
    //     db.Team.create({
    //         team_id: teamsObjArr[i].id,
    //         team_name: teamsObjArr[i].name,
    //         sport_name: teamsObjArr[i].sportName,
    //         league_id: teamsObjArr[i].leagueId
    //     });
    // }
});


