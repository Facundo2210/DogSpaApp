const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      height: {
        type: DataTypes.JSON, //recibe un objeto con edad minima y maxima arreglar esto
        allowNull: false,
      },
      weight: {
        type: DataTypes.JSON, //recibe un objeto con peso minimo y maximo arreglar esto
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING, //recibe string alfanumerico arreglar esto
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
