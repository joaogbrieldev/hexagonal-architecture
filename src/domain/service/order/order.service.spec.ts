import Order from "../../checkout/orders/order";
import OrderItem from "../../checkout/orders/orderItem";
import Customer from "../../customer/entity/customer";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
  it("should get total of all orders", () => {
    const item1 = new OrderItem("i1", "item 1", 100, "p1", 1);
    const item2 = new OrderItem("i2", "item 2", 200, "p2", 2);

    const order = new Order("o1", "c1", [item1]);
    const order2 = new Order("o2", "c2", [item2]);

    const total = OrderService.total([order, order2]);
    expect(total).toBe(500);
  });

  it("should place an order", () => {
    const custumer = new Customer("c1", "any_name");
    const item1 = new OrderItem("i1", "item 1", 10, "p1", 1);

    const order = OrderService.placeOrder(custumer, [item1]);

    expect(custumer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });
});
