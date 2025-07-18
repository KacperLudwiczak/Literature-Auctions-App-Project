using AuctionService.Entities;
using Microsoft.EntityFrameworkCore;

namespace AuctionService.Data;

public class DbInitializer
{
    public static void InitDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        SeedData(scope.ServiceProvider.GetRequiredService<AuctionDbContext>());
    }

    private static void SeedData(AuctionDbContext context) 
    {
        context.Database.Migrate();
    
        if (context.Auctions.Any())
        {
            Console.WriteLine("Database has been seeded.");
            return; // DB has been seeded
        }

        var auctions = new List<Auction>()
        {
            // 1
            new() {
                Id = Guid.Parse("afbee524-5972-4075-8800-7d1f9d7b0a0c"),
                Status = Status.Live,
                ReservePrice = 3000,
                Seller = "bob",
                AuctionEnd = DateTime.UtcNow.AddDays(10),
                Item = new Item
                {
                    Name = "Necropolis by Basil Copper",
                    Genre = "Horror",
                    Year = 1980,
                    ImageUrl = "/images/necropolis_basil_copper.jpg"
                }
            },
            // 2
            new() {
                Id = Guid.Parse("c8c3ec17-01bf-49db-82aa-1ef80b833a9f"),
                Status = Status.Live,
                ReservePrice = 1000,
                Seller = "alice",
                AuctionEnd = DateTime.UtcNow.AddDays(60),
                Item = new Item
                {
                    Name = "Madman's Island by Ion L. Idriess",
                    Genre = "Nonfiction",
                    Year = 1927,
                    ImageUrl = "/images/madmans_island_ion_idriess.jpg"
                }
            },
            // 3
            new() {
                Id = Guid.Parse("bbab4d5a-8565-48b1-9450-5ac2a5c4a654"),
                Status = Status.Live,
                Seller = "bob",
                AuctionEnd = DateTime.UtcNow.AddDays(4),
                Item = new Item
                {
                    Name = "Hansom Cab and the Pigeons by L.A.G. Strong",
                    Genre = "Historical",
                    Year = 1935,
                    ImageUrl = "/images/hansom_cab_and_pigeons_lag_strong.webp"
                }
            },
            // 4 
            new() {
                Id = Guid.Parse("155225c1-4448-4066-9886-6786536e05ea"),
                Status = Status.ReserveNotMet,
                ReservePrice = 500,
                Seller = "tom",
                AuctionEnd = DateTime.UtcNow.AddDays(-10),
                Item = new Item
                {
                    Name = "Handmaid's Tale by Margaret Atwood",
                    Genre = "Dystopia",
                    Year = 1985,
                    ImageUrl = "/images/handmaid_tale_margaret_atwood.jpg"
                }
            },
            // 5
            new() {
                Id = Guid.Parse("466e4744-4dc5-4987-aae0-b621acfc5e39"),
                Status = Status.Live,
                ReservePrice = 2000,
                Seller = "alice",
                AuctionEnd = DateTime.UtcNow.AddDays(30),
                Item = new Item
                {
                    Name = "Guy Mannering by Walter Scott",
                    Genre = "Historical",
                    Year = 1815,
                    ImageUrl = "/images/guy_mannering_walter_scott.webp"
                }
            },
            // 6 
            new() {
                Id = Guid.Parse("dc1e4071-d19d-459b-b848-b5c3cd3d151f"),
                Status = Status.Live,
                ReservePrice = 1200,
                Seller = "bob",
                AuctionEnd = DateTime.UtcNow.AddDays(45),
                Item = new Item
                {
                    Name = "Shepherd's Calendar by John Clare",
                    Genre = "Poetry",
                    Year = 1824,
                    ImageUrl = "/images/shepherd_calendar_john_clare.jpg"
                }
            },
            // 7
            new() {
                Id = Guid.Parse("47111973-d176-4feb-848d-0ea22641c31a"),
                Status = Status.Live,
                ReservePrice = 1500,
                Seller = "alice",
                AuctionEnd = DateTime.UtcNow.AddDays(13),
                Item = new Item
                {
                    Name = "Emma by Jane Austen",
                    Genre = "Romance",
                    Year = 1815,
                    ImageUrl = "/images/emma_jane_austen.webp"
                }
            },
            // 8 
            new() {
                Id = Guid.Parse("6a5011a1-fe1f-47df-9a32-b5346b289391"),
                Status = Status.Live,
                Seller = "bob",
                AuctionEnd = DateTime.UtcNow.AddDays(19),
                Item = new Item
                {
                    Name = "Sense and Sensibility by Jane Austen",
                    Genre = "Romance",
                    Year = 1811,
                    ImageUrl = "/images/sense_and_sensibility_jane_austen.jpg"
                }
            },
            // 9
            new() {
                Id = Guid.Parse("40490065-dac7-46b6-acc4-df507e0d6570"),
                Status = Status.Live,
                ReservePrice = 1800,
                Seller = "tom",
                AuctionEnd = DateTime.UtcNow.AddDays(20),
                Item = new Item
                {
                    Name = "Fair Maid of Perth by Walter Scott",
                    Genre = "Historical",
                    Year = 1828,
                    ImageUrl = "/images/fair_maid_of_perth_walter_scott.jpg"
                }
            },
            // 10
            new() {
                Id = Guid.Parse("3659ac24-29dd-407a-81f5-ecfe6f924b9b"),
                Status = Status.Live,
                ReservePrice = 300,
                Seller = "bob",
                AuctionEnd = DateTime.UtcNow.AddDays(48),
                Item = new Item
                {
                    Name = "Grandfather Tales by Richard Thomas Chase",
                    Genre = "Folklore",
                    Year = 1948,
                    ImageUrl = "/images/grandfather_tales_by_richard_thomas_chase.jpeg"
                }
            }
        };

        context.Auctions.AddRange(auctions);

        context.SaveChanges();
    }
}