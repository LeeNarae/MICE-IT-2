
var chessboard = document.getElementById("chessboard");

for(var i = 0; i < 4; i++) {
    var row = document.createElement("div");
    row.className = "row";

    var useWhite = (i % 2 == 0);
    for (var j = 0; j < 4; j++) {
        var tile = document.createElement("div");

        if (useWhite) tile.className = "tile black";
        else tile.className = "tile white";
        useWhite = !useWhite;

        row.appendChild(tile);
    
        tile.addEventListener('click', popup);
        function popup(event) {
        	var rechange = document.querySelector('.red');

        	var black = document.querySelectorAll('.black');
        	var white = document.querySelectorAll('.white');

        if(rechange != null) {
        	if(black.length>white.length)
        		rechange.className = 'tile white';
        	else
        		rechange.className = 'tile black';
        }
        var change = event.target
        	change.className = 'tile red';
        }
    }
    chessboard.appendChild(row);
}