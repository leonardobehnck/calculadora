let updateMode = false

function calc(event) {
  let op = event.srcElement.innerHTML

  if (updateMode) {
    updateMode = false
    if (parseInt(op) > 0) {
      document.getElementById('userInp').value = op
      return
    }
  }

  if (op == "C") {
    document.getElementById('userInp').value = ""
    return
  }

  if (op != "=") {
    document.getElementById('userInp').value += op
  } else {
    document.getElementById('userInp').value = eval(document.getElementById('userInp').value)
    updateMode = true
  }
}