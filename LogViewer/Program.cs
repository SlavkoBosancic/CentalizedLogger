using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using LogViewer.Infrastructure.Application.Interface;
using LogViewer.Infrastructure.Dependancy;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace LogViewer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            if (!ApplicationInitialization())
            {
                Console.WriteLine("Could not initialize Application. Press any key to quit...");
                Console.ReadKey();

                return;
            }

            var webHost = WebHost.CreateDefaultBuilder(args)
                                 .UseKestrel()
                                 .UseStartup<Startup>()
                                 .Build();

            webHost.Run();
        }

        public static bool ApplicationInitialization()
        {
            var result = false;

            var dependancyContainer = AutofacContainerBuilder.Build();
            var applicationManager = dependancyContainer.GetService(typeof(IApplicationManager)) as IApplicationManager;

            if(applicationManager != null)
            {
                result = applicationManager.StartLogEngine();
            }

            return result;
        }
    }
}
