Meteor.startup(function(){

if(User.find().count()===0)
{


  User.insert({key:"Age",value:"21"});
  User.insert({key:"Country",value:"Ukraine"});
  User.insert({key:"City",value:"Ternopil"});
  User.insert({key:"Languages",value:"Ukrainian,Russion,English"});
  User.insert({key:"Education",value:"Ternopil Ivan Puluj National Technical University"});
  User.insert({key:"I like",value:"Football,Programing,Read books"});



}





if(Contacts.find().count()===0)
{

	Contacts.insert({title:'facebook',img:"facebook.png",content:"https://www.facebook.com/krasnytsia",link:'true',icon:'fa-facebook'});
  Contacts.insert({title:"google +",img:"google.png",content:"https://plus.google.com/u/0/+ТарасКрасниця/",link:'true',icon:'fa-google-plus'});
  Contacts.insert({title:'twitter',img:"twitter.png",content:"https://twitter.com/rocket2602",link:'true',icon:"fa-twitter"});
  Contacts.insert({title:'skype',img:"skype.png",content:"rocket2602"});
 Contacts.insert({title:"phone",img:"mobile.png",content:"+38066**666*"});
 Contacts.insert({title:"email11",img:"email.png",content:"rocket17@e-mail.ua"});



}


if(Technology.find().count()===0)
{
	Technology.insert({category:"Languages",array:[
  									{title:"C#"},
  									{title:"ASP.NET"},
  									{title:"WPF"},
  									{title:"PHP"},
  									{title:"HTML,CSS|LESS,JS"},
  									{title:"JQuery"},
  									{title:"AJAX"},
  									{title:"Meteor JS"}
  									]});
	Technology.insert({category:"RMDB",array:[
  									{title:"MySQL"},
  									{title:"MS SQL"},
  									{title:"SQLite"},
  									{title:"MongoDB"},
  									]});

Technology.insert({category:"Development environment",array:[
  									{title:"Visual Studio"},
  									{title:"Subline Text"},
  									{title:"MS SQL Server"},
  									]});
}


if(Projects.find().count()===0) {    
 Projects.insert({src:"http://easytest.com.ua/Content/Images/Image_20140915193705044_12fc6b93-94ee-4ec5-bc1a-570acefa00d8.png",        
 name:"EasyTest",        
  description:"<p>EasyTest -a program designed for university students, which is callsed distance learningAtutor.</p><p> EasyTest provides features such as traction tests from the pagecreate a database of unique tests,responses that greatle simplify and improvethe results of tests drafting students.</p><p>EasyTest save you time,younerves,uou money/ Download the EasyTest now and your student life will be mucheasier</p>",         
link:"http://easytest.com.ua"});
 Projects.insert({src:"http://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Narayiv_table.jpg/300px-Narayiv_table.jpg",
name:"Naraiv.org,ua",
description:"<p>Purpose of site</p><p>Review a wide range of people with history, culture, customs, events, news and general information s.Naraiv, creating a single media content villages</p><p>The management is workink every day to maintain and upgrade service.</p>",
link:"http://mytest.123.esy.es"} );
 }
 
	
});