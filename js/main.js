var current_dir = "~";

function process() {
	$(".command:last").prop("readonly", true);
	var command_parsed = ($(".command:last").val()).split(" ");
	switch (command_parsed[0]) {
		case "cd":
			if (command_parsed.length == 1) {
				$("#output").append("<p>" + $(".command:last").val() + ": uh oh ... command not found :( try 'help'</p>");
				append_input();
				return false;
			}
			var subarray = command_parsed.slice(1, command_parsed.length);
			console.log("joined: " + subarray.join(" "));
			process_cd(subarray.join(" "));
			return false;
		case "open":
			if (command_parsed.length == 1) {
				$("#output").append("<p>" + $(".command:last").val() + ": uh oh ... command not found :( try 'help'</p>");
				append_input();
				return false;
			}
			var subarray = command_parsed.slice(1, command_parsed.length);
			process_open(subarray.join(" "));
			return false;
		case "ls":
			if (current_dir === "~") {
				$("#output").append("<p>about &nbsp; &nbsp; &nbsp; &nbsp;connect &nbsp; &nbsp; &nbsp; &nbsp;projects</p>");
			} else if (current_dir === "projects") {
				$("#output").append("<p>more to come ... for now, check me out on <a href='https://github.com/amirmali'>github</a>");
				$("#output").append("<p>-------------------------------------------------</p>");
				$("#output").append("<p>type 'cd ..' to return home</p>");
			}
			append_input();
			return false;
		case "clear":
			$("#output").empty();
			$("input[type=text], textarea").val("");
			append_input();
			return false;
		case "help":
			$("#output").append("<p>ls <span class='blue' id='help-ls'>- list the menu sections</span></p>");
			$("#output").append("<p>cd <i>section-name</i> <span class='blue' id='help-cd'>- change to section 'section-name'</span></p>");
			$("#output").append("<p>cd .. <span class='blue' id='help-cd2'>- change back to previous section</span></p>");
			$("#output").append("<p>clear <span class='blue' id='help-clear'>- clear output</span></p>");
			append_input();
			return false;
		default:
			$("#output").append("<p>" + $(".command:last").val() + ": uh oh ... command not found :( try 'help'</p>");
			append_input();
			return false;
	}
}

function process_cd(directory) {
	if (current_dir === "~") {
		switch (directory) {
			case "about":
				$("#output").append("<p id='about'>i'm currently in my final year of studies in mechanical engineering, computing technology, and engineering management + entrepreneurship <a href='https://engineering.uottawa.ca/'>@uOttawa</a>. i'm also currently interning as an embedded software developer <a href='http://www.qnx.com/content/qnx/en.html'>@QNX</a>.</p></br>");
				$("#output").append("<p id='about'>i'm a fan of minimalist design, coffee shops, travel, <a href='https://soundcloud.com/amir-ali-67'>heavy vibes</a>, <a href='https://www.goodreads.com/user/show/40750766-amir'>good reads</a>, and as of late linux. sometimes i'm a <a href='https://medium.com/@amirmali'>wannabe writer</a> and <a href='https://500px.com/amirmali'>very amateur photographer</a>.</p>");
				$("#output").append("<p>-------------------------------------------------</p>");
				$("#output").append("<p>type 'cd ..' to return home</p>");
				current_dir = "about";
				append_input();
				return false;
			case "connect":
				current_dir = "connect";
				$("#output").append("<p>drop me a line if you would like a copy of my résumé or to grab a coffee :)</p></br>")
				$("#output").append("<p><a href='mailto:aali050@uottawa.ca'>email</a> | <a href='https://www.linkedin.com/in/amirmali/'>linkedin</a> | <a href='https://github.com/amirmali'>github</a> | <a href='https://medium.com/@amirmali'>blog</a> | <a href='https://500px.com/amirmali'>photos</a></p>");
				$("#output").append("<p>-------------------------------------------------</p>");
				$("#output").append("<p>type 'cd ..' to return home</p>");
				append_input();
				return false;
			case "projects":
				current_dir = "projects";
				$("#output").append("<p>more to come ... for now, check me out on <a href='https://github.com/amirmali'>github</a>");
				$("#output").append("<p>-------------------------------------------------</p>");
				$("#output").append("<p>type 'cd ..' to return home</p>");
				append_input();
				return false;
			default:
				$("#output").append("<p>no such file or directory :(</p>");
				append_input();
				return false;
		}
	} else {
		if (directory === "..") {
			current_dir = "~";
			$("#output").append("<br>");
		} else {
			$("#output").append("<p>no such file or directory :(</p>");
		}
		append_input();
	}
}


function append_input() {
	$("#output").append("<div class='terminal_line'>:" + current_dir + "$ &nbsp; <form name='terminal' action='#' method='post' onsubmit='return process()'><input type='text' class='command'></form></div>");
	$(".command:last").focus();
}
