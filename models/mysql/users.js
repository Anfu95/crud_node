const { sequelize } = require('../../config/mysql');
const { DataTypes } = require("sequelize");

const Users = sequelize.define(
    "users",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.NUMBER,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true,
    }
);

Users.findAllData = function () {
    const data = this.findAll({});
    return data;
};

Users.findOneData = function (id) {
    const data = this.findOne({where: {id}});
    return data;
};

Users.findOneAndUpdate = function (id, body) {
    const data = this.update(body, {where: {id}});
    return data;
};

Users.deleteOne = function (id) {
    const data = this.destroy({where: {id}});
    return data;
};

module.exports = Users;