/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
	// First iteration over the object to find all categories in the transaction objects
	// Finding the unique Categories
	// Iterations over the Transaction and check which category it fits in add add the spent in it
	//

	let i = 0;
	let allArray = [];
	transactions.forEach(i => {
		allArray.push(transactions[i]["category"]);
	});

	//Now finding the uniques 

	const uniqueArray = new Set(allArray);

	// Now iterating over the transactions object and simultaneously adding sum
	let output;
	i = 0;
	let obj ={};
	transactions.forEach(i => {
		let category = transactions[i]["category"];
		
	});
	return [];
}

module.exports = calculateTotalSpentByCategory;
