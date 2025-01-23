const products = [
    { id: 1, name: 'ROSSO BY ANTHIQUE',  image: './assets/content/rossobyantique.jpg' },
    { id: 2, name: ' OCCO', price: '$20', image: './assets/content/occo.jpg' },
    { id: 35, name: '', price: '$30', image: '/images/product3.jpg' },
    { id: 488, name: ' UTHOPIA', price: '$30', image: '/images/product4.jpg' },
    { id: 188, name: 'ROSSO BY ANTHIQUE',  image: './assets/content/rosso.jpg' },
    { id: 16, name: 'ROSSO BY ANTHIQUE',  image: './assets/content/rosso.jpg' },

 
    // Add more products as needed
  ];
  
  export const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000); // Simula un retraso de 1 segundo
    });
  };