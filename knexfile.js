// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgresql:///coffee"
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    DATABASE_URL: "postgres://vplzpmfcdrncaa:04564f0812735a95cdec740298ef0e7b355991ea8d8e89ae7149b643d3079e9c@ec2-54-243-130-33.compute-1.amazonaws.com:5432/dcr0bbojalt7n4"


  }

};
