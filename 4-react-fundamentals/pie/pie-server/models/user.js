module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName : {
          type : DataTypes.STRING,
          allowNull : false  
        },
        lastName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique: true //only one email. if you sign up with it again it wont allow it
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false
        }

    });

    return User;
}