using NotificationSystem.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotificationSystem.Api.Hubs.Clients
{
    public interface INotificationCenterClient
    {
        Task RecieveNotification(Notification notification);
    }
}
