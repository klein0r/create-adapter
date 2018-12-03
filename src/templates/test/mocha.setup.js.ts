import { Answers } from "../../lib/questions";

export = (answers: Answers) => {

	const useTypeScript = answers.language === "TypeScript";

	const template = (useTypeScript ? `
// Makes ts-node ignore warnings, so mocha --watch does work
process.env.TS_NODE_IGNORE_WARNINGS = "TRUE";
// Sets the correct tsconfig for testing
process.env.TS_NODE_PROJECT = "tsconfig.json";

` : "") + `// Don't silently swallow unhandled rejections
process.on("unhandledRejection", (e) => {
	throw e;
})

// enable the should interface with sinon
// and load chai-as-promised and sinon-chai by default
const sinonChai = require("sinon-chai");
const chaiAsPromised = require("chai-as-promised");
const { should, use } = require("chai");

should();
use(sinonChai);
use(chaiAsPromised);
`;
	return template.trim();
};