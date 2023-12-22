const VideoTest = () =>{
    return(
        <div className="col-md-8 col-lg-9 vstack gap-4">
            <div className="card">
                <div className="card-body">
                    <iframe className="rounded w-100" height={450} src="https://www.youtube.com/embed/n_Cn8eFo7u8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <div className="d-flex my-3">
                        <div>
                            <h1 className="h4"> What's it like to work at Google? </h1>
                            <div className="d-flex">
                                <div className="avatar avatar-xxs me-2">
                                    <img className="avatar-img rounded-circle" src="https://yt3.ggpht.com/ytc/AIf8zZSyX1SK7mK3yTq6z8O_5juKW03gDJWXewOckJDIX9g=s48-c-k-c0x00ffffff-no-rj" alt="" />
                                </div>
                                <div className="d-none d-xl-block">
                                    <span className="h6 stretched-link">Frances Guerrero</span> 
                                </div>
                                {/* <i className="bi bi-patch-check-fill text-success small" /> */}                         
                            </div>
                        </div>                
                    </div>
                    <ul className="nav nav-stack small mt-4">
                    <li className="nav-item">
                        <a className="nav-link active" href="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1" />Liked (1)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1" />Comments (0)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#!"> <i className="bi bi-eye-fill pe-1" />1 Views</a>
                    </li>
                    <li className="nav-item ms-sm-auto">
                        <div className="dropdown">
                            <a href="#" className="text-secondary" id="feedvideoActionShare" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-reply-fill fa-flip-horizontal pe-1" />Share (1)
                            </a>                       
                        </div>
                    </li>
                    </ul>
                </div>
            </div>           
        </div>
    );
}

export default VideoTest;