using LogViewer.Models;
using LogViewer.Persistence.Interface;
using System;

namespace LogViewer.Persistence.SQLite
{
    public class SQLiteLogWriter : ILogWriter
    {
        public bool Write(Log log)
        {
            throw new NotImplementedException();
        }
    }
}
