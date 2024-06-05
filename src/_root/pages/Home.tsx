import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { Loader } from "lucide-react";

const home = () => {
  const { data: posts, isLoading: isPostLoading, isError:isErrorPost} = useGetRecentPosts();
  return (
    <div className='w-full md:flex'>
      <div className="home-container">
        <div className="home-posts">
          {isPostLoading && !posts ?(
            <Loader/>
          ):(
            <ul className="flex flex-col flex-1 gap-9 w-full">
               {posts?.documents.map((post: Models.Document) =>(
                <PostCard post={post}/>
               ))}
            </ul>
          )}
        </div>
      </div>

    </div>
  )
}

export default home