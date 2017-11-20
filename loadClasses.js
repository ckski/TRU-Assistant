function JsontoClass(){
	
	$.getJSON('classes.json', function(data){
	classes = data;
	for(var singleClass in classes){

		var ctitle = "Insert Class Title";
		var ccourseNum = classes[singleClass]['id'].replace(" ","");
		var cduration = classes[singleClass]['duration'];
		var cdays = classes[singleClass]['days'];
		var cstart = classes[singleClass]['start'];
		var ctype = classes[singleClass]['type'];
		var ccrn = classes[singleClass];

		var ctimes = [];

		for(var day in days){
			ctimes.push({'start':cstart,'day'days[day]:,'duration':cduration,'type',ctype});
		}

		var newclass = {
			title:ctitle,
			courseNumber: ccourseNum,
			times:ctimes
		}

		addCourseToTable(newclass);
		}
	}
}