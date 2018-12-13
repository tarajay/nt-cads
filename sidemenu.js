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
