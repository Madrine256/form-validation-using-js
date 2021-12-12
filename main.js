// get inputs
let inputIds = (uniqueId)=>{
    return document.querySelector(uniqueId)
  }
  let myClasses = (elementClasses)=> document.querySelectorAll(elementClasses);
  let myOneClass = (myClass)=> document.querySelector(myClass);
  //get input with ids
  let fullname = inputIds('#fullname'),
      imageUrl = inputIds('#image'),
      address = inputIds('#address'),
      phoneNum = inputIds('#phone'),
      email = inputIds('#email'),
      languages = inputIds('#lang'),
      skills_intrests = inputIds('#skills'),
      education = inputIds('#education'),
      date = inputIds('#startDate'),
      summary = inputIds('summary'),
      certificate = inputIds('#certify'),
      submitBtn = inputIds('#submit'),
      // get all inputs
      allInputs = myClasses('input'),
    //get all the danger and sucess btns
    errorBtn = myClasses('.fa-exclamation-circle'),
      successBtn = myClasses('.fa-check-circle');
      
     //get the input divs
  let fullnameDiv = myOneClass('.fullname');
  
  let checkinputValuesEmpty = ()=>{
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
  }
  checkinputValuesEmpty();
  submitBtn.addEventListener('click',()=>{
      allInputs.forEach((allvals)=>{
        if(allvals.value.trim() === ""){
        // alert('inputs are empty');
          
    errorBtn.forEach((error)=>{
      error.classList.add('newClass');
    });
    submitBtn.disabled = true;
          submitBtn.style.backgroundColor = 'yellow';
          submitBtn.style.cursor = "none";
      }
      })
  });
  