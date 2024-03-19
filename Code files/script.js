
function cardHover(){
    const floatLeft = document.querySelector("[data-float-left]");
    const floatRight = document.querySelector("[data-float-right]");
    const primaryCard = document.querySelector("[data-primary-card]");

    floatLeft.addEventListener("mousemove" , () => {
      floatLeft.style.opacity = "1"; 
      primaryCard.style.left = "10%";
      primaryCard.style.transform = "translate(-50% , -50%) rotateY(-70deg)";
    })
    
    floatLeft.addEventListener("mouseleave" , () => {
        floatLeft.style.opacity = "0"; 
        primaryCard.style.left = "50%";
        primaryCard.style.transform = "translate(-50% , -50%) rotateY(0deg)";
      })

    floatRight.addEventListener("mousemove" , () => {
        floatRight.style.opacity = "1"; 
        primaryCard.style.right = "-50%";
        primaryCard.style.left = "unset";
        primaryCard.style.transform = "translate(-50% , -50%) rotateY(70deg)";
      })

      floatRight.addEventListener("mouseleave" , () => {
        floatRight.style.opacity = "0"; 
        primaryCard.style.left = "50%";
        primaryCard.style.right = "unset";
        primaryCard.style.transform = "translate(-50% , -50%) rotateY(0deg)";
      })
}

cardHover();