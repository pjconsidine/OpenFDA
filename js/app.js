$(document).ready(function() {	
	$(".btn").click(function() {
		$.ajax({
			type: "GET",
			url: "https://api.fda.gov/drug/event.json?api_key=z9QVJMAfnJkGN8V48Cs4pzYUS0XTEqksWsMi0jvr",
			mimeType: "application/json",
			dataType: "json",
			success: function(data){
				var results = data.results;
				var html = "";
				
				results.forEach(function(element, index, array) {
					var Key = Object.keys(element);
					
					html += Key[11];
					
					var patientKey = Object.keys(Key[11]);
					
					html += "<br />" + patientKey;
					
					var drugKey = Object.keys(patientKey[0]);
					
					html += "<br />" + drugKey;
					
				});
				$(".message").html(html);
			},
			error: function(error) {
				console.log("No data received");
			}
		});
	});
});