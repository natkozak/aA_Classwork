PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS reply_likes;
DROP TABLE IF EXISTS question_likes;
DROP TABLE IF EXISTS replies;
DROP TABLE IF EXISTS question_follows;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,

  FOREIGN KEY(author_id) REFERENCES users (id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  author_id INTEGER NOT NULL,
  liker_id INTEGER NOT NULL,

  FOREIGN KEY(author_id) REFERENCES users (id),
  FOREIGN KEY(liker_id) REFERENCES users (id),
  FOREIGN KEY(question_id) REFERENCES questions (id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  author_id INTEGER NOT NULL,
  follower_id INTEGER NOT NULL,

  FOREIGN KEY(author_id) REFERENCES users (id),
  FOREIGN KEY(follower_id) REFERENCES users (id),
  FOREIGN KEY(question_id) REFERENCES questions (id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,  
  body TEXT NOT NULL,
  question_id INTEGER NOT NULL,
  author_id INTEGER NOT NULL,
  parent_reply_id INTEGER,  

  FOREIGN KEY(author_id) REFERENCES users (id),  
  FOREIGN KEY(question_id) REFERENCES questions (id),
  FOREIGN KEY(parent_reply_id) REFERENCES replies (id)  
);

CREATE TABLE reply_likes (
  id INTEGER PRIMARY KEY,
  reply_id INTEGER NOT NULL,
  author_id INTEGER NOT NULL,
  liker_id INTEGER NOT NULL,

  FOREIGN KEY(author_id) REFERENCES users (id),
  FOREIGN KEY(liker_id) REFERENCES users (id),
  FOREIGN KEY(reply_id) REFERENCES replies (id)
);


INSERT INTO 
  users (fname, lname)
VALUES
  ('Nat', 'Kozak'),
  ('Mike', 'Dean'),
  ('James', 'Bean'),
  ('Watson', 'Fluffy'),
  ('Benedict', 'Cumberbatch');

INSERT INTO 
  questions (title, body, author_id)
VALUES
  ( 'Why am I blue?', 
    'My skin turned blue yesterday. What do I do?', 
    (SELECT id FROM users WHERE fname = 'James' AND lname = 'Bean')
    ),
  ( 'Why am I cool?', 
    'I''m just so cool. But maybe I''m also a nerd? Please advise.', 
    (SELECT id FROM users WHERE fname = 'Nat' AND lname = 'Kozak')
    ),
  ( 'Why is my dog so cute?', 
    'Sometimes he''s so cute I don''t know what to do. Please help!!!', 
    (SELECT id FROM users WHERE fname = 'Mike' AND lname = 'Dean')
    );

INSERT INTO
  question_follows (question_id, author_id, follower_id)
VALUES
  ( (SELECT id FROM questions WHERE title = 'Why is my dog so cute?' AND body = 'Sometimes he''s so cute I don''t know what to do. Please help!!!'), 
    (SELECT id FROM users WHERE fname = 'Mike' AND lname = 'Dean'),
    (SELECT id FROM users WHERE fname = 'Nat' AND lname = 'Kozak')
);

INSERT INTO
  replies (body, question_id, author_id, parent_reply_id)
VALUES
  ( 'Have you considered that you might be a geek?',
    (SELECT id FROM questions WHERE title = 'Why am I cool?' AND body = 'I''m just so cool. But maybe I''m also a nerd? Please advise.'), 
    (SELECT id FROM users WHERE fname = 'Benedict' AND lname = 'Cumberbatch'), 
    NULL
  ),
  ( 'You might even be all three!',
    (SELECT id FROM questions WHERE title = 'Why am I cool?' AND body = 'I''m just so cool. But maybe I''m also a nerd? Please advise.'), 
    (SELECT id FROM users WHERE fname = 'Benedict' AND lname = 'Cumberbatch'),
    (SELECT id FROM replies WHERE body = 'Have you considered that you might be a geek?')
);

INSERT INTO
  question_likes (question_id, author_id, liker_id)
VALUES
  (
    (SELECT id FROM questions WHERE title = 'Why is my dog so cute?' AND body =
    'Sometimes he''s so cute I don''t know what to do. Please help!!!'),
    (SELECT id FROM users WHERE fname = 'Mike' AND lname = 'Dean'),
    (SELECT id FROM users WHERE fname = 'Watson' AND lname = 'Fluffy')
);

INSERT INTO
  reply_likes (reply_id, author_id, liker_id)
VALUES
  (
    (SELECT id FROM replies WHERE body = 'Have you considered that you might be a geek?'),
    (SELECT id FROM users WHERE fname = 'Benedict' AND lname = 'Cumberbatch'),
    (SELECT id FROM users WHERE fname = 'Benedict' AND lname = 'Cumberbatch')
);
