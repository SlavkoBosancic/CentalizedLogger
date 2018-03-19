using Autofac;
using Autofac.Extensions.DependencyInjection;
using LogViewer.Core.Interface;
using LogViewer.Infrastructure.Application;
using LogViewer.Infrastructure.Application.Interface;
using LogViewer.Persistence.Interface;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Reflection;

namespace LogViewer.Infrastructure.Dependancy
{
    public class AutofacContainerBuilder
    {
        public static IServiceProvider Build(IServiceCollection preIncludedServices = null)
        {
            var containerBuilder = new ContainerBuilder();

            if (preIncludedServices != null)
                containerBuilder.Populate(preIncludedServices);

            // Persistance Assembly Types
            var persistanceAssembly = Assembly.GetAssembly(typeof(ILogReader));
            containerBuilder.RegisterAssemblyTypes(persistanceAssembly).AsImplementedInterfaces();

            // Core Assembly Types
            var coreAssembly = Assembly.GetAssembly(typeof(ILogManager));
            containerBuilder.RegisterAssemblyTypes(coreAssembly).AsImplementedInterfaces();

            //ApplicationManager
            containerBuilder.RegisterType<ApplicationManager>().As<IApplicationManager>();

            var container = containerBuilder.Build();
            var provider = new AutofacServiceProvider(container);

            return provider;
        }
    }
}
