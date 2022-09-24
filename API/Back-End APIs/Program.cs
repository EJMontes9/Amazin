using APIClientes.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);

Console.WriteLine("***** Configurando Servicios *******");
// Add services to the container.

//IMPORTANTE AGREGARLO PARA USAR LA AUTENTICACION DE JWT --> SE DEBE
//INSTALAR EL PAQUETE RESPECTIVO
//y SWAGER FILTER
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
       {
          options.TokenValidationParameters = new TokenValidationParameters
          {
              ValidateIssuerSigningKey = true,
              IssuerSigningKey = new SymmetricSecurityKey(
                  System.Text.Encoding.ASCII.GetBytes(
                      builder.Configuration.GetSection("AppSettings:Token").Value)),
              ValidateIssuer = false,
              ValidateAudience = false,
          };
       });

builder.Services.AddSwaggerGen(c =>
{
    c.OperationFilter<SecurityRequirementsOperationFilter>();
    c.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Autorizacion: Usar Bearer. Ejemplo \"bearer {token}\"",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"

    });
});

builder.Services.AddCors();

//*************************************

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options => 
                           options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

Console.WriteLine("***** Finalizado configuración de servicios *******");

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//IMPORTANTE AGREGARLO ANTES DE LA AUTENTICACIÓN
app.UseAuthentication();

app.UseAuthorization();

//PARA ACCESO DE CUALQUIER FRONT-END
app.UseCors(x => x.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader());


app.MapControllers();

var scope = app.Services.CreateScope();
await Migrations(scope.ServiceProvider);

app.Run();


async Task Migrations(IServiceProvider serviceProvider)
{
    var context = serviceProvider.GetService<ApplicationDbContext>();
    var conn_appdb = context.Database.GetDbConnection();

    Console.WriteLine($"Conexion actual AppDB: {conn_appdb.ToString()} {Environment.NewLine} {conn_appdb.ConnectionString}" );
    Console.WriteLine("********** Probando acceso ******************");

    try
    {
        Console.WriteLine("Base de datos disponible: "+ context.Database.CanConnect()); ;
    }
    catch (Exception ex)
    {
        Console.Write($"Error al conectar: { ex.Message}");
    }
}