import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import "./Session.css"

const Session  = () => {
    //gets challenge id
    const {id} = useParams();

    //gets corresponding challenge object
    const challenges = useSelector((state) => state.challengeData.challenges);
    const challenge = challenges.find(elt => elt.id === parseInt(id));

    return(
        <div>
            <img className="session__footer" src={challenge.footerImg.default} alt="decorative img"></img>

            <div className="session__exit-layout">
                <Link
                className="session-detail__exit"
                to={`/challengedetail/${id}`}
                aria-label="exti"
                />
            </div>
        </div>
    )
}

export default Session;