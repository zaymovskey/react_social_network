const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {
            'id': 1,
            'firstName': 'Мария',
            'lastName': 'Валуева',
            'imgUrl': 'https://sun9-32.userapi.com/impf/8FU8FLlG6Hlr5JIpK3MUox3Rm2VjbS-JYg7F3w/iwXR1MtqFjw.jpg?size=839x1509&quality=96&sign=ce40a244e79ffd5b69ea155cc14f888a&type=album',
            'lastMessage': 'иди нахуй'
        },
        {
            'id': 2,
            'firstName': 'Андрей',
            'lastName': 'Васильев',
            'imgUrl': 'https://sun9-32.userapi.com/impf/8FU8FLlG6Hlr5JIpK3MUox3Rm2VjbS-JYg7F3w/iwXR1MtqFjw.jpg?size=839x1509&quality=96&sign=ce40a244e79ffd5b69ea155cc14f888a&type=album',
            'lastMessage': 'соси хуй'
        }
    ],
    messages: [
        {
            'id': 1,
            messageText: 'Нахуй ты мне пишешь?',
            author: 'Мария'
        },
        {
            id: 2,
            messageText: 'Пошел ты нахуй',
            author: 'Андрей'
        }
    ],
    messageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_BODY:
            debugger;
            return {
                ...state,
                messageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.messageBody;
            return {
                ...state,
                messageBody: '',
                messages: [...state.messages, {id: 6, messageText: body, author: 'Серега'}]
            };

        default:
            return state
    }
};

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateMessageBody = (body) => {
    return (
        {type: UPDATE_MESSAGE_BODY, body: body}
    )
};

export default dialogsReducer