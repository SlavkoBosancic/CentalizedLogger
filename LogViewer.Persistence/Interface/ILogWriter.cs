using LogViewer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LogViewer.Persistence.Interface
{
    public interface ILogWriter
    {
        bool Write(Log log);
    }
}
