import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UseContext";
import { LoginForm } from "./LoginForm";
import { LoadingPage } from "../../UI/LoadingPage";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import apiGetMyIn4 from "../../API/apiGetMyIn4";
export const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userInfo = await apiGetMyIn4();
                setUser(userInfo);
                // If user is already logged in, navigate to a different page
                if (userInfo.status !== 706) {
                    navigate('/home'); // Replace '/home' with the desired path
                }
            } catch (error) {
                console.error("Failed to fetch user info:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserInfo();
    }, [navigate])
    if (loading) {
        return <LoadingPage />;
    }
    return (
        <>
       
            <section
                className="vh-100"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <Link to={"/home"}>
                            <img
                                src="/logo.png"
                                className="img-fluid"
                                alt="Phone image"
                                />
                                </Link>
                        </div>

                        <LoginForm />
                    </div>
                </div>
            </section>
        </>
    );
};