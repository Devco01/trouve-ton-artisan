import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Specialty from './Specialty';

class Artisan extends Model {
  public id!: number;
  public name!: string;
  public specialtyId!: number;
  public rating!: number;
  public city!: string;
  public description!: string;
  public email!: string;
  public website?: string;
  public isFeatured!: boolean;
  public image?: string;
}

Artisan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialtyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'specialties',
        key: 'id',
      },
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 5,
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    isFeatured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Artisan',
    tableName: 'artisans',
    timestamps: true,
  }
);

// Définir la relation avec Specialty
Artisan.belongsTo(Specialty, { foreignKey: 'specialtyId' });
Specialty.hasMany(Artisan, { foreignKey: 'specialtyId' });

export default Artisan; 