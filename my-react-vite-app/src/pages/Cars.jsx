import React from 'react';

const cars = [
     {
       name: 'All New Avanza',
       brand: 'Toyota',
       price: 'Rp.350.000',
       imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.Pd58SaNafpTP8-odiUYHnQHaEK&pid=Api&P=0&h=180',
       description: 'The All New Avanza offers a comfortable and reliable driving experience with its sleek design and advanced features, perfect for city driving and long-distance trips.',
     },
     {
       name: 'New Ertiga',
       brand: 'Suzuki',
       price: 'Rp.350.000',
       imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.R2HPNwUe08kzOGtE_EcdPgHaEq&pid=Api&P=0&h=180',
       description: 'The New Ertiga is a versatile and family-friendly car that combines style, space, and comfort, making it ideal for both city and out-of-town drives.',
     },
     {
       name: 'Innova 2.0',
       brand: 'Toyota',
       price: 'Rp.450.000',
       imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.5B1KuTjUZG7O_pqHlTnaIAHaEK&pid=Api&P=0&h=180',
       description: 'The Innova 2.0 offers a powerful performance with advanced features and a spacious interior, perfect for family trips and long-distance travel.',
     },
     {
       name: 'Innova 2.5',
       brand: 'Toyota',
       price: 'Rp.450.000',
       imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.nSoBz5mSeFVWdM0pF5c6-wHaEK&pid=Api&P=0&h=180',
       description: 'The Innova 2.5 provides a luxurious driving experience with its powerful engine, advanced safety features, and spacious interior, making it ideal for any journey.',
     },
     {
       name: 'All New Avanza',
       brand: 'Toyota',
       price: 'Rp.350.000',
       imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.Pd58SaNafpTP8-odiUYHnQHaEK&pid=Api&P=0&h=180',
       description: 'The All New Avanza offers a comfortable and reliable driving experience with its sleek design and advanced features, perfect for city driving and long-distance trips.',
     },
     {
       name: 'New Ertiga',
       brand: 'Suzuki',
       price: 'Rp.350.000',
       imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.R2HPNwUe08kzOGtE_EcdPgHaEq&pid=Api&P=0&h=180',
       description: 'The New Ertiga is a versatile and family-friendly car that combines style, space, and comfort, making it ideal for both city and out-of-town drives.',
     },
     {
       name: 'Innova 2.0',
       brand: 'Toyota',
       price: 'Rp.450.000',
       imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.5B1KuTjUZG7O_pqHlTnaIAHaEK&pid=Api&P=0&h=180',
       description: 'The Innova 2.0 offers a powerful performance with advanced features and a spacious interior, perfect for family trips and long-distance travel.',
     },
     {
       name: 'Innova 2.5',
       brand: 'Toyota',
       price: 'Rp.450.000',
       imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.nSoBz5mSeFVWdM0pF5c6-wHaEK&pid=Api&P=0&h=180',
       description: 'The Innova 2.5 provides a luxurious driving experience with its powerful engine, advanced safety features, and spacious interior, making it ideal for any journey.',
     },
   ];
   
   const CarCard = ({ name, brand, price, imageUrl, description }) => (
     <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-full md:w-1/3 lg:w-1/4">
       <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
       <div className="p-4">
         <h3 className="text-xl font-bold">{name}</h3>
         <p className="text-gray-500">{brand}</p>
         <p className="text-lg font-semibold text-gray-900">{price}</p>
         <p className="text-sm text-gray-500 mb-2">day</p>
         <p className="text-sm text-gray-700 mb-4">{description}</p>
         <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
           <a href="/RentalForm">Rent Now</a> 
         </button>
       </div>
     </div>
   );
   
   function Cars() {
     return (
       <div className="flex flex-wrap justify-center">
         {cars.map((car, index) => (
           <CarCard
             key={index}
             name={car.name}
             brand={car.brand}
             price={car.price}
             imageUrl={car.imageUrl}
             description={car.description}
           />
         ))}
       </div>
     );
   }
   


export default Cars;
