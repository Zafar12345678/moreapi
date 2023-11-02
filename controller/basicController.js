const Post = require("../models/basicModel");
const post_creat = async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      discription:req.body.discription // Assuming 'date' should be stored in the 'data' field
    //   image: req.file.filename, // Corrected 'filname' to 'filename'
    });

    const postData = await newPost.save();
    res.status(201).send({ success: true, msg: "Post Data", data: postData });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};
//  gate api methode 
const getGatedata = async (req, res) => {
    try {
      const myData = await Post.find();
      const path = require("path");
      const imagepath = myData.map((img) => ({
        // imagePath: path.join(__dirname, '..', 'public/postImages', img.image),
        title: img.title,
        discription:img.discription
        
      }));
      res.status(200).json(imagepath);
    } catch (error) {
      res.status(400).send({ success: false, msg: error.message });
    }
  };

module.exports={
    post_creat,
    getGatedata
}