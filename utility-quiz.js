// this is like the worst code i've ever written but for time's sake here it is

function getQuizScore(form) {
  var total = 0; // risk
  var uTotal = 0; // utility

  // utility
  for (var count = 0; count < 3; count++) {
    if (form.q1[count].checked) {
      var uTotal = uTotal + parseInt(form.q1[count].value);
    }
  }

  for (var count = 0; count < 2; count++) {
    if (form.q2[count].checked) {
      var uTotal = uTotal + parseInt(form.q2[count].value);
    }
  }

  for (var count = 0; count < 3; count++) {
    if (form.q3[count].checked) {
      var uTotal = uTotal + parseInt(form.q3[count].value);
    }
  }

  for (var count = 0; count < 2; count++) {
    if (form.q4[count].checked) {
      var uTotal = uTotal + parseInt(form.q4[count].value);
    }
  }

  // Risk
  for (var count = 0; count < 2; count++) {
    if (form.q5[count].checked) {
      var total = total + parseInt(form.q5[count].value);
    }
  }

  for (var count = 0; count < 2; count++) {
    if (form.q6[count].checked) {
      var total = total + parseInt(form.q6[count].value);
    }
  }

  for (var count = 0; count < 3; count++) {
    if (form.q7[count].checked) {
      var total = total + parseInt(form.q7[count].value);
    }
  }

  for (var count = 0; count < 2; count++) {
    if (form.q8[count].checked) {
      var total = total + parseInt(form.q8[count].value);
    }
  }

  for (var count = 0; count < 2; count++) {
    if (form.q9[count].checked) {
      var total = total + parseInt(form.q9[count].value);
    }
  }

  for (var count = 0; count < 4; count++) {
    if (form.q10[count].checked) {
      var total = total + parseInt(form.q10[count].value);
    }
  }

  for (var count = 0; count < 2; count++) {
    if (form.q11[count].checked) {
      var total = total + parseInt(form.q11[count].value);
    }
  }

  for (var count = 0; count < 2; count++) {
    if (form.q12[count].checked) {
      var total = total + parseInt(form.q12[count].value);
    }
  }

  for (var count = 0; count < 3; count++) {
    if (form.q13[count].checked) {
      var total = total + parseInt(form.q13[count].value);
    }
  }

  for (var count = 0; count < 2; count++) {
    if (form.q14[count].checked) {
      var total = total + parseInt(form.q14[count].value);
    }
  }

  for (var count = 0; count < 2; count++) {
    if (form.q15[count].checked) {
      var total = total + parseInt(form.q15[count].value);
    }
  }

  for (var count = 0; count < 3; count++) {
    if (form.q16[count].checked) {
      var total = total + parseInt(form.q16[count].value);
    }
  }

  for (var count = 0; count < 2; count++) {
    if (form.q17[count].checked) {
      var total = total + parseInt(form.q17[count].value);
    }
  }
}
