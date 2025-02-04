const babylon = require("babylon");
const fs = require("fs");
const traverse = require("babel-traverse").default;
const { transformFromAst } = require("babel-core");

module.exports = {
	getAST: function (path) {
		const source = fs.readFileSync(path, "utf-8");
		return babylon.parse(source, {
			sourceType: "module",
		});
	},
	getDependencies: (ast) => {
		const dependenvies = [];
		traverse(ast, {
			ImportDeclaration: ({ node }) => {
				dependenvies.push(node.source.value);
			},
		});

		return dependenvies;
	},

	transform: (ast) => {
		const { code } = transformFromAst(ast, null, {
			presets: ["env"],
		});
		return code;
	},
};
