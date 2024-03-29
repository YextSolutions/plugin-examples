export function titleCasePreserveCapitalization(input: string) {
	//we want to capitalize letters after dashes
	let dashString = input.split(/-/).reduce( (s, c, index) =>
  		s + ((index > 0) ? "-" : "") + ((c.charAt(0).toUpperCase()) + c.slice(1)), '');

	return dashString.split(" ").reduce( (s, c, index) =>
      s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + (index == dashString.split(" ").length - 1 ? "" : " ")), '');
}
