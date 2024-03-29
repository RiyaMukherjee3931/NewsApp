import React from 'react'


const Newsitem=(props)=>{
    let {title,description,imageUrl,newsUrl,author,date,source} =  props;
    return (
      <>
      <div>
        <div className="card" style={{width: "18rem", marginTop: "90px"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <span  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'88%', zIndex:1}}>
    {source}
    <span  className="visually-hidden">unread messages</span>
  </span>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">by {!author? "unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
      </>
    );
  
};
export default Newsitem;