$(document).bind("pageinit", function() {

});


/*
var makeActionButtons = function(key, rev) {
	var editButton = $('#targetAlpha').append('<a href="#">Edit Entry</a>').trigger('create');
	editButton.key = key;
	$('#editButton').on('click', editItem);
}*/

var deleteItem = function(key){
}

var editItem = function(key){
}

var loadJSON = function(){
	$('#targetAlpha').empty()
$.ajax({
	"url": "_view/peeps",
	"type": "GET",
	"dataType": "json",
	"success": function(data){
		$.each(data.rows, function(index, people){
			var person = JSON.stringify(people.id.substr(7));
			var job = people.value.job;
			var model = people.value.model;
			var age = people.value.age;
			var rev = people.value.rev;
			var pid = people.id;
			console.log(rev);
			console.log(person);
			console.log(job);
			console.log(model);
			console.log(age);
			_id = ("people:"+person);
			var _id = _id.replace(/\"/g, '');
			person = person.replace(/\"/g, '');
			
			
			
			var idVal = pid;
			var revVal = rev;

			
			//var deleteButton = $('#targetAlpha').append('<a href="#">Remove Entry</a>').trigger('create');
			var listItemEntry = $('<div></div>');
			listItemEntry.attr("name", person);
			listItemEntry.attr("data-role", "fieldcontain");
			listItemEntry.css('border', '2px solid black');
			listItemEntry.css('border-radius', '10px');
			listItemEntry.css('padding', '10px');
			//var nameLine = $("<li></li>");
			//nameLine.attr("data-filtertext", person);
			//
			var text = $("<h3></h3>");
			//text.html(person);
			text.html(""+person+"<br/>"+model+"<br/>age:"+age+"<br/>");
			var editButton = $("<a></a>");
			editButton.attr("href","#");
			editButton.html("edit item");
			editButton.attr("data-role", "button");
			editButton.attr("data-icon", "check");
			editButton.attr("onclick", "editThing("+_id+");");

			var deleteButton = $("<a></a>");
			deleteButton.attr("href","#");
			deleteButton.html("delete item");
			deleteButton.attr("data-role", "button");
			deleteButton.attr("data-icon", "delete");
			deleteButton.attr("onclick", "deleteThing("+_id+");");
			deleteButton.key = pid;
			//listItemEntry.append(nameLine);
			listItemEntry.append(text).trigger("create");
			listItemEntry.append(editButton).trigger("create");
			listItemEntry.append(deleteButton).trigger("create");
			$('#targetAlpha').append(listItemEntry).trigger("create");
			
			var person = {
				_id: idVal,
				_rev: revVal
						};
			
			});
			}


});
}
var loadIPs = function(){
	$('#targetAlpha').empty()
$.ajax({
	"url": "_view/ip",
	"type": "GET",
	"dataType": "json",
	"success": function(data){
		$.each(data.rows, function(index, ip){
			var ipname = JSON.stringify(ip.id.substr(3));
			var genre = ip.value.genre;
			var demo = ip.value.demo;
			var gross = ip.value.gross;
			var rev = ip.value.rev;
			console.log(rev);
			console.log(ipname);
			console.log(genre);
			console.log(demo);
			console.log(gross);
			console.log("funkytown1");
			var id = ("ip:"+ipname);
			var id = id.replace(/\"/g, '');
			ipname = ipname.replace(/\"/g, '');
			console.log("funkytown1");
			var listItemEntry = $('<div></div>');
			listItemEntry.attr("name", ipname);
			listItemEntry.attr("data-role", "fieldcontain");
			listItemEntry.css('border', '2px solid black');
			listItemEntry.css('border-radius', '10px');
			listItemEntry.css('padding', '10px');
			var text = $("<h3></h3>");
			text.html(""+ipname+"<br/>"+genre+"<br/>demo:"+demo+"<br/>gross:"+gross+"mil");
			console.log("funkytown2");
			var editButton = $("<a></a>");
			editButton.attr("href","#");
			editButton.html("edit item");
			editButton.attr("data-role", "button");
			editButton.attr("data-icon", "check");
			editButton.attr("onclick", "editThing("+id+");");
			console.log("funkytown3");
			var deleteButton = $("<a></a>");
			deleteButton.attr("href","#");
			deleteButton.html("delete item");
			deleteButton.attr("data-role", "button");
			deleteButton.attr("data-icon", "delete");
			deleteButton.attr("onclick", "deleteThing("+id+");");
			deleteButton.key = id;
			//listItemEntry.append(nameLine);
			listItemEntry.append(text).trigger("create");
			listItemEntry.append(editButton).trigger("create");
			listItemEntry.append(deleteButton).trigger("create");
			$('#targetAlpha').append(listItemEntry).trigger("create");
			console.log("funkytown");
			});
//		console.log(data);
		//var entry = JSON.stringify(data);
		//$('#targetAlpha').append(entry);
	}
});
//console.log("funkytown");
}

var deleteThing = function(id){
	$.couch.db("asdproject").openDoc(id, {
    success: function(data) {
        console.log(data);
    },
    error: function(status) {
        console.log(status);
    }
});

}

var personForm = $('#personForm');
personForm.validate({
	invalidHandler: function(form, validator){
		var html = "";
		//if (pageupdate === true){
			//$('#errorDialog').empty(html);
			//$('#errorDialog ul').html("ul");	
			//var pageupdate = false;
		//}
		//memberFormErrors.click();
		for (var key in validator.submitted) {
			var label = $('label[for^="' + key + '"]').not('[generated]');
			var lineInsert = label.text();
			html = (html += '<li>'+ lineInsert + ' Required Field.</li>');
			$('#errorDialog ul').html(html);
			var pageupdate = true;
	}
	},
	submitHandler: function(){
		if(!data._id){
			var id = ("person:" + name);
			} else { 
			var id = data._id; }
		
		var model = $('#model').val();
		var job = $('#job').val();
		var name = $('#nameField').val();
		
		storer(id, name, model, job, age);
		},
});


$('#JSONIP').click(loadIPs);
$('#JSON').click(loadJSON);
