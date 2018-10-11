### Exercise Resources

[db.json](https://d3c33hcgiwev3.cloudfront.net/mNhQRT-6EeieJwrYiMRpMg_99c854b03fba11e8bac2b7a30cba3e24_db.json?Expires=1539388800&Signature=KXUa5TvWpEctawI29PGGbA3d~bi5X4JS31ykJljza9Q8WrPFLo6juXBwaYfqcUroHPODJcmC~k0eXf5j5bvCt071l8VK-lQUKoJBHyvPpsr5-N2OcavScq7n~GJ~gmcf4kwmBVnw9heo0Mqf2U~AVtN-qyJ-Uev9Ou0YQL-0AJg_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)
[images.zip](https://d3c33hcgiwev3.cloudfront.net/dkYXuzfFEei9LwoRWz3xkg_77143c6037c511e8b2a51d62a734b875_images.zip?Expires=1539388800&Signature=hT-FIqHxUsZwvlkcU~5IUnv0gtz5aj-RBvjPEUp46n6tudDA6ChM1JTOsxkpkbiWNg9XXDFbo3eBYaUVm1BOTW76tc8NT8qe1oTcCDQwqHG2a3vMxaq1boDIjdtDh-QNkpr6zOrUm~mA5OdjA3srD32-P2EkVmDzyxpRCtWmJtQ_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

#### Objectives and Outcomes
The Node module, json-server, provides a very simple way to set up a web server that supports a full-fledged REST API server. It can also serve up static web content from a folder. This lesson will leverage these two features to provide the back-end for your React application. In this exercise, you will configure and start a server using json-server to enable serving your application data to your Angular application. At the end of this exercise, you will be able to:

* Configure and start a simple server using the json-server module
* Configure your server to serve up static web content stored in a folder named public.

#### Installing json-server
* json-server is a node module, and hence can be installed globally by typing the following at the command prompt:
```js
     npm install json-server -g
```

If you are using OSX or Linux, use sudo at the front of the command. This will install json-server that can be started from the command line from any folder on your computer.

#### Configuring the Server

* At any convenient location on your computer, create a new folder named json-server, and move to this folder.
* Download the db.json file provided above to this folder.
* Move to this folder in your terminal window, and type the following at the command prompt to start the server:
```js
     json-server --watch db.json -p 3001 -d 2000
```

* This should start up a server at port number 3001 on your machine. The data from this server can be accessed by typing the following addresses into your **browser address bar** :
```js
http://localhost:3001/dishes
http://localhost:3001/promotions
http://localhost:3001/leaders
http://localhost:3001/feedback

```

* Type these addresses into the browser address and see the JSON data being served up by the server. This data is obtained from the db.json file
* The json-server also provides a static web server. Any resources that you put in a folder named public in the json-server folder above, will be served by the server at the following address:

```js
  http://localhost:3001/
```

* Shut down the server by typing ctrl-C in the terminal window.

#### Serving up the Images
* Create a public folder in your json-server folder.
* Download the images.zip file that we provide above, unzip it and move the images folder containing the images to the public folder.
* Restart the json-server as we did before. Now your server will serve up the images for our React app. You can view these images by typing the following into your browser address bar:

```js
http://localhost:3001/images/<image name>.png
```

#### Conclusions
Finally, you learnt how to configure and start a simple server using the json-server node module. You also learnt how the server can serve up static web content.