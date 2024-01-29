import { Knex } from 'knex';

import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETableNames.person, table => {
      table.bigIncrements('person_id').primary().index();
      table.string('full_name').index().notNullable();
      table.string('email').unique().notNullable();
      table.integer('city_id').unsigned().notNullable();

      table
        .foreign('city_id')
        .references('city_id')
        .inTable(ETableNames.city)
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');


      table.comment('Tabela usada para armazenar pessoas do sistema.');
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.person}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETableNames.person)
    .then(() => {
      console.log(`# Dropped table ${ETableNames.person}`);
    });
}
