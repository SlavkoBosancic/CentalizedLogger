using LogViewer.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace LogViewer.Persistence.Interface
{
    public interface ILogReader
    {
        /// <summary>
        /// Get details of a single Log entry.
        /// </summary>
        /// <param name="id">guid id of the Log</param>
        /// <returns>Log object or null if it does not exist</returns>
        Log Read(Guid id);

        /// <summary>
        /// Get a list of latest Logs (CreateDate descending).
        /// Description property not included (use get single for descritpion).
        /// </summary>
        /// <param name="take">Number of logs to retrieve</param>
        /// <param name="offset">Number of logs to skip first</param>
        /// <returns>List of logs or an empty list if params are out of range.</returns>
        IEnumerable<Log> ReadLatest(int take, int offset, out int total);
    }
}
