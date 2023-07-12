
export type MyPostsPropsType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogItemPropsType = {
    id: number,
    name: string
}

export type MessagePropsType = {
    id: number,
    message: string
}

export type storeType = {
    _state: stateType
    getState: () => stateType
    _rerenderEntireTree: (state: stateType) => void
    addPost: () => void
    updateNewPostText: (text: string) => void
    subscriber: (observer: (state: stateType) => void) => void
}

export type stateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: MyPostsPropsType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogItemPropsType[],
    messages: MessagePropsType[]
}

export type AppType = {
    state: stateType,
    addPost: () => void;
    updateNewPostText: (text: string) => void
}

export type dialogsPropsType = {
    state: DialogsPageType
}

export type profilePropsType = {
    posts: ProfilePageType
    addPost: () => void;
    newPostText: string
    updateNewPostText: (text: string) => void
}

export let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you?', likesCount: 15},
                {id: 1, message: 'It is my first post', likesCount: 11}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your?"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
                {id: 6, message: "Yo"}
            ]
        }
    },
    getState(){return this._state},
    _rerenderEntireTree(state: stateType) {
    },
    addPost() {
        let newPost = {id: 7, message: this._state.profilePage.newPostText, likesCount: 15}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._rerenderEntireTree(this._state)

    },
    updateNewPostText(text: string) {
        this._state.profilePage.newPostText = text;
        this._rerenderEntireTree(this._state)
    },
    subscriber(observer: (state: stateType) => void) {
        this._rerenderEntireTree = observer
}
}






























