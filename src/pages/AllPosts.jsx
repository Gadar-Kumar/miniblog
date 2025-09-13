import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import PostCard from '../components/PostCard'
import Container from '../components/container/Container';

function AllPosts() {

    const [post,setPost]=useState([]);
    useEffect(()=>{

    },[])

    appwriteService.getPost([]).then((post)=>{
        if(post){
            setPost(post.documents)
        }
    })


  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
             {post.map((posts)=>(
                <div key={posts.$id}>
                    <PostCard posts={posts}/>
                     </div>
             ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
