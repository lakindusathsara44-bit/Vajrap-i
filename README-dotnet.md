# Vajrapani .NET / Blazor WebAssembly demo

This is a standalone Blazor WebAssembly application using .NET 10. It runs C# in the visitor's browser and can be hosted as static files on GitHub Pages.

## Demo

After the GitHub Actions Pages workflow completes, open:

- `dotnet-demo.html` (redirect page)
- or `dotnet-demo/` (published Blazor app)

The sample includes a small interactive counter implemented in C#.

## Build locally

Install the .NET 10 SDK, then run:

```sh
dotnet publish dotnet/Vajrapani.Blazor.csproj -c Release -o dotnet-publish
```

The publish output is static website content. The GitHub Actions workflow copies it into the `dotnet-demo/` directory in the Pages artifact.

## GitHub Pages path

The app is configured for this repository's project-site path:

```text
/Vajrap-i/dotnet-demo/
```

If the repository or deployment path changes, update the `base` element in `dotnet/wwwroot/index.html`.

## Important limitations

- This is Blazor WebAssembly, not an ASP.NET Core server.
- C# runs client-side; users can inspect downloaded application code.
- Never put API secrets, private keys, database passwords or privileged credentials in this app.
- Database access, trusted authentication and protected server operations need a backend/API hosted separately.
