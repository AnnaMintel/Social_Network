

export type ChatMessageType = {
    message: string,
    photo: string,
    iserId: number,
    userName: string
}

type SubscriberType = (messages: ChatMessageType[]) => void


let subscribers = [] as SubscriberType[]

let webSocket: WebSocket | null = null;

const closeHandler = () => {
    console.log('CLOSE WS');
    setTimeout(createWsChannel, 3000)
}

const onMessageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers.forEach(s => s(newMessages))
}

function createWsChannel() {
    webSocket?.removeEventListener('close', closeHandler)
    webSocket?.close();
    webSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    webSocket.addEventListener('close', closeHandler)
    webSocket.addEventListener('message', onMessageHandler)
}

export const chatAPI = {
    start() {
        createWsChannel();
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage(message: string) {
        webSocket?.send(message)
    },
    stop() {
        subscribers = [];
        webSocket?.removeEventListener('close', closeHandler)
        webSocket?.removeEventListener('message', onMessageHandler)
        webSocket?.close();
    }
}

