"use strict";

const { NUMBER, STRING, INTEGER } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("roles", {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      },
      role: {
        type: STRING,
        allowNull: false,
      },
    });
    await queryInterface.createTable("roles", {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: INTEGER,
        allowNull: false,
      },
      role: {
        type: STRING,
        allowNull: false,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("roles");
  },
};
