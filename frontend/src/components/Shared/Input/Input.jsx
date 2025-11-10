
import './Input.css';

const Input = props => {
  if (props.rows > 1) {
    return(
      <div className='form-control'>
        <label htmlFor={props.id}>{props.label}</label>
        <textarea ref={props.ref} id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} readOnly={props.readOnly} required={props.required} rows={props.rows} />
      </div>
    )
  }
  return (
    <div className="form-control">
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={props.ref} id={props.id} name={props.name} type={props.type} placeholder={props.placeholder} readOnly={props.readOnly} required={props.required}/>
    </div>
  )
};

export default Input;