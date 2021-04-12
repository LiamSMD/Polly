using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPICore.Controller;
using WebAPICore.Repository;
using WebAPICore.Service;

namespace WebAPICore
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddScoped<IVoteRepository, VoteRepository>();
            services.AddScoped<IVoteService, VoteService>();

            services.AddHealthChecks();
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAngularDevClient",
                  builder =>
                  {
                      builder
                    .WithOrigins("http://localhost:4200")
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                  });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseCors("AllowAngularDevClient");
            app.UseEndpoints(endpoints =>
            {
            endpoints.MapControllerRoute(
                name: "vote",
                pattern: "{controller=Vote}/{action=GetAll}");

            endpoints.MapControllerRoute(
                name: "GetVotesByID",
                pattern: "{controller=Vote}/{action=GetVoteById}/{id?}");

            endpoints.MapControllerRoute(
                name: "IncreaseVotes",
                pattern: "{controller=Vote}/{action=IncreaseVotes}/{id?}/{votesYes?}/{votesNo?}");

            });
        }
    }
}
