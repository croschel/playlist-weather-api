import Sequelize, { Model } from 'sequelize';

class City extends Model {
  static init(sequelize) {
    super.init(
      {
        city: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default City;
