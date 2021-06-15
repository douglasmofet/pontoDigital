import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('entrance', table => {
        table.increments('id').primary();
        table.integer('userId').notNullable();
        table.time('hour').notNullable();
        table.date('date').notNullable();
        table.integer('type').notNullable();
        table.integer('status').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('entrance');
}