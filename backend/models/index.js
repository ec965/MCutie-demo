const { Sequelize, Op} = require("sequelize");
const MsgModel = require("./msg");
const SubModel = require('./sub');
const logger = require("../config/pino");

const sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:test123@localhost:5432/mcutie", {
  logging: msg => logger.debug(msg),
});

const Msg = MsgModel(sequelize);
const Sub = SubModel(sequelize);

// if rows.length > 7000, delete all rows older than 1 day.
async function limitMsgRows(){
  let rows = await Msg.findAll({
    attributes: ['id']
  });

  if (rows.length > 5000){
    await Msg.destroy({
      where:{
        createdAt: {
          [Op.lte]: (new Date() - 1 * 24 * 60 * 60 * 1000)
        }
      }
    })
  }
}

async function limitSubRows(){
  let rows = await Sub.findAll({
    attributes: ['id']
  })

  if (rows.length > 200) return true;

  return false;
}

module.exports = {
  sequelize,
  Msg,
  Sub,
  limitMsgRows,
  limitSubRows,
};