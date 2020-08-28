
exports.up = function(knex) {
  return knex.schema.createTable('users',tbl => {
      tbl.increments('id')
      tbl.string('username')
        .notNullable()
        .unique()
      tbl.string('password')
        .notNullable()
  })
  .createTable('recommendations', tbl => {
      tbl.increments('id')
      tbl.integer('userid')
      tbl.string('description')
      tbl.string('effect')
      tbl.string('flavor')
      tbl.string('rating') 
      tbl.string('type')
      tbl.string('strain')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('recommendations')
};


