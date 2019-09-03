$(document).ready(function(){
//     var urlParams = new URLSearchParams(window.location.search);
//     const league = urlParams.get("league");
//     console.log(league);
    // Create Account User Inputs
    // make get API request to backend `/api/${league}`
    // const  tmLogos = [];
    // $.get("/api/leagues").then(function(data){
    //     console.log(data)
    //     tmLogos.push(data.teams[11].strTeamLogo)
    //     tmLogos.push(data.teams[27].strTeamLogo)      

    // })

    // console.log(tmLogos);
    // for(let i=0;  i<= tmLogos.length; i++){
    //     $("#logos").append(`<div><img src="${tmLogos[i]}"></div> `) 
    // }

    // tmLogos.forEach(element =>{
    //     $("#logos").append(`<div><img src="${element}"></div> `) 
    // })\
   
   
   
    // Output data to your html

    // Build New User data for DB
       let nameInput = $("#nameInput")
       let userNameInput = $("#usernameInput")
       let passwordInput = $("#passwordInput")
       let favNbaInput = $("#favNba")
        let favNflInput = $("#favNfl")
        let favMlbInput = $("#favMlb")
        let favMlsInput = $("#favMls")       

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

    function submitUser (user) {
        $.post("/api/createUser", user).then( function (data) {
               console.log(data)
               window.location = `/user?id=${data.id}`
        })
    }

        // console.log($("#nameInput").val().trim(), $("#usernameInput").val().trim(), $("#passwordInput").val().trim(), $("#favNba").val().trim())
    })

//document.ready