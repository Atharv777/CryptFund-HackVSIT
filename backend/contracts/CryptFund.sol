// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

error NotTheCampaignOwner();
error CreateCampaignFirst();

contract CryptFund {

    address private immutable i_owner;
    uint private constant MINIMUM_DONATION = 0.01 ether;
    uint private constant ActiveCampaigns = 0;
    uint private constant ClosedCampaigns = 0;
    uint public count;
    

    // Campaign data structure
    struct Campaign {
        uint campaignId;
        address payable campaignowner;
        string name;
        string description;
        uint256 targetAmount;
        uint startAt;
        uint endAt;
        bool isFundraisingStarted;
        bool claimed;
    }

    // List of all active campaigns
    Campaign[] private currentCampaign;

    // List of all campaigns
    Campaign[] private allCampaigns;

    mapping(address => uint) private addressToId;
    mapping(address => bool) private haveActiveCampaign;
    mapping(uint => Campaign) public campaigns;


    constructor() {
        i_owner = msg.sender;
    }


    function sendFunds(uint _id) external payable {
        require(msg.value >= MINIMUM_DONATION, "Send More ");
        require(_id <= currentCampaign.length);
        require(currentCampaign[_id].campaignowner != address(0), " Invalid Campaign");

        currentCampaign[_id].campaignowner.transfer(msg.value); 
    }

    function createCampaign( string memory _name, string memory _desc, uint256 _target, uint _startAt, uint _endAt ) external {
        require(haveActiveCampaign[msg.sender] == false); // one person can create only one campaign

        currentCampaign.push(
            Campaign(
                count,
                payable(msg.sender),
                _name,
                _desc,
                _target,
                _startAt,
                _endAt,
                block.timestamp >= _startAt,
                false
            )
        );
        
        addressToId[msg.sender] = count;
        haveActiveCampaign[msg.sender] = true;
        count++;
    }

    function cancelCampaign(uint _id) external {
        Campaign memory campaign = campaigns[_id];
        require(campaign.campaignowner == msg.sender, "not creator");
        require(block.timestamp < campaign.startAt, "started");

        delete campaigns[_id];
    }

    // add funds after starting fundraising
    function startFundraising() external {
        if (msg.sender != currentCampaign[addressToId[msg.sender]].campaignowner) {
            revert NotTheCampaignOwner();
        }
        currentCampaign[addressToId[msg.sender]].isFundraisingStarted = true;
    }

    // close fund raising
    function endFundraising() external {
        if (msg.sender != currentCampaign[addressToId[msg.sender]].campaignowner) {
            revert NotTheCampaignOwner();
        }
        currentCampaign[addressToId[msg.sender]].isFundraisingStarted = false;
    }

    // discontinue campaign
    function discontinueCampaign() external {
        if (msg.sender != currentCampaign[addressToId[msg.sender]].campaignowner) {
            revert NotTheCampaignOwner();
        }

        if (!(haveActiveCampaign[msg.sender])) {
            revert CreateCampaignFirst();
        }

        delete currentCampaign[addressToId[msg.sender]];
        haveActiveCampaign[msg.sender] = false;
    }


    //getter Functions
    function getAllCampaigns() external view returns (Campaign[] memory) {
        return allCampaigns;
    }
    function getAllCurrentCampaigns() external view returns (Campaign[] memory) {
        return currentCampaign;
    }

    function getMyCampaigns() external view returns (Campaign memory) {
        return currentCampaign[addressToId[msg.sender]];
    }

    function getMinimumDonation() external pure returns (uint) {
        return MINIMUM_DONATION;
    }

    function getContractBalance() public view returns(uint256){
        return address(this).balance;
    }

    function getNumberOfCampaignsCreated() external view returns (uint) {
        return allCampaigns.length;
    }

    function getNumberOfActiveCampaigns() external pure returns (uint) {
        return ActiveCampaigns;
    }

    function getNumberOfClosedCampaigns() external pure returns (uint) {
        return ClosedCampaigns;
    }
}
