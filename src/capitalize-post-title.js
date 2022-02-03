class Utils {
	constructor() {
		document.getElementById('Capitalize').addEventListener('click', this.capitalize, false);
		document.getElementById('Replace-Headers').addEventListener('click', this.replaceHeaders, false);
	}
	
	capitalize() {
		const title = document.getElementById('title');
		const ignore = ['a', 'and', 'as', 'as if', 'as long as', 'at', 'but', 'by', 'even if', 'for', 'from', 'if', 'if only', 'in', 'into', 'like', 'near', 'now that', 'nor', 'of', 'off', 'on', 'on top of', 'once', 'onto', 'or', 'out of', 'over', 'past', 'so', 'so that', 'than', 'that', 'till', 'to', 'up', 'upon', 'with', 'when', 'yet'];
		let out = '';
		
		const split = title.value.split(' ');
		split.forEach((word, index) => {
			let pass = true;
			
			ignore.forEach(ignored => {
				if (word == ignored) {
					pass = false;
				}
			});
			
			if (index == 0) {
				pass = true;
			}
			
			out += (pass) ? word.charAt(0).toUpperCase() + word.slice(1) : word;
			out += (index != split.length) ? " " : "";
		});
		
		title.value = out;
	}
	
	replaceHeaders() {
		const input = document.getElementById('content');
		const content = input.value;
		
		const h1Free = content.split('h1').join('strong');
		const h2Free = h1Free.split('h2').join('strong');
		const h3Free = h2Free.split('h3').join('strong');
		const h4Free = h3Free.split('h4').join('strong');
		const h5Free = h4Free.split('h5').join('strong');
		const output = h5Free.split('h6').join('strong');
		
		input.value = output;
	}
}

new Utils();