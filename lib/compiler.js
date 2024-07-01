module.exports = class Compiler {
	constructor(options) {
		const { entry, outout } = options;
		this.entry = entry;
		this.outout = outout;
	}
	run() {}
	buildModule() {}
	emitFiles() {}
};
