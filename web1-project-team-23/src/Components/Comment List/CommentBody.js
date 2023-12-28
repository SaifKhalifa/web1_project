const CommentBody = (props) =>{
    return(
        <div className="bg-light rounded-start-top-0 p-3 rounded">
            <div className="d-flex justify-content-between">
                <h6 className="mb-1"> <a href="#!" className="black-link"> {props.publisherName} </a></h6>
                <small className="ms-2">{props.commentTime}</small>
            </div>
            <p className="small mb-0">{props.body}</p>
        </div>
    );
}
export default CommentBody;