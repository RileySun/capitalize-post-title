class Capitalize {
	constructor() {
		document.getElementById('Capitalize').addEventListener('click', this.capitalize, false);
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
}

new Capitalize();



			