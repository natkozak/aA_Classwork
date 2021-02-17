PRAGMA foreign_keys = ON;

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

  CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  follow BOOLEAN NOT NULL,
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
  FOREIGN KEY(question_id) REFERENCES questions (id)
  FOREIGN KEY(parent_reply_id) REFERENCES replies (id),  
  );

