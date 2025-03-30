import { DataTypes } from'sequelize';

export default (sequelize) => {
    sequelize.define("Work", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          image: {
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
