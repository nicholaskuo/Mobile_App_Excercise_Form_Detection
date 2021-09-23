import {createSlice } from '@reduxjs/toolkit';

/*********************************    Challenge Data    *********************************/

const jumpingJacksChallenge = {
    id: 1,
    name: "Jumping Jacks",
    descriptionShort: "movement challenge",
    descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, libero quis bibendum dapibus, nisi velit tempor mi, luctus ornare sapien orci volutpat purus. Curabitur tempor ante urna, vel iaculis quam convallis non. Curabitur tempor ante urna, vel iaculis quam convallis non. ",

    daysCompleted: 3,
    days: [
        {
            isComplete: true,
            num: 20,
        },
        {
            isComplete: true,
            num: 20,
        },
        {
            isComplete: true,
            num: 40,
        },
        {
            isComplete: false,
            num: 10,
        },
        {
            isComplete: false,
            num: 30,
        },
        {
            isComplete: false,
            num: 30,
        },
        {
            isComplete: false,
            num: 40,
        },
        {
            isComplete: false,
            num: 15,
        },
        {
            isComplete: false,
            num: 40,
        },
        {
            isComplete: false,
            num: 50,
        },
    ],

    mainImg: require('../images/challenges/jumpingJacks/mainImg.png'),
    previewImg: require('../images/challenges/jumpingJacks/previewImg.png'),
    footerImg: require('../images/challenges/jumpingJacks/footerImg.png'),
};

const meditationChallenge = {
    id: 2,
    name: "Meditation",
    descriptionShort: "mindfulness challenge",
    descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, libero quis bibendum dapibus, nisi velit tempor mi, luctus ornare sapien orci volutpat purus. Curabitur tempor ante urna, vel iaculis quam convallis non. Curabitur tempor ante urna, vel iaculis quam convallis non. ",

    daysCompleted: 0,
    days: [],

    mainImg: require('../images/challenges/meditation/mainImg.png'),
    previewImg: require('../images/challenges/meditation/previewImg.png'),
    footerImg: require('../images/challenges/meditation/footerImg.png'),
}

const mountianClimbersChallenge = {
    id: 3,
    name: "Mountain Climbers",
    descriptionShort: "movement challenge",
    descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, libero quis bibendum dapibus, nisi velit tempor mi, luctus ornare sapien orci volutpat purus. Curabitur tempor ante urna, vel iaculis quam convallis non. Curabitur tempor ante urna, vel iaculis quam convallis non. ",

    daysCompleted: 0,
    days: [],

    mainImg: require('../images/challenges/mountainClimbers/mainImg.png'),
    previewImg: require('../images/challenges/mountainClimbers/previewImg.png'),
    footerImg: require('../images/challenges/mountainClimbers/footerImg.png'),
}

const yogaChallenge = {
    id: 4,
    name: "Yoga",
    descriptionShort: "movement challenge",
    descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, libero quis bibendum dapibus, nisi velit tempor mi, luctus ornare sapien orci volutpat purus. Curabitur tempor ante urna, vel iaculis quam convallis non. Curabitur tempor ante urna, vel iaculis quam convallis non. ",

    daysCompleted: 0,
    days: [],

    mainImg: require('../images/challenges/yoga/mainImg.png'),
    previewImg: require('../images/challenges/yoga/previewImg.png'),
    footerImg: require('../images/challenges/yoga/footerImg.png'),
}

const breathingChallenge = {
    id: 5,
    name: "Breathing",
    descriptionShort: "mindfulness challenge",
    descriptionLong: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, libero quis bibendum dapibus, nisi velit tempor mi, luctus ornare sapien orci volutpat purus. Curabitur tempor ante urna, vel iaculis quam convallis non. Curabitur tempor ante urna, vel iaculis quam convallis non. ",

    daysCompleted: 0,
    days: [],

    mainImg: require('../images/challenges/breathing/mainImg.png'),
    previewImg: require('../images/challenges/breathing/previewImg.png'),
    footerImg: require('../images/challenges/breathing/footerImg.png'),
}
const challenges = [
    jumpingJacksChallenge, 
    meditationChallenge,
    mountianClimbersChallenge,
    yogaChallenge,
    breathingChallenge,
]

/*********************************    Reducer    *********************************/

const challengeDataSlice = createSlice ({
    name: 'challengeData',
    initialState: {challenges: challenges},
    reducers: {

    }
});

export const challengeDataActions = challengeDataSlice.actions;
export default challengeDataSlice.reducer;