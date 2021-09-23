import ChallengeCard from "./ChallengeCard";
import { useSelector } from 'react-redux';

import "./ChallengeList.css";

const ChallengeList = () => {
    const challenges = useSelector((state) => state.challengeData.challenges);

    return(
        <div className="challenge-list">
            <p className="challenge-list__header">Challenges</p>
            <div className="challenge-list__cards">
                {challenges.map((challenge) => (
                    <ChallengeCard
                        id = {challenge.id}
                        key = {challenge.id}
                        name = {challenge.name}
                        descriptionShort = {challenge.descriptionShort}
                        descriptionLong = {challenge.descriptionLong}

                        daysCompleted = {challenge.daysCompleted}
                        days = {challenge.days}

                        mainImg = {challenge.mainImg}
                        previewImg = {challenge.previewImg}
                        footerImg = {challenge.footerImg}                    
                    />
                ))}
            </div>
        </div>
    );
}

export default ChallengeList;