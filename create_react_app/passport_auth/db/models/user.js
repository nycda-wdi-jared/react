'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  githubId: {
    type: Sequelize.STRING,
    unique: true
  },
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  salt: {
    type: Sequelize.STRING
  },
  password_hash: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.VIRTUAL,
    validate: {
      len: [7, 100]
    },
    set: function (value) { 
      var salt = bcrypt.genSaltSync(10);
      var hashedPassword = bcrypt.hashSync(value, salt);

      this.setDataValue('password', value);
      this.setDataValue('salt', salt);
      this.setDataValue('password_hash', hashedPassword);
    }
  }
});

module.exports = User;
