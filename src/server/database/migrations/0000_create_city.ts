import { Knex } from 'knex';

import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETableNames.city, table => {
      table.increments('city_id').primary().unsigned().notNullable();
      table.string('name', 150).checkLength('<=', 150).index().notNullable();

      table.comment('Tabela usada para armazenar cidades do sistema.');
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.city}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETableNames.city)
    .then(() => {
      console.log(`# Dropped table ${ETableNames.city}`);
    });
}
