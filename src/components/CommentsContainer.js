import React from 'react'

const commentsData = [
    {
        name: "Mahi",
        text: "lorem ipsum dolor sit amet",
        replies: []
    },
    {
        name: "Mahak Shree",
        text: "lorem ipsum dolor sit amet, consectetue adip",
        replies: [{
            name: "Mahak Shree",
            text: "lorem ipsum dolor sit amet, consectetue adip",
            replies: [],
        },
        {
            name: "Mahak Shree",
            text: "lorem ipsum dolor sit amet, consectetue adip",
            replies: [],
        },
        {
            name: "Mahak Shree",
            text: "lorem ipsum dolor sit amet, consectetue adip",
            replies: [
                {
                    name: "Mahak Shree",
                    text: "lorem ipsum dolor sit amet, consectetue adip",
                    replies: [],
                }
            ],
        }
        ]
    },
    {
        name: " Avini",
        text: "lorem ipsum dolor sit amet, consectetue adip",
        replies: [],
    },
]

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex py-4 shadow-sm'>
            <img className='w-8 h-8'
                src='https://tse2.mm.bing.net/th?id=OIP._BXCcqxwmsduYNCJj2XDtgHaHa&pid=Api&P=0&h=180' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p style={{ whiteSpace: 'nowrap' }}>{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({ comments }) => {
    return comments.map((comment, ind) => (
        <div>
            <Comment key={ind} data={comment} />
            <div className='pl-5 border border-l-black ml-5 w-[50rem]'>
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ))

};

const CommentsContainer = () => {
    return (
        <div className='m-10 p-2'>
            <h6 className='text-2xl font-bold'>Comments:</h6>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer
