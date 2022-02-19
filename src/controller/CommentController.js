const comment = require('../model/commnets')
class CommentController {

    getComments(req, res) {
        comment.findOne({idMovie: req.body.id})
            .then(data => {
                if(data){
                res.json([data]);
                }else{
                res.json([{
                    dataComment:[
                    {
                        comment: 'Không có bình luận'
                    }
                    ]
                }])
                }
            })
    }
    addcomment(req, res) {
        const {category, commentData, idMovie, name, dateTime} = req.body.data

            comment.findOne({idMovie: Number(idMovie)})
                .then((dataComment) => {
                if(dataComment === null){
                    addNewComment()
                }else{
                    upDataCommented(dataComment)
                }
                })
            
                const addNewComment = () => {
                comment.create({
                    idMovie: idMovie,
                    category: category,
                    dataComment:[
                        {
                            name: name,
                            comment: commentData,
                            img:'',
                            datetime: dateTime
                            
                        }
                    ]
                
                })
                    .then(data => res.json(data))
                    .catch(err => console.log('lỗi'))
                }

                const upDataCommented = (data) => {
                    const prevDataComment = data.dataComment
                    console.log();
                    comment.findOneAndUpdate({idMovie: Number(idMovie)}, {dataComment:[...prevDataComment, {
                    name: name,
                    comment: commentData,
                    img:'',
                    datetime: dateTime
                    
                }]})
                    .then(dataComment =>res.json(dataComment))
                }
                }

}
module.exports = new CommentController