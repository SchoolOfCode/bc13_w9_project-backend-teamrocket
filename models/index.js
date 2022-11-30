import query from '../db/index.js';

const optionsArr = [{
    option: "1",
    votes: 0,
    eliminated: false,
    options: {
        pros: ["pro1", "pro2"],
        cons: ["con1", "con2"]
    }
},
{
    option: "2",
    votes: 0,
    eliminated: false,
    options: {
        pros: ["pro1", "pro2"],
        cons: ["con1", "con2"]
    }
},
{
    option: "3",
    votes: 0,
    eliminated: false,
    options: {
        pros: ["pro1", "pro2"],
        cons: ["con1", "con2"]
    }
},
{
    option: "4",
    votes: 0,
    eliminated: false,
    options: {
        pros: ["pro1", "pro2"],
        cons: ["con1", "con2"]
    }
},
]

// GET
// get all options
export async function getAllOptions() {
    const result = await query('SELECT option FROM options;')
    const optionsList = result.rows;
    return optionsList;
}

// get all pros/cons

// get all previous results

// POST

// post a new option
// post a new pro/con
