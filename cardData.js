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
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Ridge Rider Shot",
    ruling:
      "\nRidge Rider Shot must be placed into your arsenal face up, turning a face down Ridge Rider Shot in arsenal face up will not grant the bonus.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Salvage Shot",
    ruling:
      "\nSalvage Shot is still considered an attack that hit and a chain link on the combat chain even when it is put on the bottom of your deck.\n\u203B\n Putting Salvage Shot on the bottom of your deck is not optional.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Searing Shot",
    ruling:
      "\nThe green symbol on Searing Shot is a hero's life.\n\u203B\n The loss of life cannot be defended or prevented.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Silver the Tip",
    ruling:
      "\nIf you have a card in arsenal, Silver the Tip can still be played, however it will not do anything beyond replenishing your action point from go again.\n\u203B\n You do not look at the top 2/3/4 cards if you have a card in arsenal.\n\u203B\n You do not have to put an arrow card into your arsenal.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Take Cover",
    ruling:
      "\nYou may still play Take Cover with an arsenal in play.\n\u203B\n If you play Take Cover from your arsenal, you may reload when Take Cover resolves.\n\u203B\n Take Cover’s reload happens before damage calculation so you may play the card you reloaded from arsenal before damage calculation. For example you may reload another defense reaction and play that to the same chain link you played Take Cover.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Three of a Kind",
    ruling:
      "\nYou still need to pay the cost and action points to play cards out of your arsenal.\n\u203B\n You cannot play any cards except cards from arsenal, this includes cards from hand, banished zone or deck.\n\u203B\n The restriction applies to all card types. You cannot play instants or attack reactions unless they are played from your arsenal.\n\u203B\n You may still activate cards, such as weapons, equipment, hero abilities, and items.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
  {
    name: "Nock the Deathwhistle",
    ruling:
      "\nYou may only play Nock the Deathwhistle in your deck if your hero is Azalea, Ace in the Hole or Azalea (young hero).\n\u203B\n You may elect not to put a card on the top of your deck, you still must shuffle your deck after.",
    cardImage: require("./images/NockTheDeathWhistle.png"),
  },
];

export default cardData;
