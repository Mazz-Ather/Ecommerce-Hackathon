
type Product = {
    id: number;
    title: string;
    code: string;
    price: number;
    colors: string[];
    images: { [key: string]: string };
    slug: string;
  };
  
  const products: Product[] = [
    {
      id: 1,
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      colors: ["black.", "#2F1AC4", "#FF3EB2"],
      images: {
        "#FB2E86": "/chair1.jpeg",
        "#2F1AC4": "/chair2.jpeg",
        "#2f1ac4": "/chair3.jpeg",
      },
      slug: "1",
    },
    {
      id: 2,
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
      images: {
        "#FB2E86": "/chair1.jpeg",
        "#2F1AC4": "/chair2.jpeg",
        "#FF3EB2": "/chair3.jpeg",
      },
      slug: "2",
    },{
        id: 3,
        title: "Cantilever Chair",
        code: "Y523201",
        price: 42.0,
        colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
        images: {
          "#FB2E86": "/chair1.jpeg",
          "#2F1AC4": "/chair2.jpeg",
          "#FF3EB2": "/chair3.jpeg",
        },
        slug: "3",
      },{
        id: 4,
        title: "Cantilever Chair",
        code: "Y523201",
        price: 42.0,
        colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
        images: {
          "#FB2E86": "/chair1.jpeg",
          "#2F1AC4": "/chair2.jpeg",
          "#FF3EB2": "/chair3.jpeg",
        },
        slug: "4",
      },{
        id: 5,
        title: "Cantilever Chair",
        code: "Y523201",
        price: 42.0,
        colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
        images: {
          "#FB2E86": "/chair1.jpeg",
          "#2F1AC4": "/chair2.jpeg",
          "#FF3EB2": "/chair3.jpeg",
        },
        slug: "5",
      },{
        id: 6,
        title: "Cantilever Chair",
        code: "Y523201",
        price: 42.0,
        colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
        images: {
          "#FB2E86": "/chair1.jpeg",
          "#2F1AC4": "/chair2.jpeg",
          "#FF3EB2": "/chair3.jpeg",
        },
        slug: "6",
      },{
        id: 7,
        title: "Cantilever Chair",
        code: "Y523201",
        price: 42.0,
        colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
        images: {
          "#FB2E86": "/chair1.jpeg",
          "#2F1AC4": "/chair2.jpeg",
          "#FF3EB2": "/chair3.jpeg",
        },
        slug: "7",
      },{
        id: 8,
        title: "Cantilever Chair",
        code: "Y523201",
        price: 42.0,
        colors: ["#FB2E86", "#2F1AC4", "#FF3EB2"],
        images: {
          "#FB2E86": "/chair1.jpeg",
          "#2F1AC4": "/chair2.jpeg",
          "#FF3EB2": "/chair3.jpeg",
        },
        slug: "8",
      },
  ];
  export default products;  