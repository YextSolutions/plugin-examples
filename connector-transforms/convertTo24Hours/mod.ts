interface HoursInput {
	open: string
	close: string
}

export function convertTo24Hours(input: HoursInput) {
	const {open, close} = input
	if (open == close) {
		return {open: "00:00", close: "00:00"}
	}
	return {open: open, close: close}
}


