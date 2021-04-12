using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPICore.Model;
using WebAPICore.Repository;

namespace WebAPICore.Service
{
    public interface IVoteService
    {
        public List<Vote> LoadVotesFromDb();
        public Vote GetVoteById(byte id);
        public string UpdateVotes(byte id, int votesYes, int votesNo);
    }

    public class VoteService : IVoteService
    {
        private IVoteRepository _voteRepository;
        public VoteService(IVoteRepository voteRepository)
        {
            _voteRepository = voteRepository;
        }

        public List<Vote> LoadVotesFromDb()
        {
            List<Vote> voteList = _voteRepository.LoadDataFromDB();
            return voteList;

        }
        public Vote GetVoteById(byte id)
        {
            Vote voteList = _voteRepository.GetVoteById(id);
            return voteList;
        }

        public string UpdateVotes(byte id, int votesYes, int votesNo)
        {
            string message = _voteRepository.UpdateVotes(id, votesYes, votesNo);
            return message;
        }


    }
}
