import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ChatMessageType } from '../../api/chat-api';
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chatReducer';


const ChatPage: React.FC = () => {
    return <div>
        <Chat />
    </div>
}

const Chat: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }

    }, [])

    return <div>
        <Messages />
        <AddMessageForm />
    </div>
}

const Messages: React.FC<{}> = ({ }) => {
    //@ts-ignore
    const messages = useSelector(state => state.chat.messages);

    return <div style={{ height: '400px', overflowY: 'auto' }}>
        {messages.map((m:any, index:any) => <Message key={index} message={m} />)}
    </div>
}

const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {

    return <div>
        <img src={message.photo} style={{ width: '30px' }} /> <b>{message.userName}</b>
        <br />
        <b>{message.message}</b>
        <hr />
    </div>
}

const AddMessageForm: React.FC<{}> = ({ }) => {

    const [message, setMessage] = useState('');
    const [readyStatus, setreadyStatus] = useState<'pending' | 'ready'>('pending');

    const dispatch = useDispatch();

    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button disabled={false} onClick={sendMessageHandler}>send</button>
        </div>
    </div >
}

export default ChatPage; 