import { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home(){

    const [blogs,setBlogs]= useState([])
    const fetchBlogs = async ()=>{
        const response = await axios.get("https://675132f069dc1669ec1d5f8b.mockapi.io/blogs")
        setBlogs(response.data)
    }

    useEffect(()=>{
        fetchBlogs()
    },[])
    return(
        <>
        <Navbar/>
        <div className="flex">
            {
                blogs.map(function(blog){
                    return (
                        <Card blog={blog} />

                    )
                })
            }
                <Card />
                <Card />
                <Card />
        
        </div>
        <Footer />
        </>
    );
}

export default Home;
