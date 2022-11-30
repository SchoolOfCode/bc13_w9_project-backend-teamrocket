import {Pool} from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_URL,
});

export default {
  query: function (text, params) {
    return pool.query(text, params);
  },
};