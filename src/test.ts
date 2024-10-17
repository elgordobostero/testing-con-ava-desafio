import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Termo Stanley", 60000);
  t.is(product.name, "Termo Stanley");
  t.is(product.price, 60000);
});
test("Testeo la clase User y sus métodos", (t) => {
  //   mock
  const usuario = new User("Valentin");
  const product1 = new Product("Termo Lumilagro", 45000);
  usuario.addProduct(product1);
  t.is(usuario.name, "Valentin");
  t.is(usuario.products[0].name, "Termo Lumilagro");
  t.is(usuario.products[0].price, 45000);
});
