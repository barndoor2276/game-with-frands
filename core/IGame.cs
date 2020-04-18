using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace core
{
    public interface IGame
    {
        string Name { get; set; }

        string Type { get; set; }

        string Password { get; set; }
    }
}
