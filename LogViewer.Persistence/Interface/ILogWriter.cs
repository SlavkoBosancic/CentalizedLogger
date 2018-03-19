using LogViewer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LogViewer.Persistence.Interface
{
    public interface ILogWriter
    {
        /// <summary>
        /// Add a single Log to store.
        /// </summary>
        /// <param name="log">Log object to add.</param>
        /// <returns>Boolean if writing success or failed (duplicate ID given).</returns>
        bool Write(Log log);
    }
}
