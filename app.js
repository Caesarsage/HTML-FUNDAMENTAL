// const sources = document.querySelector('[draggable="true"]');
// const targets = document.querySelector('[data-role= "drag-drop-target"]');
// [].forEach.call(targets, (target)=>{
//     target.addEventListener('drop', dropped, false);
//     target.addEventListener('dragenter', cancel, false);
//     target.addEventListener('dragover', cancel, false);
// });
// [].forEach.call(sources, (source)=>{
//     source.addEventListener('dragstart', dragStart, false);
// });

// let sourceContainerId;






// const dragStart = function (e) {
//     //IE doesnt support text/plain
//     try {
//     //grab the target of the element we are dragging and pass to dataTransfer object, which take the id
//     //of the element we are targeting and send it over to the drop target
//         e.dataTransfer.setData('text/plain', e.target.id);
//     } catch (err) {
//         //for IE..Not the Capitalize Text
//         e.dataTransfer.setData('Text', e.target.id);
//     }
//     sourceContainerId = this.parentElement.id
// }
// const dropped = function(e) {
//     let id;
//     //first within drop cancel all operations allowing the drop to happen
//     if (this.id !== sourceContainerId){
//         cancel(e);
//         try {
//             //instead of set target use get
//             id = e.dataTransfer.getData('text/plain');
//         } catch (ex) {
//             id = e.dataTransfer.getData('Text')
//         }

//         e.target.appendChild(document.querySelector('#' + id));
//     }
// }

// //Important as to help us stop the element it pointing to for drop opperation to happen
// const cancel = function (e) {
//     if (e.preventDefault) e.preventDefault();
//     if (e.stopPropagation) e.stopPropagation();
//     return false
// }


var sourceContainerId;

var dragStart = function(e) {
  try {
    e.dataTransfer.setData('text/plain', e.target.id);
  } catch (ex) {
    e.dataTransfer.setData('Text', e.target.id);
  }
  sourceContainerId = this.parentElement.id;
};

var cancel = function(e) {
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();
  return false;
};

var dropped = function(e) {
  var id;
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
    
var targets = document.querySelectorAll('[data-role="drag-drop-target"]');
[].forEach.call(targets, function(target) {
  target.addEventListener('drop', dropped, false);
  target.addEventListener('dragenter', cancel, false);
  target.addEventListener('dragover', cancel, false);
});

var sources = document.querySelectorAll('[draggable="true"]');
[].forEach.call(sources, function(source) {
  source.addEventListener('dragstart', dragStart, false);
});