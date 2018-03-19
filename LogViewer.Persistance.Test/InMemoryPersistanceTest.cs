using LogViewer.Persistence.InMemory;
using LogViewer.Persistence.Interface;
using System;

namespace LogViewer.Persistance.Test
{
    public class InMemoryPersistanceTest : BasePersistanceTest
    {
        public override ILogWriter LogWriter { get { return new InMemoryLogWriter(); } }
        public override ILogReader LogReader { get { return new InMemoryLogReader(); } }
    }
}
