'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'db', 'db.json'))[
    env
  ];
const db = {};

//db 연결
let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    }
  );
  
    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.log('Unable to connect to the database: ', err);
    });

db.secret = '(9*)5$&!3%^0%^@@2$1!#5@2!4';
//테이블 생성
db.Header = require('./header')(sequelize, Sequelize);
db.Category = require('./category')(sequelize, Sequelize);
db.Board = require('./board')(sequelize, Sequelize);
db.Admin = require('./admin')(sequelize, Sequelize);
db.Category.hasMany(db.Board,{
  foreignKey: 'category',
  sourceKey : 'id'
})
module.exports = db;