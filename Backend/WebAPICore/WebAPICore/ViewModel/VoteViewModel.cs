using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPICore.ViewModel
{
    public record VoteViewModel(byte id, string name, int votesYes, int votesNo);
}
