import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee || {};
    const handleUpdateCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee)
        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount> 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        });

    }
   
    return (
        <div>
                <div className="bg-slate-200 p-20">
      <h2 className="text-3xl font-semibold text-black">Update Coffee: {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex gap-3">
          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Coffee Name</span>
            </label>
            <label className='input-group'>             
              <input
                name='name'
                defaultValue={name}
                type='text'
                placeholder='coffee name'
                className='input input-bordered w-full'
              />
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Available Quantity</span>
            </label>
            <label className='input-group'>             
              <input
                name='quantity'
                defaultValue={quantity}
                type='text'
                placeholder='available quantity'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        {/* form supplier and taste row */}
        <div className="md:flex gap-3">
          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Supplier</span>
            </label>
            <label className='input-group'>             
              <input
                name='supplier'
                defaultValue={supplier}
                type='text'
                placeholder='supplier'
                className='input input-bordered w-full'
              />
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Taste</span>
            </label>
            <label className='input-group'>             
              <input
                name='taste'
                defaultValue={taste}
                type='text'
                placeholder='Taste'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex gap-3">
          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Category</span>
            </label>
            <label className='input-group'>             
              <input
                name='category'
                defaultValue={category}
                type='text'
                placeholder='category'
                className='input input-bordered w-full'
              />
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Details</span>
            </label>
            <label className='input-group'>             
              <input
                name='details'
                defaultValue={details}
                type='text'
                placeholder='Details'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        {/* form photo URL row */}
        <div className="mb-8">
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text'>Photo URL</span>
            </label>
            <label className='input-group'>             
              <input
                name='photo'
                defaultValue={photo}
                type='text'
                placeholder='Photo URL'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Coffee" className="btn btn-block"/>
      </form>
    </div>
        </div>
    );
};

export default UpdateCoffee;