using LogViewer.Models;
using LogViewer.Persistence.Interface;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;

namespace LogViewer.Persistence.InMemory
{
    public class InMemoryLogWriter : ILogWriter
    {
        private readonly ConcurrentDictionary<Guid, Log> _logList;

        public InMemoryLogWriter()
        {
            _logList = InMemoryStore.GetStore;
        }

        public bool Write(Log log)
        {
            var result = false;

            if (log != null)
            {
                if (!_logList.ContainsKey(log.Id))
                {
                    var newLog = log.Clone() as Log;

                    if (_logList.TryAdd(newLog.Id, newLog))
                    {
                        result = true;
                    }
                }
            }

            return result;
        }
    }
}
