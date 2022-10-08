var randy = document.getElementById('button');
var kassi = document.getElementById('myDropdown');

kassi.style.display = 'none';

randy.addEventListener('click', function(){
  if (kassi.style.display == 'none'){
    kassi.style.display = 'block';
}else{
    kassi.style.display = 'none';
}
})
