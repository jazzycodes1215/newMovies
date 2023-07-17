/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie_table').del()
  await knex('movie_table').insert([
    {id: 0, movie_name: 'Mean Girls'},
      {id: 1, movie_name: 'Hackers'},
      {id: 2, movie_name: 'The Grey'},
      {id: 3, movie_name: 'Sunshine'},
      {id: 4, movie_name: 'Ex Machina'}
  ]);
};
