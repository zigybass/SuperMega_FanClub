$(document).ready(function(){

    var urlParams = new URLSearchParams(window.location.search);
    const league = urlParams.get("league");
    console.log(league);
    // Create Account User Inputs
    // make get API request to backend `/api/${league}`
    $.get(`/api/sport/${league}`).then(function(data){
        console.log(data);
    })
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
            favNba: favNbaInput.val(),
            favNfl: favNflInput.val(),
            favMlb: favMlbInput.val(),
            favMls: favMlsInput.val()      
         }
        submitUser(newUser);
        console.log(newUser)
    })

    function submitUser (user) {
        $.post("/api/createUser", user, function () {
               console.log(user)
        })
    }

        // console.log($("#nameInput").val().trim(), $("#usernameInput").val().trim(), $("#passwordInput").val().trim(), $("#favNba").val().trim())
    })

//document.ready