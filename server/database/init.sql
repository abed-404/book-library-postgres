BEGIN;

DROP TABLE IF EXISTS users, books;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  age INTEGER,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  location VARCHAR(255)
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255) NOT NULL,
  edition INTEGER,
  img text,
  isDeleted boolean DEFAULT false
);

INSERT INTO books (isDeleted, title, author, edition, img) VALUES
  (false,'The complete English poems', 'Samuel Johnson', 33, 'https://covers.openlibrary.org/b/id/9708321-L.jpg'),
  (false,'The power of habit', 'Charles Duhigg', 13, 'https://covers.openlibrary.org/b/id/12577855-L.jpg'),
  (false,'Rich dad, poor dad', 'Robert T. Kiyosaki', 58, 'https://covers.openlibrary.org/b/id/12779582-L.jpg'),
  (true,'Rich dad, poor dad', 'Robert T. Kiyosaki', 58, 'https://covers.openlibrary.org/b/id/12779582-L.jpg')
;

COMMIT;