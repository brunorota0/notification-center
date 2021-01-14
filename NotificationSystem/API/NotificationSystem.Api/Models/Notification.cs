using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotificationSystem.Api.Models
{
    public class Notification
    {
        public string Title { get; set; }

        public string Message { get; set; }

        public string Link { get; set; }

        public DateTime DateTime { get; set; }

    }
}
