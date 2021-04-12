using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPICore.Model
{
    public class Vote
    {
        public byte ID { get; init; }
        public string name { get; set; }
        public int votesYes { get; set; }
        public int votesNo { get; set; }

        public Vote(byte ID, string name, int votesYes, int votesNo)
        {
            this.ID = ID;
            this.name = name;
            this.votesYes = votesYes;
            this.votesNo = votesNo;
        }
    }
}
