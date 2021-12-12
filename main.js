// get inputs
let inputIds = (uniqueId)=>{
    return document.querySelector(uniqueId)
  }
  let myClasses = (elementClasses)=> document.querySelectorAll(elementClasses);
  let myOneClass = (myClass)=> document.querySelector(myClass);
  //get input with ids
  let submitBtn = inputIds('#submit'),
      // get all inputs
      allInputs = myClasses('input'),
    //get all the danger and sucess btns
    errorBtn = myClasses('.fa-exclamation-circle'),
      successBtn = myClasses('.fa-check-circle');
      
  
 
      allInputs.forEach((inputs)=>{
    inputs.addEventListener('keyup', (clickedInput)=>{
  
      const dangerShow = clickedInput.currentTarget.nextElementSibling;
       const checkgreen = clickedInput.currentTarget.nextElementSibling.nextElementSibling;
      if(clickedInput.currentTarget.value.trim() === "" ){
        dangerShow.classList.add('newClass');
         checkgreen.classList.remove('newClass');
      }else{
            checkgreen.classList.add('newClass');
        dangerShow.classList.remove('newClass'); 
      }
    })
  })
  

  submitBtn.addEventListener('click',()=>{
      allInputs.forEach((allvals)=>{
        if(allvals.value.trim() === ""){
        // alert('inputs are empty')      
    errorBtn.forEach((error)=>{
      error.classList.add('newClass');
    });
        submitBtn.disabled = true;
          submitBtn.style.backgroundColor = 'yellow';
          submitBtn.style.cursor = "none";
      }else{
        submitBtn.disabled = false;
        console.log(`input of ${allvals.name} is ${allvals.value}`)
      }
      
      
      })
  });
  