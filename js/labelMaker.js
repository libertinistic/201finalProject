function labelMaker(topic, firstName, lastName) {
  //Make div to display contact topic excerpt
  console.log('Label Maker is running.');
  var noteDiv = document.createElement('div');
  noteDiv.setAttribute('class', 'ctctPlans');
  noteDiv.textContent = topic;

  //Make div element to display contact name
  var nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'ctctName');
  nameDiv.textContent = firstName + ' ' + lastName;

  //Make container div for contact name and topic excerpt
  var innerDiv = document.createElement('div');
  innerDiv.setAttribute('class', 'mini-text');
  innerDiv.appendChild(nameDiv);
  innerDiv.appendChild(noteDiv);

  //Make alt div for contact avatar
  var noPic = document.createElement('div');
  noPic.setAttribute('class', 'altDiv ctctFaces');
  var initials = document.createTextNode('A S');
  noPic.appendChild(initials);

  //Make img placeholder for contact avatar
  var picture = document.createElement('img');
  picture.setAttribute('class', 'hasPic ctctFaces');
  picture.setAttribute('id','hasImg');
  picture.setAttribute('src', '../assets/Senior_Portrait_0067-478x700.jpg');

  //Make containing div for contact label
  var bubble = document.createElement('div');
  bubble.setAttribute('class', 'ctctLabels');
  bubble.appendChild(noPic);
  bubble.appendChild(picture);
  bubble.appendChild(innerDiv);

  return bubble;
}
