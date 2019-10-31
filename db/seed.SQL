CREATE TABLE user_list (
    ID SERIAL PRIMARY KEY,
    username varchar(255),
    password varchar(255)
);

CREATE TABLE user_scores (
    ID int,
    score int,
    date_time TIMESTAMP DEFAULT Now(),
    FOREIGN KEY (ID) REFERENCES user_list(ID)
);

INSERT INTO user_list(username, password) VALUES('jwick2018', 'pickwick');
INSERT INTO user_scores(ID, score) Values(1, 10);