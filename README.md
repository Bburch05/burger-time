# Burger Time

Burger time is a Full-Stack web project utilizing Handlebars where users can add burgers to a list and then subsequently eat them.

# The Full Stack

Upon initially loading the page you ping a server that then renders all the burgers currently in the MySQL Database and whether they are devoured or not to the main page using Handlebars.

You can then click on a non-devoured burger to devour it ( Which sends an AJAX PUT to the Server that then updates the database )

You can also add a burger to the  database by typing a name in the field and submitting it (Which creates sends a AJAX POST request to the server adding a new burger)