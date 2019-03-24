window.onload = function()
{

	var request = new XMLHttpRequest();

	 request.open('GET','https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');
	 request.responseType = 'text';
	 request.onreadystatechange = function(){
	  if((request.status==200) && (request.readyState==4)){
	 		
	 		var movies = request.response;
	 		var movieNextLevet = JSON.parse(movies);
	 		var moviesfilmed = "";

	 		var data = movieNextLevet.data;
	 		var len = data.length;
	 		for(var i = 0; i<len; i++){
	 			var checkLocation = data[i][10];
	 			if(checkLocation == "Golden Gate Bridge" )
	 			{
	 				// moviesfilmed = moviesfilmed + data[i][10] + " ";
	 				  moviesfilmed = moviesfilmed +"Title : " +  data[i][8]+ " ";
	 				   moviesfilmed = moviesfilmed + "/ Year: " + data[i][9]+ " ";
	 				  moviesfilmed = moviesfilmed + "/ Production Company: " + data[i][12] + "<br>";
	 			}
	 		}
	 	//	 console.log(data);


			document.getElementById("result").innerHTML += moviesfilmed;
	 	}
	 }
	 
	 request.send();

}