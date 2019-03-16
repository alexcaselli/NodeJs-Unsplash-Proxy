# NodeJS Proxy for Unsplash

This is a NodeJs Proxy created to Interact with the Unsplash API without storing your API Key on the Client.

* App.js  contain the Proxy code
* App.yaml is used by Google App Engine to run the application
* package.json store the dependecies


## Proxy Usage
 Proxy provides this request possibilities:
 * Ask for a user's profile   make a GET request to:
 www.yourproxyaddress.com/users/username[/?h=YourCustomHeightSize&w=YourCustomWidthSize] 
 (optional if you want a custom size for the user's profile image)
 * Ask for a user's photos list   make a GET request to www.yourproxyaddress.com/users/username/photos
 * Ask for a photo   www.yourproxyaddress.com/photos/photoID
 * Download a photo (Download_Location)   www.yourproxyaddress.com/photos/photoID/download
 
## Proxy Configuration
You have to set your private API Key to the constant Key
The proxy will listen on the PORT: 8080



