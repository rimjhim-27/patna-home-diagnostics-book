const Instagram = require('instagram-web-api');

const client = new Instagram({
  username: process.env.INSTAGRAM_USERNAME,
  password: process.env.INSTAGRAM_PASSWORD
});

exports.postToInstagram = async (req, res) => {
  try {
    await client.login();
    const { photo, caption } = req.body;
    
    const result = await client.uploadPhoto({
      photo,
      caption,
      post: 'feed'
    });
    
    res.json({ success: true, result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
const axios = require('axios');

exports.postToInstagram = async (req, res) => {
  try {
    // In production, use OAuth tokens
    const { imageUrl, caption } = req.body;
    
    // Example: Post to Instagram via a service like Zapier or custom API
    const response = await axios.post('YOUR_INSTAGRAM_API_ENDPOINT', {
      imageUrl,
      caption,
    });

    res.json({ success: true, data: response.data });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to post to Instagram' });
  }
};