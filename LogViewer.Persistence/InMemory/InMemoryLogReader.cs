using LogViewer.Models;
using LogViewer.Persistence.Interface;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;

namespace LogViewer.Persistence.InMemory
{
    public class InMemoryLogReader : ILogReader
    {
        private readonly ConcurrentDictionary<Guid, Log> _logList;

        public InMemoryLogReader()
        {
            _logList = InMemoryStore.GetStore;
        }

        public Log Read(Guid id)
        {
            Log result = null;
            _logList.TryGetValue(id, out result);

            return result;
        }

        public IEnumerable<Log> ReadLatest(int take, int offset, out int total)
        {
            var result = new List<Log>();
            total = _logList.Count;

            var pagedList = _logList.Values
                                    .OrderByDescending(x => x.CreateDate)
                                    .Skip(offset)
                                    .Take(take);

            result.AddRange(pagedList);
            return result;
        }
    }
}
