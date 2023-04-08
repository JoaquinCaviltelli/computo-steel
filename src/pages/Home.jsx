import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
        <h1>Home</h1>
        <Link to="/nuevo-proyecto">

        <button>Nuevo Proyecto</button>

        </Link>
        </div>
    );
}   
export default Home;