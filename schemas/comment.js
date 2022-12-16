const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

    commentid:{
        type : Number,
        required : true,
        unique : true
    },
    user: {
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

module.exports = mongoose.model("Comments", commentSchema);
 

  