const reNonAscii = /[^\0-\x7F]/; // /\P{ASCII}/u;

const isAsciiSafe = (string) => {
	return !reNonAscii.test(string);
};

module.exports = isAsciiSafe;
