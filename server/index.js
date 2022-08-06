<<<<<<< HEAD
const supertest = require('supertest');
const PgPromise = require("pg-promise")
const express = require('express');
const assert = require('assert');
const flatpickr = require("flatpickr");
const fs = require('fs');
require('dotenv').config()

const API = require('./api');
const { default: axios } = require('axios');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 6000;

const DATABASE_URL = process.env.DATABASE_URL;
const pgp = PgPromise({});
const config = {
	connectionString: DATABASE_URL ,
	max: 30,
	ssl:{ rejectUnauthorized : false}
 };
 
 const db = pgp(config);

API(app, db);

app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});


=======


const cors = require("cors");
const PgPromise = require("pg-promise");
const express = require("express");
const fs = require("fs");
require("dotenv").config();
const { default: axios } = require("axios");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

const API = require("./api");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());

const DATABASE_URL = process.env.DATABASE_URL;
const pgp = PgPromise({});

const config = {
    connectionString:
       

        process.env.DATABASE_URL || "postgres:sino123@localhost:5432/postgres",


};

if (process.env.NODE_ENV == 'PRODUCTION') {
    config.ssl = { rejectUnauthorized: false }
}

const db = pgp(config);

API(app, db);

const PORT = process.env.PORT || 4004;

app.listen(PORT, function () {
    console.log(`App started on port http://localhost:${PORT}`);
});
>>>>>>> 0902622 (added the databas and installed some dependenciese)
