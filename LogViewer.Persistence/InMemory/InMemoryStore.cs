using LogViewer.Models;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;

namespace LogViewer.Persistence.InMemory
{
    class InMemoryStore
    {
        private static readonly ConcurrentDictionary<Guid, Log> _store = new ConcurrentDictionary<Guid, Log>();
        public static ConcurrentDictionary<Guid, Log> GetStore => _store;
    }
}
