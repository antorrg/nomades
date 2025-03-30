import { DataTypes } from'sequelize';

export default (sequelize) => {
    sequelize.define("Landing", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          info_header:{
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
        enable:{
          type: DataTypes.BOOLEAN,
          defaultValue:true
      } 
    },{timestamps: false});
};