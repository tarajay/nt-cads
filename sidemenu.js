let card1, card2;

document.addEventListener('DOMContentLoaded', function() {
  card1 = document.getElementById('card1');
  card2 = document.getElementById('card2');
}, false);

function cardOneClick() {
  let add = card1;
  let remove = card2;

  if (card1.classList.contains('card-large')) {
    remove = card1;
  } else {
    add.classList.add('card-large');
  }

  remove.classList.remove('card-large');
}

function cardTwoClick() {
  let add = card2;
  let remove = card1;

  if (card2.classList.contains('card-large')) {
    remove = card2;
  } else {
    add.classList.add('card-large');
  }

  remove.classList.remove('card-large');
}

 function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

