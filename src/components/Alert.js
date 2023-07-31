
const Alert = (props) => {

  return (
    <>
   
   <div className={`alert ${props.alert.display} alert-${props.alert.type}`} role="alert">
    {props.alert.msg}
  </div>
  </>
  )
}

export default Alert;