var cancel = function(e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
};
       //starting point
var dragStart = function(e){
    //get access to the element checked (selected radio btn)
    var element = document.querySelector('input[name="allowed"]:checked');

    //pull the dataTransfer to effect
    e.dataTransfer.effectAllowed = element.value;
    try {
        e.dataTransfer.setData('text/plain', '');
    } catch (e) {
        e.dataTransfer.setData('Text', '');
    }
};

//Next Drag End fires
var dragEnd = function (e) {
    //asign the mes inner text to the data transfer data
    document.getElementById('msg').innerText = e.dataTransfer.dropEffect;
}
//Next drag enter but since it immediately cancel 

var dragOver = function(e) {
    cancel(e);
    var element = document.querySelector('input[name="effect"]:checked');
    e.dataTransfer.dropEffect = element.value;
    this.classList.add('over');
};

var dragLeave = function(e) {
    this.classList.remove('over');
};

var dropped = function(e) {
    cancel(e);

    var
    countElement = document.getElementById('count'),
    count = countElement.innerText;

    count++;

    countElement.innerText = count;
    target.classList.remove('over');
};

var source = document.getElementById('source');
 source.addEventListener('dragstart', dragStart, false);
 source.addEventListener('dragend', dragEnd, false);

 var targets = document.getElementById('target');
 targets.addEventListener('dragenter', cancel, false);
 targets.addEventListener('dragover', cancel, false);
 targets.addEventListener('dragleave', cancel, false);
 targets.addEventListener('drop', cancel, false);