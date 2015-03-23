Meteor.publish('user', function() {
return User.find();
});




Meteor.publish('technology', function() {
return Technology.find();
});

Meteor.publish('contacts', function() {
return Contacts.find();
});

Meteor.publish('projects', function() {
return Projects.find();
});