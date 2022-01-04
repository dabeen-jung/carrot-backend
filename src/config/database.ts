import { Sequelize } from "sequelize-typescript";
import path from "path";

const sequelize = new Sequelize("carrot", "root", "비밀번호", {
  dialect: "mysql",
  models: [path.join(__dirname, "../model")],
});

export default sequelize;
