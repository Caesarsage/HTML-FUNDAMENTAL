// Basic shape
let canvas, context;
canvas =  document.getElementById('canvas');

if (canvas && canvas.getContext) {
    context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(75, 50);
    context.lineTo(75, 100);
    context.lineTo(25, 100);
    context.fill();

}

//Styled Shape
let canvas2, context2 ;
canvas2 = document.querySelector('#canvas2');

if (canvas2 && canvas2.getContext) {
    context2 = canvas.getContext('2d');

    //begin path
    context2.beginPath();
    context2.moveTo(100, 100);
    //lineTo to trace shape path
    context2.lineTo(100, 300);
    context2.lineTo(150, 300);
    context2.lineTo(150, 155);
    context2.lineTo(205, 155);
    context2.lineTo(205, 100);
    context2.closePath();

    //set the fill color and initialize the fill
    context2.fillStyle = '#0099ff';
    context2.fill()

    //set the line width
    context2.lineWidth = 6;
    //set the line corner at join point to be round
    context2.lineJoin = 'round';
    //set the line stroke style and initiate
    context2.strokeStyle = '#cccccc'
    context2.stroke();
}

//Rectangle
let canvasRect, contextRect ;
canvasRect = document.querySelector('#canvas-rect');

if (canvasRect && canvasRect.getContext) {
    contextRect = canvasRect.getContext('2d');

    //red box
    contextRect.fillStyle = 'rgb(500,0,0)';
    contextRect.fillRect( //fillRect create a red square (equal width and height) as prior to the fillStyle
        50, //x coardinate
        50, //y coard
        100, //width
        100 //height
    );

     //blue box (with transparency)
     contextRect.fillStyle = 'rgba(0,0,500,0.5)';
     contextRect.fillRect(
        80, // x
        80, // y
        100, //width
        100 //height
     );

     //clear box
     contextRect.clearRect(
         115, // x
         115, // y
         20, //width
         20 //height
     )
    
     //grean outline
     contextRect.strokeStyle = 'rgb(51,153,0)';
     contextRect.lineWidth = 6;
     contextRect.strokeRect(115, 115, 20 ,20);
}

//Arc and Gradient
let canvasArc, contextArc ;
canvasArc = document.querySelector('#canvas-arc');

if (canvasArc && canvasArc.getContext) {
    contextArc = canvasArc.getContext('2d');

    //create first gradient
    const g1 = contextArc.createRadialGradient(
        160, //x coordinate of grad. start
        120, //y coordinate of grad. start
        0, // Radius of the start circle
        320, //x coordinate of the grad. end
        220, // y cordinate of the grad. end
        300  //Radius of the end circle
    );
    g1.addColorStop(0 , '#fff');
    g1.addColorStop(1, '#999');

    //create the first grad. circle (base circle)
    contextArc.lineWidth = 0;
    contextArc.strokeStyle = '#000';
    contextArc.fillStyle = g1;
    contextArc.beginPath();
    contextArc.arc(
        180, //x coordinate of arc start
        180, // y coord. of arc start
        160, // radius
        0, // start angle
        Math.PI * 2, // End angle (full circle)
        true // Anticlockwise
    )
    contextArc.fill();

    //create another FOR NEXT CIRCLE
    const g2 = contextArc.createRadialGradient(360,
        320,
        0,
        260,
        220,
        200);

    g2.addColorStop(0, '#ffffff');
    g2.addColorStop(1, '#999999');

    // inner circle (smaller)
    contextArc.fillStyle = g2;
    contextArc.beginPath();
    contextArc.arc(180,
    180,
    130,
    0,
    Math.PI * 2,
    true);
    contextArc.fill();

    //Add a text to the arc
    contextArc.fillStyle = '#ffffff';
    contextArc.font = '280px Arial';
    //add content 'C'
    contextArc.fillText('C', 80, 280);
}

// scalling
let canvasScalling = document.getElementById("scalling-canvas");
let contextScalling = null;

if (canvasScalling && canvasScalling.getContext) {

  contextScalling = canvasScalling.getContext("2d");

  var img = new Image();
  //on image load draw the img
  img.onload = function() {
      contextScalling.drawImage(img, 0, 0);
  }

  //get image 
  img.src = "../demos/img/home.jpg";

  // un comment to scale the chart
  //context.scale(.5, .5); // 0.5 orig. size
  //context.scale(2, 2); // 2x orig. size

  // arguments do not need to be equal
  //context.scale(.25,.5); 
}