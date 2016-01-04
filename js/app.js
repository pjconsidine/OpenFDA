$(document).ready(function() {	

	function resetForm() {
		$(".form-control").val('');
		$(".message").html("Enter your search terms")
	}
	
	$("[name=reset]").click (function() {
		resetForm("search-form");
	});

	$(".btn-primary").click(function() {
		var patientAge = ("patient.patientonsetage=" + $('[name=patientAge]').val() + "&");
		
		console.log(patientAge);

		$.ajax({
			type: "GET",
			url: "https://api.fda.gov/drug/event.json?api_key=z9QVJMAfnJkGN8V48Cs4pzYUS0XTEqksWsMi0jvr&search=" + patientAge + "limit=10",
			mimeType: "application/json",
			dataType: "json",
			success: function(data){
				var results = data.results;
				var html = "";
				
				results.forEach(function (element, index, array) {
					html += "<li>Patient reaction: " + element.patient.reaction[0].reactionmeddrapt + "<br />Drug indication: " + element.patient.drug[0].drugindication + "</li>";
				});
				
				$(".message").html(html);
			},
			error: function(error) {
				console.log("No data received");
			}
		});
	});
});