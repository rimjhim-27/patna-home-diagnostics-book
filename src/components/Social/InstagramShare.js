import { useState } from 'react';
import { postToInstagram } from '../../services/api';

const InstagramShare = () => {
  const [postData, setPostData] = useState({
    caption: '',
    image: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', postData.image);
    formData.append('caption', postData.caption);
    
    try {
      await postToInstagram(formData);
      alert('Posted to Instagram successfully!');
    } catch (error) {
      console.error('Instagram error:', error);
      alert('Failed to post to Instagram');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPostData({...postData, image: e.target.files[0]})}
        required
      />
      <textarea
        placeholder="Caption"
        value={postData.caption}
        onChange={(e) => setPostData({...postData, caption: e.target.value})}
        required
      />
      <button type="submit">Post to Instagram</button>
    </form>
  );
};