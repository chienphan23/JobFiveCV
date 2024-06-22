export const ErrorText = ({errorText, mt, mb}) => {
    return(
      <> {errorText ? <div className={`text-danger mb-${mb ? mb : 0} mt-${mt ? mt : 0}`}>{errorText}</div> : null}  </> 
    )
}