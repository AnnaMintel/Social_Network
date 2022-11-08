import { MessageType } from './../../components/Dialogs/Message/Message';
import { DialogItemType } from './../../components/Dialogs/DialogItem/DialogItem';
import { PostType } from './../../components/Profile/MyPosts/Post/Post';

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: any,
    status: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageType>
}
export type UserPageType = {
    name: string,
    id: number,
    uniqueUrlName: null | string,
    photos: PhotoType,
    status: null | string,
    followed: boolean
}
export type PhotoType = {
    small: null | string | undefined,
    large: null | string | undefined
}
