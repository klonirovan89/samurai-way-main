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

export type stateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: MyPostsPropsType[]
}

export type DialogsPageType = {
    dialogs: DialogItemPropsType[],
    messages: MessagePropsType[]
}

export type AppType = {
    state: stateType,
}

export type dialogsPropsType = {
    state: DialogsPageType
}

export type profilePropsType = {
    state: ProfilePageType
}

export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you?', likesCount: 15},
            {id: 1, message: 'It is my first post', likesCount: 11}
        ]
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
}