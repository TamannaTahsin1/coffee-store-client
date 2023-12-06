import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)
        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        });

    }
  return (
    <div className="bg-slate-200 p-20">
      <h2 className="text-3xl font-semibold text-black">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex gap-3">
          <div className='form-control md:w-1/2'>
            <label className='label'>
              <span className='label-text'>Coffee Name</span>
            </label>
            <label className='input-group'>             
              <input
                name='name'
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
                type='text'
                placeholder='Photo URL'
                className='input input-bordered w-full'
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block"/>
      </form>
    </div>
  );
};

export default AddCoffee;
