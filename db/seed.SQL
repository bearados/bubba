CREATE TABLE user_list (
    username varchar(255),
    password varchar(255)
);

CREATE TABLE user_scores (
    username varchar,
    score int,
    date_time date,
    FOREIGN KEY (username) REFERENCES user_list(username)
);