type Data = {
  korean_date: string;
  korean_time: string;
  korean_venue: string;
  korean_location: string;
  khmer_date: string;
  khmer_time: string;
  khmer_venue: string;
  khmer_location: string;
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
