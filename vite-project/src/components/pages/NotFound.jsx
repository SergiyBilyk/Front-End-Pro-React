import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div>Page not found</div>
            <Link to='/' className="link">Main page</Link>
        </>
    )
}
export default NotFound