function isValidWalk(walk) {
  // check if walk takes 10 minutes
  if (walk.length !== 10) {
    return false
  }
  // create object to count each direction
  let directions = {
    n: 0,
    s: 0,
    w: 0,
    e: 0,
  };
  // add 1 to each direction we have in our list
  walk.map((direction) => (directions[direction] += 1));
  // check if size of opposite directions is same
  if ((directions["n"] === directions["s"]) && (directions["w"] === directions["e"])) {
    return true;
  }
  return false;
}