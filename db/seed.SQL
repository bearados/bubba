CREATE TABLE user_list (
    ID SERIAL PRIMARY KEY,
    username varchar(255),
    password varchar(255)
);

CREATE TABLE user_scores (
    id serial PRIMARY KEY,
    userid int,
    score int,
    test varchar(255),
    today DATE DEFAULT CURRENT_DATE,
    qtime TIME DEFAULT CURRENT_TIME,
    FOREIGN KEY (userid) REFERENCES user_list(ID)
);

INSERT INTO user_list(username, password) VALUES('jwick2018', 'pickwick');
INSERT INTO user_scores(userid, score, test) Values(1, 20, 'addition');