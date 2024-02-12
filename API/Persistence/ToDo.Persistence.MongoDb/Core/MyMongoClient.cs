using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace ToDo.Persistence.MongoDb.Core;

internal class MyMongoClient(IConfiguration configuration) : MongoClient(configuration.GetConnectionString("MongoDb"));