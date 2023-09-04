// // active link

// const linkWork= document.querySelectorAll('.work_item')

// function activeWork(){
//     linkWork.forEach(L=> l.classList.remove('active-work'))
// }   this.classList.add('active-work')

// linkWork.forEach(L=>l.addEventListener("click","activework"))

// // work popup
// document.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("work_button")){
//         togglePortfolioPopup();
//         portfolioItemDetails(e.target.parentElement);
//     }
// })

// function togglePortfolioPopup(){
//     document.querySelector(".portfolio_popup").classList.toggle("open");
// }

// document.querySelector(".portfolio_popup-close").addEventListener("click",togglePortfolioPopup);

function open_popup(){
    document.getElementById("portfolio-popup").style.display="block";
}

function close_popup(){
    document.getElementById("portfolio-popup").style.display="none";
}

window.onclick = function (event) {
    let modal = document.getElementById('portfolio_popup');
    if (event.target == modal) {
      closeForm();
    }
  }