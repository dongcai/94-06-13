# 94-06-13
Revolution of Dynamic Website: Reload, jQuery, and then React

## About this project

94-06-13 is a small project to help understand what react is. It shows how to create a dynamic website in three different ways (or three different ages.) By dynamic, it means how the page interacts with the user's action to get the dynamic contents from the server. Here are three:

1. Old School - refresh the page to get the content from the server, 
and the whole DOM tree got to reload.
2. Still cool - use Ajax library (most popular via jQuery) to make Async call to get the data from the server and update dom tree, but only those elements need to be updated, and others remain untouched.
3. Super cool - use Ajax library (like fetch) to make Async call to get the data from the server and then React will do the rest.

## About the project name
- PHP created in 1994
- jQuery created in 2006
- React created in 2013

So the project is named as 94-06-13

## How to run this code
Since the project uses some PHP, you would need LAMP stack to run this project. In case you use Apache, then you may use the following block in your http-vhosts.conf:
```
<Virtualhost *:80>
  VirtualDocumentRoot "/PATH-TO-YOURS/94-06-13/public"
  ServerName 940613.localhost
</Virtualhost>
```
"still-cool/index.html", "super-cool/index.html" and "super-cool-plus/index.html" should work as standalone html
