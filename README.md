# firebase-openai
A easy to use codebase for hosting a openai server on firebase and interacting with it using javascript fetch. This solution is cheaper than using heroku.

Requirements
i. Firebase account
ii. OpenAI API key
iii. A couple bucks

1. First create a new firebase project using your chosen command line interface:

npm install -g firebase-tools

firebase init

enable functions and hosting

2. Install OpenAI

cd functions

npm install openai

3. Copy contents of functions/index.js from this repo into your functions/index.js file

4. In index.js modify chunk1,2,3,4 and 5 variables to include snippets of your openai apikey.

You must segment the key because the maximum length of a line allowed in firebase functions is 80 chars at the time of writing this.

5. Deploy firebase functions

firebase deploy --only functions

Upgrade your project to Blaze (pay-as-you-go) it is very cheap. Like around $1. You pay at the end of the month

Deploy again

firebase deploy --only functions

* COPY THE FUNCTION URL DISPLAYED BY THE CLI

6. Modify your index.html to include jquery and the javascript code from the repo index.html

7. Modify functionUrl variable in index.html to be the function url you copied in step 5

8. Move your index.html into your /public hosting deploy folder

9. Deploy html
firebase deploy --only hosting

