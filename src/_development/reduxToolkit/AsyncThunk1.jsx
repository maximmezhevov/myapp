import { useDispatch, useSelector } from "react-redux"
import { deletePostById, deletePostById2, getPosts, getPosts2 } from "../../features/post/postSlice"

export const AsyncThunk1 = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.posts)
  return (
    <div>
      <div role='heading' className='font-bold mb-1'>AsyncThunk</div> 
      <div className='w-[350px]'>
        <button type='submit' onClick={() => dispatch(getPosts2())} className='w-full border px-1 bg-blue-50 hover:bg-blue-100'>
          get posts
        </button>
        {posts.map(post => <PostItem key={post.id} post={post}/>)}
      </div>
    </div>
  )
}

const PostItem = ({post}) => {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(deletePostById2(post.id))} className='my-1 border p-1 hover:bg-zinc-50 cursor-pointer'>
      {post.title}
    </div>
  )
}