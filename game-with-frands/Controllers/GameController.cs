using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace game_with_frands.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {
        private static List<IGame> ActiveGames = new List<IGame>();

        private readonly ILogger<GameController> _logger;

        public GameController(ILogger<GameController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IEnumerable<IGame> Post(IEnumerable<IGame> games)
        {
            GameController.ActiveGames.AddRange(games);
            return GameController.ActiveGames;
        }

        [HttpGet]
        public IEnumerable<IGame> Get()
        {
            return GameController.ActiveGames;
        }
    }
}
