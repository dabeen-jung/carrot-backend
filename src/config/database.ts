import { Sequelize } from "sequelize-typescript";
import path from "path";

const sequelize = new Sequelize("carrot", "root", "mysql비번", {
  dialect: "mysql",
  models: [path.join(__dirname, "../model")],
});

export default sequelize;
