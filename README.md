# Demo RESTful API made with Node, Express, and MySQL
This is a demo API built using a component based archetecture.  It offers separation
of code into components.  Each component is mostly self contained other than a few
helper functions and DB connection. 

## Database
This is run on a MySQL database.  You can find a database dump in the database 
directory.  When you install it there is some example data provided.  

Once your database is setup, you will need to add the connection data to the 
connection file found in the `configs/mysql.js` file.

## Components
Each component contains it's routes, controllers, and data access layers (DAL).  They are meant
to be self contained modules that allow as much or little functionality needed in the future, and
if at some point you decide to move them into their own service there shouldn't be much needed to 
do that.  In a more functional version of this API the business logic would go in the controllers.

## Postman
I've included a Postman library so you can make calls to your API from the Postman app. 

## Vagrant
The Vagrant file isn't complete and doesn't fully set up with project.  It should stand up a 
box with MySQL but you will need to make it accessible to the host and do some other setup. 
In the install.sh file there is some commented out code that can walk you through it. 
