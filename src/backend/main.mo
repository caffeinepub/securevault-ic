import Time "mo:core/Time";
import List "mo:core/List";

actor {
  type AccessRequest = {
    organizationName : Text;
    contactName : Text;
    email : Text;
    orgType : Text;
    message : Text;
    timestamp : Int;
  };

  let accessRequests = List.empty<AccessRequest>();

  public shared ({ caller }) func submitAccessRequest(
    organizationName : Text,
    contactName : Text,
    email : Text,
    orgType : Text,
    message : Text,
  ) : async () {
    let request : AccessRequest = {
      organizationName;
      contactName;
      email;
      orgType;
      message;
      timestamp = Time.now();
    };
    accessRequests.add(request);
  };

  public query ({ caller }) func getAccessRequests() : async [AccessRequest] {
    accessRequests.toArray();
  };
};
