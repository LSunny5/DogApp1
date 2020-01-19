'use strict';

//GET request for Dog Images
function getDogImages(userNumber) {
    let dogURL=`https://dog.ceo/api/breeds/image/random/${userNumber}`;
    fetch(dogURL)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error=>alert('Something is not working, please try again in a bit.'));
 }
 
 //starting the app, after user inputs
 function startApp() {
   $('form').submit(event => {
     event.preventDefault();
     $('.results').addClass('hidden');
     let nPics=$('#userNumber').val();
     getDogImages(nPics);
   });
 }
 
 //App ready and waiting for user to enter numbers
 $(function() {
    console.log("App is ready, waiting for user...");
    startApp();
 }); 