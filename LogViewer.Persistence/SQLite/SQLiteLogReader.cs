using LogViewer.Models;
using LogViewer.Persistence.Interface;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.SQLite;

namespace LogViewer.Persistence.SQLite
{
    public class SQLiteLogReader : ILogReader
    {

        //        string connectionString =
        //            "Data Source=(local);Initial Catalog=Northwind;"
        //            + "Integrated Security=true";

        //        // Provide the query string with a parameter placeholder.
        //        string queryString =
        //            "SELECT ProductID, UnitPrice, ProductName from dbo.products "
        //                + "WHERE UnitPrice > @pricePoint "
        //                + "ORDER BY UnitPrice DESC;";

        //        // Specify the parameter value.
        //        int paramValue = 5;

        //        // Create and open the connection in a using block. This
        //        // ensures that all resources will be closed and disposed
        //        // when the code exits.
        //        using (SqlConnection connection =
        //            new SqlConnection(connectionString))
        //        {
        //            // Create the Command and Parameter objects.
        //            SqlCommand command = new SqlCommand(queryString, connection);
        //    command.Parameters.AddWithValue("@pricePoint", paramValue);

        //            // Open the connection in a try/catch block. 
        //            // Create and execute the DataReader, writing the result
        //            // set to the console window.
        //            try
        //            {
        //                connection.Open();
        //                SqlDataReader reader = command.ExecuteReader();
        //                while (reader.Read())
        //                {
        //                    Console.WriteLine("\t{0}\t{1}\t{2}",
        //                        reader[0], reader[1], reader[2]);
        //                }
        //reader.Close();
        //            }
        //            catch (Exception ex)
        //            {
        //                Console.WriteLine(ex.Message);
        //            }
        //            Console.ReadLine();
        //        }

        private readonly string _connectionString;

        public SQLiteLogReader(string connectionString)
        {
            if (string.IsNullOrEmpty(connectionString))
                throw new ArgumentNullException(nameof(connectionString));

            _connectionString = connectionString;
        }

        public Log Read(Guid id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Log> ReadLatest(int take, int offset, out int total)
        {
            throw new NotImplementedException();
        }
    }
}
