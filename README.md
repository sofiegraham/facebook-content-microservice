

# Seed at least 20 million records
You will need at least 20 million records in the db to simulate a fraction of the load that facebook experiences on a daily basis. To do this:

1. Create your postgres db:
Download postgres
In terminal, run psql
CREATE DATABASE content

3. Save your env variables:
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=yourusername
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_DB=nameofdb

4. Set the env variables to how many records you wish to simulate. Minimum recommended:
SEED_USER_COUNT=100000
SEED_PAGE_COUNT=500000
SEED_PAGE_LIKE_COUNT=2000000
SEED_POST_COUNT=10000000
SEED_POST_LIKE_COUNT=5000000
SEED_USER_FRIEND_COUNT=5000000

5. Run the dataGenerator.js file located in database/seed/seed_data. This may take a few minutes, but you should see console.log updates as you go.

6. Run "$knex migrate:latest" to create the tables and batch all of the data into your db. NOTE: You should run the migrations one at a time to ensure you do not run out of heap memory. To do this, use a knex-migrate plugin, or add one file to the migrations folder at a time and run "$knex migrate:latest", after each file.





Metrics

Use NewRelic


#To load test

Adjust artilleryLoadtest.yml
To run a load test: $artillery run <file_name.yml>