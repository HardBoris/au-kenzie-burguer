import { bindable } from "aurelia-framework";

export class ProductService {
  products = [
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Fanta",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ];

  filteredProducts = [];
  currentSale = [];
  totalSale = 0;

  showProducts = (opcion: string) => {
    this.filteredProducts = this.products.filter(
      (item) =>
        item.category.toLowerCase() === opcion.toLowerCase() ||
        item.name.toLowerCase() === opcion.toLowerCase()
    );
  };

  handleClick = (productId: number) => {
    this.currentSale = [
      ...this.currentSale,
      this.products.find((item) => item.id === productId),
    ];
    this.Suma();
    console.log(this.Suma());
  };

  Suma = () =>
    (this.totalSale = this.currentSale
      .reduce((a, b) => a + b.price, 0)
      .toFixed(2));
}

export class prodValueConverter {
  toView(products, search: string) {
    if (search) {
      console.log(search);
      return products.filter((ele) =>
        ele.name.toLowerCase().includes(search.toLowerCase())
      );
      // return items.filter((ele) => console.log(ele.name))
    } else return products;
  }
}
