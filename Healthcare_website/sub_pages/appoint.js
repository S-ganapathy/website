function valandadd() {
  var nam = document.getElementById("name").value;
  const num = document.getElementById("num").value;
  const ema = document.getElementById("emailid").value;
  const gend = document.querySelectorAll(".genclass");
  const chooseadoc = document.querySelectorAll(".d_select");
  const docselect = document.getElementById("doctorse");

  var p;
  const date = document.getElementById("date").value;

  const datn = new Date();

  for (let i = 0; i < gend.length; i++) {
    if (gend[i].checked) {
      p = gend[i].value;
    }
  }
  const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
    let date3;
    if (date1 < date2) {
      date3 = d2;
      return date3;
    } else if (date1 > date2) {
      alert("please enter the correct date");
    }
  };
  var datv = new Date();
  var datv = compareDates(datn, date);

  confirm(
    "your entered details are " +
      "\n" +
      "your name " +
      nam +
      "\n" +
      "your number is" +
      num +
      "\n" +
      "your e-mail is: " +
      ema +
      "\n" +
      "your gender is: " +
      p +
      "\n" +
      "your selected doc is: " +
      docselect.value +
      "\n" +
      "your date of visit is: " +
      datv
  );


            var nam=document.getElementById("name").value;
            var ph=document.getElementById("num").value;
            var em=document.getElementById("emailid").value;

        localStorage.setItem("name",nam);
        localStorage.setItem("phnum",ph);
        localStorage.setItem("email",em);
        
        window.location.href="payhome1.html";
}
