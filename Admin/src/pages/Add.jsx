import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = ({url}) => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad",
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)

        const response = await axios.post(`${url}/api/food/add`, formData)
        if (response.data.success) {
            // Reset the form data
            setData({
                name: "",
                description: "",
                price: "",
                category: "Salad",
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }


    return (
        <>
            <div className='w-full flex items-center p-5 lg:ml-20'>
                <form onSubmit={onSubmitHandler} className='md:w-[40%] flex flex-col gap-4'>
                    <div className='flex gap-2 flex-col'>
                        <p className="text-lg">Upload Image</p>
                        <label htmlFor="file-input">
                            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="file_input" className='w-[160px] cursor-pointer h-[120px]' />
                        </label>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='file-input' hidden />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <p className="text-lg">Product Name</p>
                        <input onChange={onChangeHandler} value={data.name} type="text" name="name" className="input input-bordered w-full" required/>
                    </div>

                    <div>
                        <p className="text-lg">Product Description</p>
                        <textarea onChange={onChangeHandler} value={data.description} name="description" className="textarea textarea-bordered w-full resize-none" required></textarea>
                    </div>

                    <div>
                        <p className="text-lg">Product Category</p>
                        <select onChange={onChangeHandler} name="category" className="select select-bordered w-full" required>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>

                    <div>
                        <p className="text-lg">Product Price</p>
                        <input type="number" onChange={onChangeHandler} value={data.price} name="price" className="input input-bordered w-full" required/>
                    </div>

                    <div>
                        <button type='submit' className='btn bg-orange-600 hover:bg-orange-700 text-white'>ADD</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Add