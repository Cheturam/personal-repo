var currentDate = new Date();
var twentyMinutesLater = new Date(currentDate.getTime() + (20 * 60 * 1000));

export const betting_question = {
    question_id: 1,
    question: "Which Team will win and Score More?",
    end_date: twentyMinutesLater,
    bet_coins: 10,
    options: [
        {
            id: 1,
            title: "Team A",
            win_coins: 15
        },
        {
            id: 2,
            title: "Team B",
            win_coins: 30
        },
        {
            id: 3,
            title: "Team C",
            win_coins: 20
        },
    ]
}