

function Comments({comments}) {

const commentsData = comments.map(com => (
    <div key={com.id}>
    <h3>{com.user}</h3>
    <p>{com.comment}</p>
    </div>
))


return (
<>

<h2>{comments.length} Comments</h2>
{commentsData}
</>
)}

export default Comments
