function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function () {
  return this.attackBonus += 2;
}

Pokemon.prototype.isDefeated = function () {
  if (this.health >= 1) return false;
  else return true;
}

function simulateBattle(poke1, poke2, first) {
  let points;

  while (!poke1.isDefeated() && !poke2.isDefeated()) {
    if (first === poke1.name) {
      points = poke1.biteAttack();
      poke2.health -= points;
      first = poke2.name;
    } else {
      points = poke2.biteAttack();
      poke1.health -= points;
      first = poke1.name;
    }

    if (poke1.isDefeated()) return poke2.name + " Wins!";
    if (poke2.isDefeated()) return poke1.name + " Wins!";
  }
}