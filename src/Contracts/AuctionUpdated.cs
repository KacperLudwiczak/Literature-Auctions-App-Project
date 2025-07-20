namespace Contracts;

public class AuctionUpdated
{
    public required string Id { get; set; }
    public string Name { get; set; }
    public int Year { get; set; }
    public string Genre { get; set; }
}