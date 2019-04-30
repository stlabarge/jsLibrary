module.exports = function (sequelize, DataTypes) {
    return sequelize.define('log', {
        description: DataTypes.STRING,
        definition: DataTypes.STRING,
        result: DataTypes.STRING,
        owner: DataTypes.INTEGER // req.user.id --> id number of user 


    });
};