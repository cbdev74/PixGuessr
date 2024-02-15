export const processAnswer = (answer: string): string[] => {
	const regex = /[.,:;_+\*\\\n/-]/g;

	let processedAnswer: string | string[] = answer.replace(regex, " ");
	processedAnswer = processedAnswer
		.split(" ")
		.filter((word: string) => word !== "")
		.map((string: string) => string.toLowerCase());

	return processedAnswer;
};

export const findKeywordMatch = (keywords: string[], answer: string[]) => {
	const commons: string[] = [];

	keywords?.forEach((keyword: string | string[]) => {
		Array.isArray(keyword)
			? keyword.some(
					(value: string) => answer.includes(value) && commons.push(value)
			  )
			: answer.includes(keyword) && commons.push(keyword);
	});

	return commons;
};
