import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import "./Chat.css";

const Chat = () => {
    //gets challenge id
    const {id} = useParams();

    //gets corresponding challenge object
    const challenges = useSelector((state) => state.challengeData.challenges);
    const challenge = challenges.find(elt => elt.id === parseInt(id));

    return(
        <div>
            <img className="chat__background" src={challenge.mainImg.default} alt="decorative background"></img>

            <div className="chat__back-layout">
                <Link
                className="chat-detail__back"
                to={`/challengedetail/${id}`}
                aria-label="back"
                />
            </div>
        </div>
    )
}

export default Chat;