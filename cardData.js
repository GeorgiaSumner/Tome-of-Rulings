const cardData = [
  {
    name: "Fyendals Spring Tunic",
    ruling:
      "\nYou cannot activate Fyendal’s Spring Tunic during the start of the turn phase (in response to the trigger), because players do not get priority during the start of turn phase.\n\u203B\n You must have at least 3 energy counters on Fyendal’s Spring Tunic to use it’s activated ability.\n\u203B\n Fyendal’s Spring Tunic’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/FyendalsSpringTunic.png"),
  },
  {
    name: "Goliath Gauntlet",
    ruling:
      "\nThe attack action card does not gain go again. Goliath Gauntlet’s activated ability requires an action point to use and provides an action point from go again upon resolution.",
    cardImage: require("./images/GoliathGauntlet.png"),
  },
  {
    name: "Heartened Cross Strap",
    ruling:
      "\nThe attack action card does not again go again. Heartened Cross Strap’s activated ability requires an action point to use and provides an action point from go again upon resolution.\n\u203B\n The reduction does not carry over to any additional attack actions outside of the first attack action card you play after activating Heartened Cross Strap.",
    cardImage: require("./images/HeartenedCrossStrap.png"),
  },
  {
    name: "Hope Merchant’s Hood",
    ruling:
      "\nThe cards must be selected and shuffled in at the same time.\n\u203B\n Hope Merchant’s Hood’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/HopeMerchantsHood.png"),
  },
  {
    name: "Snapdragon Scalers",
    ruling:
      "\nIf this is used on an attack with go again, you will only gain 1 action point upon resolution as multiple instances of go again do not stack.\n\u203B\n Snapdragon Scaler’s activated ability is an attack reaction. You may activate it during the reaction window when you are the attacking hero.",
    cardImage: require("./images/SnapdragonScalers.png"),
  },
  {
    name: "Barraging Brawnhide",
    ruling:
      "\nDefense reactions played from arsenal and/or hand count as defending cards.",
    cardImage: require("./images/BarragingBrawnhide.png"),
  },
  {
    name: "Crazy Brew",
    ruling:
      "\nYou cannot defend with Crazy Brew as it has no defense value.\n\u203B\n The ability must resolve completely. There is no window to react between letting the ability resolve and seeing which effect is applied.",
    cardImage: require("./images/CrazyBrew.png"),
  },
  {
    name: "Demolition Crew",
    ruling:
      "\nYou must have at least one card in your hand with cost {r}{r} or greater for the additional cost at the time you play Demolition Crew.\n\u203B\n You may not reveal the same Demolition Crew to itself to pay for the additional cost.\n\u203B\n You can not reveal a card for the additional cost, and then pitch that same card to pay the resource of Demolition Crew. Paying resource costs happens before paying additional costs.",
    cardImage: require("./images/DemolitionCrew.png"),
  },
  {
    name: "Drone of Brutality",
    ruling:
      "\nAnywhere includes all possible zones, such as from hand, or deck. This is not limited to being put into the graveyard from the combat chain.",
    cardImage: require("./images/DroneOfBrutality.png"),
  },
  {
    name: "Energy Potion",
    ruling:
      "\nEnergy Potion requires an action point to play as it is an action.\n\u203B\n Energy Potion has sub-type Item, which means it stays in the arena until it is destroyed.\n\u203B\n You may not defend with Energy Potion as it does not have a defense value.\n\u203B\n You may use Energy Potion’s ability even when you are not spending any of the resources gained by it.\n\u203B\n Energy Potion’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/EnergyPotion.png"),
  },
  {
    name: "Enlightened Strike",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Enlightened Strike.\n\u203B\n You choose the mode at the time you play Enlightened Strike.",
    cardImage: require("./images/EnlightenedStrike.png"),
  },
  {
    name: "Flock of the Feather Walkers",
    ruling:
      "\nYou must have at least one other card in your hand with cost {r} or less to pay for the additional cost of Flock of the Feather Walkers.\n\u203B\n You may not reveal the same Flock of the Feather Walkers to itself to pay for the additional cost.\n\u203B\n The Quicken aura token remains in play until destroyed.\n\u203B\n A Quicken aura token may be represented by a small object such as a card sleeve or coin if a Quicken aura token card is not available.\n\u203B\n You can not reveal a card for the additional cost, and then pitch that same card to pay the resource of Flock of the Feather Walkers. Paying resource costs happens before paying additional costs.",
    cardImage: require("./images/FlockOfTheFeatherWalkers.png"),
  },
  {
    name: "Heart of Fyendal",
    ruling:
      "\nThe green symbol on Heart of Fyendal is life.\n\u203B\n You may only have 1 Heart of Fyendal in your deck including cards in your registered 80-card pool in constructed tournaments and only 1 Heart of Fyendal in your deck in limited tournaments.\n\u203B\n You may not defend with Heart of Fyendal as it does not have a defense value.\n\u203B\n Heart of Fyendal does not have a cost value. (It is not zero.)",
    cardImage: require("./images/HeartOfFyendal.png"),
  },
  {
    name: "Last Ditch Effort",
    ruling:
      "\nLast Ditch Effort checks how many cards are in your deck at the time you play it. If after you play it your deck’s size changes, the stats and go again applied to Last Ditch Effort would still remain.",
    cardImage: require("./images/LastDitchEffort.png"),
  },
  {
    name: "Nimble Strike",
    ruling:
      "\nYou must decide if you are banishing a card name Nimblism at the time you play Nimble Strike.\n\u203B\n Non-attack action cards go to the graveyard after they resolve, therefore you may banish a Nimblism you played this turn.",
    cardImage: require("./images/NimbleStrike.png"),
  },
  {
    name: "Nimblism",
    ruling:
      "\nThe attack action does not gain go again. Nimblism requires an action point to use and provides an action point from go again upon resolution.",
    cardImage: require("./images/Nimblism.png"),
  },
  {
    name: "Potion of Strength",
    ruling:
      "\nPotion of Strength requires an action point to play as it is an action.\n\u203B\n Potion of Strength has sub-type Item, which means it stays in the arena until it is destroyed.\n\u203B\n You may not defend with Potion of Strength as it does not have a defense value.\n\u203B\n The attack does not gain go again. Potion of Strength requires an action point to use and provides an action point from go again upon resolution.",
    cardImage: require("./images/PotionOfStrength.png"),
  },
  {
    name: "Pummel",
    ruling:
      "\nYou cannot play Pummel if there is not a legal target.\n\u203B\n You cannot target a weapon, only a weapon attack.",
    cardImage: require("./images/Pummel.png"),
  },
  {
    name: "Razor Reflex",
    ruling:
      "\nYou cannot play Razor Reflex if there is not a legal target\n\u203B\n You cannot target a weapon, only a weapon attack.\n\u203B\n You cannot target a weapon attack with the second option.\n\u203B\n If this is used on an attack with go again, you will only gain 1 action point upon resolution as multiple instances of go again do not stack.",
    cardImage: require("./images/RazorReflex.png"),
  },
  {
    name: "Regurgitating Slog",
    ruling:
      "\nYou must decide if you are banishing a card named Sloggism at the time you play Regurgitating Slog.\n\u203B\n Non-attack action cards go to the graveyard after it resolves, therefore you may banish a Sloggism you played this turn.",
    cardImage: require("./images/RegurgitatingSlog.png"),
  },
  {
    name: "Remembrance",
    ruling:
      "\nYou may not defend with Remembrance as it does not have a defense value.\n\u203B\n You may shuffle 0, 1, 2 or 3 action cards from your graveyard into your deck.\n\u203B\n You are not required to announce your choices until the card resolves.\n\u203B\n You may only shuffle action cards from your graveyard into your deck. This includes attack actions. This excludes any card that is not an action such as equipment, resource, defense reaction, attack reaction and instant.\n\u203B\n Remembrance is an instant. You may play it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/Rememberance.png"),
  },
  {
    name: "Scar for a Scar",
    ruling:
      "\nThe green symbol on Scar for a Scar is life.\n\u203B\n Scar for a Scar checks if you have less life than your opponent at the time you play it. Changes after the card has been played does not cause Scar for a Scar to gain nor lose go again.",
    cardImage: require("./images/ScarForAScar.png"),
  },
  {
    name: "Sink Below",
    ruling:
      "\nSink Below can only be played in the reaction window.\n\u203B\n You must resolve Sink Below’s ability before deciding if you are defending with any additional cards in the reaction window.\n\u203B\n You cannot use Sink Below’s ability if you have no other cards in your hand. You only draw a card if you put a card from your hand on the bottom of your deck.\n\u203B\n Sink Below’s effect is optional. You may still play Sink Below if you have no other cards in your hand.",
    cardImage: require("./images/SinkBelow.png"),
  },
  {
    name: "Sigil of Solace",
    ruling:
      "\nThe green symbol on Sigil of Solace is life.\n\u203B\n You may not defend with Sigil of Solace as it does not have a defense value.\n\u203B\n Sigil of Solace is an instant. You may play it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/SigilOfSolace.png"),
  },
  {
    name: "Sloggism",
    ruling:
      "\nThe attack action does not gain go again. Sloggism requires an action point to use and provides an action point from go again upon resolution.",
    cardImage: require("./images/Sloggism.png"),
  },
  {
    name: "Snatch",
    ruling:
      "\nThe attack is considered to have hit if it does 1 or more damage to the defending hero.",
    cardImage: require("./images/Snatch.png"),
  },
  {
    name: "Tome of Fyendal",
    ruling:
      "\nThe green symbol of Tome of Fyendal is life.\n\u203B\n You can exceed your starting life total. There is no maximum life total.\n\u203B\n If you end the turn with more cards in hand than your hero’s intellect, you do not discard to your hero’s intellect (hand size). There is no maximum hand size.",
    cardImage: require("./images/TomeOfFyendal.png"),
  },
  {
    name: "Unmovable",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Unmovable’s cost to play it.\n\u203B\n You may play Unmovable from your hand, however it will not get it’s bonus.",
    cardImage: require("./images/Unmovable.png"),
  },
  {
    name: "Wounded Bull",
    ruling:
      "\nThe green symbol on Wounded Bull is life.\n\u203B\n Wounded Bull checks if you have less life than your opponent at the time you play it. Changes after the card has been played does not cause Wounded Bull to gain nor lose +1{p}.",
    cardImage: require("./images/WoundedBull.png"),
  },
  {
    name: "Rhinar",
    ruling:
      "\nThis checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.\n\u203B\n The player who owns the card banished face down is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/Rhinar.png"),
  },
  {
    name: "Romping Club",
    ruling:
      "\nThis checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.",
    cardImage: require("./images/RompingClub.png"),
  },
  {
    name: "Barkbone Strapping",
    ruling:
      "\nIf the number rolled is 1, no resources would be gained.\n\u203B\n You may use Barkbone Strapping’s activated ability even when there is no cost to be paid. Barkbone Strapping’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/BarkboneStrapping.png"),
  },
  {
    name: "Scabskin Leathers",
    ruling:
      "\nIf the number rolled is 1, no action points would be gained.\n\u203B\n Scabskin Leathers requires an action point to use.",
    cardImage: require("./images/ScabskinLeathers.png"),
  },
  {
    name: "Alpha Rampage",
    ruling:
      "\nYou may only play Alpha Rampage in your deck if your hero is Rhinar, Reckless Rampage or Rhinar (young hero).\n\u203B\n You must have at least one other card in your hand to pay for the additional cost at the time you play Alpha Rampage.\n\u203B\n The player who owns the banished face down card is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/AlphaRampage.png"),
  },
  {
    name: "Awakening Bellow",
    ruling:
      "\nThis card only affects Brute attack action cards. Brute weapon attack or generic attack actions do not benefit this.\n\u203B\n The player who owns the banished face down card is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/AwakeningBellow.png"),
  },
  {
    name: "Barraging Beatdown",
    ruling:
      "\nThis card only affects Brute attacks (Brute attack action cards or Brute weapon attacks). Generic attack actions do not benefit this.\n\u203B\n The player who owns the banished face down card is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/BarragingBeatdown.png"),
  },
  {
    name: "Bloodrush Bellow",
    ruling:
      "\nThis checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.\n\u203B\n This card only affects Brute attacks (Brute attack action cards or Brute weapon attacks). Generic attack actions do not benefit this.",
    cardImage: require("./images/BloodrushBellow.png"),
  },
  {
    name: "Bone Head Barrier",
    ruling:
      "\nYou may not defend with Bone Head Barrier as it does not have a defense value.\n\u203B\n You must prevent the incoming damage, you cannot save the prevention for a future attack once Bone Head Barrier resolves.\n\u203B\n Bone Head Barrier is an instant. You may play it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/BoneHeadBarrier.png"),
  },
  {
    name: "Breakneck Battery",
    ruling:
      "\nThis checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.",
    cardImage: require("./images/BreakneckBattery.png"),
  },
  {
    name: "Pack Hunt",
    ruling:
      "\nThe player who owns the banished face down card is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/PackHunt.png"),
  },
  {
    name: "Primeval Bellow",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Primeval Bellow.\n\u203B\n This card only affects Brute attacks (Brute attack action cards or Brute weapon attacks). Generic attack actions do not benefit this.\n\u203B\n You can only pitch when there is a cost to pay. You cannot pitch a card to play Primeval Bellow because it costs 0. Yes, we did this to make it awkward.",
    cardImage: require("./images/PrimevalBellow.png"),
  },
  {
    name: "Reckless Swing",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Reckless Swing.\n\u203B\n This checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.\n\u203B\n The damage cannot be blocked but it can be prevented by a prevention effect.\n\u203B\n You can only pitch when there is a cost to pay. You cannot pitch a card to play Reckless Swing.",
    cardImage: require("./images/RecklessSwing.png"),
  },
  {
    name: "Sand Sketched Plan",
    ruling:
      "\nYou may only play Sand Sketched Plan in your deck if your hero is Rhinar, Reckless Rampage or Rhinar (young hero).\n\u203B\n This checks the discarded card’s base power. Effects that modify a card's power are not applied to a card discarded from hand.\n\u203B\n You may elect not to put a card into your hand, you still must discard and shuffle your deck after.\n\u203B\n You can only pitch when there is a cost to pay. You cannot pitch a card to cast Sand Sketched Plan.\n\u203B\n Sand Sketched Plan does not have go again. If you don’t discard a card with 6 or more power from its effect, your action phase will end unless you had two or more action points before playing Sand Sketched Plan.",
    cardImage: require("./images/SandSketchedPlan.png"),
  },
  {
    name: "Savage Swing",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Savage Swing.",
    cardImage: require("./images/SavageSwing.png"),
  },
  {
    name: "Smash Instinct",
    ruling:
      "\nThe player who owns the banished face down card is allowed to look at it.\n\u203B\n The card banished from intimidate is returned to hand at the beginning of the end phase. This is before players draw up to hand size.",
    cardImage: require("./images/SmashInstinct.png"),
  },
  {
    name: "Wrecker Romp",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Wrecker Romp.",
    cardImage: require("./images/WreckerRomp.png"),
  },
  {
    name: "Bravo",
    ruling:
      "\nThe attack action does not gain go again. Bravo’s activated ability requires an action point to use and provides an action point from go again upon resolution.",
    cardImage: require("./images/Bravo.png"),
  },
  {
    name: "Anothos",
    ruling:
      "\nAnothos checks your pitch zone constantly not just when it attacks. If the criteria is met after the attack is made, it will get the +2{p} bonus.\n\u203B\n You can only pitch when there is a cost to pay. (Bravo’s hero ability can be useful for this.)",
    cardImage: require("./images/Anothos.png"),
  },
  {
    name: "Helm of Isens Peak",
    ruling:
      "\nThe blue symbol is intellect. This is your hand size (How much you draw up to at the end of turn.)\n\u203B\n You draw up to your hand size before end of turn effects wear off.\n\u203B\n Helm of Isen’s Peak requires an action point to activate. It does not have go again. Activating Helm of Isen Peak will usually end your action phase.\n\u203B\n When you defend with a card it remains on the combat chain until the chain closes, therefore you cannot defend with an equipment multiple times on the same chain link.",
    cardImage: require("./images/HelmOfIsensPeak.png"),
  },
  {
    name: "Tectonic Plating",
    ruling:
      "\nA Seismic Surge is a Guardian Token - Aura with “At the beginning of your action phase, destroy Seismic Surge then the next Guardian attack action card you play this turn costs {r} less to play.",
    cardImage: require("./images/TectonicPlating.png"),
  },
  {
    name: "Blessing of Deliverance",
    ruling:
      "\nThe green symbol on Blessing of Deliverance is life.\n\u203B\n Blessing of Deliverance checks the resource cost of a card (top right corner), not the pitch value.\n\u203B\n The cards stay in the same order on top of the deck as they were before they were revealed.",
    cardImage: require("./images/BlessingOfDeliverance.png"),
  },
  {
    name: "Buckling Blow",
    ruling:
      "\nYou may play Buckling Blow even if defending player controls no equipment.\n\u203B\n You target the equipment at the time the hero takes 4 or more damage.\n\u203B\n The counter stays on the equipment permanently.",
    cardImage: require("./images/BucklingBlow.png"),
  },
  {
    name: "Cartilage Crush",
    ruling:
      "\nThis includes all cards with card type action and all action activated abilities.",
    cardImage: require("./images/CartilageCrush.png"),
  },
  {
    name: "Cranial Crush",
    ruling:
      "\nThis does not affect drawing up to your hand size since that is done during the end of turn phase.\n\u203B\n Does not stop effects that put a card into their hand from their deck.\n\u203B\n The player may still play cards that would draw cards. If they do, and would draw 1 or more cards during their action phase, instead they don’t. (The rest of the card effect still applies)",
    cardImage: require("./images/CranialCrush.png"),
  },
  {
    name: "Crippling Crush",
    ruling:
      "\nYou may only play Crippling Crush in your deck if your hero is Bravo, Showstopper or Bravo (young hero)",
    cardImage: require("./images/CripplingCrush.png"),
  },
  {
    name: "Crush Confidence",
    ruling: "\nThe hero’s intellect, health and hero name is unaffected.",
    cardImage: require("./images/CrushConfidence.png"),
  },
  {
    name: "Debilitate",
    ruling:
      "\nIf the power of an attack would become less than 0, it is considered to be 0. However if the attack then gets a positive power modifier, it will still be under the effect of the -2{p} modifier.\n\u203B\n This affects all attacks including attack action cards and weapon attacks.",
    cardImage: require("./images/Debilitate.png"),
  },
  {
    name: "Disable",
    ruling:
      "\nYou may still play Disable even if the other player does not have an arsenal.",
    cardImage: require("./images/Disable.png"),
  },
  {
    name: "Emerging Power",
    ruling:
      "\nEmerging Power must be destroyed at the beginning of your action phase, it is not optional.",
    cardImage: require("./images/EmergingPower.png"),
  },
  {
    name: "Forged for War",
    ruling:
      "\nForged for War must be destroyed at the beginning of your action phase, it is not optional.\n\u203B\n You may defend with an equipment if it has a defense value (0 is a value).\n\u203B\n The equipment does not need Blade Break or Battleworn to defend.",
    cardImage: require("./images/ForgedForWar.png"),
  },
  {
    name: "Show Time!",
    ruling:
      "\nYou may only play Show Time! in your deck if your hero is Bravo, Showstopper or Bravo (young hero).\n\u203B\n Show Time! must be destroyed at the beginning of your action phase, it is not optional.\n\u203B\n You may elect not to put a card into your hand, you still must shuffle your deck after.",
    cardImage: require("./images/ShowTime.png"),
  },
  {
    name: "Staunch Response",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Staunch Response’s cost to play it.\n\u203B\n You choose if you want to pay the additional cost at the time you play Staunch Response.\n\u203B\n The additional cost is in addition to Staunch Reponse’s normal resource cost. If you want to play Staunch Response with the bonus, it would cost {r}{r}{r}{r}{r}{r} to play.\n\u203B\n If you pay the additional cost of Staunch Response, it’s still considered to cost 2 (as printed in the top right corner of the card.)",
    cardImage: require("./images/StaunchResponse.png"),
  },
  {
    name: "Stonewall Confidence",
    ruling:
      "\nStonewall Confidence must be destroyed at the beginning of your action phase, it is not optional.\n\u203B\n Stonewall Confidence modifies the defense value of all cards you control with cost 3 or greater. This includes guardian cards and generic cards.",
    cardImage: require("./images/StonewallConfidence.png"),
  },
  {
    name: "Spinal Crush",
    ruling:
      "\nThe effect of Spinal Crush affects actions from any source controlled by that hero. This includes activated actions of equipment, weapons, and hero cards, and playing action cards of any type.\n\u203B\n This does not stop effects that directly gain action points outside of go again.",
    cardImage: require("./images/SpinalCrush.png"),
  },
  {
    name: "Katsu",
    ruling:
      "\nYou may elect not to banish a card when searching, however you still must shuffle your deck.\n\u203B\nKatsu's hero card effect triggers only once per turn, the first time you hit with an attack action card. If you choose not to resolve the effect and you hit again later in the same turn, Katsu's hero card effect will not trigger again.",
    cardImage: require("./images/Katsu.png"),
  },
  {
    name: "Harmonized Kodachi",
    ruling:
      "\nIt is possible for Harmonized Kodachi to gain go again after the attack has been declared if a card with cost 0 enters the pitch zone before the chain link resolves.\n\u203B\n You can only pitch when there is a cost to pay.\n\u203B\n You may start the game with zero, one or two Harmonized Kodachis as it is a 1-handed weapon. (We highly recommend choosing 2.)",
    cardImage: require("./images/HarmonizedKodachi.png"),
  },
  {
    name: "Breaking Scales",
    ruling:
      "\nBreaking Scales can only target a card with combo.\n\u203B\n The card must have the keyword combo (displayed on a card as Combo - [text]) This does not include cards that just reference combo or have combo in the text box.",
    cardImage: require("./images/BreakingScales.png"),
  },
  {
    name: "Mask of Momentum",
    ruling:
      "\nMask of Momentum does not keep track of hits in a row of the previous combat chain (If the combat chain was closed).\n\u203B\n The attack must be the third to hit in a row.\n\u203B\n The third or higher attack must be an attack action card to trigger Mask of Momentum, however the previous attacks can be any attack ie. weapon attacks.",
    cardImage: require("./images/MaskOfMomentum.png"),
  },
  {
    name: "Ancestral Empowerment",
    ruling:
      "\nAncestral Empowerment can only target ninja attack action cards. This excludes weapon attacks and generic attack action cards.",
    cardImage: require("./images/AncestralEmpowerment.png"),
  },
  {
    name: "Flic Flak",
    ruling:
      "\nThe card must have the keyword combo (displayed on a card as Combo - [text]) This does not include cards that just reference combo or have combo in the text box.\n\u203B\n You cannot block with Flic Flak and a combo card simultaneously as Flic Flak must be used during the reaction window and that is after the defending window. Flic Flak is good when your opponent attacks again after the attack Flic Flak defended.\n\u203B\n The effect from Flic Flak is active until either you defend with another card or the turn ends. Closing the combat chain does not turn off Flic Flak’s effect.",
    cardImage: require("./images/FlickFlack.png"),
  },
  {
    name: "Hurricane Technique",
    ruling:
      "\nTIf Hurricane Technique hits and returns to your hand (because Rising Knee Thrust was the last attack), and you then immediately play Hurricane Technique again, it will not gain its combo effect (because the last attack on the combat chain was not Rising Knee Thrust - it was Hurricane Technique).",
    cardImage: require("./images/HurricaneTechnique.png"),
  },
  {
    name: "Mugenshi: RELEASE",
    ruling:
      "\nYou may only play Mugenshi: RELEASE in your deck if your hero is Katsu, the Wanderer or Katsu (young hero).\n\u203B\n You may elect not to put any card(s) into your hand, you still must shuffle your deck after.",
    cardImage: require("./images/Mugenshi.png"),
  },
  {
    name: "Lord of Wind",
    ruling:
      "\nYou may only play Lord of Wind in your deck if your hero is Katsu, the Wanderer or Katsu (young hero).\n\u203B\n You choose X at the time you play Lord of Wind.\n\u203B\n X can be 0.\n\u203B\n X cannot be greater than the number of legal targets ie. Surging Strikes, Whelming Gustwaves, and Mugenshi: RELEASE in your graveyard.\n\u203B\n You only shuffle your deck if you put at least one card into your deck.\n\u203B\n The “If you do, [...]” effect is an on-play triggered ability which triggers if the additional cost is played. This means it can be responded to, and it resolves before Lord of Wind resolves and becomes attacking.",
    cardImage: require("./images/LordOfWind.png"),
  },
  {
    name: "Pounding Gale",
    ruling:
      "\nPounding Gale doubles the damage that is dealt to a hero after damage calculation. It does not affect the defense value of the cards blocking Pounding Gale.",
    cardImage: require("./images/PoundingGale.png"),
  },
  {
    name: "Dorinthea",
    ruling:
      "\nThis ability does not give the weapon attack go again. You are still required to have an action point to attack again.\n\u203B\n This ability bypasses the “Once per Turn Action - Attack” on weapons and allows an additional attack with the same weapon\n\u203B\n This effect is mandatory, the first weapon you hit with each turn gets this effect. It cannot be saved up for a future weapon attack that turn.",
    cardImage: require("./images/Dorinthea.png"),
  },
  {
    name: "Dawnblade",
    ruling:
      "\nDawnblade does not have go again nor can it attack more than once per turn. Dawnblade requires other cards to allow Dawnblade to attack more than once.\n\u203B\n A +1{p} counter is a permanent effect that increases the power of Dawnblade (until the counter is removed)",
    cardImage: require("./images/Dawnblade.png"),
  },
  {
    name: "Braveforge Bracers",
    ruling:
      "\nThis only effects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.",
    cardImage: require("./images/BraveforgeBracers.png"),
  },
  {
    name: "Refraction Bolters",
    ruling:
      "\nIf this is used on an attack with go again, you will only gain 1 action point upon resolution as multiple instances of go again do not stack.\n\u203B\n You decide if you want to destroy Refraction Bolters after the attack has hit and the damage is dealt.",
    cardImage: require("./images/RefractionBolters.png"),
  },
  {
    name: "Biting Blade",
    ruling:
      "\nThe first line only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\n\u203B\n The second line affects the base power of all weapons you control. It gives a +1{p} bonus to all weapons you control, including the current attack and any additional attacks that weapon may make this turn.",
    cardImage: require("./images/BitingBlade.png"),
  },
  {
    name: "Driving Blade",
    ruling:
      "\nThis only effects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.\n\u203B\n The weapon attack has go again regardless if it hits.",
    cardImage: require("./images/DrivingBlade.png"),
  },
  {
    name: "Ironsong Determination",
    ruling:
      "\nTThis affects all weapon attacks from target weapon this turn not just the next attack.\n\u203B\n An attack with Dominate cannot be defended with more than 1 card from hand.",
    cardImage: require("./images/IronsongDetermination.png"),
  },
  {
    name: "Ironsong Response",
    ruling:
      "\nIronsong Response has no card text if reprise is not active but can still be played. It simply won’t do anything on resolution.\n\u203B\n This only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.",
    cardImage: require("./images/IronsongResponse.png"),
  },
  {
    name: "Nature’s Path Pilgrimage",
    ruling:
      "\nThe attack does not gain go again. Nature’s Path Pilgrimage requires an action point to use and provides an action point from go again upon resolution.\n\u203B\n This only affects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.\n\u203B\n The ability only triggers if you have no cards in your arsenal at the time the attack hits.\n\u203B\n You must place the card in your arsenal if it is an action. It is not optional.",
    cardImage: require("./images/NaturesPathPilgrimage.png"),
  },
  {
    name: "Overpower",
    ruling:
      "\nThis only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.",
    cardImage: require("./images/Overpower.png"),
  },
  {
    name: "Rout",
    ruling:
      "\nThis only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\n\u203B\n If reprise is active, you can only play Rout if there is a legal target.\n\u203B\n The defense value of a defending card removed from the chain link is not included in damage calculation.\n\u203B\n A defense reaction card that is returned to hand by Rout, can be replayed.",
    cardImage: require("./images/Rout.png"),
  },
  {
    name: "Sharpen Steel",
    ruling:
      "\nThe attack does not gain go again. Sharpen Steel requires an action point to use and provides an action point from go again upon resolution.\n\u203B\n This only affects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.",
    cardImage: require("./images/SharpenSteel.png"),
  },
  {
    name: "Singing Steelblade",
    ruling:
      "\nYou may only play Singing Steelblade in your deck if your hero is Dorinthea Ironsong or Dorinthea (young hero).\n\u203B\n This only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\n\u203B\n A combat chain is made up of one of more chain links. The banished card can only be played on the chain link Singing Steelblade was played.\n\u203B\n You may elect not to banish a card when searching, however you still must shuffle your deck.\n\u203B\n The card played from the banished zone goes to the graveyard upon resolution.",
    cardImage: require("./images/SingingSteelblade.png"),
  },
  {
    name: "Steelblade Shunt",
    ruling:
      "\nThe damage cannot be blocked but it can be prevented by a prevention effect.",
    cardImage: require("./images/SteelbladeShunt.png"),
  },
  {
    name: "Steelblade Supremacy",
    ruling:
      "\nYou may only have Steelblade Supremacy in your deck if your hero is Dorinthea Ironsong or Dorinthea (young hero).\n\u203B\n This affects all weapon attacks from target weapon this turn not just the next attack.",
    cardImage: require("./images/SteelbladeSupremacy.png"),
  },
  {
    name: "Stroke of Foresight",
    ruling:
      "\nThis only affects the current weapon attack. It will not affect weapon attacks beyond the current weapon attack.\n\u203B\n You use the reprise ability at the time the attack reaction resolves. (assuming reprise is active)\n\u203B\n If you have no cards in hand at the time you play this with reprise active, you still draw a card then immediately put the card on the top or bottom of your deck.\n\u203B\n You draw a card then immediately put a card from your hand on the top or bottom of your deck. There is no priority between drawing the card and putting a card on the top or bottom of your deck.",
    cardImage: require("./images/StrokeOfForesight.png"),
  },
  {
    name: "Warrior’s Valor",
    ruling:
      "\nThis only affects the next weapon attack. It will not affect weapon attacks beyond the next weapon attack.",
    cardImage: require("./images/WarriorsValor.png"),
  },
  {
    name: "Arcanite Skullcap",
    ruling:
      "\nYou may have multiple instances of arcane barrier.\n\u203B\n You must pay {r}{r}{r} to prevent arcane damage even if only one point of arcane damage would be prevented.\n\u203B\n The prevention does not carry over even if you only prevent one arcane damage.\n\u203B\n Arcanite Skullcap always has battleworn, even if you are on higher or lower {h} than your opponent.\n\u203B\n Arcanite Skullcap gains the bonus if there is at least one opponent on less {h}. If there are multiple opponents on less {h}, arcanite skullcap still only gains the bonus once.\n\u203B\n If your {h} becomes higher or lower after defending but before damage calculation, the value of {d} will change accordingly.",
    cardImage: require("./images/ArcaniteSkullcap.png"),
  },
  {
    name: "Bracers of Belief",
    ruling:
      "\nIf there are no cards left in deck, the attack will not gain any power, this is because of the “If you do” clause.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/BracersOfBelief.png"),
  },
  {
    name: "Mage Master Boots",
    ruling:
      "\nIf this is used on a ‘non-attack’ action card with go again, you will only gain 1 action point upon resolution as multiple instances of go again do not stack.\n\u203B\n This is an action. It must be activated before you play the ‘non-attack’ action card.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/MageMasterBoots.png"),
  },
  {
    name: "Talismanic Lens",
    ruling:
      "\nTalismanic Len’s activated ability is an instant. You may activate it any time you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/TalismanicLens.png"),
  },
  {
    name: "Vest of the First Fist",
    ruling:
      "\nYou choose if you want to destroy Vest of the First Fist after the attack action hits (during chain link resolution).\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/VestOfTheFirstFist.png"),
  },
  {
    name: "Art of War",
    ruling:
      "\nYou must choose the modes as you play Art of War.\n\u203B\n You cannot choose the same mode more than once.\n\u203B\n You must choose two modes.\n\u203B\n Defending with an attack action card from arsenal still follows normal timing restrictions. You must defend with the card during the defending window.\n\u203B\n Cards without an attack or defense value cannot gain attack or defense.",
    cardImage: require("./images/ArtOfWar.png"),
  },
  {
    name: "Back Alley Breakline",
    ruling:
      "\nThe following are zones in this game: Hero, Weapon, Equipment, Chain, Pitch, Arsenal, Deck, Graveyard, Banished and Arena.\n\u203B\n It must be placed face up into a zone from your deck. Revealing it face up on top of your deck does not count as it is not put into a different zone from your deck.",
    cardImage: require("./images/BackAlleyBreakline.png"),
  },
  {
    name: "Chains of Eminence",
    ruling:
      "\nYou name the card when the ability resolves. Players can respond to Chains of Eminence being played, but not after the card has been named.\n\u203B\n You may still put the named card in your arsenal or reveal it to pay additional costs.\n\u203B\n Auras stay in the arena until they are destroyed.",
    cardImage: require("./images/ChainsOfEminence.png"),
  },
  {
    name: "Command and Conquer",
    ruling:
      "\nThe destroyed card is put into its owner’s graveyard.\n\u203B\n Chain link is different from combat chain. If another attack is played after Command and Conquer in the same combat chain, defense reactions can be played on that attack.",
    cardImage: require("./images/CommandAndConquer.png"),
  },
  {
    name: "Eirina's Prayer",
    ruling:
      "\nIf you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n If you are about to take arcane damage you may use arcane barrier to prevent before the prevention from Eirina's Prayer.\n\u203B\n If there is no cards in deck, Eirina’s Prayer will not get any minus as there is no pitch value to reveal, It will still prevent the next X arcane damage.\n\u203B\n The pitch value of a card is located in the top left corner.",
    cardImage: require("./images/EirinasPrayer.png"),
  },
  {
    name: "Enchanting Melody",
    ruling:
      "\nIf you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n If you are about to take arcane damage you may use arcane barrier to prevent first before this prevention.\n\u203B\n Loss of life does not count as being dealt damage.\n\u203B\n Enchanting Melody is a ‘non-attack’ action therefore it will prevent itself from being destroyed the turn you play it.",
    cardImage: require("./images/EnchantingMelody.png"),
  },
  {
    name: "Eye of Ophidia",
    ruling:
      "\nYou may not defend with this card. (It does not have a defense value)\n\u203B\n You must have a cost to pay to pitch this card. You cannot pitch this card without a cost to pay.\n\u203B\n The opt will resolve before the card or effect you pay for resolves.\nYou may only have 1 Eye of Ophidia in your deck including cards in your registered 80-card pool in constructed tournaments and only 1 Eye of Ophidia in your deck in limited tournaments.",
    cardImage: require("./images/EyeOfOphidia.png"),
  },
  {
    name: "Fate Foreseen",
    ruling:
      "\nFate Foreseen can only be played in the reaction step of a combat chain.\n\u203B\n Once Fate Foreseen resolves, you get to opt before deciding whether to play additional cards in the reaction step.",
    cardImage: require("./images/FateForseen.png"),
  },
  {
    name: "Lead the Charge",
    ruling:
      "\nIf the action has go again you will end up with 2 action points once that card resolves.\n\u203B\n An action point allows you to play action cards and action activated abilities as they require an action point to play. (Not to be confused with resource points which are used to pay costs)\n\u203B\n Lead the Charge looks at the base cost of the action card. Modifiers do not affect this.",
    cardImage: require("./images/LeadTheCharge.png"),
  },
  {
    name: "Life for a Life",
    ruling:
      "\nThe green symbol on Life for a Life is your hero's life.\n\u203B\n Life for a Life checks if you have less life than your opponent at the time you play it.\n\u203B\n Changes to a hero's life after the card has been played does not cause Life for a Life to gain nor lose go again.",
    cardImage: require("./images/WarriorsValor.png"),
  },
  {
    name: "Moon Wish",
    ruling:
      "\nYou may only use Moon Wish’s alternative cost if you have a card in hand to put on top of your deck.\n\u203B\n If Moon Wish hits, you search your deck and may put a Sun Kiss into your hand. You still require an action point to play Sun Kiss.\n\u203B\n Searching your deck for Sun Kiss is not an optional effect, so even if you fail to find, or know that you have no Sun Kiss in your deck, you must still shuffle your deck.\n\u203B\n If there is an effect that increases the cost of Moon Wish, you must still pay it even if you use Moon Wish’s alternative cost.",
    cardImage: require("./images/MoonWish.png"),
  },
  {
    name: "Plunder Run",
    ruling:
      "\nThe first effect of Plunder Run checks on the next attack action card to hit, not the next attack action played.",
    cardImage: require("./images/PlunderRun.png"),
  },
  {
    name: "Pursuit of Knowledge",
    ruling:
      "\nThe blue symbol on Pursuit of Knowledge is your hero's intellect.\n\u203B\n You draw cards up to your intellect before end of turn effects end. In this case you will draw an additional card during the end phase from the intellect buff if Pursuit of Knowledge hit.",
    cardImage: require("./images/PursuitOfKnowledge.png"),
  },
  {
    name: "Ravenous Rabble",
    ruling:
      "\nIf there are no cards in deck, you can still play Ravenous Rabble and its {p} will be 5.",
    cardImage: require("./images/RavenousRabble.png"),
  },
  {
    name: "Rifting",
    ruling:
      "\nThe ‘non-attack’ action card does not need to be played straight away\n\u203B\n You may elect to still play it as normal, however if you do, you cannot play another ‘non-attack’ action card as an instant as this only applies to the next ‘non-attack’ action card.",
    cardImage: require("./images/Rifting.png"),
  },
  {
    name: "Rusted Relic",
    ruling:
      "\nRusted Relic requires an action point to play as it is an action card.\n\u203B\n Items stay in the arena until they are destroyed.\n\u203B\n You can have multiple instances of arcane barrier.\n\u203B\n You may not defend with Rusted Relic (from your hand) as it does not have a defense value.",
    cardImage: require("./images/RustedRelic.png"),
  },
  {
    name: "Sun Kiss",
    ruling:
      "\nThe green symbol on Sun Kiss is your hero's life.\n\u203B\n Sun Kiss requires an action point to play as it is an action.",
    cardImage: require("./images/SunKiss.png"),
  },
  {
    name: "Vigor Rush",
    ruling:
      "\nIf you play a ‘non-attack’ action card after you’ve attacked with Vigor Rush but before chain link resolution, it will gain go again.",
    cardImage: require("./images/VigorRush.png"),
  },
  {
    name: "Dash",
    ruling:
      "\nThe item must be chosen before you present your deck.\n\u203B\n The card is considered in your deck when counting the minimum sized deck (i.e, once your item is chosen, you can have 59 cards in deck to present in constructed or 29 cards for sealed deck/booster draft).\n\u203B\n The item starts with the appropriate counters as though it had entered the arena.\n\u203B\n You may elect to not start with an item in play.",
    cardImage: require("./images/Dash.png"),
  },
  {
    name: "Teklo Plasma Pistol",
    ruling:
      "\nYou may use the second ability even if it already has one or more steam counters on it, however it will not put a steam counter on it.\n\u203B\n You can attack with this weapon more than once per turn provided you have the action points.",
    cardImage: require("./images/TekloPlasmaPistol.png"),
  },
  {
    name: "Teklo Foundry Heart",
    ruling:
      "\nYou may only activate this once, even if you have boosted multiple times in a turn.\n\u203B\n Since this is an action, the combat chain must be empty when this is activated. You may close the combat chain after your boost attack but before activating this)\n\u203B\n You may use this even if you have less than 2 cards in your deck.",
    cardImage: require("./images/TekloFoundryHeart.png"),
  },
  {
    name: "Achilles Accelerator",
    ruling:
      "\nAn action point allows you to play action cards and action activated abilities as they require an action point to play. (Not to be confused with resource points which are used to pay costs)\n\u203B\n The boost does not need to be successful. You can use Achilles Accelerator after banishing a non-Mechanologist card from a boost cost.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/AchillesAccelerator.png"),
  },
  {
    name: "Aether Sink",
    ruling:
      "\nAether Sink requires an action point to play as it is an action.\n\u203B\n You can have multiple instances of arcane barrier.\n\u203B\n You may not defend with Aether Sink (from hand) as it does not have a defense value.\n\u203B\n You must pay {r}{r} to prevent arcane damage even if only one point of arcane damage would be prevented.\n\u203B\n The prevention does not carry over even if you only prevent one arcane damage.\n\u203B\n You may use the action even if it already has one or more steam counters on it, however it will not put a steam counter on it.\n\u203B\n If you activate Aether Sink's second ability multiple times in the same turn, it will gain multiple instances of arcane barrier 2.",
    cardImage: require("./images/AetherSink.png"),
  },
  {
    name: "Cognition Nodes",
    ruling:
      "\nCognition Nodes requires an action point to play as it is an action.\n\u203B\n You may not defend with Cognition Nodes (from your hand) as it does not have a defense value.\n\u203B\n You may use the action ability even if it already has one or more steam counters on it, however it will not put a steam counter on it.\n\u203B\n The attack still counts as an attack and a chain link on the combat chain even when it is put on the bottom of your deck.",
    cardImage: require("./images/CognitionNodes.png"),
  },
  {
    name: "Convection Amplifier",
    ruling:
      "\nConvection Amplifier requires an action point to play as it is an action.\n\u203B\n You may not defend with Convection Amplifier (from your hand) as it does not have a defense value.\n\u203B\n You can use the Action more than once per turn as long as it has a steam counter on it as the action is not limited to once per turn.\n\u203B\n Using this action requires an empty combat chain. You can close the combat chain after a chain link has resolved.",
    cardImage: require("./images/AetherSink.png"),
  },
  {
    name: "Dissipation Shield",
    ruling:
      "\nDissipation Shield requires an action point to play as it is an action.\n\u203B\n You may not defend with Dissipation Shield (from your hand) as it does not have a defense value.\n\u203B\n If you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n This can prevent any type of damage, including arcane damage.\n\u203B\n This cannot prevent loss of life.\n\u203B\n You may activate the instant ability anytime you have priority including when the trigger is on the stack.",
    cardImage: require("./images/DissipationShield.png"),
  },
  {
    name: "High Octane",
    ruling:
      "\nAn action point allows you to play action cards and action activated abilities as they require an action point to play. (Not to be confused with resource points which are used to pay costs)\n\u203B\n The boost does not need to be successful. You will still gain an action point if you banish a non-Mechanologist card from a boost cost.\n\u203B\n You draw a card when this card resolves, not whenever you boost a card this turn.",
    cardImage: require("./images/HighOctane.png"),
  },
  {
    name: "Hyper Driver",
    ruling:
      "\nHyper Driver requires an action point to play as it is an action.\n\u203B\n You may not defend with Hyper Driver (from your hand) as it does not have a defense value.\n\u203B\n The effect is not optional, you must remove a steam counter and gain {r} when you boost, including when your boost is unsuccessful.",
    cardImage: require("./images/HyperDriver.png"),
  },
  {
    name: "Induction Chamber",
    ruling:
      "\nInduction Chamber requires an action point to play as it is an action.\n\u203B\n You may not defend with Induction Chamber (from hand) as it does not have a defense value.\n\u203B\n You may use the action even if it already has one or more steam counters on it, however it will not put a steam counter on it.",
    cardImage: require("./images/InductionChamber.png"),
  },
  {
    name: "Locked and Loaded",
    ruling:
      "\nThe boost does not need to be successful. You will still opt 1 if you banish a non-Mechanologist card from a boost cost.",
    cardImage: require("./images/LockedAndLoaded.png"),
  },
  {
    name: "Maximum Velocity",
    ruling:
      "\nYou cannot play this card if you have not boosted 3 or more times this turn.\n\u203B\n You may still pitch or defend with this card even if you have not boosted 3 or more times this turn.",
    cardImage: require("./images/MaximumVelocity.png"),
  },
  {
    name: "Optekal Monocle",
    ruling:
      "\nOptekal Monocle requires an action point to play as it is an action.\n\u203B\n You may not defend with Optekal Monocle (from hand) as it does not have a defense value.\n\u203B\n You can use the action ability more than once per turn as long as it has a steam counter on it. It is not once per turn.\n\u203B\n Using this action requires an empty combat chain. You can close the combat chain after a chain link has fully resolved.",
    cardImage: require("./images/OptekalMonocle.png"),
  },
  {
    name: "Over Loop",
    ruling:
      "\nOver Loop still counts as an attack and a chain on the combat chain when it is put onto the bottom of your deck.\n\u203B\n Over Loop still resolves and gives you an action point if it had go again when it's put on the bottom of your deck.",
    cardImage: require("./images/HyperDriver.png"),
  },
  {
    name: "Pedal to the Metal",
    ruling:
      "\nIt does not need to be the next attack on the combat chain. It will still apply to the next attack even if the chain was closed in between.\n\u203B\n This affects all types of attacks including weapon attacks.",
    cardImage: require("./images/PedalToTheMedal.png"),
  },
  {
    name: "Pour the Mold",
    ruling:
      "\nYou may elect not to put a Mechanologist item into play when this card resolves.\n\u203B\n The cost of a card is located on the top right corner.\n\u203B\n The boost does not need to be successful. The item will still come into play with an additional steam counter on it if a non-Mechanologist card is boosted.\n\u203B\n If you have boosted, the item comes into play with an additional steam counter on it, this cannot be responded to.\n\u203B\n The item is considered to have entered the arena.",
    cardImage: require("./images/PourTheMold.png"),
  },
  {
    name: "Spark of Genius",
    ruling:
      "\nYou may only play Spark of Genius in your deck if your hero is Dash, Inventor Extraordinaire, or Dash (young hero).\n\u203B\n X can be 0.\n\u203B\n The value of X is 0 if it has not been defined, such as when it is in your hand.\n\u203B\n The value of X must be the same.\n\u203B\n You must pay double the cost of X. For example if you want to search for a card that cost 2, you must pay 4 for Spark of Genius.\n\u203B\n The cost of a card is located on the top right corner.\n\u203B\n The boost does not need to be successful. You will still draw a card if boost was unsuccessful.\n\u203B\n The item is considered to have entered the arena.",
    cardImage: require("./images/SparkOfGenius.png"),
  },
  {
    name: "Teklo Core",
    ruling:
      "\nYou may only play Teklo Core in your deck if your hero is Dash, Inventor Extraordinaire, or Dash (young hero).\n\u203B\n Teklo Core requires an action point to play as it is an action.\n\u203B\n You may not defend with Teklo Core (from hand) as it does not have a defense value.\n\u203B\n The effect is not optional. You must remove a steam counter and gain {r}{r} at the beginning of your action phase.",
    cardImage: require("./images/TekloCore.png"),
  },
  {
    name: "Azalea",
    ruling:
      "\nIf you have no cards in deck and you activate Azalea's hero ability, it will put the card you placed on the bottom, back into the arsenal face up.\n\u203B\n If there is no card in your arsenal when this effect resolves, you do not put the top card into your arsenal.\n\u203B\n You may activate this even when you have no card in arsenal. When it resolves you do not put the top card of your deck into your arsenal.",
    cardImage: require("./images/Azalea.png"),
  },
  {
    name: "Death Dealer",
    ruling:
      "\nYou cannot attack with this weapon.\n\u203B\n You may use this ability even when you have a card in your arsenal, however you cannot put an arrow card from your hand into your arsenal or draw a card.\n\u203B\n An arrow card has the subtype “arrow” and is located at the bottom middle of the card.\n\u203B\n An arrow can be played from arsenal even if it wasn’t a bow that placed it in the arsenal.\n\u203B\n This does not give the arrow go again. (The action of Death Dealer has go again)",
    cardImage: require("./images/DeathDealer.png"),
  },
  {
    name: "Skullbone Crosswrap",
    ruling:
      "\nTurning a face down card face up is part of the cost. You cannot use Skullbone Crosswrap if you do not have a card in arsenal or the card is not face down.\n\u203B\n A face down card is a card with the back part of the card facing up. When you put a card into your arsenal at the end of turn or with reload, the card is face down.\n\u203B\n You may have multiple instances of arcane barrier.",
    cardImage: require("./images/SkullboneCrosswrap.png"),
  },
  {
    name: "Bull's Eye Bracers",
    ruling:
      "\nYou may activate Bull’s Eye Bracers if you have a card in your arsenal, however it will not put an arrow into your arsenal or give anything +{p}.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/BullsEyeBracers.png"),
  },
  {
    name: "Endless Arrow",
    ruling:
      "\nEndless Arrow is still considered an attack that hit and a chain link on the combat chain when it's returned to your hand.\n\u203B\n Endless Arrow will still require an action point (and to be played from arsenal) if you are attempting to replay the Endless Arrow returned to your hand.",
    cardImage: require("./images/EndlessArrow.png"),
  },
  {
    name: "Hamstring Shot",
    ruling:
      "\nThis affects both attack action cards and weapon attacks.\n\u203B\n This does not change the base cost of the attack.\n\u203B\n If an attack has a cost reduction clause, the additional {r} from Hamstring Shot can be reduced. Effects that increase cost are applied first, then effects that reduce costs.",
    cardImage: require("./images/HamstringShot.png"),
  },
  {
    name: "Head Shot",
    ruling:
      "\nIt only gains the +2{p} until end of turn. If you do not attack with Head Shot on the same turn, it won’t have the bonus the following turn.\n\u203B\n Head Shot must be placed into your arsenal face up, turning a face down Head Shot in arsenal face up will not grant the bonus.",
    cardImage: require("./images/HeadShot.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Rapid Fire",
    ruling:
      "\nArrows are still required to be played from arsenal, this card does not bypass that restriction.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Red in the Ledger",
    ruling:
      "\nYou may only play Red in the Ledger in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n The affected player can still play and activate instant and reaction cards as they are not actions.\n\u203B\n Multiple action points do not get around this ability. The affected player may only play or activate 1 action even if they have additional action points.\n\u203B\n Actions played as though they were an instant still count as action cards. Playing an action as though it was an instant does not get around Red in the Ledgers ability.",
    cardImage: require("./images/RedInTheLedger.png"),
  },
  {
    name: "Ridge Rider Shot",
    ruling:
      "\nRidge Rider Shot must be placed into your arsenal face up, turning a face down Ridge Rider Shot in arsenal face up will not grant the bonus.",
    cardImage: require("./images/RidgeRiderShot.png"),
  },
  {
    name: "Salvage Shot",
    ruling:
      "\nSalvage Shot is still considered an attack that hit and a chain link on the combat chain even when it is put on the bottom of your deck.\n\u203B\n Putting Salvage Shot on the bottom of your deck is not optional.",
    cardImage: require("./images/SalvageShot.png"),
  },
  {
    name: "Searing Shot",
    ruling:
      "\nThe green symbol on Searing Shot is a hero's life.\n\u203B\n The loss of life cannot be defended or prevented.",
    cardImage: require("./images/SearingShot.png"),
  },
  {
    name: "Silver the Tip",
    ruling:
      "\nIf you have a card in arsenal, Silver the Tip can still be played, however it will not do anything beyond replenishing your action point from go again.\n\u203B\n You do not look at the top 2/3/4 cards if you have a card in arsenal.\n\u203B\n You do not have to put an arrow card into your arsenal.",
    cardImage: require("./images/SilverTheTip.png"),
  },
  {
    name: "Take Cover",
    ruling:
      "\nYou may still play Take Cover with an arsenal in play.\n\u203B\n If you play Take Cover from your arsenal, you may reload when Take Cover resolves.\n\u203B\n Take Cover’s reload happens before damage calculation so you may play the card you reloaded from arsenal before damage calculation. For example you may reload another defense reaction and play that to the same chain link you played Take Cover.",
    cardImage: require("./images/TakeCover.png"),
  },
  {
    name: "Three of a Kind",
    ruling:
      "\nYou still need to pay the cost and action points to play cards out of your arsenal.\n\u203B\n You cannot play any cards except cards from arsenal, this includes cards from hand, banished zone or deck.\n\u203B\n The restriction applies to all card types. You cannot play instants or attack reactions unless they are played from your arsenal.\n\u203B\n You may still activate cards, such as weapons, equipment, hero abilities, and items.",
    cardImage: require("./images/ThreeOfAKind.png"),
  },
  {
    name: "Viserai",
    ruling:
      "\nViserai's hero ability is not once per turn. You can create multiple Runechants in a single turn with his ability.\n\u203B\n The non-attack action card does not have to be a Runeblade card.\n\u203B\n The following are counted as Runeblade cards: Runeblade attack action, Runeblade action, Runeblade Instant, Runeblade attack reaction and Runeblade defense reaction.",
    cardImage: require("./images/Viserai.png"),
  },
  {
    name: "Nebula Blade",
    ruling:
      "\nNebula Blade can only get the power bonus once per turn even if you played multiple ‘non-attack’ action cards.\n\u203B\n If you play a ‘non-attack’ action card after you’ve attacked with Nebula Blade but before it does damage, it will still get the power bonus.",
    cardImage: require("./images/NebulaBlade.png"),
  },
  {
    name: "Grasp of the Arknight",
    ruling:
      "\nThe cost checks how many runechant tokens you have at the time you activate it, it does not include the runechant token you are about to make.\n\u203B\n You cannot use this ability if you cannot pay the required costs. (You cannot sink resources into this if you cannot pay the full cost)",
    cardImage: require("./images/GraspOfTheArknight.png"),
  },
  {
    name: "Crown of Dichotomy",
    ruling:
      "\nThis requires an action point to activate. It does not have go again.\n\u203B\n You must have two legal targets in order to use this.\n\u203B\n If one of the targets becomes illegal before resolution, it will still put the other target on top of the deck.",
    cardImage: require("./images/CrownOfDichotomy.png"),
  },
  {
    name: "Arknight Ascendancy",
    ruling:
      "\nYou may only play Arknight Ascendancy in your deck if your hero is Viserai, Rune Blood or Viserai (young hero).\n\u203B\n Dominate means the defending player cannot defend Arknight Ascendency with more than 1 card from their hand.",
    cardImage: require("./images/ArknightAscendency.png"),
  },
  {
    name: "Become the Arknight",
    ruling:
      "\nYou choose the mode at the time you play the card.\n\u203B\n Discarding the card happens on resolution of the of the card. If you cannot or choose not to discard a card, the effect will not resolve.\n\u203B\n You may elect not to put a card into your hand. If you do, you still shuffle your deck.\n\u203B\n You may not discard a non-action card, such as an instant.\n\u203B\n You cannot discard more than one card.",
    cardImage: require("./images/BecomeTheArknight.png"),
  },
  {
    name: "Bloodspill Invocation",
    ruling:
      "\nDamage from attacks and arcane damage both count as being dealt damage.\n\u203B\n If Bloodspill Invocation triggers but is destroyed before the resolution, it will still create the tokens. This is because the clause is not tied into being destroyed. (Not an “If you do”.)",
    cardImage: require("./images/BloodspillInvocation.png"),
  },
  {
    name: "Mordred Tide",
    ruling:
      "\nAn additional one Runechant is created for the entire effect creating Runechants. For example if you were to make three Runechant tokens from a single effect, it would instead create four.\n\u203B\n Multiple Mordred Tide effects will result in that many additional Runechants being created.\n\u203B\n If playing Mordred Tide would trigger Viserai’s ability, it would not create an additional Runechant as Mordred Tide would not have resolved by the time Viserai’s ability has.",
    cardImage: require("./images/MordredTide.png"),
  },
  {
    name: "Oath of the Arknight",
    ruling:
      "\nThis affects all types of Runeblade attacks including Runeblade Weapon attacks.",
    cardImage: require("./images/OathOfTheArknight.png"),
  },
  {
    name: "Read the Runes",
    ruling:
      "\nRead the Runes is an action and requires an action point to play. It does not have go again.",
    cardImage: require("./images/ReadTheRunes.png"),
  },
  {
    name: "Reduce to Runechant",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Reduce to Runechant’s cost to play it.\n\u203B\n The Runechant Reduce to Runechant creates is not counted when calculating the reduction.\n\u203B\n Effects that increase cost are applied first, then effects that reduce costs. If a card increases the cost of Reduce to Runechant, if you control enough Runechants the cost of Reduce to Runechant can still be 0.",
    cardImage: require("./images/ReduceToRunechant.png"),
  },
  {
    name: "Spellblade Assault",
    ruling:
      "\nThe Runechant tokens created do not trigger or get destroyed by Spellblade Assault, as it is already played at the point the Runechant tokens are created.",
    cardImage: require("./images/SpellbladeAssault.png"),
  },
  {
    name: "Spellblade Strike",
    ruling:
      "\nThe Runechant token created does not trigger or get destroyed by Spellblade Strike, as it's already played at the point the Runechant token is created.",
    cardImage: require("./images/SpellbladeStrike.png"),
  },
  {
    name: "Tome of the Arknight",
    ruling:
      "\nIf the revealed cards do not meet the criteria, they are returned to the top of the deck in the same order.\n\u203B\n Instants, attack reactions, defense reactions and resources are not ‘non-attack’ action cards.",
    cardImage: require("./images/TomeOfTheArknight.png"),
  },
  {
    name: "Kano",
    ruling:
      "\nIf the card has go again you gain an action point when the card resolves. Note: You cannot gain an action point on an opponent's turn.\n\u203B\n The card is banished face up.\n\u203B\n You do not have to play the card immediately. You may play it anytime during the turn you banished it as long as you have priority.\n\u203B\n The card remains in the banished zone face up if it is not played before end of turn.",
    cardImage: require("./images/Kano.png"),
  },
  {
    name: "Crucible of Aetherweave",
    ruling:
      "\nYou cannot attack with this weapon.\n\u203B\n If the next card you play does not have an effect that deals arcane damage, it will not count and the next card with an effect that deals arcane damage will be affected still.\n\u203B\n You must activate this before playing the card in order for the card to gain the bonus.",
    cardImage: require("./images/CrucibleOfAetherweave.png"),
  },
  {
    name: "Storm Striders",
    ruling:
      "\nYou may have multiple instances of arcane barrier.\n\u203B\n You must pay {r}{r} to prevent arcane damage even if only one point of arcane damage would be prevented.\n\u203B\n The prevention does not carry over even if you only prevent one arcane damage.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/StormStriders.png"),
  },
  {
    name: "Robe of Rapture",
    ruling:
      "\nThis requires an action to activate. This does not have go again.",
    cardImage: require("./images/RobeOfRapture.png"),
  },
  {
    name: "Absorb in Aether",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Absorb in Aether’s cost to play it.\n\u203B\n The card must be played during your opponent’s turn after Absorb in Aether resolves to gain the buff.\n\u203B\n You cannot play this card during your own turn or without an attack to defend during the reaction window.",
    cardImage: require("./images/AbsorbInAether.png"),
  },
  {
    name: "Aether Flare",
    ruling:
      "\nAether Flare does not have go again. The next card you play that benefits from this effect would require an action point or be played as an instant.\n\u203B\n If the next card you play does not have an effect that deals arcane damage, it will not gain this modifier however the next card played this turn that has an effect that deals arcane damage will still gain the bonus.",
    cardImage: require("./images/AetherFlare.png"),
  },
  {
    name: "Aether Spindle",
    ruling:
      "\nYou do not Opt if Aether Spindle does not deal arcane damage.\n\u203B\n You cannot respond to the ability after it has done damage but before the opt. This is because Aether Spindle does not create a trigger on dealing damage.",
    cardImage: require("./images/AetherSpindle.png"),
  },
  {
    name: "Blazing Aether",
    ruling:
      "\nYou may only play Blazing Aether in your deck if your hero is Kano, Dracai of Aether or Kano (young hero).",
    cardImage: require("./images/BlazingAether.png"),
  },
  {
    name: "Forked Lightning",
    ruling:
      "\nModifiers will affect both damage effects. For example if the next arcane damage would deal plus one, Forked Lightning would deal 3 arcane damage twice thus dealing 6 arcane damage total.\n\u203B\n Arcane barrier 1 can only stop one arcane damage from Forked Lightning, as it's considered a single source of damage.",
    cardImage: require("./images/ForkedLightning.png"),
  },
  {
    name: "Index",
    ruling:
      "\nYou must select one card to put on the top of your deck. (Provided there is at least one card to look at.)\n\u203B\n You can play this if there is less than the number of cards in your deck. You would look at as many as you can. For example if you only have 2 cards in deck, you would look at both of them and select one to put on the top of your deck.\n\u203B\n This is an action and requires an action point to play. Index does not have go again.",
    cardImage: require("./images/Index.png"),
  },
  {
    name: "Lesson in Lava",
    ruling:
      "\nYou may only play Lesson in Lava in your deck if your hero is Kano, Dracai of Aether or Kano (young hero).\n\u203B\n You must deal damage with Lesson in Lava to search your deck. You cannot search for a 0 cost if Lesson in Lava did not deal damage.\n\u203B\n You may elect not to put a card on top of your deck, you still must shuffle your deck after.\n\u203B\n The resource cost is located in the top right corner of a card.",
    cardImage: require("./images/LessonInLava.png"),
  },
  {
    name: "Reverberate",
    ruling:
      "\nIf you do not play the banished card, it stays in the banished zone.\n\u203B\n The resource cost is located in the top right corner of a card.",
    cardImage: require("./images/Reverberate.png"),
  },
  {
    name: "Sonic Boom",
    ruling:
      "\nIf you do not play the banished card, it stays in the banished zone.\n\u203B\n If the card is reduced by more than the card's resource cost, it will cost 0 to play. The cost cannot be negative.\n\u203B\n You cannot respond to the ability after it has done damage but before the rest of the card has resolved. This is because Sonic boom does not create a trigger on dealing damage.",
    cardImage: require("./images/SonicBoom.png"),
  },
  {
    name: "Stir the Aetherwinds",
    ruling:
      "\nThis affects the next wizard non-attack action then checks if it has an effect that deals arcane damage. Even if the next wizard non-attack action can’t do arcane damage, the damage modifier effect will not carry over.",
    cardImage: require("./images/StirTheAetherwinds.png"),
  },
  {
    name: "Tome of Aetherwind",
    ruling:
      "\nYou may choose the same mode more than once\n\u203B\n If you choose the first mode twice, the next card you play with an effect that deals arcane damage, instead deals that much arcane damage plus 2.\n\u203B\n Tome of Aetherwind is an action and requires an action point. It does not have go again.",
    cardImage: require("./images/TomeOfAetherwind.png"),
  },
  {
    name: "Benji",
    ruling:
      "\nBenji looks at the current power of the attack action, not the base power.\n\u203B\n If an attack reaction raises the power to beyond 2, the attack can then be defended by cards in hand, however since the defending window would already have been passed, the defending player would only be able to use defense reactions at this point.\n\u203B\n The +1{p} is not optional. It does affect weapon attacks.",
    cardImage: require("./images/Benji.png"),
  },
  {
    name: "Data Doll MKII",
    ruling:
      "\nData Doll has 3 intellect, that means you only draw up to 3 cards (instead of the more common 4) when you start the game and draw up to your intellect at the end of your turn.\n\u203B\n This is not a Once per Turn effect. Every mechanologist item with cost 2 or less that is put into your banished zone from your deck is put into the arena. This effect is not optional.",
    cardImage: require("./images/DataDoll.png"),
  },
  {
    name: "Ira",
    ruling:
      "\nIra, Crimson Haze now has the sub-type young. (Previous editions errata’d to “Ninja Hero - Young” [IRA001-P] [HER000-P])\n\u203B\n The second attack does not need to be in the same combat chain.\n\u203B\n The second attack can be a weapon or attack action.\n\u203B\n This ability is passive, there is no choice in the power bonus.",
    cardImage: require("./images/Ira.png"),
  },
  {
    name: "Kassai",
    ruling:
      "\nThis will trigger even if you only hit with one weapon attack as long as you attacked 2 or more times with weapons this turn.\n\u203B\n Attacking with the same weapon twice still counts as attacking 2 times with weapons.",
    cardImage: require("./images/Kassai.png"),
  },
  {
    name: "Kavdaen",
    ruling:
      "\nKavdeen is a Merchant Hero meaning his deck can only contain Merchant cards and generic cards.\n\u203B\n The green symbol on Kavdaen is life.\n\u203B\n The second clause of gaining life is checked after the first clause, therefore if the life loss causes both heroes to be the same life, then no life will be gained from the second part of the ability.",
    cardImage: require("./images/Kavdaen.png"),
  },
  {
    name: "Kayo",
    ruling:
      "\nThis ability is not optional.\n\u203B\n Base power is the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n The number is rounded down after being halved for example 7 becomes 3 and 9 becomes 4.",
    cardImage: require("./images/Kayo.png"),
  },
  {
    name: "Shiyana",
    ruling:
      "\nWhen Shiyana copies a hero, it does not change the amount of damage she has taken. For example, if Shiyana has taken 16 damage while at 20 life, then copies a hero that has 15 base life, she will lose the game due to having taken equal or more damage than her life.\n\u203B\n You may play the specialization cards regardless of what hero you are. You do not need to be Shiyana or the respective hero to play them. (Only to have them in your deck)\n\u203B\n This effect is mandatory. Shiyana must target a hero and become a copy of that hero. (Shiyana can target herself which would turn all her cards into Shapeshifter cards)\n\u203B\n Only Shapeshifter, Generic, and cards with the specialization keyword may be added to your deck if Shiyana is your hero.",
    cardImage: require("./images/Shiyana.png"),
  },
  {
    name: "Aether Conduit",
    ruling:
      "\nYou cannot attack with this weapon.\n\u203B\n You require an action point to use this action. It does not have go again.\n\u203B\n Modifiers that affect the next card you play do not effect this as Aether Conduit is an activated ability, not a card being played.",
    cardImage: require("./images/AetherConduit.png"),
  },
  {
    name: "Cintari Saber",
    ruling:
      "\nIf Cintari Saber is defended by multiple attack action cards it would still only gain +1{p}.\n\u203B\n You may start the game with up to two Cintari Sabers in play as they are 1H.\n\u203B\n When a card references its own card name it only affects the actual card. For example when an attack action card defends a Cintari Saber only the Cintari Saber that was defended gains +1{p] not all Cintari Sabers.",
    cardImage: require("./images/CintariSaber.png"),
  },
  {
    name: "Talishar, the Lost Prince",
    ruling:
      "\nYou reveal what weapon you are using at the same time you reveal equipment and present your deck. (After heroes are revealed and pre-game procedure is done).\n\u203B\n When this card is destroyed, it is sent to your graveyard.\n\u203B\n Putting the rust counter on Talishar is part of the cost.\n\u203B\n This is a Generic Weapon and any class can start with this weapon in play. (Provided it’s part of your 80 cards you submitted)",
    cardImage: require("./images/Talishar.png"),
  },
  {
    name: "Plasma Barrel Shot",
    ruling:
      "\nYou may use the second ability even if it already has one or more steam counters on it, however it will not put a steam counter on it.\n\u203B\n Non-attack actions such as putting a steam counter on Plasma Barrel Shot requires an empty combat chain. Note: It is recommended to put a steam counter on Plasma Barrel Shot before attacking with attack actions.",
    cardImage: require("./images/PlasmaBarrelShot.png"),
  },
  {
    name: "Reaping Blade",
    ruling:
      "\nThe green symbol on Reaping Blade is life.\n\u203B\n This applies to all players, including the controller of Reaping Blade.\n\u203B\n If player A is on 18 life and player B is on 17 life and tries to gain 3 life, they will gain the full 3 life even though it would put them above player A’s life.\n\u203B\n Players can still play cards and effects that gain life however life would not be gained if they have more {h} than any other hero.",
    cardImage: require("./images/ReapingBlade.png"),
  },
  {
    name: "Mandible Claw",
    ruling:
      "\nEffects that modify the power of “cards you control” are not applied to a card discarded from hand. (Cards you control are cards in the arena, on the chain, equipment, weapons, and hero.)\n\u203B\n You may start the game with up to two Mandible Claw in play as they are 1H.",
    cardImage: require("./images/MandibleClaw.png"),
  },
  {
    name: "Zephyr Needle",
    ruling:
      "\nThe ability triggers at the time a card defends. If the trigger resolves but later the power of Zephyr Needle is greater than the defense value of the defending card, Zephyr Needle would still be destroyed when the combat chain closes.\n\u203B\n If the triggered ability is responded to, e.g. with an attack reaction that will make Zephyr Needle’s power greater than the defense value of the defending card, then Zephyr Needle would not be destroyed when the combat chain closes. Note: You cannot play attack reactions during the defending window.\n\u203B\n You may start the game with up to two Zephyr Needle in play as they are 1H.",
    cardImage: require("./images/ZephyrNeedle.png"),
  },
  {
    name: "Copper",
    ruling:
      "\nCopper is a token and is not part of your deck.\n\u203B\n You can activate as many Copper as you want per turn.\n\u203B\n Copper stays in the arena until destroyed.\nDestroying Copper is part of it’s cost.\n\u203B\n A Copper token may be represented by a small object such as a card sleeve or coin if a Copper token card is not available.",
    cardImage: require("./images/Copper.png"),
  },
  {
    name: "Runechant",
    ruling:
      "\nEach Runechant is its own source and therefore arcane barrier 1 can prevent arcane damage that would be dealt from multiple Runechants, provided you have the resources to pay for the prevention.\n\u203B\n Runechant is a token and is not part of your deck.\n\u203B\n The Runechant token remains in play until destroyed.\n\u203B\n When you play an attack action or attack with a weapon, you must destroy your Runechant auras if the trigger becomes a layer on the chain. It is not optional.\n\u203B\n A Runechant token may be represented by a small object such as a card sleeve or coin if a Runchant aura token card is not available.",
    cardImage: require("./images/Runechant.png"),
  },
  {
    name: "Quicken",
    ruling:
      "\nQuicken is a token and is not part of your deck.\n\u203B\n Quicken stays in the arena until destroyed.\n\u203B\n When you attack with an attack action card or weapon you must destroy Quicken. It is not optional.\n\u203B\n A Quicken token may be represented by a small object such as a card sleeve or coin if a Quicken token card is not available.\n\u203B\n Multiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
    cardImage: require("./images/Quicken.png"),
  },
  {
    name: "Zen State",
    ruling:
      "\nZen State is created by the card Find Center.\n\u203B\n Zen State is a token and is not part of your deck. (You can not put this in your deck.)\n\u203B\n Zen State prevents 1 damage each time any source would deal damage to your hero. Zen State can prevent damage from multiple different sources in the same turn.\n\u203B\n Removing a balance counter from Zen State is not optional.",
    cardImage: require("./images/ZenState.png"),
  },
  {
    name: "Gambler’s Gloves",
    ruling:
      "\nYou see the result of the die roll before deciding whether to use Glamber’s Gloves.\n\u203B\n If both players have a Gambler’s Gloves, the turn player decides the order of the triggers that are added to the chain.\n\u203B\n The hero that initially rolled the die is the one who rerolls it, regardless of who’s Gambler’s Gloves was used.\n\u203B\n Gambler’s Gloves can only be used to reroll a die when a card effect instructs a player to roll a 6 sided die. For example, Gambler’s Glove does not trigger if a player uses a 6 sided die to determine which card to randomly discard to Bloodrush Bellow.",
    cardImage: require("./images/GamblersGloves.png"),
  },
  {
    name: "Cash In",
    ruling:
      "\nYou cannot pay a portion of the alternate cost and a portion of resource cost.\n\u203B\n If you choose the alternative cost, you destroy the Coppers, Silvers or Gold as part of the cost and cannot respond to it.",
    cardImage: require("./images/CashIn.png"),
  },
  {
    name: "Coax a Commotion",
    ruling:
      "\nYou choose the modes after this has hit.\n\u203B\n You cannot choose the same mode twice.\n\u203B\n You may choose 0 modes.\n\u203B\n The green symbol on Coax a Commotion is life.",
    cardImage: require("./images/CoaxACommotion.png"),
  },
  {
    name: "Gorganian Tome",
    ruling:
      "\nYou cannot pitch Gorganian Tome as it does not have a pitch value.\n\u203B\n You cannot defend with Gorganian Tome as it does not have a defense value.\n\u203B\n Since Gorganian Tome is not in your graveyard at the time it resolves, it does not count itself.\n\u203B\n If another card’s effect needs to know Gorganian Tome's pitch value, such as Ravenous Rabble, Gorganian Tome is considered to have a pitch value of 0.",
    cardImage: require("./images/GorganianTome.png"),
  },
  {
    name: "Lunging Press",
    ruling: "\nYou cannot target a weapon attack with Lunging Press.",
    cardImage: require("./images/LungingPress.png"),
  },
  {
    name: "Promise of Plenty",
    ruling:
      "\nYou can respond to the ability by playing the card from arsenal (e.g. an instant) to make the arsenal empty before it resolves.",
    cardImage: require("./images/PromiseOfPlenty.png"),
  },
  {
    name: "Reinforce the Line",
    ruling:
      "\nYou can only target an attack action card that is defending. Cards that defended previous chains on the combat chain are still considered to be defending cards.\n\u203B\n You can target a defending attack action card on a previous chain link. It would not reduce the damage dealt on a chain link that has already resolved.\n\u203B\n You cannot defend with Reinforce the Line as it does not have a defense value.\n\u203B\n You can only play Reinforce the Line if there is a legal target.",
    cardImage: require("./images/ReinforceTheLine.png"),
  },
  {
    name: "Snag",
    ruling:
      "\nYou cannot defend with Snag as it does not have a defense value.\n\u203B\n This does not affect -{p} effects as that is not gaining {p}.\n\u203B\n You may play this anytime you have priority including in response to playing an attack action but before it resolves and becomes attacking on the combat chain.",
    cardImage: require("./images/Snag.png"),
  },
  {
    name: "Skullhorn",
    ruling:
      "\nIf you have no cards in your hand when this ability resolves, you will discard the card you draw.\n\u203B\n There is no priority in between drawing and discarding the card.\n\u203B\n When this card is destroyed, it is sent to your graveyard.\n\u203B\n You must pay {r}{r} to prevent arcane damage even if only one point of arcane damage would be prevented.\n\u203B\n The prevention does not carry over even if you only prevent one arcane damage.",
    cardImage: require("./images/Skullhorn.png"),
  },
  {
    name: "Argh... Smash!",
    ruling:
      "\nYou choose the items after the die has been rolled.\n\u203B\n There is no priority between seeing what number is rolled and the items being destroyed. For example, a player cannot see the result of the dice then elect to use their potion’s instant effects. (Replacement effects that can impact the result of the dice still take place)\n\u203B\n If X is 0, no items would be destroyed. (As a result of rolling a 1)\n\u203B\n The number is rounded down after being halved for example 5 becomes 2 and 3 becomes 1.\n\u203B\n You can elect to destroy 0 items.",
    cardImage: require("./images/ArghSmash.png"),
  },
  {
    name: "Barraging Big Horn",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Barraging Big Horn.",
    cardImage: require("./images/BarragingBigHorn.png"),
  },
  {
    name: "Beast Within",
    ruling:
      "\nThis effect is not optional.\n\u203B\n The green symbol on Beast Within is life.\n\u203B\n If there are no cards in your deck, you still lose 1{h} and the effect repeats itself. (Resulting in losing the game.)",
    cardImage: require("./images/BeastWithin.png"),
  },
  {
    name: "Massacre",
    ruling:
      "\nMassacre’s effect only works when it’s discarded to a Brute attack action card.\n\u203B\n If you’ve discarded more than one 6 or more {p} card this turn, the +2{p} bonus will only apply once.",
    cardImage: require("./images/Massacre.png"),
  },
  {
    name: "Swing Fist, Think Later",
    ruling:
      "\nYou must have at least one other card in your hand to pay for the additional cost at the time you play Swing Fist, Think Later.",
    cardImage: require("./images/SwingFistThinkLater.png"),
  },
  {
    name: "Crater Fist",
    ruling:
      "\nThis affects all attacks with crush not just the first.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/CraterFist.png"),
  },
  {
    name: "Blessing of Serenity",
    ruling:
      "\nIf you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n The prevention does not carry over, if this prevents an attack with {p} less than the amount of damage this would prevent there will be no leftover preventions.\n\u203B\n This effect is compulsory, you must prevent the next {p} damage that would be dealt to you this turn.\n\u203B\n This only affects {p} damage. Loss of life or arcane damage cannot be prevented.\n\u203B\n You cannot defend with Blessing of Serenity as it does not have a defense value.\n\u203B\n Blessing of Serenity is an instant. You may play it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/BlessingOfSerenity.png"),
  },
  {
    name: "Crush the Weak",
    ruling:
      "\nThis looks at the base power of the attack. If there is a modifier, the attack still can’t be played unless the modifier specifically modifies base power.\n\u203B\n Base power is the printed {p} value on the card.\n\u203B\n Cards with 3 or less base {p} can still be pitched.",
    cardImage: require("./images/CrushTheWeak.png"),
  },
  {
    name: "Chokeslam",
    ruling:
      "\nIf an attack action card would gain {p} it instead gains 0{p}.\n\u203B\n You can still play power modifier cards. Attack action cards would just gain 0{p}.\n\u203B\n Attack action cards can still lose {p}.",
    cardImage: require("./images/Chokeslam.png"),
  },
  {
    name: "Emerging Dominance",
    ruling:
      "\nEmerging Dominance must be destroyed at the beginning of your action phase, it is not optional.\n\u203B\n Emerging Dominance does not affect weapon attacks.",
    cardImage: require("./images/EmergingDominance.png"),
  },
  {
    name: "Mangle",
    ruling:
      "\nIf a battleworn equipment with no counters defend this and the defending hero is crushed, you cannot target the equipment as it does not have the -1{d} counter yet\n\u203B\n If an equipment has multiple -1{d} counters on it, you can target it.\n\u203B\n You must destroy an equipment if there is a legal target.",
    cardImage: require("./images/Mangle.png"),
  },
  {
    name: "Righteous Cleansing",
    ruling:
      "\nIf there are less than 5 cards, look at all the cards.\n\u203B\n They can be different pitch costs as long as the card name is exactly the same.\n\u203B\n The defending hero does not get to look at the cards.",
    cardImage: require("./images/RighteousCleansing.png"),
  },
  {
    name: "Stamp Authority",
    ruling:
      "\nThis affects all attack action cards including your own.\n\u203B\n The blue symbol on Stamp Authority is intellect (hand size).\n\u203B\n You can only pitch cards to pay for a cost. You cannot pitch for no reason.\n\u203B\n You draw cards up to your hero’s intellect before end of turn effects wear off.",
    cardImage: require("./images/StampAuthority.png"),
  },
  {
    name: "Viziertronic Model i",
    ruling:
      "\nYou boost the top deck of your deck first, banishing it before drawing a card and putting one back on top.\n\u203B\n You still draw a card even if the boost did not hit a mechanologist card.\n\u203B\n You must pay {r}{r} to prevent arcane damage even if only one point of arcane damage would be prevented.\n\u203B\n The prevention does not carry over even if you only prevent one arcane damage.",
    cardImage: require("./images/ViziertronicModeli.png"),
  },
  {
    name: "Absorption Dome",
    ruling:
      "\nAbsorption Dome requires an action point to play as it is an action card.\n\u203B\n If you have not boosted this turn, Absorption Dome enters the arena with no stream counters and would be immediately destroyed.\n\u203B\n If you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n It is not optional, you cannot choose to take damage instead of removing steam counters and preventing the damage.\n\u203B\n This prevents all types of damage including arcane damage. This does not prevent loss of life.\n\u203B\n You cannot defend with Absorption Dome as it does not have a defense value.",
    cardImage: require("./images/AbsorptionDome.png"),
  },
  {
    name: "Combustible Courier",
    ruling:
      "\nThe next attack must be on the same combat chain.\n\u203B\n It does not matter if the boost is successful or not.",
    cardImage: require("./images/CombustibleCourier.png"),
  },
  {
    name: "High Speed Impact",
    ruling:
      "\nThe next attack must be on the same combat chain to gain dominate.\n\u203B\n It does not matter if the boost is successful or not.",
    cardImage: require("./images/HighSpeedImpact.png"),
  },
  {
    name: "Meganetic Shockwave",
    ruling:
      "\nIf the defending hero has less than X equipment, they must defend with all the equipment they have that can defend.\n\u203B\n Players can defend with equipment with 0 defense.\n\u203B\n If an equipment is already on the combat chain defending another attack, it cannot also be forced to defend Meganetic Shockwave.",
    cardImage: require("./images/MeganeticShockwave.png"),
  },
  {
    name: "Plasma Purifier",
    ruling:
      "\nPlasma Purifier requires an action point to play as it is an action card.\n\u203B\n You cannot defend with Plasma Purifier as it does not have a defense value.\n\u203B\n You may use the action even if it already has one or more steam counters on it, however it will not put a steam counter on it.\n\u203B\n The pistol keeps the +1{p} until end of turn even if you attack with it multiple times.",
    cardImage: require("./images/PlasmaPurifier.png"),
  },
  {
    name: "Breeze Rider Boots",
    ruling:
      "\nIf you choose to use this, it will give the attack action you hit with go again if it has combo.\n\u203B\n Multiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/BreezeRiderBoots.png"),
  },
  {
    name: "Crane Dance",
    ruling:
      "\nYou may defend with cards that aren’t attack action cards, as normal.\n\u203B\n Base power is the printed {p} value on a card. (Located at the bottom left corner of a card)",
    cardImage: require("./images/CraneDance.png"),
  },
  {
    name: "Find Center",
    ruling:
      "\nThe cost of a card is located at the top right corner of a card.\n\u203B\n If a card does not have a cost, such as equipment, Find Center considers its {r} cost to be 0.\n\u203B\n Zen State is an aura with “Zen State enters the arena with 1 balance counter on it. At the beginning of your action phase, destroy Zen State unless you remove a balance counter from it.\n\u203B\n Whenever your hero would be dealt damage, prevent 1 damage that source would deal.”",
    cardImage: require("./images/FindCenter.png"),
  },
  {
    name: "Flood of Force",
    ruling:
      "\nIf it’s not a card with combo, it stays on top of your deck and Flood of Force does not gain +3{p} or go again.\n\u203B\n You do not have to play the card put into your hand straight away. (Or at all, it can be pitched or just remain in your hand)",
    cardImage: require("./images/FloodOfForce.png"),
  },
  {
    name: "Heron's Flight",
    ruling:
      "\nYou choose at the time you play this card.\n\u203B\n Heron’s Flight cannot be defended by equipment, instants, or reaction cards.\n\u203B\n Defense reactions become a defending card when played. You cannot defend Heron’s Flight with defense reactions if Crane Dance was the last attack this combat chain. (You cannot play the defense reaction)",
    cardImage: require("./images/HeronsFlight.png"),
  },
  {
    name: "Rushing River",
    ruling:
      "\nThere is no priority in between drawing and putting cards back on top of the deck.",
    cardImage: require("./images/RushingRiver.png"),
  },
  {
    name: "Whirling Mist Blossom",
    ruling:
      "\nYou may only have Whirling Mist Blossom in your deck if your hero is Ira, Crimson Haze.\n\u203B\n Whirling Mist Blossom must be the second or higher chain link to hit in a row, meaning that previous attack must have also hit.",
    cardImage: require("./images/WhirlingMistBlossom.png"),
  },
  {
    name: "Perch Grapplers",
    ruling:
      "\nThe arrows must be face-up at the time you play them to gain go again.\n\u203B\n Arrow is a sub-type that exists on attack actions. This is located at the bottom center of the card.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/PerchGrapplers.png"),
  },
  {
    name: "Feign Death",
    ruling:
      "\nYou cannot defend with Feign Death as it does not have a defense value.\n\u203B\n You cannot play this card if you have not been dealt damage this turn.\n\u203B\n Any form of damage such as {p} or arcane damage counts as damage dealt. Loss of life does not count as being dealt damage.\n\u203B\n If you have multiple damage preventions available, you choose which prevention to apply first.",
    cardImage: require("./images/FeignDeath.png"),
  },
  {
    name: "Increase the Tension",
    ruling:
      "\nThe attack can still be defended by defense reaction cards from arsenal and by non-defense reactions from hand.",
    cardImage: require("./images/IncreaseTheTension.png"),
  },
  {
    name: "Pitfall Trap",
    ruling:
      "\nThe attacking hero decides if they want to pay {r} at the time this resolves. (Before damage from the attack action is calculated)\n\u203B\n This damage cannot be defended.\n\u203B\n This damage can be prevented. This damage is not arcane damage. This must be prevented by cards that have a prevention effect.\n\u203B\n Trap cards cannot be played from hand.",
    cardImage: require("./images/PitfallTrap.png"),
  },
  {
    name: "Poison the Tips",
    ruling:
      "\nIf the arrow has multiple hit triggers, you pick which effect goes on the chain first when it hits.\n\u203B\n This effect is until the end of turn. You can trigger the hit effect on multiple arrows.\n\u203B\n You may elect to put no cards from your hand to your arsenal with Reload.\n\u203B\n Your arsenal must be empty to put a card into your arsenal with Reload.\n\u203B\n The defending hero selects the card to be discarded.",
    cardImage: require("./images/PoisonTheTips.png"),
  },
  {
    name: "Remorseless",
    ruling:
      "\nTurning a facedown card in arsenal face up does not count as putting it into your arsenal face up and therefore would not gain the effect.\n\u203B\n The green symbol on Remorseless is life.\n\u203B\n Action cards played as though they were an instant still count as playing an action card and would lose 1{h} if they were hit by Remorseless.\n\u203B\n Remorseless can still be defended by defense reactions from hand.",
    cardImage: require("./images/Remorseless.png"),
  },
  {
    name: "Rockslide Trap",
    ruling:
      "\nThe attacking hero decides if they want to pay {r} at the time this resolves. (Before damage from the attack action is calculated.)\n\u203B\n Trap cards cannot be played from hand.\n\u203B\n You can only target attacks with this, you cannot target a defending card that is an attack action.\n\u203B\n You can only target the attack on the current chain link. (You cannot target a defending attack action card as it’s not considered an attack).\n\u203B\n The ability is not optional, you must target an attack.",
    cardImage: require("./images/RockslideTrap.png"),
  },
  {
    name: "Sleep Dart",
    ruling:
      "\nThe hero loses all hero card effects and the hero loses all activated abilities, other cards with card effects or activated abilities are unaffected.",
    cardImage: require("./images/SleepDart.png"),
  },
  {
    name: "Tripwire Trap",
    ruling:
      "\nThe attacking hero decides if they want to pay {r} at the time this resolves. (Before damage from the attack action is calculated.)\n\u203B\n If the attacking hero does not pay {r}, Tripwire Trap prevents all effects that would trigger, including hero and equipment hit trigger effects.\n\u203B\n Trap cards cannot be played from hand.",
    cardImage: require("./images/TripwireTrap.png"),
  },
  {
    name: "Arknight Shard",
    ruling:
      '\nCreating a Runechant token is mandatory.\n\u203B\n You cannot defend with Arknight Shard as it does not have a defense value.\n\u203B\n You cannot pitch a card if you have no cost to pay.\n\u203B\n You may only have 1 Arknight Shard in your deck including cards in your registered 80-card pool in Classic Constructed tournaments and only 1 Arknight Shard in your deck in limited tournaments.\n\u203B\n Arknight Shard has no resource cost value.\n\u203B\n A Runechant is an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")\n\u203B\n If you pitch Arknight Shard to pay for an attack, the Runechant that it creates does not trigger from the attack (the Runechant is created after the attack action card has been played / weapon attack is activated).',
    cardImage: require("./images/ArknightShard.png"),
  },
  {
    name: "Bloodsheath Skeleta",
    ruling:
      '\nThe reduction is calculated at the time you play the card, not at the time Blood Skeleta’s ability resolves.\n\u203B\n When this card is destroyed, it is sent to your graveyard.\n\u203B\n You can play either attack action card or ‘non-attack’ action card in any order.\n\u203B\n Bloodsheath Skeleta’s activated ability is an instant. You may activate it anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.\n\u203B\n If the card already has a cost reduction effect such as "This card costs {r} less to play for each Runechant you control.” the reduction effects will stack making it cost 2 less for each Runechant you control.',
    cardImage: require("./images/BloodsheathSkeleta.png"),
  },
  {
    name: "Consuming Volition",
    ruling:
      "\nIf this attack causes Runechant token(s) to deal arcane damage, this attack would gain the effect as arcane damage would have been dealt.\n\u203B\n The defending hero selects the card to be discarded.",
    cardImage: require("./images/ConsumingVolition.png"),
  },
  {
    name: "Dread Triptych",
    ruling:
      '\nThe Runechant token created does not trigger or get destroyed as Dread Triptych is already played at the point the Runechant token is created.\n\u203B\n If this attack causes Runechant token(s) to deal arcane damage, this attack would create a Runechant token from the second effect as arcane damage would have been dealt.\n\u203B\n Each instance of creating a Runechant token is separate. An effect that affects Runechant tokens being created, such as Modred Tide, will affect each effect of Dread Triptych .\n\u203B\n A Runechant is an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")',
    cardImage: require("./images/DreadTriptych.png"),
  },
  {
    name: "Meat and Greet",
    ruling:
      "\nIf this attack causes Runechant token(s) to deal arcane damage, this attack would gain the effect as arcane damage would have been dealt.",
    cardImage: require("./images/MeatAndGreet.png"),
  },
  {
    name: "Rattle Bones",
    ruling:
      "\nIf this is played as though it were an instant, it would not cost an action point but when it resolves you would gain an action point from go again (as long as it’s your action phase)\n\u203B\n If the attack action card is played, it would go to the graveyard afterwards (Unless an effect tells you otherwise).\n\u203B\n If the attack action is not played, it would remain in the banished zone.",
    cardImage: require("./images/RattleBones.png"),
  },
  {
    name: "Runeblood Barrier",
    ruling:
      '\nIf you have multiple damage preventions available, you choose which prevention to apply first.\n\u203B\n You must destroy Runechants when you would be dealt damage, you cannot choose to be dealt damage instead.\n\u203B\n If you control no Runechants, you are dealt damage as normal.\n\u203B\n A Runechant is an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")',
    cardImage: require("./images/RunebloodBarrier.png"),
  },
  {
    name: "Sutcliffe's Research Notes",
    ruling:
      "\nThe order of the cards put on top of your deck is not known to the opponent.",
    cardImage: require("./images/SutcliffesResearchNotes.png"),
  },
  {
    name: "Courage of Bladehold",
    ruling:
      "\nThis applies to all your sword attacks this turn, not just the first.\n\u203B\n A sword attack is an attack with a weapon with the subtype ‘Sword’. (Located at the bottom middle of the weapon card.)\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/CourageOfBladehold.png"),
  },
  {
    name: "Dauntless",
    ruling:
      "\nTo defend with a defense reaction, it must be played.\n\u203B\n The additional cost can be reduced by cost reduction effects.",
    cardImage: require("./images/Dauntless.png"),
  },
  {
    name: "Spoils of War",
    ruling:
      '\nThe second ability affects every weapon hit this turn, not just your next attack.\n\u203B\n A Copper token is an item with "Action- {r}{r}{r}{r}, destroy Copper: Draw a card. Go again"',
    cardImage: require("./images/SpoilsOfWar.png"),
  },
  {
    name: "Twinning Blade",
    ruling:
      "\nThis ability does not give the weapon attack go again. You are still required to have an action point to attack again. This ability bypasses the “Once per Turn Action - Attack” on the sword attack and allows an additional attack with the same weapon.\n\u203B\n The weapon must have the sub-type ‘Sword’. (Located at the bottom middle of the weapon card.)\n\u203B\n It does not need to target an attacking sword, but must be played during the reaction step as an attacking hero. (You can target a sword while attacking with an attack action.)",
    cardImage: require("./images/TwinningBlade.png"),
  },
  {
    name: "Out for Blood",
    ruling:
      "\nReprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\n\u203B\n Reprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\n\u203B\n Equipment and cards from arsenal that defend an attack do not turn on reprise.\n\u203B\n The next attack can be any attack including attack action or a different weapon attack.",
    cardImage: require("./images/OutForBlood.png"),
  },
  {
    name: "Unified Decree",
    ruling:
      "\nReprise cares about the current chain link not the whole combat chain. If a previous attack was defended by a card in hand, it will have no effect on reprise for the current chain link.\n\u203B\n Reprise is checked at the time you play the card. If a card with reprise is played then a defense reaction is played from hand, the effect will not apply retroactively.\n\u203B\n Equipment and cards from arsenal that defend an attack do not turn on reprise.\n\u203B\n If you do not banish the card, it stays on top of the deck.\n\u203B\n When the banished card is played, it will go to the graveyard when it resolves as normal.\n\u203B\n If you banish the card and do not play it this combat chain, it remains in the banished zone.",
    cardImage: require("./images/UnifiedDecree.png"),
  },
  {
    name: "Metacarpus Node",
    ruling:
      "\nYou may use this ability only once per card. You may use this ability multiple times in a turn on different cards provided you pay {r} each time.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/MetacarpusNode.png"),
  },
  {
    name: "Aetherize",
    ruling:
      "\nNegating an instant will prevent the card from resolving. The card will go to its owner’s graveyard and the effects of the card do not happen.\n\u203B\n Aetherize can only target instant cards, not instant activated abilities.\n\u203B\n You cannot defend with Aetherize as it does not have a defense value.",
    cardImage: require("./images/Aetherize.png"),
  },
  {
    name: "Chain Lightning",
    ruling:
      "\nEach defending hero decides if they want to defend the arcane damage they would take. They cannot defend the other arcane damage.\n\u203B\n Chain Lightning checks if you have played another Wizard ‘non-attack’ action card this turn at the time it resolves, not at the time you play the card.\n\u203B\n Chain Lightning counts as a card with an effect that deals arcane damage, regardless if you have played another wizard “non-attack” action card this turn or not. (e.g. if you activated Crucible of Aetherweave then play Chain Lightning, it would use up the Crucible of Aetherweave effect but deal no arcane damage.)",
    cardImage: require("./images/ChainLightning.png"),
  },
  {
    name: "Cindering Foresight",
    ruling:
      "\nIf the next card you play does not have an effect that deals arcane damage, it will not gain this modifier however the next card played this turn that has an effect that deals arcane damage will still gain the bonus.\n\u203B\n This card is always an action card, regardless of whether it’s your turn or not (e.g. for Kano’s hero ability.), or if it is being played as an instant.",
    cardImage: require("./images/CinderingForesight.png"),
  },
  {
    name: "Gaze the Ages",
    ruling:
      "\nYou cannot respond between opting and putting Gaze the Ages into your hand as you must finish resolving the card completely first.\n\u203B\n Gaze the Ages checks if you have played another Wizard ‘non-attack’ action card this turn at the time it resolves, not at the time you play the card.",
    cardImage: require("./images/GazeTheAges.png"),
  },
  {
    name: "Foreboding Bolt",
    ruling:
      "\nYou opt when the card resolves after damage is dealt (or prevented).",
    cardImage: require("./images/ForebodingBolt.png"),
  },
  {
    name: "Rousing Aether",
    ruling:
      "\nIf the next card you play does not have an effect that deals arcane damage, it will not gain this modifier however the next card played this turn that has an effect that deals arcane damage will still gain the bonus.",
    cardImage: require("./images/RousingAether.png"),
  },
  {
    name: "Snapback",
    ruling:
      "\nYou still pay Snapback’s resource costs as normal even when Snapback is played as though it were an instant.\n\u203B\n Snapback is still an action card when played as an instant. It just does not require an action point to play and can be played anytime you have priority, including during an opponent’s turn, and during the reaction window of either player’s turn.",
    cardImage: require("./images/Snapback.png"),
  },
  {
    name: "Boltyn",
    ruling:
      "\nBase power is the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n Putting a card into your hero’s soul does not count as charging. Only playing a card with the keyword charge and placing a card into your hero's soul this way counts as charging.\n\u203B\n All attacks you control gain +1{p} while defended by an attack action card. (This includes your weapon attacks)\n\u203B\n If the attack no longer has {p} greater than it’s base power when the ability resolves, it will not gain go again.\n\u203B\n You may use the second ability more than once per turn as it is not a Once per turn ability. You may also target the same attack more than once. Multiple instances of go again do not grant more than one action point.\n\u203B\n If the second ability has resolved, then the attack no longer has {p} greater than it’s base power, it will still have go again as it has already gained go again.",
    cardImage: require("./images/Boltyn.png"),
  },
  {
    name: "Chane",
    ruling:
      "\nYou may use this ability even if you are not planning to use a Runeblade or Shadow action afterwards.\n\u203B\n This affects your next action including weapon attacks, action cards and action activated abilities.\n\u203B\n The Soul Shackle token is created as a part of the cost.\n\u203B\n Soul Shackle tokens stay in the arena until they are destroyed. (Soul shackles do not get destroyed when the top card of your deck is banished)\n\u203B\n Multiple instances of go again on the same card or activated ability do not stack. If a card or activated ability has multiple instances of go again when it resolves its controller gains 1 action point only.",
    cardImage: require("./images/Chane.png"),
  },
  {
    name: "Dread Scythe",
    ruling:
      "\nThe arcane damage is not dependent on the attack hitting.\n\u203B\n The defending player chooses if they are taking the arcane damage first before defending the attack.\n\u203B\n Both the attack and the arcane damage count as damage by Dread Scythe and either would cause the hero dealt damage to not gain {h} during their next action phase.\n\u203B\n If a hero dealt damage by Dread Scythe would gain {h} during their next action phase they instead gain 0. (They may still play the card or activate the ability that would gain {h})",
    cardImage: require("./images/DreadScythe.png"),
  },
  {
    name: "Galaxxi Black",
    ruling:
      "\nGalaxxi Black can only gain at most +2{p} from its ability even if you have played multiple cards from your banished zone.\n\u203B\n The ability of Galaxxi Black is continuously checking if you have played a card from your banished zone. If you play a card from the banished zone after Galaxxi Black has attacked, it gains +2{p}.",
    cardImage: require("./images/GalaxxiBlack.png"),
  },
  {
    name: "Hatchet of Body",
    ruling:
      "\nThe +1{p} lasts until end of turn. If you attack with this weapon again it will still have the +{p}. (It can also gain another instance of +1{p} if the criteria is met)",
    cardImage: require("./images/HatchetOfBody.png"),
  },
  {
    name: "Hatchet of Mind",
    ruling:
      "\nThe +1{p} lasts until end of turn. If you attack with this weapon again it will still have the +{p}. (It can also gain another instance of +1{p} if the criteria is met)",
    cardImage: require("./images/HatchetOfMind.png"),
  },
  {
    name: "Hexagore, the Death Hydra",
    ruling:
      "\nThe damage it deals to you cannot be defended. It is also not arcane damage so it cannot be prevented by spellvoid or arcane barrier. The damage can be prevented by prevention effects that prevent any kind of damage.\n\u203B\n If you have more than 6 blood debt cards in your banished zone it will do you 0 damage. Having more than 6 does not cause it to deal negative damage to you.\n\u203B\n This ability triggers when you attack and resolves before the attack deals damage.\n\u203B\n Face down cards in the banished zone have no traits.",
    cardImage: require("./images/Hexagore.png"),
  },
  {
    name: "Iris of Reality",
    ruling:
      "\nYou cannot attack with this weapon as it does not have an action that allows you to do so.\n\u203B\n You attack with the Illusionist aura, not this weapon. If you have multiple Illusionist auras you can attack with multiple in a turn provided you have the resources.",
    cardImage: require("./images/IrisOfReality.png"),
  },
  {
    name: "Levia",
    ruling:
      "\nIt doesn't matter where the card was from before it was put into your banish zone or if the card remains in the banish zone, as long as the criteria has been met this turn.\n\u203B\n The cards only lose blood debt during the end phase. They still have blood debt during the action phase.\n\u203B\n If a card has multiple instances of blood debt, they lose all instances during the end phase. (If the criteria is met)\n\u203B\n Levia checks the last known information of the attack action card before it is put into your banished zone. For example if a 5{p} card has +1{p} from attacking, then is put into the banished zone when it hits, Levia will see this attack action as 6{p} when it is put into the banished zone. Similarly if an attack that has 6{p} base has its power reduced, Levia would not see it as 6{p}+",
    cardImage: require("./images/Levia.png"),
  },
  {
    name: "Luminaris",
    ruling:
      "\nYou cannot attack with this weapon as it does not have an action that allows you to do so.\n\u203B\n You attack with the Illusionist aura, not this weapon. If you have multiple Illusionist auras you can attack with multiple in a turn provided you have the resources and action points.\n\u203B\n You can only pitch a card if there is a cost to be paid and there are not enough resources available to pay the cost.\n\u203B\n A yellow color strip is a card that pitches for two resources. The color strip is located at the top center of the card.",
    cardImage: require("./images/Luminaris.png"),
  },
  {
    name: "Prism",
    ruling:
      "\nOnce per Turn applies to the current turn not the turn cycle - You can use this ability on your opponent’s turn, then use it again on your own turn. (Provided you have the resources and cards in soul)",
    cardImage: require("./images/Prism.png"),
  },
  {
    name: "Ravenous Meataxe",
    ruling:
      "\nThere is no window to play cards or respond after drawing the card but before discarding the card. (If your hand is empty you will immediately discard the card you draw)\n\u203B\n This checks the base power of the discarded card. (The base power is located at the bottom left corner of the card)\n\u203B\n The effect triggers when you attack with Ravenous Meataxe. If this is attacking a card with Spectra you would not draw a card. Please see section 20.4 Attack Step of the comp rules for more details.",
    cardImage: require("./images/RavenousMeataxe.png"),
  },
  {
    name: "Raydn, Duskbane",
    ruling:
      "\nYou may attack with this even if it has 0 power. (Assuming you have the action points)\n\u203B\n Even if you have charged multiple times this turn, Raydn, Duskbane only gains +3{p}.",
    cardImage: require("./images/Raydn.png"),
  },
  {
    name: "Spectral Shield",
    ruling:
      "\nThis is not optional, if you would be dealt damage you must destroy Spectral Shield and prevent 1 damage that source would deal.\n\u203B\n If you have multiple Spectral Shields in play you choose which prevent effect to apply first. If you are taking multiple damage you must prevent all of it with Spectral Shields if able. (You would be dealt the excess damage)\n\u203B\n Loss of life is not being dealt damage and would not destroy Spectral Shield or prevent the 1 damage.",
    cardImage: require("./images/SpectralShield.png"),
  },
  {
    name: "Soul Shackle",
    ruling:
      "\nSoul Shackle stays in the arena until it is destroyed. Banishing the top card of your deck does not destroy Soul Shackle.\n\u203B\n The effect is not optional. You must banish the top card of your deck if able.\n\u203B\n Soul Shackle is a trigger that happens at the beginning of the action phase. Players can respond to it.\n\u203B\n If you have no cards in your deck, you do not lose the game. You would not be able to banish any cards from the top of your deck but the ability would still resolve.",
    cardImage: require("./images/SoulShackle.png"),
  },
  {
    name: "Adrenaline Rush",
    ruling:
      "\nThe green symbol on Adrenaline Rush is life.\n\u203B\n Adrenaline Rush checks if you have less life than an opponent at the time you play it. Changes after the card has been played does not cause Adrenaline Rush to gain nor lose +3{p}.",
    cardImage: require("./images/AdrenalineRush.png"),
  },
  {
    name: "Belittle",
    ruling:
      "\nYou may search for any pitch value Minnowism as long as the name of the card is “Minnowism”.\n\u203B\n You choose whether you want to pay the additional cost at the time you play the card.\n\u203B\n If you do pay the additional cost, the ability becomes a layer on the chain when the card is played. Players can still respond to this, e.g with instants.\n\u203B\n The attack action card you reveal must have a value. (0 is a value)",
    cardImage: require("./images/Belittle.png"),
  },
  {
    name: "Blood Drop Brocade",
    ruling:
      "\nYou can activate this anytime you have priority as long as the condition has been met. (You do not have priority during the start of turn or end phase)\n\u203B\n {p} damage is any damage done by an attack such as a weapon attack or attack action. Loss of life and arcane damage do not count as {p} damage.",
    cardImage: require("./images/BloodDropBrocade.png"),
  },
  {
    name: "Captain’s Call",
    ruling:
      "\nYou choose the mode at the time you play Captain’s Call not at the time you play the attack action card.\n\u203B\n It will apply to the next attack action card with cost 0/1/2 or less, if you play an attack action that doesn’t meet that criteria, then one that does, the bonus will still apply to the one applicable as it is still the next attack action card with cost 0/1/2 or less you play this turn.",
    cardImage: require("./images/CaptainsCall.png"),
  },
  {
    name: "Exude Confidence",
    ruling:
      "\nThe effect only applies when the attack is on the combat chain. Players can respond to Exude Confidence before it becomes a layer on the chain with instants.\n\u203B\n If Exude Confidence is on the combat chain and gains {p} from an effect that would then put it at greater power than the defending card(s) then the effect of Exude Confidence would become active.\n\u203B\n Exude Confidence is still considered attacking as long as it’s on the combat chain even if it’s not the current chain link. You may still use it’s instant ability as long as it’s on the combat chain.\n\u203B\n Exude Confidence does not stop defense reactions or instants that have already been played or activated. For example if there is a defense reaction defending an attack on a previous combat chain, playing Exude Confidence will not have any impact on that defense reaction.\n\u203B\n If Exude Confidence is not defended by any cards, the defending hero can’t play or activate instants or defense reactions this combat chain.\n\u203B\n You can activate Exude Confidence’s instant ability during the defending window before the defending player has a chance to use defense reactions.\n\u203B\n You may activate Exude Confidence’s instant ability as many times as you want provided you have the resources and Exude Confidence is attacking.",
    cardImage: require("./images/ExudeConfidence.png"),
  },
  {
    name: "Frontline Scout",
    ruling:
      "\nYou look at the defending hero’s hand when Frontline Scout effects resolves. (The ability goes on the chain when the card becomes an attack on the chain.)\n\u203B\n If this attack does not resolve (For example it is attacking an aura with spectra) then you do not look at the defending hero’s hand. (You would also not gain the action point from go again.)",
    cardImage: require("./images/FrontlineScout.png"),
  },
  {
    name: "Ironhide Helm",
    ruling:
      "\nThis does not have blade break or battleworn, it does not get destroyed unless you pay for it’s effect.\n\u203B\n You may defend with this card and elect to pay no resources, however it would not gain the +2{d}.\n\u203B\n Both players will have a chance to respond when the ability goes on the chain, however there is no priority after the resource is paid but before it gains the +2{d}.",
    cardImage: require("./images/IronhideHelm.png"),
  },
  {
    name: "Ironhide Plate",
    ruling:
      "\nThis does not have blade break or battleworn, it does not get destroyed unless you pay for it’s effect.\n\u203B\n You may defend with this card and elect to pay no resources, however it would not gain the +2{d}.\n\u203B\n Both players will have a chance to respond when the ability goes on the chain, however there is no priority after the resource is paid but before it gains the +2{d}.",
    cardImage: require("./images/IronhidePlate.png"),
  },
  {
    name: "Ironhide Gauntlet",
    ruling:
      "\nThis does not have blade break or battleworn, it does not get destroyed unless you pay for it’s effect.\n\u203B\n You may defend with this card and elect to pay no resources, however it would not gain the +2{d}.\n\u203B\n Both players will have a chance to respond when the ability goes on the chain, however there is no priority after the resource is paid but before it gains the +2{d}.",
    cardImage: require("./images/IronhideGauntlet.png"),
  },
  {
    name: "Ironhide Legs",
    ruling:
      "\nThis does not have blade break or battleworn, it does not get destroyed unless you pay for it’s effect.\n\u203B\n You may defend with this card and elect to pay no resources, however it would not gain the +2{d}.\n\u203B\n Both players will have a chance to respond when the ability goes on the chain, however there is no priority after the resource is paid but before it gains the +2{d}.",
    cardImage: require("./images/IronhideLegs.png"),
  },
  {
    name: "Memorial Ground",
    ruling:
      "\nYou cannot defend with Memorial Ground as it does not have a defense value.\n\u203B\n You must have a target in order to play this card.\n\u203B\n If the target is no longer in your graveyard when Memorial Ground resolves, it would not put the card on top of your deck.",
    cardImage: require("./images/MemorialGround.png"),
  },
  {
    name: "Minnowism",
    ruling:
      "\nBase power is the printed {p} value on a card. (Located at the bottom left corner of a card.)",
    cardImage: require("./images/Minnowism.png"),
  },
  {
    name: "Nourishing Emptiness",
    ruling:
      "\nThe blue symbol on Nourishing Emptiness is Intellect. At the end of your turn you draw up to your hero's intellect. (Before end of turn effects are gone)\n\u203B\n This does not count attack action cards on the combat chain such as itself as they are not in the graveyard yet.\n\u203B\n If dominate is gained while there are already 2 or more cards defending, the defending cards would not be affected. You would not be able to defend with future cards from hand.",
    cardImage: require("./images/NourishingEmptiness.png"),
  },
  {
    name: "Out Muscle",
    ruling:
      "\nIf Out Muscle is not defended by any cards, it has go again.\n\u203B\n Go again grants the action point on chain link resolution, so if the power is changed in a way for Out Muscle to gain or lose go again, it will only be relevant when the chain link resolves and go again would grant 1 action point.",
    cardImage: require("./images/OutMuscle.png"),
  },
  {
    name: "Pound for Pound",
    ruling:
      "\nThe green symbol on Pound for Pound is life.\n\u203B\n Pound for Pound checks if you have less life than your opponent at the time you play it. Changes after the card has been played does not cause Pound for Pound to gain or lose dominate.",
    cardImage: require("./images/PoundForPound.png"),
  },
  {
    name: "Rally the Rearguard",
    ruling:
      "\nYou can activate Rally the Rearguard anytime you have priority as long as it is defending.\n\u203B\n You cannot activate its effect if you have no cards in hand.",
    cardImage: require("./images/RallyTheRearguard.png"),
  },
  {
    name: "Rise Above",
    ruling:
      "\nYou cannot pay its alternative cost if you have no cards in hand.\n\u203B\n The alternative cost means you do not have to pay any resource cost for Rise Above. (It counts the whole cost not just {r})\n\u203B\n If there is an effect that increases the cost of Rise Above you must still pay it even if you use Rise Above’s alternative cost.",
    cardImage: require("./images/RiseAbove.png"),
  },
  {
    name: "Rouse the Ancients",
    ruling:
      "\nRevealing more than 13 total {p} does not increase the {p} of Rouse the Ancients any more than 7.\n\u203B\n You can attack with Rouse the Ancients without revealing any cards. It would not gain the +7{p} or go again.\n\u203B\n You cannot reveal Rouse the Ancients to itself.",
    cardImage: require("./images/RouseTheAncients.png"),
  },
  {
    name: "Seek Horizon",
    ruling:
      "\nYou cannot pay its additional cost if you have no cards in hand.\n\u203B\n You cannot pay its additional cost by putting Seek Horizon on top of your deck.\n\u203B\n You cannot put more than one card on top of your deck with its additional cost.",
    cardImage: require("./images/SeekHorizon.png"),
  },
  {
    name: "Stony Woottonhog",
    ruling:
      "\nThe effect is only active while it is attacking. Defending with Stony Woottonhog will not grant +1{p} nor will it have +1{p} in any zone other than the combat chain while attacking.",
    cardImage: require("./images/StonyWoottonhog.png"),
  },
  {
    name: "Stubby Hammerers",
    ruling:
      "\nBase power is the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n This does not grant the attack action cards go again. Stubby Hammerers action requires an action point and grants an action point after it resolves as its ability has go again.\n\u203B\n Stubby Hammerers does not give weapons with 3 or less power +1{p} as they are not attack action cards.",
    cardImage: require("./images/StubbyHammerers.png"),
  },
  {
    name: "Surging Militia",
    ruling:
      "\nThis includes defense reactions. Defense reactions become a defending card when played.",
    cardImage: require("./images/SurgingMilitia.png"),
  },
  {
    name: "Time Skippers",
    ruling:
      "\nAction points are not resource points.\n\u203B\n Time Skippers require an action point to activate. Upon resolution 2 action points are gained.",
    cardImage: require("./images/TimeSkippers.png"),
  },
  {
    name: "Tremor of iArathael",
    ruling:
      "\nTremor of iArathael can gain at most +2{p} from its effect even if you have had multiple cards put into your banished zone this turn.\n\u203B\n The effect is continuous, if a card is put into the banished zone even after the card is played, it would still gain the +2{p}.\n\u203B\n Unless otherwise specified, a defending card’s textbox is considered empty - When defending with Tremor of iArathael it does not gain +2{p} even if a card has been put into your banished zone this turn.",
    cardImage: require("./images/TremorOfiArathael.png"),
  },
  {
    name: "Warmonger’s Recital",
    ruling:
      "\nIf the attack is put to the bottom of your deck, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put to the bottom of your deck, the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes to the bottom of your deck, Last Known Information is used at the end of chain link resolution and you will still gain an action point.",
    cardImage: require("./images/WarmongersRecital.png"),
  },
  {
    name: "Yinti Yanti",
    ruling:
      "\nThe effect is continuously checking if the aura is in play. When you no longer control an aura, Yinti Yanti will not have the bonus. (This is most relevant for auras that destroy itself when you play an attack action)",
    cardImage: require("./images/YintiYanti.png"),
  },
  {
    name: "Zealous Belting",
    ruling:
      "\nBase power is the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n You can only pitch when there is a cost to pay.",
    cardImage: require("./images/ZealousBelting.png"),
  },
  {
    name: "Blood Tribute",
    ruling:
      "\nYou cannot defend with Blood Tribute as it does not have a defense value.\n\u203B\n Banishing the card is not optional.\n\u203B\n The number of cards you place on top and bottom of your deck is known to your opponent, the order of the cards are not.\n\u203B\n You may put all of the cards on the top or all of the cards on the bottom if you so wish.",
    cardImage: require("./images/BloodTribute.png"),
  },
  {
    name: "Carrion Husk",
    ruling:
      "\nPlayers do not have priority at the start of turns. Players cannot respond to Carrion Husk triggering to banish itself.\n\u203B\n The second ability checks at the start of your turn. If you fall below 13 life during your action phase, your end phase or your opponent’s turn, Carrion Husk would still stay in the arena.\n\u203B\n The green symbol on Carrion Husk is life.",
    cardImage: require("./images/CarrionHusk.png"),
  },
  {
    name: "Consuming Aftermath",
    ruling:
      "\nYou may elect to banish no cards from your hand.\n\u203B\n You may banish a non-Shadow card from your hand, Consuming Aftermath would not gain dominate if a non-Shadow card was banished this way.\n\u203B\n You choose additional costs at the time you play the card (Pay the costs at the same time you pay the resource cost).",
    cardImage: require("./images/ConsumingAftermath.png"),
  },
  {
    name: "Doomsday",
    ruling:
      "\nYou may only play Doomsday in your deck if your hero is Levia, Shadowborn or Levia (Young hero).\n\u203B\n You cannot defend with Doomsday as it does not have a defense value.\n\u203B\n You can only play Doomsday if there are 6 or more cards with blood debt in your banished zone. (You can still pitch Doomsday even if this criteria is not met.)\n\u203B\n Face-down cards in the banished zone have no traits and therefore do not count towards meeting the condition. Only face-up cards count.\n\u203B\n A Blasmophet, the Soul Harvester is a Token - Demon Ally.",
    cardImage: require("./images/Doomsday.png"),
  },
  {
    name: "Blasmophet, the Soul Harvester",
    ruling:
      "\nBlasmophet is a token and does not start in your deck.\n\u203B\n When a token is destroyed it is removed from the arena.\n\u203B\n You may still banish a Shadow card from your hand even if the defending hero does not have a soul.\n\u203B\n You select the card to be banished from the defending hero’s soul.",
    cardImage: require("./images/Blasmophet.png"),
  },
  {
    name: "Eclipse",
    ruling:
      "\nYou may only play Eclipse in your deck if your hero is Chane, Bound by Shadow or Chane (Young hero).\n\u203B\n You cannot defend with Eclipse as it does not have a defense value.\n\u203B\n You can only play Eclipse if you have played 6 or more cards with blood debt this turn. (You can still pitch Eclipse even if this criteria is not met.)\n\u203B\n You cannot play Eclipse from your banished zone if you have not met the criteria to do so.\n\u203B\n You can play Eclipse from your hand as long as you’ve met the criteria of playing 6 or more cards with blood debt this turn.\n\u203B\n An Ursur, the Soul Reaper is a Token - Demon Ally.",
    cardImage: require("./images/Eclipse.png"),
  },
  {
    name: "Ursur, the Soul Reaper",
    ruling:
      "\nUrsur is a token and does not start in your deck.\n\u203B\n When a token is destroyed it is removed from the arena.\n\u203B\n If the hero Ursur is attacking no longer has a soul when the chain link resolves, then Ursur would not have go again and the action point would not be gained.",
    cardImage: require("./images/Ursur.png"),
  },
  {
    name: "Ebon Fold",
    ruling:
      "\nYou may banish any card from your hand, even if it's not a shadow card. You only draw a card if the banished card is a shadow card.\n\u203B\n If you have no cards in your hand at the time the ability resolves, you will not be able to banish a card and therefore would not draw a card.\n\u203B\n If you use spellvoid 2 to prevent one arcane damage, there will be no leftover prevention.\n\u203B\n Spellvoid 2 can only prevent 2 arcane damage from a single source. It cannot prevent 2 sources of 1 arcane damage.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/EbonFold.png"),
  },
  {
    name: "Eclipse Existence",
    ruling:
      "\nIf they do not have a card in soul, the attack would be unable to banish a card therefore they would not lose 1{h}.\n\u203B\n The green symbol on Eclipse Existence is life.\n\u203B\n They only lose 1{h} if a card is banished from their soul from Eclipse Existence’s effect. If a card if banished from their soul from another effect it will not cause them to lose 1{h}\n\u203B\n The second effect of Eclipse Existence happens as the card resolves. You must choose whether you want to banish an action card from your graveyard as soon as Eclipse Existence resolves.",
    cardImage: require("./images/EclipseExistence.png"),
  },
  {
    name: "Guardian of the Shadowrealm",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Guardian of the Shadowrealm’s cost (2) to play it.\n\u203B\n The action ability can only be used when Guardian of the Shadowrealm is in your banished zone.\n\u203B\n The action does not have go again and requires an action point.\n\u203B\n Guardian of the Shadowrealm goes into the graveyard when the combat chain closes after it is played.",
    cardImage: require("./images/GuardianOfTheShadowrealm.png"),
  },
  {
    name: "Howl from Beyond",
    ruling:
      "\nAction cards go into your graveyard after they resolve. (This is relevant for Shadow Brute attacks that banish cards from your graveyard as an additional cost)",
    cardImage: require("./images/HowlFromBeyond.png"),
  },
  {
    name: "Mutated Mass",
    ruling:
      "\nYou can attack or defend with Mutated Mass even if your pitch zone is empty. 0 is a value.\n\u203B\n Mutated Mass’s base power and defense is * even when it’s in a zone that’s not the combat chain. (For example it has 6{p} in your hand if you have 3 cards with different costs in your pitch zone)\n\u203B\n Cards with no pitch value will count as cost 0 for Mutated Mass. (This is because it requires a value to be returned. This is different from when looking at if a card has cost 0.)\n\u203B\n Cards with X in it’s pitch value will have it’s X counted as 0. For example a card with cost XX counts the same as having a cost 0 in your pitch zone.\n\u203B\n Mutated Mass’s is continuously checking the pitch zone. It does not start a chain or trigger.",
    cardImage: require("./images/MutatedMass.png"),
  },
  {
    name: "Lunartide Plunderer",
    ruling:
      "\nIf the attack is banished, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is banished, the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it is banished, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n You choose the card from their soul to banish.\n\u203B\n You still banish Lunartide Plunderer even if the hero has no soul or a card from their soul is not banished. (Since it does not target, even if the card in soul is removed when this effect resolves, Lunartide Plunderer will still be banished)\n\u203B\n Banishing Lunartide Plunderer is not optional.",
    cardImage: require("./images/LunartidePlunderer.png"),
  },
  {
    name: "Shadow Puppetry",
    ruling:
      "\nYou choose if you want to banish the card after looking at it.\n\u203B\n If you choose not to banish the card, it remains on top of your deck.\n\u203B\n If this is used on an attack that already has go again, you will only gain 1 action point upon resolution of the attack as multiple instances of go again do not stack.",
    cardImage: require("./images/ShadowPuppetry.png"),
  },
  {
    name: "Soul Harvest",
    ruling:
      "\nThe green symbol on Soul Harvest is life.\n\u203B\n You may only play Soul Harvest in your deck if your hero is Levia, Shadowborn Abomination, or Levia (Young hero).\n\u203B\n You may only have 1 Soul Harvest in your deck including cards in your registered 80-card pool in constructed tournaments and only 1 Soul Harvest in your deck in limited tournaments or blitz tournaments as it is Legendary.\n\u203B\n You must pay the resource cost. Soul Harvest has an additional cost not an alternative cost.\n\u203B\n You cannot banish more than 6 cards from your graveyard. You also cannot banish less than 6 cards from your graveyard.",
    cardImage: require("./images/SoulHarvest.png"),
  },
  {
    name: "Soul Reaping",
    ruling:
      "\nYou may only play Soul Reaping in your deck if your hero is Chane, Bound by Shadow or Chane (Young hero).\n\u203B\n You may only have 1 Soul Reaping in your deck including cards in your registered 80-card pool in constructed tournaments and only 1 Soul Reaping in your deck in limited tournaments or blitz tournaments as it is Legendary.\n\u203B\n You may banish any cards from your hand. You would only gain {r} for cards with blood debt.\n\u203B\n If the hero Soul Reaping is attacking no longer has a soul when the chain link resolves, Soul Reaping wouldn’t have go again and not grant 1 action point.\n\u203B\n The “If you do, [...]” effect is an on-play triggered ability which triggers if the additional cost is played. This means it can be responded to, and it resolves before Soul Reaping resolves and becomes attacking.",
    cardImage: require("./images/SoulReaping.png"),
  },
  {
    name: "Spew Shadow",
    ruling:
      "\nYou do not need to play the attack action straight away. You must still pay its resource costs and it will still require an action point.\n\u203B\n You can attack a non-Light hero with the attack action; it will just not gain +2{p}.\n\u203B\n If you attack a non-hero card such as an aura with Spectra or an Ally, the attack will not gain +2{p}.",
    cardImage: require("./images/SpewShadow.png"),
  },
  {
    name: "Convulsions from the Bellows of Hell",
    ruling:
      "\nIf a card with 6 or more {p} is not banished this way this card would not affect the next attack action card you play in any way.\n\u203B\n The next attack can be any attack action card. This card does not affect weapon attacks.",
    cardImage: require("./images/Convulsions.png"),
  },
  {
    name: "Deadwood Rumbler",
    ruling:
      "\nYou cannot defend with Deadwood Rumbler as it does not have a defense value.\n\u203B\n Nobody has priority during the resolution of an ability. For example, you cannot play or activate an ability after drawing the card but before discarding. You also cannot see what card is discarded before responding to the banish of a card in a graveyard.\n\u203B\n Banishing a card from a graveyard is mandatory. (You may banish the card you discarded)\n\u203B\n You can banish a card from any player's graveyard.",
    cardImage: require("./images/DeadwoodRumbler.png"),
  },
  {
    name: "Deep Rooted Evil",
    ruling:
      "\nYou cannot defend with Deep Rooted Evil as it does not have a defense value.\n\u203B\n If Deep Root Evil is put into your banished zone this turn, it will count itself as it is a 6{p} card that is put into your banished zone this turn.",
    cardImage: require("./images/DeepRootedEvil.png"),
  },
  {
    name: "Graveling Growl",
    ruling:
      "\nEven if another card allows you to play this card i.e from your banished zone, the restriction of only being able to be played if a card with 6 or more {p} has been put into your banished zone this turn still applies.",
    cardImage: require("./images/GravelingGrowl.png"),
  },
  {
    name: "Hooves of the Shadowbeast",
    ruling:
      "\nYou choose if you want to use Hooves of the Shadowbeast’s ability at the time a card with 6 or more {p} is put into your banished zone.\n\u203B\n You can only gain action points during your action phase. (You can still use this effect during your opponent's turn, however you would not gain the action point.",
    cardImage: require("./images/HoovesOfTheShadowBeast.png"),
  },
  {
    name: "Lady Barthimont",
    ruling:
      "\nMentors do not have a pitch value or cost and cannot be pitched or played.\n\u203B\n Mentors have their effect active when they are face up in your arsenal.\n\u203B\n You cannot arsenal a card if there is not an empty arsenal zone.\n\u203B\n You do not have to find a specialization card from your deck, you may elect to not find a card. This is because it is looking for a specific type of card and it is a hidden zone. You still must shuffle your deck.",
    cardImage: require("./images/LadyBarthimot.png"),
  },
  {
    name: "Mark of the Beast",
    ruling:
      "\nAnywhere includes all possible zones, such as from hand, banished zone or deck. This is not limited to being put into the graveyard from the combat chain.\n\u203B\n This is a replacement effect. It does not create a trigger, the card does not enter the graveyard.",
    cardImage: require("./images/MarkOfTheBeast.png"),
  },
  {
    name: "Pulping",
    ruling:
      "\nYou cannot defend with Pulping as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n Nobody has priority during the resolution of an ability. For example, you cannot play or activate an ability after drawing the card but before discarding.\n\u203B\n Defended by 0 cards counts as being defended by less than 2 non-equipment cards.",
    cardImage: require("./images/Pulping.png"),
  },
  {
    name: "Shadow of Blasmophet",
    ruling:
      "\nYou cannot defend with Shadow of Blasmophet as it has no defense value. (This is different than if the defense value was 0.)\n\u203B\n Nobody has priority during the resolution of an ability. For example, you cannot play or activate an ability after drawing the card but before discarding nor can a player respond between you drawing and searching your deck. Players should respond before the ability resolves as you cannot do it during the resolution.\n\u203B\n The card this searched for must have the keyword blood debt. Cards that reference blood debt do not count unless they also have blood debt.\n\u203B\n You may elect to banish nothing, however the search is mandatory if a 6{p}+ card is discarded this way and therefore your deck must be shuffled.",
    cardImage: require("./images/ShadowOfBlasmophet.png"),
  },
  {
    name: "Smash with Big Tree",
    ruling:
      "\nYou cannot defend with Smash wth a Big Tree as it has no defense value. (This is different than if the defense value was 0.)",
    cardImage: require("./images/SmashWithBigTree.png"),
  },
  {
    name: "Tear Limb from Limb",
    ruling:
      "\nYou cannot defend with Tear Limb from Limb as it has no defense value.\n\u203B\n Base power is the printed {p} value on a card. (Located at the bottom left corner of a card.)\n\u203B\n The +X{p} gained is the base {p} of the next Brute attack action card you play this turn not the discarded card.\n\u203B\n Nobody has priority during the resolution of an ability. For example, you cannot play or activate an ability after drawing the card but before discarding.",
    cardImage: require("./images/TearLimbFromLimb.png"),
  },
  {
    name: "Aether Ironweave",
    ruling:
      "\nEquipments go to your graveyard when they are destroyed.\n\u203B\n The action cards do not need to be played from your hand. They can be played from your banished zone or other zones (Provided it is legal to play them from there).\n\u203B\n Even if you have played more than one of each attack action and non-attack action, it will still only gain {r}{r}.",
    cardImage: require("./images/AetherIronweave.png"),
  },
  {
    name: "Bounding Demigon",
    ruling:
      "\nYou may play this card from your hand even if you have not played a non-attack action card this turn. It would not gain the +1{p} if played from hand. (Even if you have played a non-attack action card this turn)",
    cardImage: require("./images/BoundingDemigon.png"),
  },
  {
    name: "Dimenxxional Crossroads",
    ruling:
      "\nDimenxxional Crossroads is a non-attack action card so if you play a non-attack action card from the banished zone the same turn you played Dimenxxional Crossroads, the effect won’t trigger.\n\u203B\n The ability just checks if you have played another card of that type this turn. It does not matter if that card was played from hand or banished zone.\n\u203B\n Damage causes loss of {h}. If you take any damage during your turn such as arcane damage or lose {h} due to blood debt, Dimenxxional Crossroads will be destroyed.\n\u203B\n Players do not have priority during the end of turn. If {h} is lost during the end of your turn i.e from blood debt, no player can respond to the destroying of Dimenxxional Crossroads as you cannot have priority during the end of turn.",
    cardImage: require("./images/DimenxxionalCrossroads.png"),
  },
  {
    name: "Dimenxxional Gateway",
    ruling:
      "\nIf it is a Shadow and a Runeblade card, you do both effects. If it is not a Shadow or a Runeblade card you do none of the effects.\n\u203B\n If there are no cards in your deck, you reveal nothing. No effects will trigger.\n\u203B\n Each opposing hero decides if they want to prevent the arcane damage they would take. They cannot prevent arcane damage that would be dealt to other heroes.\n\u203B\n In a multiplayer game, opposing heroes decide if they want to prevent arcane damage in clockwise order, starting with the player to the left of the controller of Dimenxxional Gateway. (This is for a multiplayer game only. Cards that deal damage to both players do not follow this rule in games of two players.)",
    cardImage: require("./images/DimenxxionalGateway.png"),
  },
  {
    name: "Invert Existence",
    ruling:
      "\nYou cannot defend with Invert Existence as it does not have a defense value.\n\u203B\n You may banish any cards from an opposing hero’s graveyard, not just action cards.\n\u203B\n You cannot banish 1 card from two different graveyards. They must all be from one opposing hero’s graveyard\n\u203B\n You do not choose targets. You pick the cards when Invert Existence resolves. There is no window for priority after the cards are picked but before they are banished. I.e if you want to play a card that prevents arcane damage or gains you life, do it in response to this card. Prevention and replacement effects such as spellvoid/arcane barrier do not need to be activated in response.",
    cardImage: require("./images/InvertExistence.png"),
  },
  {
    name: "Lord Sutcliffe",
    ruling:
      "\nMentors do not have a pitch value or cost and cannot be pitched or played.\n\u203B\n Mentors have their effect active when they are face up in your arsenal.\n\u203B\n You cannot arsenal a card if there is not an empty arsenal zone.\n\u203B\n You do not have to find a specialization card from your deck, you may elect to not find a card. This is because it is looking for a specific type of card and it is a hidden zone. You still must shuffle your deck.\n\u203B\n Lord Sutcliffe does arcane damage to all heroes, not just opposing.\n\u203B\n The turn player decides the order of replacement effects that would apply first. For example, if both players have arcane barrier, the turn player decides which replacement effect applies first and therefore who has to decide to prevent first.\n\u203B\n The triggered ability is not once per turn, if you play multiple non-attack action cards it would trigger each time.",
    cardImage: require("./images/LordSutcliffe.png"),
  },
  {
    name: "Piercing Shadow Vise",
    ruling:
      "\nPiercing Shadow Vise’s ability is continuously checking. If you deal arcane damage after Piercing Shadow Vise is already attacking it will still gain +2{p}. This includes if it is a previous chain link or have already dealt damage. (If Piercing Shadow Vise has already dealt damage, increasing it’s {p} won’t retroactively deal any more damage)",
    cardImage: require("./images/PiercingShadowVise.png"),
  },
  {
    name: "Rift Bind",
    ruling:
      "\nYou may still play Rift Bind from your hand. It would not gain the +X{p} if it is played from hand.\n\u203B\n You can play Rift Bind from your banished zone even if you have not played any ‘non-attack’ action cards that turn.",
    cardImage: require("./images/RiftBind.png"),
  },
  {
    name: "Rifted Torment",
    ruling:
      "\nYou may still play Rifted Torment from your hand. It would not deal the 1 arcane damage if it is played from your hand.\n\u203B\n You may target yourself with the arcane damage.",
    cardImage: require("./images/RiftedTorment.png"),
  },
  {
    name: "Rip Through Reality",
    ruling:
      "\nRip Through Reality is continuously checking. If you deal arcane damage while Rip Through Reality is attacking, it would still gain go again.",
    cardImage: require("./images/RipThroughReality.png"),
  },
  {
    name: "Seeds of Agony",
    ruling:
      '\nYou choose the target you want to deal 1 arcane damage to at the time you play an attack action card with cost 0/1/2 or less.\n\u203B\n The attack action is the card that does the arcane damage.\n\u203B\n With the release of the comprehensive rules on May 4th 2021, the card text of Seeds of Agony been errata’d to “The next attack action card with cost 0/1/2 or less you play this turn gains "When you attack with this, deal 1 arcane damage to target hero.”” (Seeds of Agony is the only card in Monarch that functionally changes with the release of the comprehensive rules. Other cards do have updated text but their functionality is not affected.) The errata to Seeds of Agony is effective immediately.\n\u203B\n If you play multiple Seeds of Agony followed by an attack action card, it will have multiple instances of “When you attack with this, deal 1 arcane damage to target hero.” It will be considered multiple triggers therefore each one is it’s own source. This is relevant for preventing damage from arcane barrier. For example if you have an attack action with 2 instances of “When this attacks, deal 1 arcane damage to target hero” it will require arcane barrier 1 and two resources to fully prevent this.\n\u203B\n If you play multiple Seeds of Agony followed by an attack action card, it will have multiple instances of “When you attack with this, deal 1 arcane damage to target hero.” It will be considered multiple triggers therefore each one is it’s own source. This is relevant for preventing damage from spellvoid. For example if you have an attack action with 2 instances of “When this attacks, deal 1 arcane damage to target hero” you will not be able to prevent both with spellvoid 2. (You can use two instances of spellvoid 1 to prevent both.)',
    cardImage: require("./images/SeedsOfAgony.png"),
  },
  {
    name: "Shadow of Ursur",
    ruling:
      "\nYou may pay the additional cost even when played from the banished zone.\n\u203B\n You may play this card without paying the additional cost. (It would not gain go again)\n\u203B\n A card must have the keyword blood debt to be banished from hand, not just reference blood debt.",
    cardImage: require("./images/ShadowOfUrsur.png"),
  },
  {
    name: "Sonata Arcanix",
    ruling:
      "\nYou choose what you want X to be before applying cost reductions then paying the costs.\n\u203B\n X can be 0.\n\u203B\n The value of each X in Sonata Arcanix’s cost must be the same.\n\u203B\n You must pay double the cost of X. For example if you want this card to reveal 2 + 3 cards. You need to pay 4 resources.\n\u203B\n If there are less cards in your deck than the amount of cards to be revealed, you reveal your whole deck.\n\u203B\n The arcane damage is a single source of damage. For example if Sonata does 2 arcane damage you would require arcane barrier 2 (or two arcane barrier 1) to fully prevent it.",
    cardImage: require("./images/SonataArcanix.png"),
  },
  {
    name: "Unhallowed Rites",
    ruling:
      "\nYou may still play this from your hand regardless if you’ve played a non-attack action card this turn or not.\n\u203B\n A card must have the keyword blood debt to be put on the bottom of your deck, not just reference blood debt.",
    cardImage: require("./images/UnhallowedRites.png"),
  },
  {
    name: "Blinding Beam",
    ruling:
      "\nYou cannot defend with Blinding Beam as it does not have a defense value.\n\u203B\n You announce targets before paying costs.\n\u203B\n If the power of an attack would become less than 0, it is considered to be 0. However if the attack then gets a positive power modifier, it will still be under the effect of the -{p} modifier.",
    cardImage: require("./images/BlindingBeam.png"),
  },
  {
    name: "Celestial Cataclysm",
    ruling:
      "\nYou cannot play this card if you don’t have at least 3 cards in your hero’s soul.",
    cardImage: require("./images/CelestialCataclysm.png"),
  },
  {
    name: "Glisten",
    ruling:
      "\nYou can only play instants when you have priority. You do not have priority during the start of turn or the end phase. (You cannot wait until end of turn to play Glisten)\n\u203B\n You may play this card during the reaction window as you have priority during that step. (You can also play it during the defending window if you so choose)\n\u203B\n You may put all the counters on a single weapon.\n\u203B\n You pick the weapons and how many counters each gets when Glisten resolves.\n\u203B\n You may pick zero weapons and distribute zero counters.\n\u203B\n Glisten will remove all +1{p} counters on weapons at the end phase, not just those created from Glisten.\n\u203B\n You may play this on an Illusionist aura if there is a card such as Iris of Reality that makes Illusionist auras weapons. If it is no longer a weapon when it is the end phase, the +1{p} counters will not be removed.",
    cardImage: require("./images/Glisten.png"),
  },
  {
    name: "Great Library of Solana",
    ruling:
      "\nYou may only have 1 Great Library of Solana in your deck as it is Legendary. This applies to all formats including booster draft and sealed deck.\n\u203B\n You cannot pitch Great Library of Solana, as it does not have a pitch value.\n\u203B\n Great Library of Solana uses an action point to play.\n\u203B\n Great Library of Solana is a Landmark. There can only be one Landmark in the arena at any given time. When a Landmark enters the arena while another is in the arena, the previous Landmark is destroyed and put into the graveyard.\n\u203B\n A Landmark stays on the arena after it is played. It remains in the arena until it is destroyed.\n\u203B\n The blue symbol on Great Library of Solana is intellect. At the end of your turn you draw up to your hero’s intellect. Having 2 or more cards with yellow color strips in your pitch zone in the end phase will allow you to draw up an additional card as your intellect is 1 higher.\n\u203B\n Any player can activate the action ability of Great Library of Solana, however you must pay its cost and have an action point (And have priority on your turn) to use it.\n\u203B\n The color strip is located at the top middle of a card. You can also check the top left for the pitch value. Pitch 2 = Yellow color strip.",
    cardImage: require("./images/GreatLibraryOfSolana.png"),
  },
  {
    name: "Halo of Illumination",
    ruling:
      "\nYou may put a non-Light card into your hero’s soul, you would however not draw a card when the ability resolves.\n\u203B\n If you do not have a card in hand when the ability resolves, you will not put a card from your hand into your soul and therefore not draw a card.\n\u203B\n If you use spellvoid 2 to prevent one arcane damage, there will be no leftover prevention.\n\u203B\n Spellvoid 2 can only prevent 2 arcane damage from a single source. It cannot prevent 2 sources of 1 arcane damage.\n\u203B\n When this card is destroyed, it is sent to your graveyard.",
    cardImage: require("./images/HaloOfIllumination.png"),
  },
  {
    name: "Impenetrable Belief",
    ruling:
      "\nIt does not matter when the cards were put into the banished zone this turn or if they were put in there at the same time as long as three have been put into the banished zone this turn. The cards also don’t need to still be in the banished zone.\n\u203B\n If cards are put into the banished zone that would cause Impenetrable belief to gain +2[d} after it is already defending, it would still gain the bonus as the effect is continuous and not a trigger\n\u203B\n Impenetrable Belief can only get +2{d} even if more than 3 cards is banished.",
    cardImage: require("./images/ImpenetrableBelief.png"),
  },
  {
    name: "Invigorating Light",
    ruling:
      "\nInvigorating Light checks if there is a card in your hero’s soul at the time you play it. Even if the number of cards in your soul changes before the combat chain closes, it won’t have an effect. For example, if there were no cards in your soul when you play Invigorating Light, then a card is placed into your soul before the combat chain closes, Invigorating Light would still be put into your hero’s soul when the combat chain closes.",
    cardImage: require("./images/InvigoratingLight.png"),
  },
  {
    name: "Ray of Hope",
    ruling:
      "\nYou can still play this card against a non-Shadow hero, however it will not do anything.\n\u203B\n This affects all attacks including weapon attacks (which include attacking with an aura that is a weapon) and attack action.\n\u203B\n Ray of Hope checks if you have less {h} than an opposing Shadow hero when it resolves.",
    cardImage: require("./images/RayOfHope.png"),
  },
  {
    name: "Seek Enlightenment",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n You must put the attack action card into your hero’s soul if it hits. It is not optional.",
    cardImage: require("./images/SeekEnlightenment.png"),
  },
  {
    name: "Soul Food",
    ruling:
      "\nIt is not optional, you cannot keep some cards in your hand.\n\u203B\n This does not put your arsenal into your hero’s soul as the arsenal is not part of your hand.\n\u203B\n Soul Food is an action and uses an action point to play.",
    cardImage: require("./images/SoulFood.png"),
  },
  {
    name: "Soul Shield",
    ruling:
      "\nSince defense reactions can’t defend in the defending window and must be played in the reaction window, you must pay Soul Shield’s cost to play it.\n\u203B\n Soul Shield only goes into your hero’s soul when the combat chain closes. The combat chain closes when the turn player either ends their turn, closes it to play a non-attack action or voluntarily closes the combat chain.\n\u203B\n If you defend with Soul Shield you must put it into your hero’s soul. It is not optional.",
    cardImage: require("./images/SoulShield.png"),
  },
  {
    name: "Tome of Divinity",
    ruling:
      "\nYou cannot defend with Tome of Divinity as it does not have a defense value.\n\u203B\n It does not matter how the card was put into your hero’s soul nor does it matter if the card is still in your hero’s soul.\n\u203B\n You cannot choose to draw only 2 cards if a card has been put into your hero’s soul this turn.\n\u203B\n This card checks on resolution not when it is played, if a card is put into your hero’s soul before this card resolves it would draw 3 cards.",
    cardImage: require("./images/TomeOfDivinity.png"),
  },
  {
    name: "Vestige of Sol",
    ruling:
      "\nYou still gain the resources the card you pitched generated, this card gains you an additional {r} (Provided a card has been put into your hero’s soul this turn).\n\u203B\n It does not matter how the card was put into your hero’s soul nor does it matter if the card is still in your hero’s soul.\n\u203B\n This is not a once per turn effect. Everytime you pitch a Light card this turn you would gain {r}. Provided a card has been put into your hero’s soul this turn)\n\u203B\n You cannot pitch a card if there is not a cost to be played. You cannot pitch a card for a cost if there are already sufficient resources available to you.\n\u203B\n You cannot pitch a card that has no pitch cost even if Vestige of Sol is active.\n\u203B\n ERRATA: This card text has been changed to “If a card has been put into your hero's soul this turn, whenever you pitch a Light card, instead gain that many {r} plus 1.” (This is to reflect the intentions of how the card is supposed to work). This errata is effective immediately.\n\u203B\n This is a replacement effect not a triggered effect.",
    cardImage: require("./images/VestigeOfSol.png"),
  },
  {
    name: "Arc Light Sentinel",
    ruling:
      "\nYou cannot defend with Arc Light Sentinel as it does not have a defense value.\nYou may only play Arc Light Sentinel in your deck if your hero is Prism, Sculptor of Arc Light, or Prism (Young hero).\n\u203B\n The turn player always has priority first and can start the turn playing a card assuming they are legally able to (For example he still needs to have the resources or needs an empty chain to play an action).\n\u203B\n If an attack is already announced and attacking, playing Arc Light Sentinel does not redirect the attack to Arc Light Sentinel.\n\u203B\n The opponent may elect not to attack, however if they choose to attack they must choose Arc Light Sentinel as the target of the attack.\n\u203B\n If there are multiple Arc Light Sentinel, you can choose which one to attack. You cannot attack another target that isn’t an Arc Light Sentinel.\n\u203B\n Arc Light Sentinel only forces attacks to target it. Action cards such as ones that deal damage cannot target Arc Light Sentinel.\n\u203B\n This includes all attacks including weapon attacks and attack action cards.\n\u203B\n In multiplayer (i.e UPF) or other formats where there's a restriction on who you can attack or target, if you are not able to normally attack the player controlling Arc Light Sentinel then you are not able to attack Arc Light Sentinel as they are out of your spell range (Attack range).",
    cardImage: require("./images/ArcLightSentinel.png"),
  },
  {
    name: "Dream Weavers",
    ruling:
      "\nOnce the card changes zone, for example, enters the graveyard after the combat chain closes, it will have phantasm again.",
    cardImage: require("./images/DreamWeavers.png"),
  },
  {
    name: "Genesis",
    ruling:
      "\nYou cannot defend with Genesis, as it does not have a defense value.\n\u203B\n Players do not have priority at the start of turns. Players cannot respond to Genesis’s effect at the start of turn as neither players have priority during the start of turn.\n\u203B\n If it is not an Illusionist or Light card, then no Spectral Shield is created nor is a card drawn.\n\u203B\n If it is a Light Illusionist card then a Spectral Shield is created and a card is drawn.",
    cardImage: require("./images/Genesis.png"),
  },
  {
    name: "Herald of Erudition",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfErudition.png"),
  },
  {
    name: "Herald of Judgment",
    ruling:
      "\nYou may only play Herald of Judgment in your deck if your hero is Prism, Sculptor of Arc Light or Prism (Young hero).\n\u203B\n If the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.\n\u203B\n The defending hero can still play cards from their banished zone during your action phase.\n\u203B\n The defending hero can still activate actions on cards from their banished zone. For example a card in the banished zone with an action ability. This card only stops banished card from being played.\n\u203B\n The defending hero can still play cards from their hands.",
    cardImage: require("./images/HeraldOfJudgement.png"),
  },
  {
    name: "Herald of Protection",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfProtection.png"),
  },
  {
    name: "Herald of Ravages",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n You may target any hero with the 1 arcane damage, not just the defending hero.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfRavages.png"),
  },
  {
    name: "Herald of Rebirth",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n You can only put a card with the keyword phantasm from your graveyard on top of your deck, this does not include cards that only reference phantasm.\n\u203B\n Herald of Rebirth cannot put itself to the top of your deck as it is not in the graveyard when it hits.\n\u203B\n You do not have to put a card with phantasm from your graveyard on top of your deck. Even if you elect not to, you must still put Herald of Rebirth into your hero’s soul.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfRebirth.png"),
  },
  {
    name: "Herald of Tenacity",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfTenacity.png"),
  },
  {
    name: "Herald of Triumph",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n Reducing the {p} of a defending attack action card has no effect on its {d} value.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/HeraldOfTriumph.png"),
  },
  {
    name: "Parable of Humility",
    ruling:
      "\nYou cannot defend with Parable of Humility as it does not have a defense value.\n\u203B\n Reducing the {p} of a defending attack action card has no effect on its {d} value.\n\u203B\n This does not affect the base {p} of the attack action or affect the card when it is not attacking or defending.\n\u203B\n When a card enters a zone such as the graveyard and cares about the {p} of the card, it will use the last known information. In this case when an attack action card controlled by opposing hero enters the graveyard from the combat chain, it will count as having the -1{p}. (Only relevant for cards that care about the {p} of a card entering a zone)",
    cardImage: require("./images/ParableOfHumility.png"),
  },
  {
    name: "Merciful Retribution",
    ruling:
      "\nYou cannot defend with Merciful Retribution as it does not have a defense value.\n\u203B\n Token aura or attack action cards you control that are destroyed will also deal 1 arcane damage to target hero. Only non-token Light cards are put into your hero’s soul.\n\u203B\n An attack action card that is put into the graveyard from the combat chain is not considered to be destroyed. Discarding an aura or attack action card is also not considered to be destroyed.\n\u203B\n Merciful Retribution triggers itself. If Merciful Retribution is destroyed, it will deal 1 arcane damage to target hero and be put into your hero’s soul as it is a Light Illusionist Aura.",
    cardImage: require("./images/MercifulRetribution.png"),
  },
  {
    name: "Ode to Wrath",
    ruling:
      "\nYou cannot defend with Ode to Wrath as it does not have a defense value.\n\u203B\n The green symbol on Ode to Wrath is life.\n\u203B\n Loss of {h} does not count as dealing damage.\n\u203B\n A source you control includes damage from attacks such as weapon attack (Including attacking with an aura if applicable), attack action or dealing damage such as arcane damage.",
    cardImage: require("./images/OdeToWrath.png"),
  },
  {
    name: "Phantasmaclasm",
    ruling:
      "\nYou must select a card from their hand. It is not optional.\n\u203B\n If the defending hero’s hand is empty, they will still draw a card when Phantasmaclasm’s ability resolves.\n\u203B\n Phantasmaclasm’s ability happens before the defending player has a chance to defend or play defense reactions. (And thus before it can be destroyed by phantasm)\n\u203B\n If their deck is empty, Phantasmaclasm would put the chosen card on their deck and that player would immediately redraw the same card.\n\u203B\n If this is attacking an ally, you would not look at a hero’s hand as there is no defending hero and thus no one would draw a card.",
    cardImage: require("./images/Phantasmaclasm.png"),
  },
  {
    name: "Phantasmal Footsteps",
    ruling:
      "\nAn attack action card going into a graveyard from the combat chain is not the same as being destroyed.\n\u203B\n If you elect not to use it’s effect on the first Illusionist attack action card you control that is destroyed, you cannot use the effect for the rest of the turn.\n\u203B\n The Illusionist attack action card being destroyed does not need to be the one in the current chain link. For example if an illusionist attack action card in a previous chain link was destroyed (I.e by phantasm at a later point due to an instant or reaction) then Phantasmal Footsteps will still trigger.\n\u203B\n When you defend with Phantasmal Footsteps and pay {r} it’s defense becomes 1, even if you defend with it an additional time this turn and pay {r} it won’t add any additional {d}.\n\u203B\n Phantasmal Footsteps only changes it’s defense to 1{d}, it does not take into account or remove any -1{d} counters. If Phantasmal Footsteps has a -1{d} counter on it then its defense becomes 1{d}, it would have 0{d}.\n\u203B\n You can defend with an equipment as long as it's in the equipment zone. If the attacking player closes the chain, Phantasmal Footsteps would return to the equipment zone provided it was not destroyed by defending an attack with 6 or more {p} and thus you would be able to defend again.\n\u203B\n Phantasmal Footsteps does not have Battleworn. It will not gain a -1{d} counter from defending.\n\u203B\n Phantasmal Footsteps {d} becoming 1 lasts until end of turn. You do not have to pay {r} again if you defend with it a second time for it to have 1{d}.\n\u203B\n You cannot gain action points during your opponent’s turn. (You may still pay the {r} if an illusionist attack action is destroyed, you just would not gain the action point when it resolves)",
    cardImage: require("./images/PhantasmalFootsteps.png"),
  },
  {
    name: "Phantasmify",
    ruling:
      "\nWhen an attack has an effect when played that would become a layer on the chain, that effect will happen before the defending window and therefore even if the attack is destroyed, the effect has already happened.\n\u203B\n When an attack action is destroyed the rest of the card effects will not resolve such as go again which rely on the chain link resolving.",
    cardImage: require("./images/Phantasmify.png"),
  },
  {
    name: "Prismatic Shield",
    ruling:
      "\nYou cannot defend with Prismatic Shield as it does not have a defense value.",
    cardImage: require("./images/PrismaticShield.png"),
  },
  {
    name: "Spears of Surreality",
    ruling:
      "\nIf Spears of Surreality is destroyed, the attack will not resolve and therefore you will not gain an action point from go again.",
    cardImage: require("./images/SpearsOfSurreality.png"),
  },
  {
    name: "The Librarian",
    ruling:
      "\nMentors do not have a pitch value or cost and cannot be pitched or played.\n\u203B\n Mentors have their effect active when they are face up in your arsenal.\n\u203B\n You cannot arsenal a card if there is not an empty arsenal zone.\n\u203B\n You do not have to find a specialization card from your deck, you may elect to not find a card. This is because it is looking for a specific type of card and it is a hidden zone. You still must shuffle your deck.\n\u203B\n If you create multiple spectral shields at the same time you still only draw one card and put one lesson counter on The Librarian.",
    cardImage: require("./images/TheLibrarian.png"),
  },
  {
    name: "Wartune Herald",
    ruling:
      "\nIf the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, Phantasm is no longer functional as a triggered ability, and the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If this attack hits, you must put it into your hero's soul. This effect is not optional.",
    cardImage: require("./images/WartuneHerald.png"),
  },
  {
    name: "Beacon of Victory",
    ruling:
      "\nYou must have cards in your hero’s soul to banish in order to play Beacon of Victory.\n\u203B\n You can target any attack including weapon attacks and attack actions.\n\u203B\n You must have charged before this card resolves for the second effect of the card to happen. Charging after this card has resolved would not do anything.\n\u203B\n You do not have to play the card you search for straight away.",
    cardImage: require("./images/BeaconOfVictory.png"),
  },
  {
    name: "Bolt of Courage",
    ruling:
      "\nBolt of Courage does not need to be the card to have charged for it to gain its effect. If you have charged this turn due to another card, Bolt of Courage still gains its effect.",
    cardImage: require("./images/BoltOfCourage.png"),
  },
  {
    name: "Bolting Blade",
    ruling:
      "\nIf you’ve charged at least twice this turn, Bolting Blade will cost 0 to play.\n\u203B\n If there is an effect that increases the cost of Bolting Blade, it can be reduced by Bolting Blade’s effect. For example if there is an effect that causes Bolting Blade to cost {r}{r} more but you have charged three times, Bolting Blade will cost 0 to play.\n\u203B\n The cost of Bolting Blade is still four even if it’s cost is reduced and is played for 0 resources. This is important for cards that care about the attack action’s cost.",
    cardImage: require("./images/BoltingBlade.png"),
  },
  {
    name: "Courageous Steelhand",
    ruling:
      "\nYou can play this card even if you have not charged this turn. It would not have any target or effect even if you charge later in the turn.\n\u203B\n Even if you have charged multiple times, the attack only gains +1/2/3{p}. Additional times charged have no effect on this card.",
    cardImage: require("./images/CourageousSteelhand.png"),
  },
  {
    name: "Dusk Path Pilgrimage",
    ruling:
      "\nIf there are multiple effects that let your weapon attack an additional time you would be able to attack an additional time for each trigger.\n\u203B\n You must still pay resources and have the required action point to attack again. This simply bypasses the “Once per Turn” part of the attack for one attack.\n\u203B\n This only affects the next weapon attack. The +{p} does not affect or stay on the weapon.",
    cardImage: require("./images/DuskPathPilgrimage.png"),
  },
  {
    name: "Engulfing Light",
    ruling:
      "\nEngulfing Light does not need to be the card to have charged for it to gain its effect. If you have charged this turn due to another card, Engulfing Light still gains its effect.\n\u203B\n If the attack is put into your hero’s soul, the combat chain does not close and the chain link remains on the combat chain along with all of the defending cards and attack reactions.\n\u203B\n If the attack is put into your hero’s soul, the attack can not gain abilities such as “go again”.\n\u203B\n If the attack has had “go again” before it goes into your soul, Last Known Information is used at the end of chain link resolution and you will still gain an action point.\n\u203B\n If Engulfing Light hits while charged, it must go in your hero’s soul. It is not optional.",
    cardImage: require("./images/EngulfingLight.png"),
  },
  {
    name: "Minerva Themis",
    ruling:
      "\nMentors do not have a pitch value or cost and cannot be pitched or played.\n\u203B\n Mentors have their effect active when they are face up in your arsenal.\n\u203B\n You cannot arsenal a card if there is not an empty arsenal zone.\n\u203B\n You do not have to find a specialization card from your deck, you may elect to not find a card. This is because it is looking for a specific type of card and it is a hidden zone. You still must shuffle your deck.\n\u203B\n You can see if a weapon is 2H or 1H at the bottom middle of a card.\n\u203B\n The weapon hit does not need to be 1H for Minerva to get a counter.",
    cardImage: require("./images/MinervaThemis.png"),
  },
  {
    name: "Lumina Ascension",
    ruling:
      "\nYou may only play Lumina Ascension in your deck if your hero is Ser Boltyn, Breaker of Dawn or Boltyn (Young hero).\n\u203B\n All weapons you control gain +1{p}, this affects the weapon not just the next weapon attack.\n\u203B\n You must put the revealed card into your hero’s soul and gain 1{h} if it is a Light card. It is not optional. You must put the card on the bottom of your deck if it is not a Light card.",
    cardImage: require("./images/LuminaAscension.png"),
  },
  {
    name: "Plow Through",
    ruling:
      "\nThe first part of the card only affects your next weapon attack and the “if this weapon is defended by an attack action it gains +1{p} until end of turn” does not affect or stay on the weapon after you have attacked with it.\n\u203B\n The second part of the effect (If this weapon is defended by an attack action card) stays until end of turn as it gives the weapon +1{p} so if the weapon was to attack again it would still have it’s +1{p}. Note: That if it is defended again by another attack action card it would not gain an additional +1{p} as that effect was only to the weapon attack.",
    cardImage: require("./images/PlowThrough.png"),
  },
  {
    name: "Second Swing",
    ruling:
      "\nYou may still play this card even if you have not attacked with a weapon this turn. Your next attack will not gain the power bonus. (Even if you later attack with a weapon)\n\u203B\n Your next attack does not have to be a weapon attack. Second Swing is not specific to the type of attack.",
    cardImage: require("./images/SecondSwing.png"),
  },
  {
    name: "Spill Blood",
    ruling:
      "\nA weapon’s subtype is located at the bottom center of the card.\n\u203B\n This only affects axes. It affects both 1H and 2H axes.\n\u203B\n The effect stays on the weapon until end of turn. If you attack with the same axe multiple times in the turn, it would still maintain +2{p} and dominate.",
    cardImage: require("./images/SpillBlood.png"),
  },
  {
    name: "Take Flight",
    ruling:
      "\nTake Flight does not need to be the card to have charged for it to gain its effect. If you have charged this turn due to another card, Take Flight will have go again.",
    cardImage: require("./images/TakeFlight.png"),
  },
  {
    name: "V of the Vanguard",
    ruling:
      "\nYou may only play V of the Vanguard in your deck if your hero is Ser Boltyn, Breaker of Dawn or Boltyn (Young hero).\n\u203B\n You can charge any type of cards in your hand. Attacks will only get +1{p} for each Light card charged this way.\n\u203B\n Playing or using non-attack actions closes the combat chain. (They require an empty combat chain to be played)",
    cardImage: require("./images/VOfTheVanguard.png"),
  },
];

export default cardData;
