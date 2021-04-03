
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('common.teachers').del()
    .then(function () {
      // Inserts seed entries
      return knex('common.teachers').insert([
        {name: 'Juan', lastname: 'Carranza', email: 'salmuzblues@gmail.com', phone:'45-6556-890'},
        {name: 'Jose', lastname: 'Carranza', email: 'jose@gmail.com', phone:'45-3333-890'},
        {name: 'Ricardo', lastname: 'Melgarejo', email: 'melgarejo@gmail.com', phone:'990-3333-890'},
      ]);
    });
};
