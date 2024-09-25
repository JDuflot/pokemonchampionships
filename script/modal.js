function editNav() {
    var x = document.getElementById("myTopnav");// Récupère l'élément avec l'ID "myTopnav"
    if (x.className === "topnav") { // Si la classe de l'élément est "topnav"
      x.className += " responsive"; //Ajoute " responsive" à la classe (devient "topnav responsive")
    } else {
      x.className = "topnav"; // Sinon, réinitialise la classe à "topnav"
    }
  }
  
  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  const modalSuccess = document.querySelector('#modal-success');
  const closeSuccess = document.querySelector('#closeSuccess');
  const closeForm = document.querySelector('#closeForm');
  const btnCloseSuccess = document.querySelector('#btn-close');
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // ouverture de la modal formulaire
  function launchModal() {
    modalbg.style.display = "block";
  }
  
  function hideModal() {
    modalbg.style.display = "none";
  }
  
  function successModal() {
    modalSuccess.style.display = "block"; 
  }
  
  function closeModalForm() {
    modalbg.style.display = "none";
  }
  
  function closeModalSuccess() {
    modalSuccess.style.display = "none";
  }
  
  //fermeture de la modale formulaire
  closeForm.addEventListener("click", closeModalForm);
  //fermeture de la modale de succes
  closeSuccess.addEventListener("click", closeModalSuccess);
  //fermeture de la modale avec le btn fermer
  btnCloseSuccess.addEventListener("click", closeModalSuccess);