using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Host;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using NotificationTrigger.Models;

namespace NotificationTrigger
{
    public static class SendReminder
    {
        private static HttpClient httpClient = new HttpClient();

        [FunctionName("SendReminder")]
        public static async Task Run([TimerTrigger("*/10 * * * * *")] TimerInfo myTimer, ILogger log)
        {
            log.LogInformation($"C# Timer trigger function executed at: {DateTime.Now}");

            Notification notification = new Notification()
            {
                Title = "Send Week Work - REMINDER",
                Message = "Remember to send the week work summary at the end of the day.",
                Link = "https://www.google.com"
            };

            var jsonObj = JsonConvert.SerializeObject(notification);

            var resp = await httpClient.PostAsync("https://localhost:5001/notification/", new StringContent(jsonObj, Encoding.UTF8, "application/json"));

        }
    }
}
