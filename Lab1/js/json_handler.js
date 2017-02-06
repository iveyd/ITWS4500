



$(window).on("load", function() {

		$.getJSON("TwitterTweets17.json", function(data) {
		var i = 0;

		while(i < 5) {
			console.log(data[0]);
			var item = data[i];
			$("#ticker01").append("<li><img src='"+item.user.profile_image_url+"'><p>"+item.user.screen_name+"</p><p>"+item.text+"</p><p>"+item.created_at+"</p></li>");
			// $("#ticker01 li").animate({top:"+=50px",},3000);
			$("#ticker01 li").addClass("tli");
			// console.log(data.responseJSON[i].user);
			i+=1;
		}

		window.setInterval(Timer,3000);

		function Timer () {
			if (i > 99) {i=0;}
			if ($("#ticker01 li").length >= 5) {
				$("#ticker01 li:first-child").remove();
			}
			if ($("#ticker01 li").length >= 4) {
				$("#ticker01 li:first-child").slideUp(3000, "linear");
			}
			var item = data[i];
			$("#ticker01").append("<li><img src='"+item.user.profile_image_url+"'><p>"+item.user.screen_name+"</p><p>"+item.text+"</p><p>"+item.created_at+"</p></li>");
			// $("#ticker01 li").animate({top:"+=50px",},3000);
			$("#ticker01 li").addClass("tli");
			// console.log(data.responseJSON[i].user);
			i+=1;
		}
	});


});





// "<li><img src='"+item.user.profile_image_url+"'><p>"+item.user.screen_name+"</p><p>"+item.text+"</p><p>"+item.created_at+"</p></li>"