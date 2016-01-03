function search(){
	$("#effects").html('');
	var key = "z9QVJMAfnJkGN8V48Cs4pzYUS0XTEqksWsMi0jvr"
	var searchTerm = document.getElementById("fdaSearch").value

	$.ajax({
    
	   	url: "https://api.fda.gov/drug/event.json?api_key="+ key + "&search=" + searchTerm+"&count=patient.reaction.reactionmeddrapt.exact",
	   	dataType: "json",
	   	success: function(data) {
	   		for(i=0;i<15;i++){
	    		var results = (data.results[i].term)
          if(data.results[i].term === "DRUG INEFFECTIVE"){
            results[i].term = ""
          }else{
            		$("#effects").append(results + " " + "<br>")
				console.log(data.results[i].term)
          }
	    
			}
	   	},
	   type: 'GET'
	});
}

/*
$.getJSON("/json/cats.json", function(json) {
	var html = "";
	json.forEach(function(val) {
		var keys = Object.keys(val);
		html += "<div class = 'cat'>";
		keys.forEach(function(key) {
			html += "<b>" + key + "</b>: " + val[key] + "<br />";
			html += "</div><br />";
		});
	});
	$(".message").html(html);
});
*/