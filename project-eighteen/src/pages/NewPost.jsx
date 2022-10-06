import { useNavigate } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';

function NewPostPage() {
  const navigate = useNavigate();


  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      <NewPostForm
        onCancel={cancelHandler}
        submitting={isSubmitting}
      />
    </>
  );
}

export default NewPostPage;

export async function action({request}){
  const formData = await request.formData();
  const post ={
    title: formData.get('title')
  }
}
