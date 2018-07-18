/**
 * Create a function that takes an array argument. The array will contain objects 
 * of the form {first: "Joe", last: "Byron", group: "engineering"}. The function should 
 * return an object that organizes each entry by group, and combines the name, making sure to put the
 * last name first if 'nameOrder' is "reverse". The example below shows a possible 
 * input to the function, but the function should be able to handle any 
 * alpha-numeric group names.
 */

const input = [
  {first: "Joe", last: "Byron", group: "engineering"},
  {first: "Ye", last: "Xiu", group: "infrastructure", nameOrder: "reverse" },
  {first: "Alfredo", last: "Crescens", group: "marketing"},
  {first: "Kristen", last: "Weaver", group: "marketing", nameOrder: "reverse" },
  {first: "Alex", last: "Watson", group: "engineering"},  
  /*...don't foget to account for other entries of the same form, but with different group names.....*/
];

const expectedOutput = { 
  engineering: [ { name: 'Joe Byron' }, { name: 'Alex Watson' } ],
  infrastructure: [ { name: 'Xiu Ye' } ],
  marketing: [ { name: 'Alfredo Crescens' }, { name: 'Weaver Kristen' } ] 
};

/**
 * groupByDepartment Function takes an array of objects and returns an object of key value pairs organized by department
 * @param {Array} input 
 * @returns {Object}
 */

const groupByDepartment = (input) => {};

describe('groupByDepartment', () => {
  it('converts array input to the expected output', () => {
    expect(groupByDepartment(input)).to.deep.equal(expectedOutput);
  });
});
