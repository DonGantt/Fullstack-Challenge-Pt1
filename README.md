# Copia Fullstack Technical Challenge (Pt 1)

# Goal

Create a REST API endpoint that returns a list of users in JSON-format.
This endpoint will be used by an application you will develop in Pt 2.

# The Challenge

* Parse the given CSV file
* Create a REST API endpoint that accepts a GET request
* Serialize the parsed CSV file into JSON
* Return the JSON as a response to the endpoint call
* The endpoint should be performant (quicker the better but no more than 10 seconds)

## BONUS:
* When parsing the CSV, re-format the phone number to comply with E.164 format.
* Parse the CSV and load the user data into a database of your choice. Then implement the endpoint to query from the database to return the JSON.

You may implement this project in any programming language, frameworks, and libraries of your choice.

# Required Work

* Fork this repository
* Alter this README to:
  * Provide instructions on how to run the server
  * Document each step
* Make it easy to install


## Instructions and Set Up

-Currently this is functional only with MongoDB 

1) Type 'git clone [insert github link]' 
2) Open up the project folder in the IDE of your choice 
3) Make sure you have Node.JS installed in your environment
4) Type `npm install`, 'yarn install', or your equivalent command to download all of the dependencies of in order for it to run choice
5) Open the configs folder. Then add your personal MongoDB connection string.
(It should look like this

PORT: 7777,

DB_STRING: your database string not surrounded by quotes

)

6) Type 'npm run start', 'yarn run start', or your equivalent command and the server will now run. 

Note: There is a small bug that will cause the DB to not load on initial render. If that happens just refresh the page and it will be fine
