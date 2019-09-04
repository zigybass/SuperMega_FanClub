$(document).ready(function () {

    // Build New User data for DB
    let nameInput = $("#nameInput")
    let userNameInput = $("#usernameInput")
    let passwordInput = $("#passwordInput")
    let favNbaInput = $("#favNba")
    let favNflInput = $("#favNfl")
    let favMlbInput = $("#favMlb")
    let favMlsInput = $("#favMls")

    getTeamWithIDs();

    const teamsNFL = [];
    const teamsNBA = [];
    const teamsMLS = [];
    const teamsMLB = [];

    //Query seeded database with each of four league ID and receives teams by league
    //Sends to createTeamRow to create rows for each team in a league
    //Sends to renderTeamList to append each section of league rows to DOM
    function getTeamWithIDs() {
        const userLeague = [4387, 4391, 4424, 4346];
        for (let i = 0; i < userLeague.length; i++) {
            const teamsToAdd = [];
            $.get(`api/sport/${userLeague[i]}/teams`, function (data) {
                console.log(data);
                for (let j = 0; j < data.length; j++) {
                    let domElem = "";
                    switch (userLeague[i]) {
                        case 4387:
                            domElem = $("#favNba");
                            array = teamsNBA
                            break;
                        case 4391:
                            domElem = $("#favNfl");
                            array = teamsNFL
                            break;
                        case 4424:
                            domElem = $("#favMlb");
                            array = teamsMLB
                            break;
                        case 4346:
                            domElem = $("#favMls");
                            array = teamsMLS
                            break;
                    }
                    domElem.append(`<option value=${data[j].team_id}>${data[j].team_name}</option>`);
                    array.push(data[j])
                }
            })
        }

    };

    $("#submitLogin").on("click", function (e) {
        e.preventDefault();
        let userLogin = $("#username1").val().trim();
        submitLog(userLogin)
    })

    // Send new User data to backend to store in DB
    $("#createUser").on("click", function (e) {
        e.preventDefault();
        const newUser = {
            name: nameInput.val().trim(),
            username: userNameInput.val().trim(),
            password: passwordInput.val().trim(),
            basketball: favNbaInput.val(),
            football: favNflInput.val(),
            baseball: favMlbInput.val(),
            soccer: favMlsInput.val()
        }
        submitUser(newUser);
        console.log(newUser)
    })

    function submitUser(user) {
        $.post("/api/createUser", user).then(function (data) {
            console.log(data)
            window.location = `/user?id=${data.id}`
        })
    }
    //click function for players of each user selected team
    $("li").unbind("click").click(function (e) {
        e.preventDefault()
        const teamId = $(this).parent().attr("value") //assumes that UL parent will have a value equal to team ID


    let userId;
    function submitLog(user) {
        $.post("/api/login", user).then( function (data) {
            console.log(data)
            
            if (data === null) {
                return alert("Not a valid username")
            } else {
                userId = data.id
            window.location = `/user?id=${data.id}`
            }

        })
    }

    // console.log($("#nameInput").val().trim(), $("#usernameInput").val().trim(), $("#passwordInput").val().trim(), $("#favNba").val().trim())
})
        $.get(`/api/userplayers/${teamId}`, function (playerData) {
        }).then(function (playerData) {
            for (let i = 0; i < playerData.player.length; i++) {
                console.log(playerData.player[i].strPlayer)
            }
        })

        $.get(`/api/userteam/${teamId}`, function (teamData) {
        }).then(function (teamData) {
                console.log(teamData.teams[0].strDescriptionEN)
                console.log(teamData.teams[0].strStadiumThumb)
        })
    });
    // console.log($("#nameInput").val().trim(), $("#usernameInput").val().trim(), $("#passwordInput").val().trim(), $("#favNba").val().trim())
//document.ready
