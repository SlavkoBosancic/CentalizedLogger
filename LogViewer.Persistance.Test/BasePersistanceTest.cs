using LogViewer.Models;
using LogViewer.Persistence.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace LogViewer.Persistance.Test
{
    public abstract class BasePersistanceTest
    {
        public abstract ILogWriter LogWriter { get; }
        public abstract ILogReader LogReader { get; }

        private Log CreateNewLog()
        {
            return new Log
            {
                Id = Guid.NewGuid(),
                CreateDate = DateTime.UtcNow,
                LogLevel = LogLevel.INFO,
                Description = string.Empty,
                LogSource = string.Empty
            };
        }

        [Fact]
        public void AddingSingleLog()
        {
            // Arrange
            var log = CreateNewLog();

            // Act
            var result = LogWriter.Write(log);
            var addedLog = LogReader.Read(log.Id);

            // Assert
            Assert.True(result);
            Assert.NotNull(addedLog);
            Assert.NotSame(log, addedLog);
        }

        [Fact]
        public void ReadingSingleLog()
        {
            // Arrange
            var log = CreateNewLog();

            // Act
            var result = LogWriter.Write(log);

            var addedLog = LogReader.Read(log.Id);
            var nullLog = LogReader.Read(Guid.Empty);

            // Assert
            Assert.True(result);
            Assert.Equal<Guid>(addedLog.Id, log.Id);
            Assert.NotSame(log, addedLog);
            Assert.Null(nullLog);
        }
    }
}
