import { useState } from "react";
import{Toast} from "react-bootstrap"
export function ToastComponent() {
    const [showToast, setShowToast] = useState(false);
  
    const handleClick = () => {
      setShowToast(true);
    };
  
    return (
      <div>
        <button onClick={handleClick}>Click me</button>
  
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="mr-auto">Toast Message</strong>
          </Toast.Header>
          <Toast.Body>This is a toast message!</Toast.Body>
        </Toast>
      </div>
    );
  }
  