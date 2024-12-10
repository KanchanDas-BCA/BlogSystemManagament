import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function Edit(){
    const data = useParams();
    const fetchBlog = async () => {
        const response = await axios.get("https://675132f069dc1669ec1d5f8b.mockapi.io/blogs" + data.id)
        setEditData({
            title: response.data.title,
            subtitle:  response.data.subtitle,
            description: response.data.description,
            Image: response.data.iamge,
        })
    }
    useEffect(() => {
         fetchBlog()
    },[]);
    const navigate=usenavigate();
    const [editData, setEditData] =useState({
        title: "",
        subtitle: "",
        description: "",
        image : "",
    });

    const handleChange = (e) => {
        const value = e.taeget.value
        const name = e.target.name

        setEditData({
            ...editData,
            [name]: value,
        })
    }
    console.log(editData)
    const updateBlog = async (e) => {
        e.preventDefault();
        const response = await axios.put("https://675132f069dc1669ec1d5f8b.mockapi.io/blogs", editData);
        if (response.status === 200) {
            navigate("/")
        }else {
            alert("Something went wrong")
        }
    }
    return(
        <div className="mt-20 max-w-2xl mx-auto p-4">
      <form>
        {/* Blog Title */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-1">
            Title
          </label>
          <input
            type="text"
            value={editData?.title}
            id="title"
            name="title"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-100"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="subtitle" className="block text-lg font-medium text-gray-800 mb-1">
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            value={editData?.subtitle}
            name="subtitle"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-100"
            required
          />
        </div>

        {/* Blog Content */}
        <div className="mb-6">
          <label htmlFor="content" className="block text-lg font-medium text-gray-800 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={editData?.description}
            onChange={handleChange}
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-100"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block text-lg font-medium text-gray-800 mb-1">
            Image
          </label>
          <input
            type="text"
            id="image"
            value={editData?.image}
            name="image"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-100"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={updateBlog}
            className="px-6 py-2 bg-indigo-100 text-black text-sm font-medium rounded-xl hover:bg-indigo-200 focus:outline-none"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;

