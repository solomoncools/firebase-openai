# firebase-openai
A easy to use codebase for hosting a free openai server on firebase and interacting with it using javascript fetch

1. First create a new firebase project using:
firebase init
enable functions and hosting

2. Install openai
cd functions
npm install openai

3. Copy contents of functions/index.js from the repo into your functions/index.js file

4. In index.js modify chunk1 to chunk5 variable to include snippets of your openai apikey. 
This is because the maximum length of a line allowed in firebase functions is 180 chars at the time of writing this

5. Deploy functions
firebase deploy --only functions
Upgrade your project to Blaze (pay-as-you-go) it is very cheap. Like around $1. You pay at the end of the month
Deploy again
firebase deploy --only functions
* COPY THE FUNCTION URL DISPLAYED

6. Modify your index.html to include the code from the repo index.html

8. Modify functionUrl variable in index.html to be the function url you copied in step 5

9. Move your index.html into your /public hosting deploy folder

10. Deploy html
firebase deploy --only hosting

