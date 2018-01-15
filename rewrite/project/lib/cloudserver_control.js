function jsonPOST(obj, requestUrl, type){

	var json = JSON.stringify(obj);

	$.ajax({
		url: requestUrl,
		type: "POST",
		headers: {
			"Accept" : type,
			"Content-Type" : "application/json"
		},
		data: json,
		success: function(data){
			callback( requestUrl, data );
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log( "error:" + jqXHR.status);
		}

	});

}

function callback( url, data ){

	switch(url){

		default:
		    console.log(JSON.stringify(data));
		break;

	}

}
