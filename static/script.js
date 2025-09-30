function toggleMenu(){
  const ul = document.getElementById('navlist');
  if(ul.style.display==='flex') ul.style.display='none'; else ul.style.display='flex';
}
function openDonate(){
  alert('Откроется модальное окно доната (демо)');
}