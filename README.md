
# Super Mega Fun Fan Club, EX

### Link to project: [Here](https://arcane-wildwood-00150.herokuapp.com/)

## Team Members
- Balwinder Singh
- Coti Garcia
- Chris Zeigler
- Max Coursey

<img width="1350" alt="Screen Shot 2019-10-13 at 5 10 43 PM" src="https://user-images.githubusercontent.com/50716272/66875032-ee9fa800-ef7a-11e9-8ecc-c871b3f8a876.png">


## Project Description
### Overview
- Sports fan club website allowing personalized selection of sports teams & players. Once a user chooses a selection of teams from various sports
both national and international, the website populates content based on these selections. Team players, statistics, match results, upcoming events, 
and historical match data is gathered from a sports database API and aggregated into a specific user's view. Sports ranges from domestic football, 
soccer, basketball, tennis, baseball, and racing, to international teams in futbol, cricket, F1, etc.  Each user will set up a unique login with 
password.

### IceBox
    - To connect the teams and players to a youtube API database to pull in highlight reels of past team games, past events where two teams played
    each other, and/or player highlight videos and news videos.
    - User presets from Database are sent to Youtube API to render possible highlights.
    - User can make "bets": User picks a team to win in the upcoming game.

## Initial User Stories
    - User creates a log in. Login and password are stored to database. 
    - Once User is logged in, they can select from dropdowns. These dropdowns list out all American sports teams from Football, Baseball, and Soccer. User can save any of these presets in their profile. 
    - When User logs back in, data is pulled from Database to load up their presets to the mainpage. Or presets are saved into the corresponding database.
    - User can delete or add teams to their favorites/profile. 
    - Database tells SportsDB to deliver team data to the front end. 
    - Data includes match results, upcoming games, players, any historical data which are all rendered to DOM for User. 

## Sketch of Product

https://xd.adobe.com/view/bbfce2f6-60ac-4c26-6a51-fdde6df878ce-cdcd/

## Rough Breakdown of Tasks 
    - WireFrame website
    - Scaffolding Javascript 
        - classes/methods
        - models
    - API query creation (SportsDB)
    - HTML file drafts
    - CSS file drafts
    - API/HTML Route Requests
    - mySQL database creation
    - post request db updates
    - JSS Method testing
