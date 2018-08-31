const isAsciiSafe = require('./index.js');

const ASCII_START = 0x00;
const ASCII_END = 0x7F;
const NON_ASCII_START = 0x80;
const NON_ASCII_END = 0x10FFFF;

// Check all ASCII code points.
for (let cp = ASCII_START; cp <= ASCII_END; cp++) {
	const symbol = String.fromCodePoint(cp);
	console.assert(isAsciiSafe(symbol));
}

// Check all non-ASCII code points.
for (let cp = NON_ASCII_START; cp <= NON_ASCII_END; cp++) {
	const symbol = String.fromCodePoint(cp);
	console.assert(!isAsciiSafe(symbol));
}

// Check some strings consisting of multiple code points.
console.assert(isAsciiSafe('abc'));
console.assert(!isAsciiSafe('a\u{1D306}b'));
console.assert(!isAsciiSafe('I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\u{1F4A9}'));
