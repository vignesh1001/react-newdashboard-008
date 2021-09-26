/** @format */
const FileDownload = require("js-file-download");

export function jsonToCsvDownload(json, name, keys, headers) {
	let csv = "";

	csv += headers.join(",") + "\n";
	for (let line of json) {
		csv += keys.map((key) => JSON.stringify(line[key])).join(",") + "\n";
	}

	FileDownload(csv, name);
}
