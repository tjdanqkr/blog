module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'header',
      {
        id: {
          type : DataTypes.INTEGER(),
          autoIncrement: true,
          primaryKey: true

        },
        png: {
            type: DataTypes.STRING(100),
            allowNull : true
        }
       
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};