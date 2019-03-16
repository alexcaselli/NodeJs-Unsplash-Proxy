'use strict';

// [START app]

var app = require('express')();
var proxy = require('express-http-proxy');

//Users url segment
const users = '/users';

//Photos URL segment
const photos = '/photos/';

//Download URL segment
const download = '/download/';

//API key argument name and value
const client = '?client_id=';


const key = 'YOUR API KEY';


//Proxy serving request to URL: www.exampleHost.com/users[/...]
app.use('/users', proxy('https://API.unsplash.com', {
    proxyReqPathResolver: function (req) {
      
      //Split the path value when ? occour
      //if URL is www.exampleHost.com/users/abcd/?h=x&w=y
      //path will be /abcd/efg
      var parts = req.url.split('?');
      
      //if path split in more than 1 piece we are serving user profiles
      if(parts.length > 1){
        
        //get the username /abcd/
      	var username = parts[0];
        
        //get the requested custom profile picture size
      	var custom = '&'+parts[1];
      
        //return the url /users/abcd/?client_id=key&h=x&w=y
      	return users + username + client + key + custom;
        
      }
      
      //Asking for user's photos
      else {
        
        //in parts[0] there will be /abcd/photos
        return users + parts[0] + '/' + client + key;
        
      }
      
    }
  }));


//Proxy serving request to URL: www.exampleHost.com/photos[/...]
app.use('/photos', proxy('https://API.unsplash.com', {
    proxyReqPathResolver: function (req) {
      
      //Split the path value when ? occour
      //if URL is www.exampleHost.com/photos/abcd/download
      //path will be /abcd/efg
      var parts = req.url.split('/');
      
      //if path split in more than 2 piece we are serving photo download
      if(parts.length > 2){
        
        //get the photo id /abcd/
      	var id = parts[1];
       
      
        //return the url /photos/abcd/download/?client_id=key
      	return photos + id + download + client + key ;
        
      }
      
      //Asking for single photo
      else {
        
        //in parts[1] there will be 'abcd'
        return photos + parts[1] + '/' + client + key;
        
      }
      
    }
  }));


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
// [END app]

