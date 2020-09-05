const ShoppingService = require('../src/shopping-list-service')
const knex = require('knex')


  describe('Shopping service object', function() {
    let db
    let testItems = [
           {
             item_id: 1,
             
             item_name: 'Tomato',
             category: 'Main',
             price: "13.12",
             date_added: new Date('2020-09-06T04:53:50.690Z'),
             checked: false,
    
           },
           {
             item_id: 2,
            
            item_name: 'Tomato',
             category: 'Main',
             price: "13.12",
             date_added: new Date('2020-09-06T04:53:50.690Z'),
             checked: false,
   
           },
           {
             item_id: 3,
            
            item_name: 'Tomato',
             category: 'Main',
             price: "13.12",
             date_added: new Date('2020-09-06T04:53:50.690Z'),
             checked: false,
   
           },
         ]
    
    before(() => {
      db = knex({
        client: 'pg',
        connection: process.env.TEST_DB_URL,
      })
    })

    before(() => db('shopping_list').truncate())

    afterEach(() => db('shopping_list').truncate())

    after(() => db.destroy())

    context('given shopping list has data', () => {

      beforeEach(() => {
        return db
          .into('shopping_list')
          .insert(testItems)
      })
   
      it(`getAllItems() resolves all items`, () => {
        //test that ShoppingService.getAllItems gets date from table
        return ShoppingService.getAllItems(db)
          .then(actual => {
            expect(actual).to.eql(testItems)
          })
        
      })

      
      it(`getById() resolves an item by id from 'shopping_list' table`, () => {
        const thirdId = 3
        const thirdTestItem = testItems[thirdId - 1]
        return ShoppingService.getById(db, thirdId)
          .then(actual => {
            expect(actual).to.eql({
              item_id: thirdId,
              item_name: thirdTestItem.item_name,
              category: thirdTestItem.category,
              price: thirdTestItem.price,
              date_added: thirdTestItem.date_added,
              checked: thirdTestItem.checked,
            })
          })
      })

      it(`deleteItem() removes an item by id from 'shopping_list' table`, () => {
             const itemId = 3
             return ShoppingService.deleteItem(db, itemId)
               .then(() => ShoppingService.getAllItems(db))
               .then(allItems => {
                 // copy the test articles array without the "deleted" article
                 const expected = testItems.filter(item => item.item_id !== itemId)
                 expect(allItems).to.eql(expected)
               })
           })

      it(`updateItem() updates an Item from the 'shopping_list' table`, () => {
            const idOfItemToUpdate = 3
            const newItemData = {
              item_name: 'updated name',
              category: 'Main',
              price: '13.12',
              date_added: new Date('2020-09-06T04:53:50.690Z'),
              checked: false,
            }
            return ShoppingService.updateItem(db, idOfItemToUpdate, newItemData)
              .then(() => ShoppingService.getById(db, idOfItemToUpdate))
              .then(item => {
                expect(item).to.eql({
                  item_id: idOfItemToUpdate,
                  ...newItemData,
                })
              })
          })

    })

    context(`Given 'shopping_list' has no data`, () => {
         it(`getAllItems() resolves an empty array`, () => {
           return ShoppingService.getAllItems(db)
             .then(actual => {
               expect(actual).to.eql([])
             })
        })

        it('addItem() inserts a new item and resolves the new item with an ID', () => {
          const newItem = {
            item_name: 'Test Name',
            category: 'Main',
            price: "13.12",
            date_added: new Date('2020-09-06T04:53:50.690Z'),
            checked: false,
          }
          return ShoppingService.addItem(db, newItem)
            .then(actual => {
              expect(actual).to.eql({
                item_id: 1,
                item_name: newItem.item_name,
                category: newItem.category,
                price: newItem.price,
                date_added: newItem.date_added,
                checked: newItem.checked,
              })
            })
           
        })

       })
  })


