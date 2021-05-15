

//vegtable prices at a supermarket-switch case//

function handleSupermarketVeg(event) {
    
    
    let veg = event.target.value;


    
    let price;

    switch(veg) {

        case ('potatoes'): 
            price = ' for potatoes is £1.10 per kg';
            break;

        case ('carrots'):
            price = 'for carrots is £1.10 per kg';
            break;
        

        case ('cabbage'):
            price = 'cost of cabbage is £1.70 per kg';
            break;

        case ('asparagus'):
            price = 'cost of asparagus is £1.30 per kg';
            break;

        case ('brocolli'):
            price = 'cost of brocolli is £1.01 per kg';
            break;

        default:
            price ='price of your selection is no longer in stock, we will notify you when your item is back in store';
            break;

    }

    alert("The cost " + price);
   
}









   
