
using System.Threading.Tasks;
using NotificationSystem.Api.Hubs;
using NotificationSystem.Api.Hubs.Clients;
using NotificationSystem.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace NotificationSystem.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NotificationController : ControllerBase
    {
        private readonly IHubContext<NotificationHub, INotificationCenterClient> _notificationHub;

        public NotificationController(IHubContext<NotificationHub, INotificationCenterClient> notificationHub)
        {
            _notificationHub = notificationHub;
        }

        [HttpPost]
        public async Task Post(Notification notification)
        {
            await _notificationHub.Clients.All.RecieveNotification(notification);
        }
    }
}