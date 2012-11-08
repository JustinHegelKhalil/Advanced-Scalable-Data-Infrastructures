$(document).bind("pageinit", function() {

});

var loadJSON = function(){
	$('#targetAlpha').empty()
$.ajax({
	url: "json.json",
	type: "GET",
	dataType: "json",
	success: function(response){
		console.log(response);
		var entry = JSON.stringify(response);
		$('#targetAlpha').append(entry);
	}
});
}

$('#JSON').click(loadJSON);


