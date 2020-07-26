import Sequelize from 'sequelize';

import City from '../app/models/City';
import Request from '../app/models/Request';

import databaseConfig from '../config/database';

const models = [City, Request];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
