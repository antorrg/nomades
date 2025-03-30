import { DataTypes } from'sequelize';

export default (sequelize) => {
    sequelize.define("Media", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          type: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          title: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          text: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
        enable:{
          type: DataTypes.BOOLEAN,
          defaultValue:true
      } 
    },{timestamps: false});
};
