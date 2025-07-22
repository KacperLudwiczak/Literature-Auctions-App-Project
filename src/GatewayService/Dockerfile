FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
EXPOSE 80

# Copy csproj and restore as distinct layers
COPY LiteratureAuctions.sln LiteratureAuctions.sln
COPY src/GatewayService/GatewayService.csproj src/GatewayService/GatewayService.csproj

# Restore package deps
RUN dotnet restore src/GatewayService/GatewayService.csproj

# Copy everything else and build
COPY . .
WORKDIR /src/src/GatewayService
RUN dotnet publish -c Release -o /app/publish

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "GatewayService.dll"]