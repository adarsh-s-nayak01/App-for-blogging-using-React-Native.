import React,{useState} from 'react';

const BlogContext = React.createContext();

//not using export default.
//because we are exporting default -the BlogContext.
export const BlogProvider = ({ children }) => {

    // const blogPosts =[
    //     {title:'Blog Post #1'},
    //     {title:'Blog Post #2'},
    //     {title:'Blog Post #3'},
    //     // {title:'Blog Post #2'},
    //     // {title:'Blog Post #2'},
    // ]; this is static , 

    const [blogPosts,setBlogPosts]=useState([]);

    const addBlogPost =()=>{
            setBlogPosts([
                ...blogPosts,
                { title:`Blog Post #${blogPosts.length+1}`}
            ])//... means take all the blogposts from the array and make a new array.
    }


    return (
      <BlogContext.Provider value={{data:blogPosts,addBlogPosts:addBlogPost}}>{children}</BlogContext.Provider>
    );
  };
  
  export default BlogContext;