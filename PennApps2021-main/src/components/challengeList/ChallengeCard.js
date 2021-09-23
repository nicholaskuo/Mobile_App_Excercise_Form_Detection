import "./ChallengeCard.css";

import { Link } from 'react-router-dom';

const ChallengeCard = (props) => {

    return(
        <div className="challenge-card">
            <Link 
                className="challenge-card__link"
                to={`/challengedetail/${props.id}`}
                aria-label={`${props.name}challenge card`}
            >
                <p className="challenge-card__header">{props.name}</p>
                <p className="challenge-card__description">{props.descriptionShort}</p>
                <img className="challenge-card__img" src={props.previewImg.default} alt={props.name}></img>
            </Link>
        </div>
    )
}

export default ChallengeCard;