import "./FormRequest.css";
export default function Modal({ isVisible , errorMessage=null}) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{color: errorMessage? "red":"green"}}>{errorMessage !==null? errorMessage:"The Form Has Been Submitted Sucessfully"} </h1>
        </div>
      </div>
    );
  } else {
    <></>;
  }
}
