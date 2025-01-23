const products = [
    { id: 1, name: 'ROSSO BY ANTHIQUE',  image: './assets/content/rossobyantique.jpg' },
    { id: 2, name: ' OCCO',  image: './assets/content/occo.jpg' },
    { id: 3, name: 'PHIPHI',  image: './assets/content/phiphi.jpg' },
    { id: 4, name: ' UTHOPIA',  image: './assets/content/uthopia.jpg' },
    { id: 5, name: 'ABRIL',  image: './assets/content/abril.jpg' },
    { id: 6, name: 'Playa Aruba',  image: './assets/content/Aruba.jpg' },


  
    // Add more products as needed
  ];
  
  export const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000); // Simula un retraso de 1 segundo
    });
  };