
import { useParams } from "react-router";

const Paramas = () => {
    const { id } = useParams();
    return (
        <div>
            <h3> ID passed  : {id} </h3>
        </div>
    )

}

export default Paramas;

