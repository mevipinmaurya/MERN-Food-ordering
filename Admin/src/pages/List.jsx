import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { IoIosRemoveCircle } from "react-icons/io";

const List = ({url}) => {

  const [list, setList] = useState([])

  // Fetching food data from db
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.message) {
      setList(response.data.message)
    } else {
      toast.error("Error !!!")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])


  // Removing food data form the database
  const removeFood = async (foodId) => {
    // console.log(foodId)
    const food = await axios.post(`${url}/api/food/remove`, { id: foodId });
    // console.log(food)
    await fetchList();
    if (food.data.success) {
      toast.success("Food removed")
    } else {
      toast.error("Error !!!")
    }
  }


  return (
    <div className='w-full'>

      <div className='w-full flex flex-col'>

        <p className='text-2xl font-semibold mt-4 mb-6'>All Food Lists</p>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Item</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-14 h-14">
                              <img src={`${url}/images/` + e.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {e.name}
                      </td>
                      <td>
                        <p>{e.category}</p>
                      </td>
                      <td>
                        <p>${e.price}</p>
                      </td>
                      <th>
                        <p onClick={() => removeFood(e._id)} className='text-2xl text-orange-700 cursor-pointer'><IoIosRemoveCircle /></p>
                      </th>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>
      </div>

    </div>
  )
}

export default List