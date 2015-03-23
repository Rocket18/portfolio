 Meteor.subscribe('contacts'); 

Template.social.helpers({

 Socials : function(){


 	var aa = Contacts.find({link:'true'});
 	console.log(aa.count());
	return aa;


}
});



