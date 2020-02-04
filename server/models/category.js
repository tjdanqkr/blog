module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'category',
      {
        id: {
          type : DataTypes.INTEGER(),
          autoIncrement: true,
          primaryKey: true

        },
        category:{
            type : DataTypes.STRING(100),
            allowNull : true,
        }
       
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};