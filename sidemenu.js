function cardClick(itemClickedId, otherCardId) {
  //this sets up which items to add or remove the 'card-large' class
  let add = document.getElementById(itemClickedId);
  let remove = document.getElementById(otherCardId);

  //toggle the visibility of the cards content
  toggle_card_content_visibility(add, remove);

  //if the item that was clicked is already is showing
  //we dont want to add the class again,
  //so instead we change the 'remove' so the card turns small
  if (add.classList.contains('card-large')) {
    remove = add;
  } else {
    add.classList.add('card-large');
  }

  //make the remove item small
  remove.classList.remove('card-large');
}

function toggle_card_content_visibility(cardShow, cardHide) {
  let contentShow = cardShow.getElementsByClassName('card-content')[0];
  let contentHide = cardHide.getElementsByClassName('card-content')[0];

  if (contentShow.classList.contains('hide-card')) {
    contentShow.classList.remove('hide-card');
    contentShow.classList.add('show-card');
  } else {
    contentShow.classList.add('hide-card');
    contentShow.classList.remove('show-card');
  }

  if (!contentHide.classList.contains('hide-card')) {
    contentHide.classList.add('hide-card');
    contentHide.classList.remove('show-card');
  }
}



jQuery(document).ready(function($) {

  // set the variables
  var timer;
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp =0;
    var circleWhite = $("#circle-white");
    var circle = $("#circle");

    //function mouseStopped(){    
        // if mouse stop moving remove class moving 
        // it will hide the circle with opacity transition                           
        //circle.removeClass('moving');
    //}
   
    $(document).mousemove(function(e){
      // if mouse start moving add class moving
        // it will show the circle with opacity transition 
      circle.addClass('moving');
      // get the mouse position minus 160px to center the circle
        mouseX = e.pageX - 160;
        mouseY = e.pageY - 160; 
        // if mouse stop moving clear timer and call mouseStopped function
        //clearTimeout(timer);
        //timer=setTimeout(mouseStopped,3000);   
    });
    
    // set the momentum with setInterval function
    var loop = setInterval(function(){
       // change 12 to alter damping higher is slower
       xp += ((mouseX - xp)/6);
       yp += ((mouseY - yp)/6);
       circle.css({left: xp +'px', top: yp +'px'});  // 
       circleWhite.css({left: xp +'px', top: yp +'px'});  // 
    }, 30);

});
