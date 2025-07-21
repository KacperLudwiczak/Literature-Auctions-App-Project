using AuctionService.Data;
using AuctionService.DTOs;
using AuctionService.Entities;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Contracts;
using MassTransit;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AuctionService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuctionsController(AuctionDbContext context, IMapper mapper, IPublishEndpoint publishEndpoint) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<List<AuctionDto>>> GetAuctions(string date)
    {
        var query = context.Auctions.OrderBy(x => x.Item.Name).AsQueryable();

        if (!string.IsNullOrEmpty(date))
        {
            query = query.Where(x => x.UpdatedAt.CompareTo(DateTime.Parse(date).ToUniversalTime()) > 0);
        }

        return await query.ProjectTo<AuctionDto>(mapper.ConfigurationProvider)
            .ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<AuctionDto>> GetAuction(Guid id)
    {
        var auction = await context.Auctions
            .Include(x => x.Item)
            .FirstOrDefaultAsync(x => x.Id == id);

        if (auction == null)
        {
            return NotFound();
        }

        return mapper.Map<AuctionDto>(auction);
    }

    [Authorize]
    [HttpPost]
    public async Task<ActionResult<AuctionDto>> CreateAuction([FromBody] CreateAuctionDto auctionDto)
    {
        var auction = mapper.Map<Auction>(auctionDto);

        auction.Seller = "test";
        auction.Seller = User.Identity?.Name ?? throw new InvalidOperationException("User not found");

        context.Auctions.Add(auction);

        var newAuction = mapper.Map<AuctionDto>(auction);

        await publishEndpoint.Publish(mapper.Map<AuctionCreated>(newAuction));

        var result = await context.SaveChangesAsync() > 0;

        if (!result) return BadRequest("Failed to create auction");

        return CreatedAtAction(nameof(GetAuction), new { id = auction.Id }, newAuction);
    }

    [Authorize]
    [HttpPut("{id}")]
    public async Task<ActionResult<AuctionDto>> UpdateAuction(Guid id, [FromBody] UpdateAuctionDto auctionDto)
    {
        var auction = await context.Auctions
            .Include(x => x.Item)
            .FirstOrDefaultAsync(x => x.Id == id);

        if (auction == null)
        {
            return NotFound();
        }

        if (auction.Seller != User.Identity?.Name) return Forbid();

        auction.Item.Name = auctionDto.Name ?? auction.Item.Name;
        auction.Item.Genre = auctionDto.Genre ?? auction.Item.Genre;
        auction.Item.Year = auctionDto.Year;
        
        await publishEndpoint.Publish(mapper.Map<AuctionUpdated>(auction));

        var result = await context.SaveChangesAsync() > 0;

        if (!result)
        {
            return BadRequest("Failed to update auction");
        }

        return Ok(mapper.Map<AuctionDto>(auction));
    }

    [Authorize]
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteAuction(Guid id) 
    {
        var auction = await context.Auctions.FindAsync(id);
        if (auction == null)
        {
            return NotFound();
        }

        if (auction.Seller != User.Identity?.Name) return Forbid();
        context.Auctions.Remove(auction);

        await publishEndpoint.Publish<AuctionDeleted>(new {Id = auction.Id.ToString()});

        var result = await context.SaveChangesAsync() > 0;

        if (!result)
        {
            return BadRequest("Failed to delete auction");
        }
        
        return Ok();
    } 
}