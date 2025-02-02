type Data = {
  date: string;
  location: string;
  greeting: string;
  groom: {
    last_name: string;
    first_name: string;
    account_number: string;
    parents: {
      mother: {
        name: string;
        account_number: string;
      };
      father: {
        name: string;
        account_number: string;
      };
    };
  };
  bride: {
    last_name: string;
    first_name: string;
    account_number: string;
    parents: {
      mother: {
        name: string;
        account_number: string;
      };
      father: {
        name: string;
        account_number: string;
      };
    };
  };
  kakaotalk: {
    api_token: string;
    wedding_invitation_url: string;
    share_image: string;
  };
};
