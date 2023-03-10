import { MongoClient } from "mongodb";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

console.log("uri", process.env.URI);
console.log("DB_NAME", process.env.DB_NAME);
console.log("COLLECTION_NAME", process.env.COLLECTION_NAME);

const client = new MongoClient(process.env.URI);
const db = client.db(process.DB_NAME);
const collection = db.collection(process.env.COLLECTION_NAME);

console.log("database connection success");

const pizza1 = {
  name: "kids pizza",
  crust: "traditional",
  mainIngredient: ["mozzarella cheese"],
  toppings: [],
  size: "small",
  price: 7,
};
const pizza2 = {
  name: "pepperoni",
  crust: "thin",
  mainIngredient: ["pepperoni"],
  toppings: ["pepperoni", "mozzarella cheese"],
  size: "medium",
  price: 12,
};
const pizza3 = {
  name: "vegetarian",
  crust: "deep",
  mainIngredient: ["peppers", "mushrooms", "black olives"],
  toppings: ["onions", "arugula", "mozzarella cheese"],
  size: "large",
  price: 18,
  priceTopping: 2,
};
const pizza4 = {
  name: "meat lovers pizza",
  crust: "thin",
  mainIngredient: ["pepperoni", "ground beef", "sausage"],
  toppings: ["meat balls", "chicken", "mozzarella cheese"],
  size: "extra-large",
  price: 20,
};
const pizza5 = {
  name: "margherita pizza",
  crust: "deep",
  mainIngredient: ["tomatoes", "basil", "mozarella cheese"],
  toppings: ["mozzarella cheese"],
  size: "medium",
  price: 18,
};
const pizza6 = {
  name: "hawaiian pizza",
  crust: "traditional",
  mainIngredient: ["ham", "pineapple"],
  toppings: ["mozzarella cheese"],
  size: "large",
  price: 16,
};

const customer1 = {
  name: "Peter Smith",
  address: "12 Main st, Boca Raton, 33456",
  phone: "5613458798",
  email: "peter@gmail.com",
  loyaltyPoints: "ds123",
};
const customer2 = {
  name: "Marcy Lee",
  address: "12 NW 4 Stree, Boca Raton, 33456",
  phone: "5613450998",
  email: "marcy123@gmail.com",
  loyaltyPoints: "ds124",
};
const customer3 = {
  name: "Mariel Cash",
  address: "12 Palmetto Rd, Boca Raton, 33486",
  phone: "9543458798",
  email: "mcash2345@yahoo.com",
  loyaltyPoints: "ds126",
};
const customer4 = {
  name: "Carl Sagan",
  address: "34 Glades Rd, Boca Raton, 33456",
  phone: "5616548798",
  email: "carrte45@cosmos.com",
  loyaltyPoints: "ds128",
};

const addItem = async (item) => {
  const result = await collection.insertOne(item);
  const itemId = result.insertedId;
  console.log("Item is inserted ", itemId);
  return itemId;
};

const calculateTotal = (orderItems) => {
  let total = 0;
  for (let i = 0; i < orderItems.length; i++) {
    total = total + orderItems[i].price * orderItems[i].quantity;
  }
  return total;
};

const pizza1Id = await addItem(pizza1);
const pizza2Id = await addItem(pizza2);
const pizza3Id = await addItem(pizza3);
const pizza4Id = await addItem(pizza4);
const pizza5Id = await addItem(pizza5);
const pizza6Id = await addItem(pizza6);

const customer1Id = await addItem(customer1);
const customer2Id = await addItem(customer2);
const customer3Id = await addItem(customer3);
const customer4Id = await addItem(customer4);

const order1 = {
  customerId: customer1Id,
  orderItems: [
    { pizzaId: pizza1Id, quantity: 1 },
    { pizzaId: pizza5Id, quantity: 2 },
  ],
  delivery: true,
  total: calculateTotal([
    { price: pizza1.price, quantity: 1 },
    { price: pizza5.price, quantity: 2 },
  ]),
};

const order2 = {
  customerId: customer1Id,
  orderItems: [{ pizzaId: pizza2Id, quantity: 2 }],
  delivery: false,
  total: calculateTotal([{ price: pizza2.price, quantity: 2 }]),
};

const order3 = {
  customerId: customer2Id,
  orderItems: [{ pizzaId: pizza2Id, quantity: 1 }],
  delivery: true,
  total: calculateTotal([{ price: pizza2.price, quantity: 1 }]),
};

const order4 = {
  customerId: customer4Id,
  orderItems: [
    { pizzaId: pizza3Id, quantity: 2 },
    { pizzaId: pizza4Id, quantity: 2 },
  ],
  delivery: true,
  total: calculateTotal([
    { price: pizza3.price, quantity: 2 },
    { price: pizza4.price, quantity: 2 },
  ]),
};

const order5 = {
  customerId: customer3Id,
  orderItems: [
    { pizzaId: pizza6Id, quantity: 2 },
    { pizzaId: pizza2Id, quantity: 3 },
  ],
  delivery: true,
  total: calculateTotal([
    { price: pizza6.price, quantity: 2 },
    { price: pizza2.price, quantity: 3 },
  ]),
};

// RETRIEVE OR SHOW ITEMS

// const showItems ()=>{

// }

client.close();
console.log("Completed");
