import ProfilePic from "../ProfilePic"
const NewComment = () =>{
    return(
        <>
            <div class="d-flex my-3">
                <ProfilePic/>
                <div>
                    <form class="position-relative w-100">
                        <textarea class="form-control pe-4 ms-3 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                    </form>
                </div>        
            </div>
        </>
    );
}

export default NewComment;