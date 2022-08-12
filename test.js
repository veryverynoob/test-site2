window.location.href = 'index1.html';
alert("hi");
let admin = confirm('Are you admin?');
if (admin===true) {
  alert('Приветствую');
  window.location.href = 'index1.html';
}
else {
  alert("Вы не админ,уходите!");
  setTimeout(() => {  var objWindow = window.open(location.href, "_self"); }, 5000);
 objWindow.close();
}
