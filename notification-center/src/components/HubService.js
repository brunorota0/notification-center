import { HubConnectionBuilder } from '@microsoft/signalr'

export const getHubConnection = () => (
    new HubConnectionBuilder()
        .withUrl('https://localhost:5001/hubs/notificationCenter')
        .withAutomaticReconnect()
        .build()
)
