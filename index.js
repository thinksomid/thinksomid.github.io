$(document).ready(function() {
  // All JS/jQuery must be inside this function to skip errors in case HTML BODY is not loaded yet


  ///////////// include JQUERY ::::::

  // // //from a CDN such as google copy jQuery script tag end of HTML body before your js file

  //     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  //     <script src="index.js" charset="utf-8"></script>
  //  </body>

  // // in JS file jQuery:
  // $('h1').css('color', 'red');
  // // instead of vanila: document.querySelector('h1').style.color = 'red';

  // // OR:
  // $(document).ready(function() {
  //   // All JS/jQuery must be inside this function to skip errors in case HTML BODY is not loaded yet
  //   $('h1').css('color', 'red');
  // });



  // ////// jquery element selectors ($ gets both single and many found elements)::::

  // $('h1').css('color', 'red');
  // console.log($('h1').css('color'));
  // // rgb(255, 0, 0)
  // $('h1').css('font-size', '5rem');
  // console.log($('h1').css('font-size'));
  // // 80px


  // ///// jquery and CSS :::::

  // $('h1').addClass('big-title decor');
  // console.log($('h1').hasClass('decor'));
  // // true
  // $('h1').removeClass('big-title decor');
  // console.log($('h1').hasClass('decor'));
  // // false
  // $('h1').toggleClass('big-title decor');
  // console.log($('h1').hasClass('decor'));
  // // true


  // //// jquery element text/html ::::

  // $('button').text('<em>dont click!</em>');
  // // all buttons: <em>dont click!</em>
  // $('button').html('<em>dont click!</em>');
  // // all buttons italic: dont click!



  // ///// jquery element attributes :::::::

  // console.log( $('a').attr('src') );
  // // undefined
  // console.log( $('a').attr('href') );
  // // www.google.com
  // $('a').attr('href', 'tessssst');
  // $('a').attr('src', 'tessssst');
  // console.log( $('a').attr('src') );
  // // tessssst
  // console.log( $('a').attr('href') );
  // // tessssst

  // console.log( $('h1').attr('class') );
  // // dummyClass
  // $('h1').toggleClass('big-title decor');
  // console.log( $('h1').attr('class') );
  // // dummyClass big-title decor
  // $('h1').attr('class', $('h1').attr('class') + ' ' + 'test-class-added-by-attr-instead-of-addClass');
  // console.log( $('h1').attr('class') );
  // // dummyClass big-title decor test-class-added-by-attr-instead-of-addClass
  // $('h1').attr('class', 'test-class-added-by-attr-instead-of-addClass');
  // console.log( $('h1').attr('class') );
  // // test-class-added-by-attr-instead-of-addClass



  // ///// vanila vs jquery element EVENT LISTENER single/many elements:::::::

  // //vanila
  // for (var i = 0; i<5; i++) {
  //     document.querySelectorAll('button')[i].addEventListener('click', function() {
  //         document.querySelector('h1').style.color = 'purple';
  //     });
  // }

  // // jquery
  // // single element (h1)
  // $('h1').click( function() {
  //     $('h1').css('color', 'blue');
  //     console.log($('h1').css('color'));
  //     // rgb(0, 0, 255)
  // } );

  // // many elements (buttons)
  // $('button').click( function() {
  //     $('h1').css('color', 'orange');
  //     console.log($('h1').css('color'));
  //     // rgb(255, 165, 0)
  // } );

  // // using EVENT arg
  // $('h1').click( function() {
  //     var sndr = event.target;
  //     console.log('event:::', event);
  //     // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  //     console.log('sndr:::', sndr);
  //     // <h1 class="dummyClass" style="color: red;">Hello!</h1>
  //     $(sndr).css('color', 'red');
  //     console.log('$(sndr).css(color):::', $(sndr).css('color'));
  //     // rgb(255, 0, 0)
  // } );




// // jquery keypress eventlistener
//
// //input only
// $('input').keydown(function(event) {
//   console.log(event.key);
//   console.log(event.target);
//   //<input type="text" name="" value="">
// });
//
// // body and input
// $('body').keydown(function(event) {
//   console.log(event.key);
//   console.log(event.target);
//   //<body>...</body> OR <input type="text" name="" value="">
// });
//
// // body and input
// $(document).keydown(function(event) {
//   console.log(event.key);
//   console.log(event.target);
//   //<body>...</body> OR <input type="text" name="" value="">
// });
//
// $(document).keydown(function(event) {
//   $('h1').html(event.key);
// });



// // jquer eventlistener using ON(evntname, callbkfunc)
//
// $('h1').on('mouseover', function(event) {
//   // event.target.css('color', 'purple');
//   // //ERROR:  event undefined
//   $('h1').css('color', 'purple');
// });
//
// $('h1').on('click', function() {
//   $('h1').css('color', 'orange');
// });




// // jquer add/remove ELEMENTS using before/after/prepend/append
//
// $('h1').before('<button>btn before H1 element tag</button>');
// $('h1').after('<button>btn after H1 element tag</button>');
// $('h1').prepend('<button>btn inside H1 element tag before content</button>');
// $('h1').append('<button>btn inside H1 element tag after content</button>');
//
// $('button').remove();




// // jquery basic animations using toggle/show/hide/fade/slide/animate({numeric css})
//
// $('button').on('click', function(a,b,c) {
//   $('h1').hide();
//   const t = setTimeout(function() {
//     $('h1').show();
//   }, 1000);
//   // clearTimeout(t); //WRONG: avoids above setTimeout execution
//   console.log(a); //event, type: click, ...
//   console.log(b); //undefined
//   console.log(c); //undefined
// });
// $('button').on('click', function() {
//   $('h1').toggle();
//   const t = setTimeout(function() {
//     $('h1').toggle();
//   }, 1000);
// });
//
// $('button').on('click', function() {
//   $('h1').fadeOut();
//   const t = setTimeout(function() {
//     $('h1').fadeIn();
//   }, 1000);
// });
// $('button').on('click', function() {
//   $('h1').fadeToggle();
//   const t = setTimeout(function() {
//     $('h1').fadeToggle();
//   }, 1000);
// });
//
// $('button').on('click', function() {
//   $('h1').slideUp();
//   const t = setTimeout(function() {
//     $('h1').slideDown();
//   }, 1000);
// });
// $('button').on('click', function() {
//   $('h1').slideToggle();
//   const t = setTimeout(function() {
//     $('h1').slideToggle();
//   }, 1000);
// });
//
// $('button').on('click', function() {
//   // $('h1').animate({color: 'red'}); //WORNG: only numeric css values allowed
//   $('h1').animate({opacity: 0.5}); //OK
//   $('h1').animate({margin: '20%'}); //OK
//   const t = setTimeout(function() {
//     $('h1').animate({opacity: 1}); //OK
//     $('h1').animate({margin: 5}); //OK
//   }, 1000);
// });
//
// $('button').on('click', function() {
//   $('h1').slideToggle().slideToggle().animate({opacity: 0.5}).animate({opacity: 1});
// });


});
