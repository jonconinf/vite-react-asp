using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using webapi.Models;
using webapi.Data;
using Microsoft.EntityFrameworkCore;

namespace webapi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _dbContext;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Index(string topic = "All", string sortBy = "newest")
        {
            // Get all articles from the database
            // SQL query to retrieve data from database
            string sql = "SELECT title, summary, link, published, topic FROM Articles";

            // Create a list to hold Article objects
            List<Article> articles = await _dbContext.Articles.FromSqlRaw(sql).ToListAsync();

            if (!string.IsNullOrEmpty(topic) && topic != "All")
            {
                articles = articles.Where(a => a.Topic != null && a.Topic.Contains(topic)).ToList();
            }

            switch (sortBy)
            {
                case "newest":
                    articles = articles.OrderByDescending(a => a.Published).ToList();
                    break;
                case "oldest":
                    articles = articles.OrderBy(a => a.Published).ToList();
                    break;
            }

            return Ok(articles); // Changed from View()
        }
    }
}
