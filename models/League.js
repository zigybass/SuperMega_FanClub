module.exports = function (sequelize, DataTypes) {
    const League = sequelize.define("League", {
        league_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        league_name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return League;
};