const handleSubmit = (e) => {
  e.preventDefault();
  const name = $("#username").val();
  const number = $("#Phone").val();
  const email = $("#E-Mail").val();
  const msg = $("#Message").val();
  const data = {
    name: name,
    number: number,
    email: email,
    message: msg,
  };
  if (name.length == 0) {
    alert("Enter Valid User Name");
    return;
  } else if (number.length != 10) {
    alert("Enter Valid Number");
    return;
  } else if (email.length == 0) {
    alert("Enter Valid E-Mail");
    return;
  } else {
    console.log(data);
    $.ajax({
      type: "post",
      url: "http://localhost:3000/contact",
      data: data,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      dataType: "json",
      // contentType: "application/json; charset=utf-8",
      success: function (data) {
        if (data.return) {
          alert("SUBMITTED");
        } else {
          alert("TRY AFTER SOME TIME");
        }
      },
    });
  }
};
