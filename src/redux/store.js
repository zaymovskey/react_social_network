import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage : {
            posts: [
                {'id':1, 'message': 'Ебал я ваших матерей'},
                {'id':2, 'message': 'Ебал я ваших отцов'}
            ],
            profileInfo: {
                'firstName': 'Сергей',
                'lastName': 'Займовский',
                'birthDay': '05.09.2001',
                'education': 'Москвоское ПТУ',
                'city': 'Москва',
                'imgUrl': 'https://sun1-20.userapi.com/s/v1/if1/S1EuYvd-VGfgCTDkHtQmPYBuHALn_7JsygANpBXPV2qw3hVjpcSHpUfCWQFI80hExm1cq8qG.jpg?size=200x0&quality=96&crop=0,0,1620,2160&ava=1'
            },
        },
        dialogsPage : {
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
            newMessageBody: ''
        },
        nav: {importantFriends: [
                {'name' : 'Саша', 'imgUrl': 'https://sun9-31.userapi.com/impg/yCcEFJyWnRpFcPu3sku-adJYSx4hWsbBVj1dvQ/tWIwu7ZW9dM.jpg?size=1080x1080&quality=96&sign=b2044594e4703b0845fc0d73461ecce1&type=album'},
                {'name' : 'Ирина', 'imgUrl': 'https://sun9-31.userapi.com/impg/yCcEFJyWnRpFcPu3sku-adJYSx4hWsbBVj1dvQ/tWIwu7ZW9dM.jpg?size=1080x1080&quality=96&sign=b2044594e4703b0845fc0d73461ecce1&type=album'},
                {'name' : 'Соня', 'imgUrl': 'https://sun9-31.userapi.com/impg/yCcEFJyWnRpFcPu3sku-adJYSx4hWsbBVj1dvQ/tWIwu7ZW9dM.jpg?size=1080x1080&quality=96&sign=b2044594e4703b0845fc0d73461ecce1&type=album'}
            ]
        }
    },

    _callSubscriber () {
        console.log('State was changed')
    },
    getState () {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this.getState().profilePage = profileReducer(this.getState().profilePage, action);
        this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action);

        this._callSubscriber(this)
    }
};


export default store;

window.store = store;