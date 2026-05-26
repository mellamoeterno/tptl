//no imports here, code below is just js :)




const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

const shoppingList = []
    
addItemBtn.addEventListener('click', function(){
        shoppingList.push(itemInput.value)
        render()        
        itemInput.value = '' 
})

function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`             //+=  takes the value on the right, adds it to the variable on the left, and assigns the result back to that variable.
    }
    list.innerHTML = html //innerHTML allows you to get or set the HTML content contained within a specific element.
}

/* function detectDuplicates() {
    if (itemInput.includes(itemInput * 2)) {
        throw new error = "shits not right son"                                     keep figuring the resolution
    } fu
} */

render()            //The list is drawn immediately when the JavaScript loads. But this is not so necessary 
                    // in this case cause:


/* 
When You Would Need It
You would notice the app breaking without that last render() if:

You pre-filled shoppingList with data (e.g., ['Milk', 'Eggs']) before the user interacts.
You loaded saved data from localStorage or an API on page load.
In those cases, removing the initial render() would cause the list to remain blank until the user added a new item, hiding the existing data. */
