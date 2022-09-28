-- New DB for users, access rights, and data

-- Create new DB
CREATE SCHEMA leaderboard;

-- Use the new DB
USE leaderboard;

-- Create tables

-- 1. users
CREATE TABLE users (
	UserID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    UserName VARCHAR(25) UNIQUE NOT NULL,
    DateCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. scores
CREATE TABLE scores (
UserID INT NOT NULL,
ScoreID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
EasyScore TINYINT DEFAULT 0 NOT NULL,
EasyCompletionTime TIME DEFAULT 0 NOT NULL,
HardScore TINYINT DEFAULT 0 NOT NULL,
HardCompletionTime TIME DEFAULT 0 NOT NULL,
OverkillScore TINYINT DEFAULT 0 NOT NULL,
OverkillCompletionTime TIME DEFAULT 0 NOT NULL,
CONSTRAINT fk_UserID FOREIGN KEY (UserID)
REFERENCES users(UserID)
);


INSERT INTO users SET UserName = 'TheBigH34';
SELECT * FROM users;
SELECT * FROM scores;
DELETE FROM users WHERE UserID = 4;
-- INSERT INTO easyscores (UserID)
-- SELECT UserID FROM users WHERE UserName= 'TheBigH34';
INSERT INTO easyscores SET UserID= '5', Score= '32', CompletionTime = '457';


