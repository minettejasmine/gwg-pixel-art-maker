// Select color input and test with console.log
// console.log($("#colorPicker").val());

// Select size input height and width and test with console.log
// console.log($("#inputHeight").val());
// console.log($("#inputWidth").val());

// Submit button using jQuery event handler
$("input[type='submit']").on("click",function(event) {

//Event method with default submit event prevented so that grid height and weight printed to console
	event.preventDefault();
	
//Storing input values in variables
	const height = $("#inputHeight").val();
	const width = $("#inputWidth").val();

	// calling empty method on table; before makeGrid is called, we select table and empty its child elements resulting in new grid being called each submit
	$("#pixelCanvas").empty();
	makeGrid(height,width);
});

//When size is submitted by the user, call makeGrid()
function makeGrid(height,width) {
// test with console.log(height,width);

	// for number up to height
	for (let i = 0; i<height; i++) {

		// create a row...first, test with console.log to see if loop works: console.log("row"+i);
		$("#pixelCanvas").append($("<tr></tr>"));

		// for number up to width
		for (let j = 0; j<width; j++) {

			// add a td to row...first, test with console.log("td"+j); to see if loop works
			$("tr").last().append($("<td></td>"));
		}
	}
}

// DRAW...
// color square when clicked function; similar to the submit button function
$("#pixelCanvas").on("click", "td", function() {

	// change background color of event targets...first, test with console.log("HEY AGAIN!")
	$(this).css("background-color", $("#colorPicker").val());
});