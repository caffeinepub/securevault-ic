import Map "mo:core/Map";
import Principal "mo:core/Principal";
import List "mo:core/List";

module {
  type UserProfile = {
    principal : Text;
    email : Text;
    orgName : Text;
    contact : Text;
    billingAddress : Text;
    billingCountry : Text;
    metadata : Text;
    agreementVersion : Text;
  };

  type OldActor = {
    userProfiles : Map.Map<Principal, UserProfile>;
  };

  public type AccessRequest = {
    name : Text;
    email : Text;
    company : Text;
    sector : Text;
    plan : Text;
    message : Text;
    timestamp : Text;
  };

  type NewActor = {
    userProfiles : Map.Map<Principal, UserProfile>;
    requestList : List.List<AccessRequest>;
  };

  public func run(old : OldActor) : NewActor {
    {
      userProfiles = old.userProfiles;
      requestList = List.empty<AccessRequest>();
    };
  };
};
