using System;
using System.Collections.Generic;
using System.Text;

namespace LogViewer.Models
{
    public class Log : ICloneable
    {
        public Guid Id { get; set; }
        public DateTime CreateDate { get; set; }
        public string LogSource { get; set; }
        public LogLevel LogLevel { get; set; }
        public string Description { get; set; }

        public object Clone()
        {
            return new Log
            {
                Id = this.Id,
                CreateDate = this.CreateDate,
                LogSource = this.LogSource.Clone() as string,
                LogLevel = this.LogLevel,
                Description = this.Description.Clone() as string
            };
        }
    }
}
