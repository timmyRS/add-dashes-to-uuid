# add-dashes-to-uuid

Converts a UUID string to a UUID string with dashes.

	require("add-dashes-to-uuid")("e0603b592edc45f7acc7b0cccd6656e1"); // e0603b59-2edc-45f7-acc7-b0cccd6656e1

This behaviour can easily be verified:

	git clone https://github.com/timmyrs/add-dashes-to-uuid
	cd add-dashes-to-uuid
	cat test.js
	node test.js
