/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movielist').del()
  await knex('movielist').insert([
    {title:'Blue Hawaii' , genre:'Romantic Comedy' , release_year: 1961, cover:'https://jrarcieri.files.wordpress.com/2012/06/blue-hawaii-1961.jpg'},
    {title:'G.I. Blues' , genre:'Romantic Comedy' , release_year: 1960, cover: 'https://image.tmdb.org/t/p/original/8vsi3ezokYXLxccEWJ2sbXj80sF.jpg'},
    {title:'Jailhouse Rock' , genre:'Musical Drama' , release_year: 1957, cover: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Jailhouse_Rock_%281957_poster_-_one-sheet%29.jpg'},
    {title:'Speedway' , genre:'Romantic Comedy' , release_year: 1968 , cover: 'https://en-academic.com/pictures/enwiki/83/SpeedwayElvis.jpg'},
    {title:'Viva Las Vegas' , genre:'Romantic Comedy' , release_year: 1964 , cover: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTpGIH463eusZDhU467n6zsMpD5_3QijtFBN3zfuEK7e2LKFVmt'},
  ]);
};
