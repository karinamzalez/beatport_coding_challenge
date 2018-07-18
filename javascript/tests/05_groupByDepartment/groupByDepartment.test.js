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

const groupByDepartment = (input) => {
  // list of unique departments
  const departments = input.map(person => person.group).filter((x, i, a) => a.indexOf(x) == i);
  let finalObj = departments.reduce((obj, department) => {
    //iterate through all ppl in department
    let pplInDepartment = input.reduce((arr, person) => {
      let name = person.first + ' ' + person.last;
      //if nameOrder is reverse, then reverse order of name
      name = person.nameOrder ? name.split(' ').reverse().join(' ') : name;
      //if person's group is current dept, then push name into accumulator array 
      if (person.group === department) {
        arr.push({name});
      }
      //return accumulated array of names for current department
      return arr;
    }, []);
    //set current department as key for pplInDepartment
    obj[department] = pplInDepartment;
    //return accumulated department/pplInDepartment key/value pairs
    return obj;
  }, {});
  return finalObj;
};

describe('groupByDepartment', () => {
  it('converts array input to the expected output', () => {
    expect(groupByDepartment(input)).to.deep.equal(expectedOutput);
  });
});
