const users = [
	{ name: 'mario', premium: true },
	{ name: 'shaun', premium: false },
	{ name: 'ken', premium: true },
	{ name: 'luigi', premium: false },
	{ name: 'scarlet', premium: true },
];

// export const getPremUser = (users) => {
// 	return users.filter((user) => user.premium);
// };
const getPremUser = (users) => {
	return users.filter((user) => user.premium);
};

// export default users;

export { getPremUser, users as default };
