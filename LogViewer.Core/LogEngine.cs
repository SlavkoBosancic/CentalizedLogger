using LogViewer.Core.Interface;
using LogViewer.Models;
using LogViewer.Persistence.Interface;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;

namespace LogViewer.Core
{
    public class LogEngine : ILogEngine
    {
        private static bool _engineStarted = false;
        private static readonly object _lockObj = new object();

        private static readonly Thread _engine = new Thread(LogWriter);
        private static readonly List<ILogWriter> _logWriters = new List<ILogWriter>();

        private static readonly ConcurrentQueue<Log> _queue = new ConcurrentQueue<Log>();

        public bool EngineStarted => _engineStarted;

        public void StartEngine(params ILogWriter[] logWriters)
        {
            if (!_engineStarted)
            {
                lock (_lockObj)
                {
                    if (!_engineStarted)
                    {
                        _logWriters.AddRange(logWriters);

                        _engine.IsBackground = true;
                        _engine.Start();

                        _engineStarted = true;
                    }
                }
            }
        }

        public bool Enqueue(Log log)
        {
            var result = false;

            if(log != null)
            {
                _queue.Enqueue(log);
                result = true;
            }

            return result;
        }

        private static void LogWriter()
        {
            while (true)
            {
                if (!_queue.IsEmpty)
                {
                    if (_queue.TryDequeue(out Log log))
                    {
                        foreach(var writer in _logWriters)
                        {
                            if (!writer.Write(log))
                            {
                                throw new Exception(string.Format("Could not write log object ID[{0}] to logWriter[{1}].", log.Id, writer.GetType().Name));
                            }
                        }
                    }
                }
            }
        }
    }
}
