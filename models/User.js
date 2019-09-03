module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
          is: ["^[a-z]+$",'i']
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3]
        }
      },
      password: {
          type: DataTypes.STRING,
          validate: {
              len: [3, 15]
          }
      },
      basketball: {
          type: DataTypes.STRING
      },
      football: {
          type: DataTypes.STRING
      },
      baseball: {
          type: DataTypes.STRING
      },
      soccer: {
          type: DataTypes.STRING
      }
    });

  
    // User.associate = function(models) {
    //   // We're saying that a Post should belong to an Author
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Post.belongsTo(models.Author, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };

    Users.prototype.validatePassword = function (val) {
      return this.password === val;
    }
  
    return Users;
  };
  