const express = require("express"); /* express라이브러리를 가져와서 express 변수에 넣고 */
const app = express();    /* express()를 실행해서 app 객체를 만든다. 아래 app.get을 통해 api를 실행 */
const port = 3000;

const postsRouter = require('./routes/posts.js');  /* 해당 경로에서 라우터 반환 받음 */
const commentsRouter = require('./routes/comments.js'); /* 해당 경로에서 라우터 반환 받음 */
//그리고 라우터를 express에 적용시켜야함

// const connect = require("./schemas");
// connect();


// app.use(express.json());
app.use("/api", [postsRouter, commentsRouter]);  /* app.use로 미들웨어 api 등록 */
//모든 미들웨어가 app.use를 통과. 통과한 후 아래 코드들이 실행.(공통 처리,관리)
// "/api"로 들어오는 모든 경로는 모두 [**Router]를 통해서 간다.


// app.get('/', (req, res)=>{
//     res.render('index')
// });

// app.get('/post', (req, res)=>{
//     res.render('post')
// });

// app.get('/comment', (req, res)=>{
//     res.render('comment')
// });

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});
// app.listen ; app 객체 통해서 express 서버 실행  (3000포트로 접근시에만 서버 실행)