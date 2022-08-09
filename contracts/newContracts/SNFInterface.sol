pragma solidity ^0.8.0; 

interface SNFInterface {

        enum Status {SUBMITTED, REJECTED, FUNDING, VESTING, PENDING_EXECUTION_VALIDATION, VALIDATED, COMPLETED}

        struct Proposal {

                Status status;
                address[2] DAOS;
                address[2] negotiatiors;
                string description;
                uint256 fundingPeriod;
                uint256 vestingPeriod;
                uint256 cliffPeriod;
                uint256 tokenDistribution; // from the POV of the proposing DAO, i.e. if tokenDistribution = 30 it means 30% for the proposing DAO
                uint256 newTokensVolume;
                // the below variables hold the start and end timestamps of the different periods of the deal
                uint fundingStart;
                uint fundingEnd;
                uint vestingStart;
                uint vestingEnd;
                uint cliffEnd;
        }

        function fillSNFBlanks(uint256 tokenDistribution,
        uint256 fundingPeriod,
        uint256 cliffPeriod,
        uint256 vestingPeriod,
        uint256 newTokensVolume,
        bool deal) external; 

        function fundDeal() external;
        function executeDeal() external;
        function setNegotiator() external;
        function getProposalStatus() external returns (uint256 status);
        function getCurrentFunding() external returns (uint256 fundingState);
        function endFundingPeriod() external;
        function endVestingPeriod() external;
        function exit() external;

        event ProposalStatus(
                Status status
        );
        event NewDAO(
                address newDAOAddress
        );
}
