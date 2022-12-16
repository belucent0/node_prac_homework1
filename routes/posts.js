const express = require("express");    /*  express라는 라이브러리를 express 라는 변수에 할당*/
const router = express.Router();       /*  express 객체 안의 Router란 함수를 실행하여 함수의 결괏값을 router 라는 변수에 할당 */ 

const posts = [
    {
        postId:"62d6d3fd30b5ca5442641b94",
        user: "Developer",
        title: "안녕하세요",
        content: "안녕하세요. content입니다.",
        createdAt: "2022-07-19T15:55:41.490Z"
    }

]

// 1. 전체 게시글 목록 조회 API
//     - 제목, 작성자명, 작성 날짜를 조회하기
//     - 작성 날짜 기준으로 내림차순 정렬하기
router.get("/posts", (req, res) => {
	res.json({ posts: posts });   
});



//게시글 상세 조회 API
router.get("/posts/:postsId", async (req, res) => {
    try {
        const { postsId } = req.params;
        const posts = await Posts.findOne({where: {postsId:postsId}});
        
        res.json({posts: posts});
    } catch (err) {
        console.error(err);
        next(err);
    }
});







// {  
//     "data": 
//     [    
//     {      
//     "postId": "62d6d12cd88cadd496a9e54e",      
//     "user": "Developer",      
//     "title": "안녕하세요",      
//     "createdAt": "2022-07-19T15:43:40.266Z"    
//     },  
//      {      
//     "postId": "62d6cc66e28b7aff02e82954",      
//     "user": "Developer",      
//     "title": "안녕하세요",      
//     "createdAt": "2022-07-19T15:23:18.433Z"   
//      }  
//     ]
//     }


// // 2. 게시글 작성 API
// //     - 제목, 작성자명, 비밀번호, 작성 내용을 입력하기



// {  "message": "게시글을 생성하였습니다."}



// // 3. 게시글 조회 API
// //     - 제목, 작성자명, 작성 날짜, 작성 내용을 조회하기 
// //     (검색 기능이 아닙니다. 간단한 게시글 조회만 구현해주세요.)




//     {  
//         "data": 
//         {    
//         "postId": "62d6cb83bb5a517ef2eb83cb",    
//         "user": "Developer",    
//         "title": "안녕하세요",    
//         "content": "안녕하세요 content 입니다.",    
//         "createdAt": "2022-07-19T15:19:31.730Z"  
//         }
//         }    

// // 4. 게시글 수정 API
// //     - API를 호출할 때 입력된 비밀번호를 비교하여 동일할 때만 글이 수정되게 하기
// {  "message": "게시글을 수정하였습니다."}


// // 5. 게시글 삭제 API
// //     - API를 호출할 때 입력된 비밀번호를 비교하여 동일할 때만 글이 삭제되게 하기
// {  "message": "게시글을 삭제하였습니다."}




module.exports = router;
