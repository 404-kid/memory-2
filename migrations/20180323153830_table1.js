
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('coffee', function(table) {
      table.increments('id')
      table.string('name')
      table.string('roaster')
      table.integer('aroma')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
        knex.schema.dropTable('coffee')
    ])
};
