# NodeJS Proxy for Unsplash

This is a NodeJs Proxy created to Interact with the Unsplash API without storing your API Key on the Client.

* __App.js__  contains the Proxy code
* __App.yaml__ is used by __Google App Engine__ to run the application
* __package.json__ storse the dependecies


## Proxy Usage
 Proxy provides this request possibilities:
 * Ask for a __user's profile__   make a GET request to:
 www.yourproxyaddress.com/users/username[/?h=YourCustomHeightSize&w=YourCustomWidthSize] 
 ([....] is Optional if you want a custom size for the user's profile image)
 * Ask for a __user's photos list__   make a GET request to www.yourproxyaddress.com/users/username/photos
 * Ask for a __photo__   www.yourproxyaddress.com/photos/photoID
 * __Download a photo__ (Download_Location)   www.yourproxyaddress.com/photos/photoID/download
 
## Proxy Configuration
You have to __set your private API Key__ to the <pre><code>const key = 'YOUR API KEY';
</code></pre> and 
The proxy will listen on the PORT: 8080

## Full Guide on Medium:

https://medium.com/@a.caselli95/how-to-build-a-proxy-for-unsplash-api-on-google-app-engine-2bd87069b39?source=friends_link&sk=c5aedcc7f80d4108721f947a67d17f77

