using LogViewer.Core.Interface;
using LogViewer.Models;
using LogViewer.Persistence.Interface;
using System;
using System.Collections.Generic;

namespace LogViewer.Core
{
    public class LogManager : ILogManager
    {
        private readonly ILogReader _logReader;
        private readonly ILogEngine _logEngine;

        public LogManager(ILogReader logReader, ILogEngine logEngine)
        {
            _logReader = logReader ?? throw new ArgumentNullException(nameof(logReader));
            _logEngine = logEngine ?? throw new ArgumentNullException(nameof(logEngine));
        }

        public bool AddToEngine(Log log)
        {
            return _logEngine.EngineStarted &&
                   _logEngine.Enqueue(log);
        }

        public IEnumerable<Log> GetLatestPaged(int take, int skip)
        {
            return _logReader.ReadLatest(take, skip, out int count);
        }

        public Log GetSingle(Guid id)
        {
            return _logReader.Read(id);
        }
    }
}
