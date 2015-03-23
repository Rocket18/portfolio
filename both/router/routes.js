/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
   waitOn: function() { 
    Meteor.subscribe('user'); 
  
      Meteor.subscribe('technology'); 
   Meteor.subscribe('contacts'); 
      Meteor.subscribe('projects'); 


}
});


Router.map(function() {

	this.route('about', {path: '/',
// template:"Name",
// data:{
// 	lists:[prop:"value"]
// },
// action:function()
// {
//Custom logic
//}
});


	this.route('technology', {
	path: '/technology' ,
	data:{
		items:Technology.find()
	}
	});



		this.route('projects', {
	path: '/my-projects'  ,
	data:  {
	items: Projects.find()
	
} 
	});

			this.route('contact', {
	path: '/contact-me'  ,
	data:{
	items:  Contacts.find()
 	},
	});
});




