const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize"); // Adjust the path as necessary

const FacultyPic = sequelize.define("FacultyPic", {
  fac_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  profile_pic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = FacultyPic;
