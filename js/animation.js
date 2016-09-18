$(document).ready(function(){
  var newUser = {
    avatar:'<img class= "avatar" src="img/alagoon.jpg"/>',
    fullname: 'Agata',
    username: '@vekag'

  };
  //Text Box Functionality
  $('#tweet-controls').hide();


  $('.tweet-compose').focus(function() {
    $(this).css({height: '5em'});
    $('#tweet-controls').show();

    $(this).on('keyup',function(){
      var maxCharCount = 140;
      var tweetInput = $(this).val();
      var tweetInputLength = tweetInput.length;

      maxCharCount = maxCharCount - tweetInputLength;

      $('#char-count').text(maxCharCount);

      if(maxCharCount <= 10){
      $('#char-count').css('color', 'red')
    } else {
      $('#char-count').css('color', '#999')
      }

      if(maxCharCount < 0){
        $('#tweet-submit').prop('disabled', true)
      } else if (maxCharCount >= 0) {
        $('#tweet-submit').prop('disabled', false)
      }
    })
  })


   //Push tweet to twitter
   function createTweet() {
     var tweetContent = $('.tweet-compose').val();
     var newTweet =
    '<div class="tweet">' +
        '<div class="content">' +
           newUser.avatar +
          '<strong class="fullname">' + newUser.fullname + '</strong>' +
          '<span class="username">' + newUser.username + '</span>' +
          '<p class="tweet-text">' + tweetContent + '</p>' +
          '<div class="tweet-actions">' +
            '<ul>' +
              '<li><span class="icon action-reply"></span> Reply</li>' +
            '  <li><span class="icon action-retweet"></span> Retweet</li>' +
              '<li><span class="icon action-favorite"></span> Favorite</li>' +
              '<li><span class="icon action-more"></span> More</li>' +
            '</ul>' +
          '</div>' +
          '<div class="stats">' +
            '<div class="retweets">' +
              '<p class="num-retweets">' + 30 + '</p>' +
              '<p>' + 'RETWEETS' + '</p>' +
            '</div>' +
            '<div class="favorites">' +
              '<p class="num-favorites">' + 6 + '</p>' +
              '<p>' + 'FAVORITES' + '</p>' +
            '</div>' +

          '<div class="users-interact">' +
            '<div>' +
              '<img src="img/jennyshen.jpg" />' +
              '<img src="img/damenleeturks.jpg" />' +
            '</div>' +
          '</div>' +
          '<div class="time">' +
            '1:04 PM - 19 Sep 13' +
          '</div>' +
       '</div>' +
      '  <div class="reply">' +
          '<img class="avatar" src="img/alagoon.jpg" />' +
          '<textarea class="tweet-compose" placeholder="Reply to @mybff"/>' + '</textarea>' +
        '</div>' +
      '</div>' +
    '</div>'

     return newTweet
   }

   $('#tweet-submit').on('click', function(){

     $('#stream').prepend(createTweet());

     $('.tweet-actions').hide();

     $('.tweet').hover(
    function() {
      $( this ).find('.tweet-actions').show();
    }, function() {
      $( this ).find( '.tweet-actions').hide();
    });


   });

   //Increase number count when you click on favorite or rewteet;
   $('.tweet').click(function() {
    //  console.log(this)
     var tweet = $(this);
     tweet.find('.action-favorite').click(function() {
       var counter = tweet.find('.num-favorites').text();
       counter++ ;
       tweet.find('.num-favorites').text(counter);
     })
   });

   //Show tweet actions only when you hover over tweet;
   $('.tweet-actions').hide();

   $('.tweet').hover(
  function() {
    $( this ).find('.tweet-actions').show();
  }, function() {
    $( this ).find( '.tweet-actions').hide();
  });




});
