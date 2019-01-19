# Demo RESTful API made with Node, Express, and MySQL
This is a demo API built using a component based archetecture.  It offers separation
of code into components.  Each component is mostly self contained other than a few
helper functions and DB connection. 

## Database
This is run on a MySQL database.  You can find a database backup in the database 
directory.  When you install there is some example data as well. 

## Vagrant
The Vagrant file isn't complete and doesn't fully set up with project.  It should stand up a 
box with MySQL but you will need to make it accessible to the host and do some other setup. 
In the install.sh file there is some commented out code that can walk you through it. 
