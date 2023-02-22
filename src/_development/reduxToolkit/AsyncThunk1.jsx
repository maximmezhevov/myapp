import { useDispatch, useSelector } from "react-redux"
import { deletePostById, getPosts } from "../../features/post/postSlice"

export const AsyncThunk1 = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.posts)
  return (
    <div>
      <div>async thunk</div>
      <div>
        <button type='submit' onClick={() => dispatch(getPosts())} className='w-[300px] border px-1 hover:bg-zinc-50'>
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
    <div onClick={() => dispatch(deletePostById(post.id))} className='w-[300px] my-1 border p-1 hover:bg-zinc-50 cursor-pointer'>
      {post.title}
    </div>
  )
}