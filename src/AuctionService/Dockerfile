FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
EXPOSE 80
EXPOSE 7777

# Copy csproj and restore as distinct layers
# COPY LiteratureAuctions.sln ./
COPY src/AuctionService/AuctionService.csproj src/AuctionService/AuctionService.csproj
COPY src/Contracts/Contracts.csproj src/Contracts/Contracts.csproj

# Restore package deps
RUN dotnet restore src/AuctionService/AuctionService.csproj

# Copy everything else and build
COPY . .
WORKDIR /src/src/AuctionService
RUN dotnet publish -c Release -o /app/publish

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "AuctionService.dll"]