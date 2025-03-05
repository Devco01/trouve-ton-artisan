import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Category from './Category';

class Specialty extends Model {
  public id!: number;
  public name!: string;
  public categoryId!: number;
}

Specialty.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Specialty',
    tableName: 'specialties',
    timestamps: true,
  }
);

// Définir la relation avec Category
Specialty.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Specialty, { foreignKey: 'categoryId' });

export default Specialty; 