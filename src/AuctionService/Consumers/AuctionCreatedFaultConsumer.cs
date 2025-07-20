using Contracts;
using MassTransit;

namespace AuctionService.Consumers;

public class AuctionCreatedFaultConsumer : IConsumer<Fault<AuctionCreated>>
{
    public async Task Consume(ConsumeContext<Fault<AuctionCreated>> context)
    {
        Console.WriteLine("--> Consuming faulty creation");

        var exception = context.Message.Exceptions.First();

        if (exception.ExceptionType == "System.ArgumentException")
        {
            context.Message.Message.Name = "FooBar";
            await context.Publish(context.Message.Message);
        }
        else
        {
            Console.WriteLine($"--> Exception: Update error dashboard somewhere");
        }
    }
}