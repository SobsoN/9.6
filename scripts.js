/*function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
});
*/

//ZADANIE

let buttonElem = document.getElementById('addElem'),
list = document.getElementById('list');

buttonElem.addEventListener('click', function(e) {
	let newElement = document.createElement('li');
	let dlugosc = document.getElementsByTagName('li').length+1;
	newElement.innerHTML = 'item '+dlugosc;
	list.appendChild(newElement);
})