module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'admin',
      {
        
        userid :{
            type: DataTypes.STRING(100),
            allowNull : true
        },
        pass:{
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