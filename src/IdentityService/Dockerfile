FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
EXPOSE 80

# Copy csproj and restore as distinct layers
COPY LiteratureAuctions.sln LiteratureAuctions.sln
COPY src/IdentityService/IdentityService.csproj src/IdentityService/IdentityService.csproj

# Restore package deps
RUN dotnet restore src/IdentityService/IdentityService.csproj

# Copy everything else and build
COPY . .
WORKDIR /src/src/IdentityService
RUN dotnet publish -c Release -o /app/publish

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "IdentityService.dll"]