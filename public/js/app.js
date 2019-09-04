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
                            break;
                        case 4391:
                            domElem = $("#favNfl");

                            break;
                        case 4424:
                            domElem = $("#favMlb");
                            break;
                        case 4346:
                            domElem = $("#favMls");
                            break;
                    }
                    domElem.append(`<option value=${data[j].team_id}>${data[j].team_name}</option>`);
                }
            })
        }
    };

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
        const queryType = $(this).text().trim()
        console.log(queryType)
        const teamId = $(this).parent().attr("value") //assumes that UL parent will have a value equal to team ID

        if (queryType === "Players") {
            $.get(`/api/team/${teamId}/players`, function (teamData) {
            }).then(function (playerData) {
                for (let i = 0; i < playerData.player.length; i++) {
                    console.log(playerData.player[i].strPlayer)
                }
            })
        } else {
            console.log(teamId + "else")
            $.get(`/api/team/${teamId}`, function (teamData) { })
                .then(function (teamData) {
                    console.log(teamData.teams[0].strDescriptionEN)
                    console.log(teamData.teams[0].strStadiumThumb)
                    
                })

        }
    });
});
    // console.log($("#nameInput").val().trim(), $("#usernameInput").val().trim(), $("#passwordInput").val().trim(), $("#favNba").val().trim())
//document.ready
