import { DataTypes } from'sequelize';

export default (sequelize) => {
    sequelize.define("Item", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        img: {
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
