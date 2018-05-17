let dontSpillTheBeans = secret => ({
  getSecret: () => secret,
  setSecret: sec => secret = sec,
});

