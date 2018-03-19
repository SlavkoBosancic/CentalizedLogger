using LogViewer.Core.Interface;
using LogViewer.Infrastructure.Application.Interface;
using LogViewer.Persistence.InMemory;
using LogViewer.Persistence.Interface;
using LogViewer.Persistence.SQLite;
using System;
using System.Collections.Generic;
using System.Text;

namespace LogViewer.Infrastructure.Application
{
    public class ApplicationManager : IApplicationManager
    {
        private readonly ILogEngine _logEngine;
        private readonly IEnumerable<ILogWriter> _registeredLogWriters;

        public ApplicationManager(ILogEngine logEngine, IEnumerable<ILogWriter> registeredLogWriters)
        {
            _logEngine = logEngine ?? throw new ArgumentNullException(nameof(logEngine));
            _registeredLogWriters = registeredLogWriters ?? throw new ArgumentNullException(nameof(registeredLogWriters));
        }

        public bool StartLogEngine()
        {
            var result = false;

            // Define which log writers to use in the application (ILogWriter interface)
            // More that one can be implemented, and more than one can be used
            List<ILogWriter> logWriters = new List<ILogWriter>();

            foreach(var logWriter in _registeredLogWriters)
            {
                if (logWriter is InMemoryLogWriter)
                    logWriters.Add(logWriter);
            }

            if (!_logEngine.EngineStarted)
                result = _logEngine.StartEngine(logWriters.ToArray());

            return result;
        }
    }
}
