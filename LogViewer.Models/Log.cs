using System;
using System.Collections.Generic;
using System.Text;

namespace LogViewer.Models
{
    public class Log
    {
        public Guid Id { get; set; }
        public DateTime CreateDate { get; set; }
        public string LogSource { get; set; }
        public LogLevel LogLevel { get; set; }
        public string Description { get; set; }
    }
}
