module.exports = function (sequelize, DataTypes) {
    const Team = sequelize.define("Team", {
        team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        team_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sport_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        league_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        logo_url: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Team;
};