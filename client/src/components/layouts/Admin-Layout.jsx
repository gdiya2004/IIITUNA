import { Navigate, NavLink, Outlet } from "react-router-dom"
import {useAuth} from "../../store/auth.jsx"
import "./Admin-Layout.css"
export const AdminLayout=()=>{
    const {user,isLoading}=useAuth();
    console.log("admin lay",user);
    if(isLoading){
        return <div>Loading...</div>
    }
    if(!user.isAdmin){
        return <Navigate to="/" />
    }
    return (
        <>
        <header>
            <div className="container2">
               
                    <ul>
                        <li><NavLink to="/admin/users" className="link">users</NavLink></li>
                        <li><NavLink to="/admin/contact" className="link">contacts</NavLink></li>
                    </ul>
                
            </div>
        </header>
        <Outlet/>
        </>
    )
}