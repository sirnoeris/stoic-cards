const QUOTE_CARDS = [
  {
    id: "epictetus-control-01",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 1",
    quote_text: "Some things are within our control, and some things are not. Within our control are our opinions, desires, and aversions. Not within our control are our bodies, possessions, and reputations.",
    tags: ["control", "acceptance", "fundamentals"],
    mode: "all",
    core_meaning: "The foundation of Stoicism: sharply distinguish what you can influence (your own thoughts, choices, responses) from what you cannot (other people, events, outcomes). Peace comes from working only within your sphere.",
    scenario_generic: "You spent weeks preparing a proposal at work, but your manager shelves it without explanation. You can\u2019t control their decision. You can control whether you ask for feedback, learn from the process, and channel your energy into the next opportunity.",
    mcq_question: "According to this idea, where should you direct most of your energy?",
    mcq_options: [
      "Toward your own judgments and responses",
      "Toward changing other people\u2019s opinions",
      "Toward predicting every possible outcome"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Focus on what\u2019s actually yours to shape \u2014 your own mind and actions.",
    mcq_feedback_incorrect: "Close, but the key move here is turning inward \u2014 focusing on your own judgments, not on controlling externals."
  },
  {
    id: "marcus-thoughts-01",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 16",
    quote_text: "Your mind will take the shape of what you frequently hold in thought, for the human spirit is coloured by such impressions.",
    tags: ["mindset", "habits", "thoughts"],
    mode: "all",
    core_meaning: "Your habitual thoughts shape who you become. If you repeatedly dwell on grievances, your whole outlook turns bitter. If you practise noticing what\u2019s good and within reach, your character follows.",
    scenario_generic: "You scroll social media before bed and absorb a stream of outrage and comparison. Over weeks, you feel more anxious and dissatisfied. Swapping that last 20 minutes for something calm \u2014 a book, a few notes on the day \u2014 gradually shifts your baseline mood.",
    mcq_question: "What does Marcus Aurelius say shapes the character of your mind?",
    mcq_options: [
      "Your habitual thoughts and impressions",
      "The circumstances you were born into",
      "The approval of people around you"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. What you repeatedly think about literally colours your inner world.",
    mcq_feedback_incorrect: "The quote points to something within your control: the thoughts you habitually choose to hold."
  },
  {
    id: "seneca-imagination-01",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 13, Section 4",
    quote_text: "We suffer more often in imagination than in reality.",
    tags: ["anxiety", "fear", "perception"],
    mode: "all",
    core_meaning: "Most of what torments us hasn\u2019t actually happened \u2014 we create suffering by rehearsing worst-case scenarios. When you catch yourself spiralling, pause and ask: is this real right now, or just a story I\u2019m telling myself?",
    scenario_generic: "You send a message to a friend and they don\u2019t reply for hours. Your mind builds a case: they\u2019re upset, you said something wrong, the friendship is strained. Then they reply cheerfully \u2014 they were just busy. The suffering was entirely invented.",
    mcq_question: "What is Seneca\u2019s main observation about human suffering?",
    mcq_options: [
      "Real hardships are worse than we expect",
      "Much of our pain comes from imagining problems that haven\u2019t occurred",
      "Suffering builds resilience over time"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Spot on. Seneca noticed we often hurt ourselves with fears that never materialise.",
    mcq_feedback_incorrect: "Not quite. Seneca\u2019s point is that imagined suffering is usually the bigger problem \u2014 not real events."
  },
  {
    id: "epictetus-judgment-01",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 5",
    quote_text: "It is not things that disturb us, but our judgments about things. Death is nothing dreadful, or else Socrates would have thought so.",
    tags: ["judgment", "perception", "reframing"],
    mode: "all",
    core_meaning: "Events don\u2019t carry built-in emotional charges. It\u2019s the story you attach \u2014 \u201Cthis is terrible,\u201D \u201CI can\u2019t handle this\u201D \u2014 that creates your distress. Change the judgment, and the feeling shifts.",
    scenario_generic: "Your flight gets cancelled and you\u2019re stuck at the airport for six hours. One traveller fumes and berates staff. Another buys a coffee, calls an old friend, and reads a book. Same event, completely different experiences \u2014 shaped by judgment alone.",
    mcq_question: "According to Epictetus, what is the real source of our disturbance?",
    mcq_options: [
      "External events and circumstances",
      "Our judgments and interpretations of events",
      "Other people\u2019s behaviour toward us"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That\u2019s the core Stoic insight \u2014 your interpretation is the lever you can actually pull.",
    mcq_feedback_incorrect: "Epictetus says the disturbance lives in your judgment about the event, not in the event itself."
  },
  {
    id: "marcus-present-01",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 36",
    quote_text: "Do not disturb yourself by picturing your life as a whole. Do not assemble in your mind the many troubles which have come or may come. Ask only: what is unbearable in this moment?",
    tags: ["present", "anxiety", "overwhelm"],
    mode: "all",
    core_meaning: "Overwhelm comes from trying to face your entire life at once. The Stoic move is to shrink the frame: deal only with this present moment. In isolation, most difficulties are manageable.",
    scenario_generic: "You have a mountain of tasks: a deadline tomorrow, a difficult conversation next week, a health check-up you\u2019ve been avoiding. It feels crushing as a bundle. But right now, the only real task is the next one on the list. Just do that.",
    mcq_question: "What does Marcus Aurelius recommend when you feel overwhelmed?",
    mcq_options: [
      "Plan every detail of your future to regain control",
      "Narrow your focus to what is actually unbearable right now",
      "Distract yourself until the feeling passes"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That\u2019s it \u2014 shrink the frame to the present moment, and most problems become handleable.",
    mcq_feedback_incorrect: "The key move is narrowing focus to the present difficulty. In isolation, it\u2019s usually bearable."
  },
  {
    id: "seneca-time-01",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 1, Section 2",
    quote_text: "While we are postponing, life speeds by. Hold every hour in your grasp. Lay hold of today\u2019s task, and you will not need to depend so much upon tomorrow\u2019s.",
    tags: ["time", "procrastination", "urgency"],
    mode: "all",
    core_meaning: "Time is the one resource you cannot get back, and it\u2019s constantly leaking away. Seneca\u2019s advice: stop treating time as abundant. Act on what matters today instead of deferring it to a future that isn\u2019t guaranteed.",
    scenario_generic: "You keep telling yourself you\u2019ll start that side project next month, after things calm down. But things never calm down. Spending just 30 minutes on it today \u2014 imperfect, incomplete \u2014 is infinitely more than the perfect plan you\u2019ll start \u2018someday.\u2019",
    mcq_question: "What is Seneca\u2019s core warning about time?",
    mcq_options: [
      "We should work harder and sleep less",
      "Life passes while we postpone, so act on what matters now",
      "Time pressure makes us more productive"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Seneca saw postponement as the biggest thief of a meaningful life.",
    mcq_feedback_incorrect: "It\u2019s not about working harder \u2014 it\u2019s about recognising time is finite and starting now rather than deferring."
  },
  {
    id: "marcus-revenge-01",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 6",
    quote_text: "The best revenge is not to be like your enemy.",
    tags: ["character", "revenge", "integrity"],
    mode: "all",
    core_meaning: "When someone wrongs you, the temptation is to mirror their behaviour \u2014 to get even. Marcus says the real victory is refusing to become what hurt you. Protect your character; that\u2019s the thing of lasting value.",
    scenario_generic: "A colleague takes credit for your idea in a meeting. Your gut says to undermine them next chance you get. Instead, you keep doing good work and let it speak. Over time, people notice consistency. Your reputation is built on substance, not retaliation.",
    mcq_question: "According to Marcus Aurelius, what is the best response when someone wrongs you?",
    mcq_options: [
      "Refuse to lower yourself to their level",
      "Confront them immediately and forcefully",
      "Remove them from your life entirely"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. The real win is keeping your own character intact.",
    mcq_feedback_incorrect: "Marcus\u2019 point is about protecting who you are \u2014 the best revenge is simply not becoming like the person who wronged you."
  },
  {
    id: "epictetus-wish-01",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 8",
    quote_text: "Do not seek to have everything that happens happen as you wish, but wish for everything to happen as it actually does, and your life will be serene.",
    tags: ["acceptance", "serenity", "expectations"],
    mode: "all",
    core_meaning: "Frustration is the gap between how you want things to be and how they are. Instead of demanding reality match your script, align your expectations with what\u2019s actually unfolding. This isn\u2019t passivity \u2014 it\u2019s choosing peace over resistance.",
    scenario_generic: "You plan an outdoor birthday party and it rains. You can spend the day bitter that the weather \u2018ruined\u2019 things, or you can move inside, light some candles, and let the day be what it is. The party still happens \u2014 just differently than planned.",
    mcq_question: "What does Epictetus say leads to a serene life?",
    mcq_options: [
      "Working harder to make things go your way",
      "Wishing for things to happen as they actually do",
      "Avoiding situations you cannot predict"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That\u2019s the move \u2014 align your wishes with reality rather than fighting what is.",
    mcq_feedback_incorrect: "The Stoic approach here isn\u2019t about control or avoidance, but about adjusting your wishes to match what actually happens."
  },
  {
    id: "seneca-live-01",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 101, Section 10",
    quote_text: "Begin at once to live, and count each separate day as a separate life.",
    tags: ["present", "time", "intentionality"],
    mode: "all",
    core_meaning: "Stop waiting for the right moment to truly start living. Treat each day as complete in itself \u2014 not a rehearsal for some future life. If today were the whole story, would you be satisfied with how you spent it?",
    scenario_generic: "You keep thinking \u2018I\u2019ll enjoy life once I get the promotion\u2019 or \u2018once the kids are older.\u2019 But Seneca says the day in front of you is the life. Cook the good meal tonight. Take the walk this morning. Don\u2019t outsource your living to a future version of yourself.",
    mcq_question: "What shift in perspective does Seneca recommend?",
    mcq_options: [
      "Plan your life in five-year blocks for clarity",
      "Treat each day as its own complete life",
      "Focus only on long-term goals, not daily details"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Each day is not a stepping stone \u2014 it is the life.",
    mcq_feedback_incorrect: "Seneca\u2019s point is about shrinking the horizon to today \u2014 living fully now, not deferring to the future."
  },
  {
    id: "marcus-action-01",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 10, Section 16",
    quote_text: "Waste no more time arguing about what a good person should be. Be one.",
    tags: ["action", "virtue", "simplicity"],
    mode: "all",
    core_meaning: "Talking about goodness is easy; living it is the work. Marcus is telling himself \u2014 and us \u2014 to stop theorising and start acting. Character is built in what you do, not in what you discuss or plan.",
    scenario_generic: "You\u2019ve read ten books on productivity, watched hours of videos on habit-building, and bookmarked a dozen frameworks. But you haven\u2019t actually started the one habit that matters most. Close the tab. Do the thing. The gap between knowing and doing is where most people live.",
    mcq_question: "What is Marcus Aurelius urging in this quote?",
    mcq_options: [
      "Stop debating virtue and start practising it",
      "Study philosophy more deeply before acting",
      "Find a mentor who can model good behaviour"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That\u2019s it. Less talk, more action. Be the thing you keep discussing.",
    mcq_feedback_incorrect: "Marcus is pushing toward action, not more study. The point is to stop deliberating and start doing."
  }
];
