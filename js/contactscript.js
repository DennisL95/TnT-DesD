const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#EEF1F2";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Nachricht wird versandt...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("Email und Nachricht erforderlich.") != -1 || response.indexOf("Eine gültige Email-Adresse ist erforderlich.") != -1 || response.indexOf("Nachricht konnte nicht versandt werden.") != -1){
        statusTxt.style.color = "#ff704d";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}
