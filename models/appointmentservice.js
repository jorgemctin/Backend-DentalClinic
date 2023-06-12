'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AppointmentService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    models.AppointmentService.belongsTo(
      models.Appointment,
      {
        foreignKey: 'service_id',
      });
    }
  };
  AppointmentService.init({
    appointment_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AppointmentService',
  });
  return AppointmentService;
};