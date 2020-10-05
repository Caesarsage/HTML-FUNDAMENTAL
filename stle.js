//DRAG EVENTS CODE... NOTE

var sourceContainerId;

var dragStart = function(e) {
  console.log('source: dragstart');

  try {
    e.dataTransfer.setData('text/plain', e.target.id);
  } catch (ex) {
    e.dataTransfer.setData('Text', e.target.id);
  }
  e.dataTransfer.effectAllowed = 'move';
  sourceContainerId = this.parentElement.id;
};

var cancel = function(e) {
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();
  return false;
};

var dragEnd = function(e) {
  console.log('source: dragend');
};
    
var drag = function(e) {
  console.log('source: drag');
};

var dropped = function(e) {
  var id;
  
  console.log('target: drop');
  
  if (this.id !== sourceContainerId) {
    cancel(e);
    try {
      id = e.dataTransfer.getData('text/plain');
    } catch (ex) {
      id = e.dataTransfer.getData('Text');
    }
    e.target.appendChild(document.querySelector('#' + id));
  }
};

var dragEnter = function(e) {
  cancel(e);
  console.log('target: dragenter');
};

var dragOver = function(e) {
  cancel(e);
  console.log('target: dragover');
};
    
var dragLeave = function(e) {
  console.log('target: dragleave');
};
    
var targets = document.querySelectorAll('[data-role="drag-drop-target"]');
[].forEach.call(targets, function(target) {
  target.addEventListener('drop', dropped, false);
  target.addEventListener('dragenter', dragEnter, false);
  target.addEventListener('dragover', dragOver, false);
  target.addEventListener('dragleave', dragLeave, false);
});

var sources = document.querySelectorAll('[draggable="true"]');
[].forEach.call(sources, function(source) {
  source.addEventListener('dragstart', dragStart, false);
  source.addEventListener('drag', drag, false);
  source.addEventListener('dragend', dragEnd, false);
});