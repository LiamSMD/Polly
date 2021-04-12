using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPICore.Model;
using WebAPICore.Service;
using WebAPICore.ViewModel;

namespace WebAPICore.Controller
{
    public class VoteController
    {
        private IVoteService _voteService;
        public VoteController(IVoteService voteService)
        {
            _voteService = voteService;
        }

        [HttpGet]
        public List<VoteViewModel> GetAll()
        {
            List<Vote> voteList = _voteService.LoadVotesFromDb();
            List<VoteViewModel> voteViewModelList = new List<VoteViewModel>();

            foreach (Vote vote in voteList)
            {
                voteViewModelList.Add(new VoteViewModel(vote.ID, vote.name, vote.votesYes, vote.votesNo));
            }

            return voteViewModelList;
        }

        [HttpGet]
        public VoteViewModel GetVoteById(byte id)
        {
            Vote voteModel = _voteService.GetVoteById(id);
            VoteViewModel voteViewModel = new VoteViewModel(voteModel.ID, voteModel.name, voteModel.votesYes, voteModel.votesNo);
            return voteViewModel;
        }

        [HttpGet]
        public string IncreaseVotes(byte id, int votesYes, int votesNo)
        {
            string message = _voteService.UpdateVotes(id, votesYes, votesNo);
            return message;
        }
    }
}
