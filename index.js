import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.URI);
const db = client.db(process.DB_NAME);
const collection = db.collection(process.env.COLLECTION_NAME);

const pizza1 = {
    name: "kids pizza",
    crust: ["traditional"],
    mainIngredient: ["mozzarella cheese"],
    toppings: [],
    size: ["small"],
    price: [7]
};
const pizza2 = {
    name: "pepperoni",
    crust: ["traditional","thin","deep"],
    mainIngredient: ["pepperoni"],
    toppings: ["pepperoni", "mozzarella cheese"],
    size: ["small", "medium","large", "extra-large"],
    price: [10, 12, 14, 16],
    priceTopping: 2
};
const pizza3 = {
    name: "vegetarian",
    crust: ["traditional","thin","deep"],
    mainIngredient: ["peppers","mushrooms", "black olives"],
    toppings: ["onions", "tomatoes", "eggplant", "arugula", "mozzarella cheese"],
    size: ["small", "medium","large", "extra-large"],
    price: [12, 14, 16, 18],
    priceTopping: 2
};
const pizza4 = {
    name: "meat lovers pizza",
    crust: ["traditional","thin","deep"],
    mainIngredient: ["pepperoni", "ground beef", "sausage"],
    toppings: ["meat balls", "chicken", "mozzarella cheese"],
    size: ["small", "medium","large", "extra-large"],
    price: [14, 16, 18, 20],
    priceTopping: 2
};
const pizza5 = {
    name: "margherita pizza",
    crust: ["traditional","thin","deep"],
    mainIngredient: ["tomatoes","basil", "mozarella cheese"],
    toppings: ["mozzarella cheese"],
    size: ["small", "medium","large", "extra-large"],
    price: [14, 16, 18, 18],
    priceTopping: 2
};
const pizza6 = {
    name: "hawaiian pizza",
    crust: "traditional", //"thin","deep"],
    mainIngredient: ["ham", "pineapple"],
    toppings: [ "mozzarella cheese"],
    size: "small", // "medium","large", "extra-large"],
    price: 12,// 14, 16, 18],
    priceTopping: 2
};

const customer1 ={
    name: "Peter Smith",
    address: "12 Main st, Boca Raton, 33456",
    phone: "5613458798",
    email: "peter@gmail.com",
    loyaltyPoints: "ds123"
}
const customer2 ={
    name: "Marcy Lee",
    address: "12 NW 4 Stree, Boca Raton, 33456",
    phone: "5613450998",
    email: "marcy123@gmail.com",
    loyaltyPoints: "ds124"
}
const customer3 ={
    name: "Mariel Cash",
    address: "12 Palmetto Rd, Boca Raton, 33486",
    phone: "9543458798",
    email: "mcash2345@yahoo.com",
    loyaltyPoints: "ds126"
}
const customer4 ={
    name: "Carl Sagan",
    address: "34 Glades Rd, Boca Raton, 33456",
    phone: "5616548798",
    email: "carrte45@cosmos.com",
    loyaltyPoints: "ds128"
}

const order1 ={
    customerId:
    orderItems: [
        {pizzaId: "xxx",
        pizzaToppins:[],
        quantity: 1}
    ]
}
}



