CREATE DATABASE referral; 
USE referral;

CREATE TABLE refTable (
  id SERIAL PRIMARY KEY,
  referrer_name VARCHAR(100) NOT NULL,
  referrer_email VARCHAR(255) NOT NULL,
  referrer_phone CHAR(10) NOT NULL,
  referee_name VARCHAR(100) NOT NULL,
  referee_email VARCHAR(255) NOT NULL,
  referee_phone CHAR(10) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (referrer_email, referee_email),
  UNIQUE (referrer_phone, referee_phone)
);

