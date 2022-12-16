const express = require("express");    /*  express라는 라이브러리를 express 라는 변수에 할당*/
const router = express.Router();       /*  express 객체 안의 Router란 함수를 실행하여 함수의 결괏값을 router 라는 변수에 할당 */ 

const comments = [
    {
        commentID:"62d6d3fd30b5ca5442641b94",
        user: "Developer",
        content: "안녕하세요. 댓글입니다.",
        createdAt: "2022-07-19T15:55:41.490Z"
    }

]

// 6. 댓글 목록 조회
//     - 조회하는 게시글에 작성된 모든 댓글을 목록 형식으로 볼 수 있도록 하기
//     - 작성 날짜 기준으로 내림차순 정렬하기

router.get("/", (req, res) => {
    res.send("default url for comments.js GET Method");

});


router.get("/comments", async (req, res) => {
	res.json({ comments: comments });   
});




// 400 body 또는 params를 입력받지 못한 경우
// { message: '데이터 형식이 올바르지 않습니다.' }


// {  
//     "data": 
//     [    {      
//     "commentId": "62d6d3fd30b5ca5442641b94",      
//     "user": "Developer",      
//     "content": "수정된 댓글입니다.",     
//      "createdAt": "2022-07-19T15:55:41.490Z"    
//     },   
//     {      
//     "commentId": "62d6d34b256e908fc79feaf8",      
//     "user": "Developer",     
//      "content": "안녕하세요 댓글입니다.",      
//     "createdAt": "2022-07-19T15:52:43.212Z"    
//     }  
//     ]
//     }



// // 7. 댓글 작성
// //     - 댓글 내용을 비워둔 채 댓글 작성 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
// //     - 댓글 내용을 입력하고 댓글 작성 API를 호출한 경우 작성한 댓글을 추가하기

// {  
//     "user": "Developer",  
//     "password": "1234",  
//     "content": "안녕하세요 댓글입니다."
//     }


// {  "message": "댓글을 생성하였습니다."}




// # 400 body의 content를 입력받지 못한 경우
// { message: '댓글 내용을 입력해주세요.' }
// # 400 body 또는 params를 입력받지 못한 경우
// { message: '데이터 형식이 올바르지 않습니다.' }


// // 8. 댓글 수정
// //     - 댓글 내용을 비워둔 채 댓글 수정 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
// //     - 댓글 내용을 입력하고 댓글 수정 API를 호출한 경우 작성한 댓글을 수정하기






// { 
//     "password": "1234",  
//     "content": "수정된 댓글입니다."
//     }

// {  "message": "댓글을 수정하였습니다."}

// # 400 body의 content를 입력받지 못한 경우
// { message: '댓글 내용을 입력해주세요.' }
// # 400 body 또는 params를 입력받지 못한 경우
// { message: '데이터 형식이 올바르지 않습니다.' }
// # 404 _commentId에 해당하는 댓글이 존재하지 않을 경우
// { message: '댓글 조회에 실패하였습니다. }


// // 9. 댓글 삭제
// //     - 원하는 댓글을 삭제하기

// {  "password": "1234"}

// {  "message": "댓글을 삭제하였습니다."}



// # 400 body 또는 params를 입력받지 못한 경우
// { message: '데이터 형식이 올바르지 않습니다.' }
// # 404 _commentId에 해당하는 댓글이 존재하지 않을 경우
// { message: '댓글 조회에 실패하였습니다. }

module.exports = router;