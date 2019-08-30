$(document).ready(function(){
    var urlParams = new URLSearchParams(window.location.search);
    const league = urlParams.get("league");
    console.log(league);
    let id = "";
    //LeagueName(LeagueID) = NFL(4391), NBA(4387), MLB(4424), American Major League Soccer(4346)
    switch (league) {
        case 'NFL':
          id = 4391;
          title = "Football"
          break;
        case 'NBA':
          id = 4387;
          title = "Basketball"
          break;
        case 'MLB':
          id = 4424;
          title = "Baseball"
          break;
        case 'MLS':
          id = 4346;
          title = "Soccer"
          break;  
    }
    $(".sport-name").text(title);    
    
    const teamsList = []
    $.get(`/api/sport/${id}/teams`).then(function(data){
      data.teams.forEach(element => {
        let teamBasicInfo = {
             logo:  element.strTeamLogo,
             name: element.strTeam
        }
        teamsList.push(teamBasicInfo);
      });  
      console.log(teamsList);
      getPastEvents();
      getNextEvents();
    })


    function getPastEvents(){
      $.get(`/api/sport/${id}/pastevents`).then(function(data){
          console.log("Last Events:");
          console.log(data.events[0]);
          $("#match-title").text(data.events[0].strEvent);
          $("#match-date").text(data.events[0].dateEvent);
          $(".awayTeamName").text(data.events[0].strAwayTeam);
          $("#awayScore").text(data.events[0].intAwayScore);
          $("#homeScore").text(data.events[0].intHomeScore);

          const homeTeam = teamsList.find(obj => {
              return obj.name === data.events[0].strHomeTeam;
          });

          const awayTeam = teamsList.find(obj => {
            return obj.name === data.events[0].strAwayTeam;
          });

          $("#homeTeam").append(`
              <img src="${homeTeam.logo}">
              <p>${homeTeam.name}</p>
          `);
          $("#awayTeam").append(`
              <img src="${awayTeam.logo}">
              <p>${awayTeam.name}</p>
          `);
      })
    }

    function getNextEvents(){
      $.get(`/api/sport/${id}/nextevents`).then(function(data){
        console.log("Next Events:");
        console.log(data);
        data.events.forEach(element => {
          const dataHomeTeam = teamsList.find(obj => {
            return obj.name === element.strHomeTeam;
          });

          const dataAwayTeam = teamsList.find(obj => {
            return obj.name === element.strAwayTeam;
          });

          $("#nextMatches").append(`
            <div>
              <div class="match-detail text-center">
                <div class="logos">
                  <div class="home">
                    <img src="${dataAwayTeam.logo}">
                  </div>
                  <div class="vs">
                      VS
                  </div>
                  <div class="away">
                    <img src="${dataHomeTeam.logo}">
                  </div>
                </div>
                <p>${element.strEvent}</p>
                <p>${element.dateEvent}</p>
              <div>
            </div>
          `)
        }); 
        $('#nextMatches').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 3,
          autoplay: true,
        });

      })
    }
      
})//document.ready