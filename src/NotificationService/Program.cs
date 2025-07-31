using MassTransit;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddMassTransit(x => 
{


    x.SetEndpointNameFormatter(new KebabCaseEndpointNameFormatter("nt", false));

    x.UsingRabbitMq((context, cfg) => 
    {
        cfg.Host(builder.Configuration["RabbitMq:Host"], "/", h => 
        {
            h.Username(builder.Configuration.GetValue("RabbitMq:Username", "guest")); 
            h.Password(builder.Configuration.GetValue("RabbitMq:Password", "guest"));
        });
        cfg.ConfigureEndpoints(context);
    });
});

var app = builder.Build();

app.Run();
