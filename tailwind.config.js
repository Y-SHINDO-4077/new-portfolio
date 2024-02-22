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
			backgroundImage: {
				swipe01: "url('../images/fv@2x.jpg')",
				swipe02: "url('../images/fv2@2x.jpg')",
				swipe03: "url('../images/fv03@2x.jpg')",
			},
		},
		plugins: [],
		darkMode: "class",
	},
};
