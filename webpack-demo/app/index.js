import _ from 'lodash';

function compoent() {
  var element= document.createElement('div');
  element.innerHTML=_.join(['HELLO','webpack'],'');
  return element;
}

document.body.appendChild(compoent());