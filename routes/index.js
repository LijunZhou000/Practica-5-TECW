var express = require('express');
var router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({
  storage: storage,
  limits: {fileSize: 20 * 1024 * 1024}});

const postController = require('../controllers/posts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Práctica 5 TECW' });
});

router.get('/author', (req, res, next) => {
  res.render('author', { title: 'Práctica 5 TECW' })
})

// router.get('/posts', (req, res, next) => {
//   res.render('posts', { title: 'Práctica 5 TECW' })
// })

router.param('postId', postController.load);

router.get('/posts', postController.index);
router.get('/posts/:postId(\\d+)', postController.show);
router.get('/posts/new', postController.new);
router.post('/posts', postController.create);
router.get('/posts/:postId(\\d+)/edit', postController.edit);
router.put('/posts/:postId(\\d+)', postController.update);
router.delete('/posts/:postId(\\d+)', postController.destroy);
// router.get('/posts/:postId(\\d+)/play', postController.play);
// router.get('/posts/:postId(\\d+)/check', postController.check);

router.post('/posts', upload.single('image'), postController.create);
router.put('/posts/:postId(\\d+)', upload.single('image'), postController.update);
router.get('/posts/:postId(\\d+)/attachment', postController.attachment);


module.exports = router;
