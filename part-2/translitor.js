const path = require("path");
const fs = require("fs").promises;
const converter = require("./converter");

class Translitor {
	constructor({ path }) {
		this.path = path;
		this.converter = converter;
	}
	async readFile(data) {
		return await fs.readFile(`${this.path}/${data}`, "utf-8");
	}
	async convertString(data) {
		let text = await this.readFile(data);
		return text
			.split("")
			.map((el) => {
				for (let [keys, values] of Object.entries(this.converter)) {
					if (el === keys) {
						return values;
					}
				}
			})
			.join("");
	}
}

module.exports = Translitor;

let translitor = new Translitor({
	path: path.join(__dirname, "."),
	converter,
});

// console.log(translitor.convertString("translitThis.txt"));
translitor.convertString("translitThis.txt");
