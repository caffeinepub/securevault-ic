import List "mo:core/List";
import AccessControl "authorization/access-control";

module {
  type AccessRequest = {
    organizationName : Text;
    contactName : Text;
    email : Text;
    orgType : Text;
    message : Text;
    timestamp : Int;
  };

  type OldActor = {
    accessRequests : List.List<AccessRequest>;
  };

  type NewActor = { accessControlState : AccessControl.AccessControlState };

  public func run(_old : OldActor) : NewActor {
    {
      accessControlState = AccessControl.initState();
    };
  };
};
