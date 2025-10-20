function toggleMenu(){
  const ul = document.getElementById('navlist');
  if(ul.style.display==='flex') ul.style.display='none'; else ul.style.display='flex';
}
function openDonate(){alert('Откроется модальное окно доната (демо)');}
function simulatePay(provider){alert('Платеж через ' + (provider||'карту') + ' (демо)');}
function togglePassword() {
  const input = document.getElementById("password");
  const icon = document.getElementById("eyeIcon");
  if (input.type === "password") {
    input.type = "text";
    icon.setAttribute("stroke", "#e53935");
  } else {
    input.type = "password";
    icon.setAttribute("stroke", "#aaa");
  }
}

// Всплывающее уведомление
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const alertOverlay = document.getElementById("alertOverlay");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alertOverlay.classList.add("show");
    setTimeout(() => {
      alertOverlay.classList.remove("show");
    }, 2800);
  });
});
