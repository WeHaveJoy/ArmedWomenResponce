create table patients(
    id  serial not null primary key,
    first_name text not null,
    last_name text not null,
    age int not null,
    username text not null
);

create table heart_rate(
    id serial not null primary key,
    average_heart_rate text not null,
    danger_heart_rate text not null
);

create table types_of_abuse(
    id serial not null primary key,
    mental_health text not null,
    emotional_abuse text not null,
    physical_abuse text not null,
    sexual_abuse text not null,
    technological_abuse text not null
);

create table bookings(
    id serial not null primary key,
    date_booking date not null,
    time_booking time not null,
    patient_id int not null,
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);

