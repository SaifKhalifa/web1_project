
import Button from "./Button"

const Baner =(props )=>{
    return(
     <div className="card text-bg-dark">
  <img src={props.image12} className="card-img" alt="..." />
   <div   className="">
   <img src={props.avatar} alt="Avatar" className="avatar" /><p className="avatar-name">{props.name}</p><p className="viwe-number">{props.viwes}</p>
   </div>
  <div className="card-img-overlay">
    <h5 className="card-title"> {props.title} </h5>
    <p className="card-text"> {props.text}  </p>
  </div>
<Button/>
</div>

    )
}
export default Baner