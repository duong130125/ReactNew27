const product:any = [
    {
      id: 1,
      productName: "Cam sành",
      price: 20000,
      quantity: 10,
      
    },
    {
        id: 2,
        productName: "Cherry",
        price: 100000,
        quantity: 15,
        
    },
    {
        id: 3,
        productName: "Mận mộc chau",
        price: 40000,
        quantity: 80,
    }
  ];
  
  const reducerProduct = (state = product, action: any) => {
    switch (action.type) {
      case "RENDER":
        return state;
      default:
        return state;
    }
  };
  
  export default reducerProduct;