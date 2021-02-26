def eighties_b_movies
  # List all the movies from 1980-1989 with scores falling between
  # 3 and 5 (inclusive).
  # Show the id, title, year, and score.
  Movie
    .select(:id, :title, :yr, :score)
    .where('yr BETWEEN ? AND ? AND score BETWEEN ? AND ?', 1980, 1989, 3, 5)

end

def bad_years
  # List the years in which a movie with a rating above 8 was not released.
  # subquery = Movie.select('*').where('score > ?', 8)

  Movie
    .group(:yr)
    .having('MAX(score) < ?', 8)
    .distinct.pluck(:yr)
end

def cast_list(title)
  # List all the actors for a particular movie, given the title.
  # Sort the results by starring order (ord). Show the actor id and name.

  Movie
    .select('actors.id', :name)
    .joins(:actors)
    .where(movies: {title: title})
    .order('castings.ord')

end

def vanity_projects
  # List the title of all movies in which the director also appeared
  # as the starring actor.
  # Show the movie id and title and director's name.

  # Note: Directors appear in the 'actors' table.
  Movie
    .select(:id, :title, 'actors.name')
    .joins(:actors)
    .where('actors.id = movies.director_id')
    .where('ord = 1')

end

def most_supportive
  # Find the two actors with the largest number of non-starring roles.
  # Show each actor's id, name and number of supporting roles.

  Actor
    .select(:id, :name, 'COUNT(castings.actor_id) as roles')
    .joins(:castings)
    .where.not(castings: { ord: 1 })
    .group('actors.id')
    .order('roles DESC')
    .limit(2)

end

# SELECT actors.id, actors.name, COUNT(ord)
# FROM actors 
# JOIN castings ON castings.actor_id = actors.id 
# WHERE ord != 1 
# GROUP BY actors.id
# ORDER BY COUNT(ord) DESC
# LIMIT 2;

