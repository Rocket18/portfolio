/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.map(function() {

	this.route('about', {path: '/'});


	this.route('work', {
	path: '/work'  
	});



		this.route('projects', {
	path: '/my-projects'  
	});

			this.route('contact', {
	path: '/contact-me'  
	});
});




