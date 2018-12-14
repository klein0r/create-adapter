import { TemplateFunction } from "../lib/createAdapter";
import { Answers } from "../lib/questions";
import { formatLicense } from "../lib/tools";

export = (answers => {
	return answers.license
		&& answers.license.text
		&& formatLicense(answers.license.text, answers)
		|| "TODO: enter license text here";
}) as TemplateFunction;
