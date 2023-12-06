/** @format */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee || {};
  const handleDelete = (_id) => {
    console.log(_id);
    // for alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
            // eslint-disable-next-line react/prop-types
            const remaining = coffees.filter(cof => cof._id !== _id)
            setCoffees(remaining)
          });
      }
    });
  };
  return (
    <div>
      <div className='card card-side bg-base-100 shadow-xl'>
        <figure>
          <img src={photo} alt='Movie' className='w-80' />
        </figure>
        <div className='flex justify-between items-center w-full p-4'>
          <div>
            <h2 className='card-title'>Name: {name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Shop: {supplier}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className='card-actions justify-end'>
            <div className='btn-group btn-group-vertical space-y-4'>
              <button className='btn'>View</button>
              <Link to={`updateCoffee/${_id}`}>
              <button className='btn'>Edit</button></Link>
              <button onClick={() => handleDelete(_id)} className='btn'>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
