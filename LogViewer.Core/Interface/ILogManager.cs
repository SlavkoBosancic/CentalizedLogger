using LogViewer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LogViewer.Core.Interface
{
    public interface ILogManager
    {
        Log GetSingle(Guid id);
        IEnumerable<Log> GetLatestPaged(int take, int skip);
        bool AddToEngine(Log log);
    }
}
