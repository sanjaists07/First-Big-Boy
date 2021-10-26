const menu = document.getElementById('myTopnav');
const navPopUp = document.querySelector('.nav-overlay');
const bookmark = document.getElementsByClassName('bookmark')[0];
const bookmarkimg = document.querySelector("bookmark svg");
const bookmarkicon = document.querySelector('.bookmark-icon');
const bookmarkinner = document.querySelector('path');
const bookmark2 = document.querySelector('.bookmark span');
const selectReward = document.querySelectorAll(".option-reward button"); 
const popUp = document.querySelector('.hide');
const popUpClose = document.querySelector('.closeBtn')
menu.addEventListener('click', myFunction)
const to = document.querySelectorAll('.plan__radio')
const plan = document.querySelectorAll('.plan')
const start = document.querySelector('.thisproject')
const done = document.querySelectorAll('.plan__btn');
const success = document.querySelector('.success');
const gotIt = document.querySelector('.success__section button')
var path = 'images'+'/'+'icon-hamburger'+'.svg';
const body = document.querySelector('body');

function myFunction() {
  var x = document.getElementById("Topnav");
  var closeBtn = document.getElementsByClassName("btn")[0];
  if (x.className === "topnav") {
    x.className += " responsive";
    closeBtn.setAttribute('src', 'images/icon-close-menu.svg');
    navPopUp.style.display = 'block';
  } else {
    x.className = "topnav";
    closeBtn.setAttribute('src', 'images/icon-hamburger.svg');
    navPopUp.style.display = 'none';
  }
}

bookmark.addEventListener('click', function(){
  if (bookmark.className === "bookmark") {
    bookmark.innerHTML = `<img src=\"images/icon-bookmark 1.svg\">Bookmarked`;
    bookmark.className += ' active';
    bookmarkimg.className = "marked";
  } else {
    bookmark.innerHTML = `<img src=\"images/icon-bookmark.svg\">Bookmark`;
    bookmark.className = 'bookmark';
  }
});

bookmarkicon.addEventListener('click', function(){
 if ( bookmarkicon.getAttribute('fill') == 'black') {
      bookmarkicon.setAttribute('fill', 'hsl(176, 50%, 47%)');
      bookmarkinner.setAttribute('fill', '#fff');
    } else {
      bookmarkicon.setAttribute('fill', 'black');
      bookmarkinner.setAttribute('fill', '#B1B1B1');
    }
})


popUpClose.addEventListener('click', function(){
  popUp.style.display = 'none';
  body.classList.remove('scroll-off');
})

for (let i = selectReward.length - 1; i >= 0; i--) {
  selectReward[i].addEventListener('click', function(){
  popUp.style.display = 'flex';
  body.classList.add('scroll-off');
})
}

for (let i = done.length - 1; i >= 0; i--) {
  done[i].addEventListener('click', function(){
  success.style.display = 'flex';
  body.classList.add('scroll-off');
})
}

gotIt.addEventListener('click', function(){
  success.style.display = 'none'
})

start.addEventListener('click', function(){
  popUp.style.display = 'flex';
  body.classList.add('scroll-off');
})

       
for (let i = 0; i < to.length; i++) {
  to[i].addEventListener('click', function(){
if (plan[i].className == 'plan') {
    var c =0;
    while (c < to.length) {
      plan[c++].classList.remove('plan--active');
    }
    plan[i].classList.add('plan--active');
}
});
}

