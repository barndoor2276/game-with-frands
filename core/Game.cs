using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace core
{
    public class Game : IGame
    {
        [Required]
        [StringLength(100)]
        public string Name
        {
            get;
            set;
        }

        [Required]
        public string Type
        {
            get;
            set;
        }

        [Required]
        [StringLength(100, MinimumLength = 8)]
        public string Password
        {
            get;
            set;
        }
    }
}
