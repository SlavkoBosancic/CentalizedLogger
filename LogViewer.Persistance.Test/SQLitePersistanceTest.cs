using LogViewer.Persistence.Interface;
using LogViewer.Persistence.SQLite;
using System;

namespace LogViewer.Persistance.Test
{
    public class SQLitePersistanceTest : BasePersistanceTest
    {
        public override ILogWriter LogWriter => throw new NotImplementedException();
        public override ILogReader LogReader => new SQLiteLogReader(string.Empty);
    }
}
