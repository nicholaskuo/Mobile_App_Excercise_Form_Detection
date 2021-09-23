import "./ChallengeDetail.css";

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import footerBackgroundImg from "../../images/UI/descriptionBackground.png";
import gradientImg from "../../images/UI/darkGradient.png";

const ChallengeDetail = () => {
    //gets challenge id
    const {id} = useParams();

    //gets corresponding challenge object
    const challenges = useSelector((state) => state.challengeData.challenges);
    const challenge = challenges.find(elt => elt.id === parseInt(id));

    return(
        <div>
            <img className="challenge-detail__background"src={challenge.mainImg.default} alt="decorative background"></img>
            <img className="challenge-detail__footer-background" src={footerBackgroundImg} alt="decorative footer"></img>
            <img className="challenge-detail__header-gradient" src={gradientImg} alt="decorative header"></img>

            <div className="challenge-detail__back-layout">
                <Link
                className="challenge-detail__back"
                to={`/challengelist`}
                aria-label="back"
                />
            </div>

            <div className="challenge-detail__progress">
                <div>
                    <p className="challenge-detail__num">{`${challenge.daysCompleted}/${challenge.days.length}`}</p>
                    <p className="challenge-detail__dayscomp">days complete</p>
                </div>
            </div>

            <div className="challenge-detail__text">
                <p className="challenge-detail__heading">What is the {challenge.name} challenge?</p>
                <p className="challenge-detail__description">What is the {challenge.descriptionLong} challenge?</p>
            </div>

            <div className="challenge-detail__buttons">
                <Link
                className="challenge-detail__chat"
                to={`/chat/${id}`}
                aria-label="chat"
                />

                <Link 
                    className="challenge-detail__start"
                to={`/session/${id}`}
                aria-label="start"
                />
            </div>

        </div>
    )
}

export default ChallengeDetail;