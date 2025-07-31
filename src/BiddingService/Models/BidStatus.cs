namespace BiddingService.Models;

public enum BidStatus
{
    // The bid was accepted, and is the current highest bid
    Accepted,
    // The bid was accepted, but is below the reserve.
    AcceptedBelowReserve,
    // The bid was not at least the current bid plus the increment.
    TooLow,
    // The auction has finished
    Finished
}