using Microsoft.AspNetCore.SignalR;
using NotificationSystem.Api.Hubs.Clients;
using NotificationSystem.Api.Models;
using System;
using System.Threading.Tasks;

namespace NotificationSystem.Api.Hubs
{
    public class NotificationHub : Hub<INotificationCenterClient>
    {
        public async Task SendNotification(Notification notification)
        {
            notification.DateTime = DateTime.Now;
            await Clients.All.RecieveNotification(notification);
        }
    }
}
