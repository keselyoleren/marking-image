var canvas = document.getElementById('Canvas');
var context = canvas.getContext("2d");

// Map sprite
var mapSprite = new Image();
mapSprite.src = "https://s3-us-west-2.amazonaws.com/bucketguwe/lab/1542966727-36.jpg";

var Marker = function () {
    this.Sprite = new Image();
    this.Sprite.src = "http://www.clker.com/cliparts/w/O/e/P/x/i/map-marker-hi.png"
    this.Width = 12;
    this.Height = 20;
    this.XPos = 0;
    this.YPos = 0;
    this.count = 0
}

var Markers = new Array();
var mouseClicked = function (mouse) {
    var rect = canvas.getBoundingClientRect();
    var mouseXPos = (mouse.x - rect.left);
    var mouseYPos = (mouse.y - rect.top);
    var marker = new Marker();
    marker.XPos = mouseXPos - (marker.Width / 2);
    marker.YPos = mouseYPos - marker.Height;
    Markers.push(marker);
}

canvas.addEventListener("mousedown", mouseClicked, false);

var firstLoad = function () {
    context.font = "15px Georgia";
    context.textAlign = "center";
}

firstLoad();

var main = function () {
    draw();
};

var draw = function () {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(mapSprite, 0, 0, 700, 700);

    // Draw markers
    for (var i = 0; i < Markers.length; i++) {
        var tempMarker = Markers[i];
        context.drawImage(tempMarker.Sprite, tempMarker.XPos, tempMarker.YPos, tempMarker.Width, tempMarker.Height);
        var markerText = "Example Notes";
        var textMeasurements = context.measureText(markerText);
        context.fillStyle = "#666";
        context.globalAlpha = 0.7;
        context.fillRect(tempMarker.XPos - (textMeasurements.width / 2), tempMarker.YPos - 15, textMeasurements.width, 20);
        context.globalAlpha = 1;
        context.fillStyle = "#000";
        context.fillText(markerText, tempMarker.XPos, tempMarker.YPos);
    }
};

setInterval(main, (1000 / 60)); 