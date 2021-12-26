//////////////////////////////////Latest Work from Dribble
jribbble.setToken("9abe753478a2afe894caf7454fb22d9008891cc96538a0c1b47aeeb7b68efe0d");

 jribbble.shots(function(shotsArray) {
  var carousel = document.querySelector('.carousel-inner');
  var slide1 = document.querySelector('#slideSet1');
  var slide2 = document.querySelector('#slideSet2');
  var imageArray = [];
  
  shotsArray.forEach(shot => {
    var slideImage = '<div class="col-md-3 my-1"><a href="'+  shot.html_url + '" target="_blank"><img class="img-fluid" src="' + shot.images.normal + '"></a></div>';
    imageArray.push(slideImage);

    var firstSlide = imageArray.slice(0,4);
    var secondSlide = imageArray.slice(4,8);
    slide1.innerHTML = firstSlide.join("");
    slide2.innerHTML = secondSlide.join("");
  });
 });

jribbble.user(function(userObj) {
  var foo = '<a href="' + userObj.html_url + '"><p class="text-right text-white">View more posts from ' + userObj.login + ' on Dribbble</p></a>';
  document.getElementById("view_more").innerHTML = foo;
});