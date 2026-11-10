---
title: 'creating an HTTP authenticated autologin for dotProject and Inventory'
description: 'creating an HTTP authenticated autologin for dotProject and Inventory'
pubDate: 'Mar 22 2007'
author: 'Thomas Gorgolione'
---

Some web applications have plug-ins that enable them to be authenticated through Apache or IIS HTTP Auth methods, allowing the user who already logged into a server imposed restricted area to seamlessly access Wordpress or Squirrelmail without having to login. For other web applications, however, we have to get creative.

Many may suggest that to successfully enable this ability on these web applications, one would need to write a module or plug-in. However, it's possible through the magic of JavaScript and PHP to devise a method that will enable mostly any application with a login page to automatically login with HTTP Auth credentials.

Essentially this is what we do:

1. Create a PHP page with a IFRAME with the login page of the web app you wish to automatically login to.
2. Use PHP to send the the username and password used to login through HTTP to the appropriate JavaScript code
3. The JavaScript will fill in the username/password combination into the login page in the IFRAME, and simulate a submit button press. The JavaScript will also change the target in the login form to "\_top" so it will "break out" of the IFRAME when it logs the user in

For this project we'll be creating a simple work around for both [dotProject](http://www.dotproject.net/) and [Inventory](http://inventory.sf.net/) web applications.

*Here's how you do it:*

**Step 1: Create users within the Apache or IIS web server**
This is self explanatory, and explaining how this is done is outside the scope of this how-to.

**Step 2: Create users with the same username/password combination as their HTTP Auth counterparts.**
Unfortunately this can not be avoided without some major PHP backend scripting. The JavaScript submits the username and password from the server, but the web application (be it dotProject or Inventory) looks at it's own database to see if a user exists.

**Step 3: Create the PHP file that will do the autologin.**
I created one page that will login automatically into both dotProject or Inventory (depending on what variable I set in the URL)
For some reason, codefilter (a drupal module) won't format HTML with PHP correctly, so I'm leaving the code as a download:

* [Download the code here (1.12kb)](/etc/login.zip)

The code, once extracted from the zip would be login.php.
Thus, anybody that goes to www.example.com/login.php?where=dotproject will be autologinto'd (if that's a word) dotProject, and anybody that goes to www.example.com/login.php?where=inventory will autologinto'd Inventory.

**Extra notes for those who want to do auto login with mediawiki**

If you're interested in doing this with mediawiki, be aware that the standard login page kicks out of the IFRAME before the JavaScript to do anything. To supplant this, we create our own login page with the necessary input fields, button values, and action page in place.

**Final thoughts**

One caveat of this method of auto login is that some web apps, like dotproject, have more restrictive rules on usernames and prehaps passwords, (e.g. for dotproject, the username has to have more than 5 characters), so the rules must apply to the username/password combination you use for your server configuration as well.