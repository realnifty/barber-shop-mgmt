import { useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/login");
    }, [navigate])
    return (
        <div>
            <Alert variant="success">Hello my guy</Alert>
        </div>
    );
};

export default Login;