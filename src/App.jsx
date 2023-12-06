import { useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees ]= useState(loadedCoffees)

  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <h1 className='text-center font-semibold text-purple-600'>Hot Cold Coffees: {coffees.length}</h1>

      {/* for single coffee card */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      {
        coffees?.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
