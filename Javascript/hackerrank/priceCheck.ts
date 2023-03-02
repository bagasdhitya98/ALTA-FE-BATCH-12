
function priceCheck( 
    products: number [] | string[],
    productPrice : any,
    productSold: number[] | string [],
    soldPrice: any
    ){
   let mapProduct: any = {}
   let mapProductSold: any = {}
   let errPrice: number = 0

   for(const i in products){
    mapProduct[products[i]] = productPrice[i]
    console.log("map Product : ", mapProduct)
   }

   for(const j in productSold){
    mapProductSold[productSold[j]] = soldPrice[j]
    console.log("map Product Sold : ", mapProductSold)
   }

   for(const k in mapProductSold){
    if(mapProductSold[k] !== mapProduct[k]){
        errPrice += 1
        console.log("error : ",errPrice)
    }
   }
   return errPrice
}

let product = ["eggs", "milk", "cheese"],
productPrice = [2.89, 3.29, 5.79],
productSold = ["eggs", "eggs", "cheese", "milk"],
soldPrice = [2.89, 2.99, 5.97, 3.29]

console.log(priceCheck(product, productPrice, productSold, soldPrice))