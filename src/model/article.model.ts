import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

@Table
export default class Article extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: bigint;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  title: string;

  @Column(DataType.TEXT)
  description: string;

  //   url 대부분이 최대길이가 2048임
  @Column(DataType.STRING(2048))
  image: string;

  @Column(DataType.STRING)
  location: string;

  @Column(DataType.INTEGER)
  price: number;

  @Column(DataType.BOOLEAN)
  isAdjustable: boolean;
}
