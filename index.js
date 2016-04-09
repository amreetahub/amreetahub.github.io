$(document).ready(function() {
	

	var list    = document.getElementById("list").value;

	var entry = document.getElementById("entry").value;
	

		var entryArr   = [ ];
		function addentry ( entry ) {
  		entryArr.push( entry );
  		console.log( "Entry: " + entryArr.join(", ") );
  		
  		print(entryArr)
}
});
	


