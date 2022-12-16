const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

    postid:{
        type : Number,
        required : true,
        unique : true
    },
    user: {
      type: String,
      required: true,
  
    },
    password: {
        type: String,
        required: true,
    },
    title:{
      type: String,
      required: true,
  
    },
    content: {
      type: String,
      required: true,
  
    },

    createdAt: {
        type: date,
    }

});

module.exports = mongoose.model("Posts", postSchema);
 

  