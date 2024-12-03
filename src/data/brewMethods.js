export const brewMethods = [
  {
    id: 1,
    name: "Espresso",
    image: require("../assets/images/espresso.jpg"),
    description:
      "Espresso is a concentrated coffee beverage brewed by forcing hot water under high pressure through finely ground coffee.",
    coffee: "18g",
    water: "200g",
    grinder: "Extra Fine",
    brewTime: "2:00",
    instructions: [
      "Heat up your espresso machine until it reaches proper temperature",
      "Grind 18g of coffee beans to an extra fine consistency",
      "Distribute grounds evenly in the portafilter and tamp with firm pressure",
      "Lock portafilter into group head and start extraction",
      "Stop the shot when you reach approximately 36g of liquid (1:2 ratio)",
      "Total shot time should be around 25-30 seconds"
    ]
  },
  {
    id: 2,
    name: "Aeropress",
    image: require("../assets/images/aeropress.webp"),
    description:
      "Aeropress is a compact and portable coffee brewing system that uses pressure to extract the flavors from the coffee grounds.",
    coffee: "15g",
    water: "240g",
    grinder: "Fine",
    brewTime: "2:00",
    instructions: [
      "Heat water to 175-185°F (80-85°C)",
      "Place filter in cap and rinse with hot water",
      "Grind 15g of coffee to fine consistency",
      "Add coffee to Aeropress and start timer",
      "Pour 240g of hot water over 30 seconds",
      "Stir gently 3 times",
      "Attach cap with filter and wait until 1:30",
      "Flip onto cup and press slowly for 30 seconds"
    ]
  },
  {
    id: 3,
    name: "French Press",
    image: require("../assets/images/frenchpress.jpg"),
    description:
      "French Press is a coffee brewing method that uses a metal or glass press to extract the flavors from the coffee grounds.",
    instructions: [
      "Heat water to 200°F (93°C)",
      "Grind 30g coffee to coarse consistency",
      "Add coffee to French Press",
      "Pour 500g hot water over grounds",
      "Stir gently",
      "Place plunger on top without pressing",
      "Wait 4 minutes",
      "Press plunger down slowly",
      "Serve immediately"
    ]
  },
  {
    id: 4,
    name: "V60",
    image: require("../assets/images/v60.jpg"),
    description:
      "V60 is a cone-shaped dripper that uses gravity to extract the flavors from the coffee grounds.",
    coffee: "13g",
    water: "220g",
    grinder: "Medium",
    brewTime: "1:55",
    instructions: [
      "Heat water to 200°F (93°C)",
      "Place filter in V60 and rinse with hot water",
      "Grind 13g coffee to medium consistency",
      "Add coffee to filter and create small well in center",
      "Pour 30g water for blooming and wait 30 seconds",
      "Pour water in circular motion until reaching 220g total",
      "Total brew time should be around 1:55"
    ]
  },
  {
    id: 5,
    name: "Siphon",
    image: require("../assets/images/siphon.jpg"),
    description:
      "Siphon is a coffee brewing method that uses a siphon to extract the flavors from the coffee grounds.",
    coffee: "20g",
    water: "300g",
    grinder: "Fine",
    brewTime: "2:10",
    instructions: [
      "Fill bottom chamber with 300g hot water",
      "Place filter in upper chamber",
      "Attach upper chamber and turn on heat source",
      "Wait for water to rise to upper chamber",
      "Add 20g of finely ground coffee",
      "Stir gently 3 times",
      "Let brew for 1 minute",
      "Turn off heat and wait for coffee to drain",
      "Remove top chamber and serve"
    ]
  },
  {
    id: 6,
    name: "Chemex",
    image: require("../assets/images/chemex.jpg"),
    description:
      "Chemex is a coffee brewing method that uses a glass carafe to extract the flavors from the coffee grounds.",
    coffee: "25g",
    water: "340g",
    grinder: "Medium",
    brewTime: "2:20",
    instructions: [
      "Heat water to 200°F (93°C)",
      "Place filter in Chemex and rinse with hot water",
      "Grind 25g coffee to medium consistency",
      "Add coffee to filter",
      "Pour 50g water for blooming and wait 30 seconds",
      "Pour remaining water in circular motions until reaching 340g",
      "Total brew time should be around 2:20",
      "Remove filter and serve"
    ]
  },
  {
    id: 7,
    name: "Moka Pot",
    image: require("../assets/images/mokapot.jpg"),
    description:
      "Moka Pot is a coffee brewing method that uses a metal pot to extract the flavors from the coffee grounds.",
    coffee: "18g",
    water: "200g",
    grinder: "Extra Fine",
    brewTime: "5:30",
    instructions: [
      "Fill bottom chamber with 200g hot water (just below valve)",
      "Grind 18g coffee to extra fine consistency",
      "Add coffee to filter basket (don't tamp)",
      "Assemble pot and place on medium heat",
      "Wait for coffee to start flowing (3-4 minutes)",
      "Remove from heat when brewing sounds like gurgling",
      "Serve immediately"
    ]
  },
  {
    id: 8,
    name: "Turkish",
    image: require("../assets/images/turkish.jpg"),
    description:
      "Turkish is a coffee brewing method that uses a metal pot to extract the flavors from the coffee grounds.",
    coffee: "18g",
    water: "200g",
    grinder: "Extra Fine",
    brewTime: "5:30",
    instructions: [
      "Grind 18g coffee to extra fine powder consistency",
      "Add coffee and 200g cold water to cezve",
      "Add sugar if desired",
      "Place cezve on low heat",
      "Wait for foam to rise (do not stir)",
      "Remove from heat before it boils over",
      "Return to heat and let foam rise again",
      "Pour into cup including foam",
      "Let grounds settle before drinking"
    ]
  },
];
