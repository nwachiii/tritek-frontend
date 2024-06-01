const userData = [
	{
		name: 'Yinmika',
		age: 15,
		currency: 'USD',
		current_bal: 100,
	},
	{
		name: 'Bisi',
		age: 25,
		currency: 'USD',
		current_bal: 10000,
	},
	{
		name: 'John',
		currency: 'USD',
		age: 75,
		current_bal: 250000,
	},
	{
		name: 'Charles',
		currency: 'USD',
		age: 55,
		current_bal: 15600,
	},
	{
		name: 'Sharon',
		currency: 'USD',
		age: 35,
		current_bal: 13000,
	},
	{
		name: 'Grace',
		currency: 'USD',
		age: 12,
		current_bal: 101280,
	},
];

let totalCurrBal = 0;
let allBalances = [];

for (let index = 0; index < userData.length; index++) {
	const currBal = userData[index]?.current_bal;

    allBalances.push(currBal);
    
	totalCurrBal = totalCurrBal + currBal;
}

console.log('allBalances', allBalances);
console.log('totalCurrBal', totalCurrBal);

const dashboard_data = {
	total_bal: totalCurrBal,
	all_current_bal: allBalances,
	user_data: userData,
};

console.log('dashboard_data', dashboard_data);