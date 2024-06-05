import { useParams } from "react-router-dom";

import  Loader  from "@/components/shared/Loader";
import PostForm from "@/components/forms/PostForm";
import { useGetUserById } from "@/lib/react-query/queriesAndMutations";

const EditPost = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetUserById(id || '');

  if (isLoading)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="flex-start gap-3 justify-start w-full max-w-5xl">
          <img
            src="/public/assets/icons/edit.svg"
            width={36}
            height={36}
            alt="edit"
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Editar Post</h2>
        </div>

        {isLoading ? <Loader /> : <PostForm action="Update" post={post} />}
      </div>
    </div>
  );
};

export default EditPost;