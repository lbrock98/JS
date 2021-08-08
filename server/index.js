// Require process so we can mock environment variables
const process = require('process');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.enable('trust proxy');

// Function takes a request and a result, req requests, res returns
app.get("/api", async (req, res) => {
  const cities = await getGeoInfo(getData);
  return res.json(cities);
});

// Runs on local host 2001
app.listen('2001');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set content-type for all responses for these routes
app.use((req, res, next) => {
  res.set('Content-Type', 'text/html');
  next();
});

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: DB_HOST,
    user: DB_NAME,
    password: DB_PASSWORD,
    database: 'postgres'
  },
  pool: {
    min: 0,
    max: 5,
    acquireTimeoutMillis: 60000,
    createTimeoutMillis: 30000,
    idleTimeoutMillis: 600000,
    createRetryIntervalMillis: 200
  }
});

const getGeoInfo = async (data) => {
  console.log("retrieving info");
  let cities = [];
  cities = await knex
    .withSchema('geography')
    .from('cities')
    .select('cbsa_name AS city_name')
    .orderBy('cbsa_name')

  let counties = [];
  counties = await knex
    .withSchema('geography')
    .from('counties')
    .select('county')
    .orderBy('county')

  let states = [];
  states = await knex
    .withSchema('geography')
    .from('states')
    .select('state')
    .orderBy('state')

  let geoData = {
    cities: cities.map(v => ({
      label: v.city_name,
      value: v.city_name
    })),
    counties: counties.map(v => ({
      label: v.county,
      value: v.county
    })),
    states: states.map(v => ({
      label: v.state,
      value: v.state
    }))
  }

  return geoData;
};

getData = function (cities) {
  var cityData = cities.data;
}
