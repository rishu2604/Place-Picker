import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(()=>{
    console.log('tmr set');
    const timer = setTimeout(()=>{
      onConfirm();
    }, 4000);

    return () => {
      console.log('tm clear');
      clearTimeout(timer);
    };
  }, [onConfirm]); // if you are using prop or state value in your effect function, you should add them as dependencies
  // But there is a possibility of infinite loop while adding functions as dependencies.
  // Because functions are treated as objects in javascript and javascript does not treat two objects as equal even if all the values are same in those objects
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
