// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../sequelize');
// module.exports = () => {
//   class Downloads extends Model {}
//   Downloads.init({
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     downloads: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     items: {
//       type: DataTypes.JSONB,
//       allowNull: false,
//       defaultValue: []
//     }
//   }, {
//     sequelize,
//     modelName: 'Downloads'
//   });
//   return Downloads;
// };

const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Downloads = sequelize.define('Downloads', {
  id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        downloads: {
          type: DataTypes.STRING,
          allowNull: false
        },
        items: {
          type: DataTypes.JSONB,
          allowNull: false,
          defaultValue: []
        }
});

module.exports = Downloads;
