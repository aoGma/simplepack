const babylon = require("babylon");
const fs = require("fs");
const traverse = require("babel-traverse").default;

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
};
