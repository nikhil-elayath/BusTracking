drop database if exists bus_tracking;
create database bus_tracking;

\c bus_tracking;

CREATE TABLE users
(
    user_id SERIAL,
    f_name VARCHAR(255),
    l_name VARCHAR (255),
    dob DATE,
    email_id VARCHAR(255),
    pin INT,
    phone_number VARCHAR(255),
    gender VARCHAR(10),
    street_name VARCHAR(100),
    city_name VARCHAR(100),
    state_name VARCHAR(100),
    city_id INT,
    state_id INT,
    country_id INT


);

CREATE TABLE drivers
(
    driver_id SERIAL,
    f_name VARCHAR(255),
    l_name VARCHAR (255),
    dob DATE,
    email_id VARCHAR(255),
    pin INT,
    phone_number VARCHAR(255),
    gender VARCHAR(10),
    street_name VARCHAR(100),
    city_name VARCHAR(100),
    state_name VARCHAR(100),
    city_id INT,
    state_id INT,
    country_id INT,
    rating INT

);

-- TO STORE THE LOCATION OF THE DRIVER
CREATE TABLE driver_location
(
    driver_location_id INT,
    driver_id INT,
    longitude FLOAT,
    latitude FLOAT
);
-- to store the trip details of the ride
CREATE TABLE trip_details
(
    trip_details_id SERIAL,
    trip_date DATE,
    driver_id INT ,
    user_id INT,
    time_start TIMESTAMP,
    time_end TIMESTAMP,
    boarded BOOLEAN,
    boarded_time TIMESTAMP,
    deboarded BOOLEAN,
    deboarded_time TIMESTAMP



);

CREATE TABLE countries
(
    id SERIAL,
    country_code VARCHAR(3),
    country_name VARCHAR(100),
    phone_code INT
);

-- creates state table which stores all the state with country id
CREATE TABLE states
(
    id SERIAL,
    state_name VARCHAR(100),
    country_id INT
);

-- creates city table which stores all the city with state id
CREATE TABLE cities
(
    id SERIAL,
    city_name VARCHAR(100),
    state_id INT
);

