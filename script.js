const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//variable assign
    const name1 = document.getElementById("name1")                                ;
    name1.innerHTML = localStorage.getItem("UserName");
    const wish = document.getElementById("wish");
    

    //get storage value 
    const UNname = document.getElementById("URname").innerHTML = localStorage.getItem("UserName");
    const DateOfBirth = document.getElementById("DateOfBirth").innerHTML = localStorage.getItem("DateOfBirth");

    //live date vide variable
    const currentDate1 = document.getElementById("currentDate1");
    const currentDate2 = document.getElementById("currentDate2");
    const currentDate3 = document.getElementById("currentDate3");
      // get date value
      let date = new Date() ;
      let currentDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
      // assign date value
      currentDate1.innerHTML = "Date : " +currentDate;
      currentDate2.innerHTML = "Date : " +currentDate;
      currentDate3.innerHTML = "Date : " +currentDate;

    //Random value generator { Salary }
    let salaryValue = (Math.floor(Math.random()*10)+1);
    salary.innerHTML = "₹ " + salaryValue + " Lakhs" ;

// wish condition code
const t1 = new Date();
    const x = t1.getHours();
    console.log(x +" hrs "+t1.getMinutes()+" minits")
    
    if( x <= 10 )
  {
    w1 = "Good Morning" ;
  }
  else if(x<=15)
  {
    w1 = "Good Afternoon" ;
  }
  else
  {
    w1 = "Good Evening" ;
    console.log("b3")
  }
  wish.innerHTML = w1;
  localStorage.setItem("wish",w1);