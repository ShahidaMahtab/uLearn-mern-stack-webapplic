/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				background:
					"url('/src/images/cool-background.png')",
				background1:
					"url('/src/images/cool-background1.png')",
				bgContent:
					"url('/src/images/bg-content.png')",
				background2:
					"url('/src/images/cool-background2.png')",
				gradient:
					"url('/src/images/gradient.jpg')",
				backInstructor: "url('/src/images/become-instructor.jpg')",
				myCourseBackImag: "url('/src/images/bags.png')",
				profileBg: "url('/src/images/profile-bg.png')",
			},
			colors: {
				primary: '#1F53F3',
				secondary: '#9937FC',
				font1: '#303345',
				font2: '#77787C',
				para: '#A3A6AA',
				light: '#F4F9FC',
				light2: '#EFEFEF',
				warning: '#FED81D',
				error: '#FF0000',
				brand1: '#FF1D7C',
				brand2: '#1CD767',
			},
		},
	},
	daisyui: {
		themes: false,
	},
	plugins: [require('daisyui')],
};
