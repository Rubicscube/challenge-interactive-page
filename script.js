// tabs

function openCity(evt, cityName) {
   
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // send button

  const sendButton = document.querySelector('.send');
  const inputFirstName = document.querySelector('.firstName').value;
  console.log(inputFirstName);
  const inputLastName = document.querySelector('.lastName').value;
  console.log(inputLastName);
  const inputEmail = document.querySelector('.email').value;
  console.log(inputEmail);

  function disabled(e) {

    console.log(e.target.value);

    if (inputFirstName !== '' && inputLastName !== '' && inputEmail !== '') {
        sendButton.disabled = true;
        alert("hello");
      } else {
        sendButton.disabled = false;
        alert('nope');
      }
  }

  


  
  

