using System.ComponentModel.DataAnnotations.Schema;

namespace AuctionService.Entities;

[Table("Items")]
public class Item
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public required int Year { get; set; }
    public required string Genre { get; set; }
    public required string ImageUrl { get; set; }

    // navigation properties
    public Auction Auction { get; set; } = null!;
    public Guid AuctionId { get; set; }
}
