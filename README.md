# EmailAutomation

Hi , This Email automation project is build using protractor and here we are trying to automate the process 

(opening chrome->opening gmail -> logging in to an account -> opening a new mail creation window -> providing necessary details and sending mail -> logging out & closing the browser)

To achieve this task of automation we have choosen Protractor which is an end-to-end test framework for Angular and AngularJS applications. 


Use below steps to run the project
-----------------------------------

npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.

1. Install nodejs
First, install protractor globally on your system: install protractor as a development dependency:
install nodejs from here https://nodejs.org/en/download/   

2. run npm install -g Protractor

3. run npm install protractor --save-dev
To install and start the standalone Selenium Server manually, use the webdriver-manager command line tool, which comes with Protractor. This will install the server and ChromeDriver.

4. run npm install -g webdriver-manager

5. run updated webdriver-manager
This will start the server. You will see a lot of output logs, starting with INFO. The last line will be 'Info - Started org.openqa.jetty.jetty.Server'.

5. run start webdriver-manager
Leave the server running while you conduct your test sessions. In your config file, set seleniumAddress to the address of the running server. This defaults to http://localhost:4444/wd/hub.

6. Finally run your script using ->  Protractor<location of your config file>conf.js
