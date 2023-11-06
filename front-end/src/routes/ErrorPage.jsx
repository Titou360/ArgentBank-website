import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <div>
            <p>Oh no, something gone wrong !</p>
            <Link to="/">
            <p>Go back to the Home page</p></Link>
        </div>
    );

}