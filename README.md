# Simple Todo List

The Meteor Tutorial app.

Use it to share a single todo list with your friends. The list updates on everyone's screen in real time, and you can make tasks private if you don't want others to see them.

Learn how to build this app by following the [Meteor Tutorial](http://www.meteor.com/install).

Read more about building apps with Meteor in the [Meteor Guide](http://guide.meteor.com).

![screenshot](screenshot.png)


----------------------------------------------------------------------

This project was enhanced by:
Muhammad Hamza
Grinnell College '18

I have added a user signup flow that allows for mailing address.
Any new user can sign up using this new flow.

I have created a dropdown menu and populated it with a set of strings,
however was having some issues extracting the list of users to display
under the dropdown. I do have an idea that I would need to use commands
such as:
(1) Meteor.publish("findusers", function())
(2) Meteor.users.find({}, {})
(3) Meteor.subscribe   

This was simply not clicking for me. With more time, I would be
confident that I would have debugged my errors.

Also, given extra time I would have loved to explore adding a
Google maps API by adding 'map.html' and 'map.js' and creating
the template and appropriate javascript to allow for interaction
and display.
