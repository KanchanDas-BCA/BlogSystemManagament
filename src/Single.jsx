import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Single(){
    const data = useParams()
    const navigate = useNavigate()
    const [blog,setBlog] = useSate({})
    const fetchBlog = async ()=>{
        const response = await axios.get("https://675132f069dc1669ec1d5f8b.mockapi.io/blogs" + data.id)
        setBlog(response.dat)
    }
    useEffect(()=>{
        fetchBlog()
    },[])
    const deleteBlog = async()=>{
        const response = await axios.delete("https://675132f069dc1669ec1d5f8b.mockapi.io/blogs/" + data.id)
    }
    return(
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
        <div class="py-8">
            <h1 class="text-3xl font-bold mb-2">Blog post title</h1>
            <p class="text-gray-500 text-sm">Published on <time datetime="2022-04-05">April 5, 2022</time></p>
        </div>

        <img src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c" alt="Featured image" class="w-full h-auto mb-8"/>

        <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <p>{blog?.description}</p>
            
        </div>
    </div>
    <button className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Delete Me</button>
</div>
)

}

export default Single