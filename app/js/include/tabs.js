let tabLinks = document.querySelectorAll('.tablinks'),
    tabContent = document.querySelectorAll('.tabcontent');

tabLinks.forEach(function(elem) {
  elem.addEventListener('click', openTabs);
});

function openTabs(elem) {
  let btnTarget = elem.currentTarget,
      country = btnTarget.dataset.country;

      tabContent.forEach(function(elem) {
        elem.classList.remove('active');
      });

      tabLinks.forEach(function(elem) {
        elem.classList.remove("active");
     });

     document.querySelectorAll('#' + country).classList.add('active');

     btnTarget.classList.add('active');
}


function plus(a,b) {
  console.log(a + b);
}

plus(4,6);
