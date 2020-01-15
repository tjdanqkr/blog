module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'board',
      {
        
        title: {
            type: DataTypes.STRING(100),
            allowNull : true
        },
        category:{
            type : DataTypes.INTEGER(),
            allowNull : true,
        } ,
        content:{ 
            type: DataTypes.STRING(1000),
            allowNull : true
        },
        atime:{
            type:DataTypes.STRING(100),
            allowNull : true
        } 
       
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};