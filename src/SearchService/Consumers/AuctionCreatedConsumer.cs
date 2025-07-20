using AutoMapper;
using Contracts;
using MassTransit;
using MongoDB.Entities;
using SearchService.Models;

namespace SearchService.Consumers;

public class AuctionCreatedConsumer(IMapper mapper) : IConsumer<AuctionCreated>
{
    public async Task Consume(ConsumeContext<AuctionCreated> context)
    {
        Console.WriteLine($"AuctionCreatedConsumer: {context.Message.Id}");

        var item = mapper.Map<Item>(context.Message);

        if (item.Name == "Foo") throw new ArgumentException("Model cannot be Foo");

        await item.SaveAsync();
    }
}