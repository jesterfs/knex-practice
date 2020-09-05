require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})



// function findSearchTerm(searchTerm) {
//     knexInstance
//         .select('item_id', 'item_name', 'category', 'price', 'date_added', 'checked')
//         .from('shopping_list')
//         .where('item_name', 'ILIKE', `%${searchTerm}%`)
//         .then(result => {
//             console.log(result)
//         })
// }

// findSearchTerm('steak')


// function listByPage(pageNumber){
//     const productsPerPage = 6
//     const offset = productsPerPage * (pageNumber - 1)
//     knexInstance
//         .select('item_id', 'item_name', 'category', 'price', 'date_added', 'checked')
//         .from('shopping_list')
//         .limit(productsPerPage)
//         .offset(offset)
//         .then(result => {
//             console.log(result)
//         })
// }

// listByPage(2)


function findItemsAddedAfterDate(daysAgo) {
    knexInstance
        .select('item_id', 'item_name', 'category', 'price', 'date_added', 'checked')
        .from('shopping_list')
        .where(
            `'${daysAgo}'`,
            '>',
            knexInstance.raw(`now() - 'date_added'`)


        )
        .then(result => {
            console.log(result)
        })
}

findItemsAddedAfterDate(10)