using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;
using WebAPICore.Model;

namespace WebAPICore.Repository
{
    public interface IVoteRepository
    {
        public List<Vote> LoadDataFromDB();
        public Vote GetVoteById(byte id);
        public string UpdateVotes(byte id, int votesYes, int votesNo);


    }

    public class VoteRepository : IVoteRepository
    {
        private string filename = "C:\\Users\\Dwayne\\Desktop\\PHP_Modul\\Database\\Data.json";
        
        public List<Vote> LoadDataFromDB()
        {
            List<Vote> voteList = new List<Vote>();

            string jsonString = File.ReadAllText(this.filename);
            Vote[] votes = JsonSerializer.Deserialize<Vote[]>(jsonString);
            foreach(var vote in votes)
            {
                voteList.Add(vote);
            }

            return voteList;
        }

        public Vote GetVoteById(byte id)
        {
            List<Vote> voteList = LoadDataFromDB();

            Vote vote = voteList.Where(vl => vl.ID == id).FirstOrDefault();
            return vote;
        }

        public string UpdateVotes(byte id, int votesYes, int votesNo)
        {
            List<Vote> voteList = LoadDataFromDB();
            Vote vote = voteList.Where(vl => vl.ID == id).FirstOrDefault();
            vote.votesNo = votesNo;
            vote.votesYes = votesYes;
            string json = JsonSerializer.Serialize(voteList);
            File.WriteAllText(this.filename, json);
            return "success";
        }
    }
}
