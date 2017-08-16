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
				$("#output").append("<p>about &nbsp; &nbsp;connect &nbsp; &nbsp;work</p>");
			} else if (current_dir === "work") {
				$("#output").append("<p id='about'>More to come here ... for now, <a href='mailto:aali050@uottawa.ca'>reach out</a> for a copy of my résumé, connect with me on <a href='https://linkedin.com/in/amirmali'>LinkedIn</a>, and check me out on <a href='https://github.com/amirmali'>GitHub</a>.");
				$("#output").append("<p>---------------------------------------------------------------------</p>");
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
			$("#output").append("<p id='about'>ls <span class='blue' id='help-ls'>- list the menu sections</span></p>");
			$("#output").append("<p id='about'>cd <i>section-name</i> <span class='blue' id='help-cd'>- change to section 'section-name'</span></p>");
			$("#output").append("<p id='about'>cd .. <span class='blue' id='help-cd2'>- change back to previous section</span></p>");
			$("#output").append("<p id='about'>clear <span class='blue' id='help-clear'>- clear output</span></p>");
			append_input();
			return false;
		default:
			$("#output").append("<p id='about'>" + $(".command:last").val() + ": uh oh ... command not found :( try 'help'</p>");
			append_input();
			return false;
	}
}

function process_cd(directory) {
	if (current_dir === "~") {
		switch (directory) {
			case "about":
				$("#output").append("<p id='about'>tl;dr</p></br>");
				$("#output").append("<p id='about'>Native Ottawan, mechanical engineering / computing technology / engineering management + entrepreneurship student <a href='https://engineering.uottawa.ca/'>@uOttawa</a>, embedded software developer intern <a href='http://www.qnx.com/content/qnx/en.html'>@QNX</a>, <a href='https://ruor.uottawa.ca/handle/10393/36315'>occasional roboticist</a>, <a href='https://medium.com/@amirmali'>wannabe writer</a>, <a href='https://500px.com/amirmali'>very amateur photographer</a>, <a href='https://soundcloud.com/amirmali'>music digger</a>, <a href='https://www.goodreads.com/user/show/40750766-amir'>bookworm</a>, nomad, late night philosopher, coffee shop frequenter, Linux guy, jack of all trades and master of some.</p></br>");
				$("#output").append("<p id='about'>interests</p></br>");
				$("#output").append("<p id='about'>I’m passionate about technology, innovation, internet culture, human-machine interaction, business, <a href='https://www.ewb.ca/en/'>economic empowerment</a>, and sambuzas. Lately I've been dabbling in machine learning and graphic art.</p></br>")
				//$("#output").append("<p>---------------------------------------------------------------------</p>");
				$("#output").append("<p id='about'>type 'cd ..' to return home</p>");
				current_dir = "about";
				append_input();
				return false;
			case "connect":
				current_dir = "connect";
				$("#output").append("<p id='about'>Drop me a line :) I'm always up for coffee, discussing ideas, and meeting new people.</p></br>")
				$("#output").append("<p id='about'><a href='mailto:aali050@uottawa.ca'>email</a> | <a href='https://www.linkedin.com/in/amirmali/'>linkedin</a> | <a href='https://github.com/amirmali'>github</a></p></br>");
				//$("#output").append("<p>---------------------------------------------------------------------</p>");
				$("#output").append("<p id='about'>type 'cd ..' to return home</p>");
				append_input();
				return false;
			case "work":
				current_dir = "work";
				$("#output").append("<p id='about'>More to come here ... for now, <a href='mailto:aali050@uottawa.ca'>reach out</a> for a copy of my résumé, connect with me on <a href='https://linkedin.com/in/amirmali'>LinkedIn</a>, and check me out on <a href='https://github.com/amirmali'>GitHub</a>.</p></br>");
				//$("#output").append("<p>---------------------------------------------------------------------</p>");
				$("#output").append("<p id='about'>type 'cd ..' to return home</p>");
				append_input();
				return false;
			default:
				$("#output").append("<p id='about'>no such file or directory :(</p>");
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
