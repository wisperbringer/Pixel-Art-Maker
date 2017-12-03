

$(document).ready(function() {

	$("#color option").each(function() {
		$(this).css("color", this.id );
	});

	createGrid(20,20);

	$("#submit").click(function() {

		$(".grid-item").each(function() {
			(this).remove();	
			console.log(this);
		});

		var width = $("#width").val();
		var height = $("#height").val();

		if(width > 40) width = 40;
		if(height > 40) height = 40;

		console.log(width + " " + height );

		createGrid(width, height);

	});

	$(".grid").click(".grid-item", function(event) {
		var color = $("#color").find(":selected").text();

		$(event.target).css("background", color);

		console.log(color);

	});
});

function createGrid(width, height) {

	var maxWidth = 80, maxHeight = 100, size = 20;
	var newWidth = width < maxWidth ? width : maxWidth;
	var newHeight = height < maxHeight ? height : maxHeight;

	var grid = $(".grid");
	grid.css("width", width * (size + 1));

	var gridItems = "";

	for (var j = 0; j < newHeight; j++){
		for(var i = 0; i < newWidth; i++){
			gridItems += "<div class=\"grid-item\"></div>";
		}
	}

	$(gridItems).appendTo(grid);



	
}