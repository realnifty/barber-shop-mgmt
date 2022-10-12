import { useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/signup");
    },[navigate])
    return (
        <div>
            <Alert variant="success">Hello my dude</Alert>
        </div>
    );
};

export default Signup;