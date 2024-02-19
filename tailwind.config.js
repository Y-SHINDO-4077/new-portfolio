const { th } = require("date-fns/locale");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.js", "./components/**/*.js"],
	theme: {
		colors: {
			white: "#fff",
			black: "#000",
			beige: "#F0EFEB",
			darkBaige: "#2c2c20",
			lightOrange: "#B09D60",
			inherit: "inherit",
		},
		extend: {
			backgroundImage: (theme) => ({}),
			backgroundColor: (theme) => ({
				...theme("colors"),
				darkBaige: "#2c2c20",
			}),
			fontFamily: {
				futura: ["Futura", "sans-serif"],
				noto: ["Noto Sans JP", "serif"],
			},
		},
		plugins: [],
		darkMode: "class",
	},
};
