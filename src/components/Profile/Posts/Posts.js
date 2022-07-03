import profilrFoto from'../../../img/profilr__foto.png'
import PostItem from '../PostItem/PostItem';
function Posts() {
  return (
    <div className='profile__post posts'>
      <div className='posts__head'>
        <h3>
          My Posts
        </h3>
        <input placeholder='Enter the post' />
        <button>Add Post</button>
      </div>
      <div className='posts__list'>
        <PostItem profileFoto={profilrFoto} profileName='Alex' postText='First Post...' />
        <PostItem profileFoto={profilrFoto} profileName='Alex' postText='First Post...' />
        <PostItem profileFoto={profilrFoto} profileName='Alex' postText='First Post...' />
      </div>
    </div>
  )
}

export default Posts;