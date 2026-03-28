const QUOTE_CARDS = [
  // ========================================
  // MODE: ALL (General audience)
  // ========================================
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
  },

  // ========================================
  // MODE: TEEN
  // ========================================
  {
    id: "epictetus-control-teen",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 1",
    quote_text: "Some things are within our control, and some things are not. Within our control are our opinions, desires, and aversions. Not within our control are our bodies, possessions, and reputations.",
    tags: ["control", "acceptance", "fundamentals"],
    mode: "teen",
    core_meaning: "You can\u2019t control who likes you, what people say behind your back, or whether the teacher is fair. You can control how you respond, what you focus on, and the kind of person you choose to be.",
    scenario_generic: "Someone screenshots your message and shares it around, twisting what you meant. People are talking. You can\u2019t unsend it or control the gossip. But you can decide not to retaliate, talk to someone you trust, and not let the drama define your week.",
    mcq_question: "According to this idea, what\u2019s actually within your control?",
    mcq_options: [
      "Your own thoughts, choices, and reactions",
      "What people think and say about you",
      "How teachers and classmates treat you"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That\u2019s it. You can\u2019t control the noise around you, but your response is always yours.",
    mcq_feedback_incorrect: "The key insight: other people\u2019s actions are outside your control. Your own mindset isn\u2019t."
  },
  {
    id: "marcus-thoughts-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 16",
    quote_text: "Your mind will take the shape of what you frequently hold in thought, for the human spirit is coloured by such impressions.",
    tags: ["mindset", "habits", "thoughts"],
    mode: "teen",
    core_meaning: "What you scroll through, watch, and replay in your head slowly becomes your default mood. Feed your mind junk and you\u2019ll feel like junk. Choose better inputs and your headspace shifts.",
    scenario_generic: "You spend an hour comparing yourself to influencers online and feel terrible after. A friend who limits their feed to stuff they actually enjoy seems way more chill. The difference isn\u2019t luck \u2014 it\u2019s what they\u2019re letting into their head every day.",
    mcq_question: "What does this quote say shapes who you become?",
    mcq_options: [
      "The thoughts and content you regularly take in",
      "Your natural talent and abilities",
      "The school and neighbourhood you\u2019re in"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Your repeated thoughts literally shape your mindset over time.",
    mcq_feedback_incorrect: "It\u2019s not about what\u2019s around you \u2014 it\u2019s about what you repeatedly let into your mind."
  },
  {
    id: "seneca-imagination-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 13, Section 4",
    quote_text: "We suffer more often in imagination than in reality.",
    tags: ["anxiety", "fear", "perception"],
    mode: "teen",
    core_meaning: "That thing you\u2019re dreading? It almost never turns out as bad as your brain is making it. Most of your stress is coming from a movie your mind is playing, not from what\u2019s actually happening.",
    scenario_generic: "You have to present in front of the class tomorrow and your stomach is in knots. You picture everyone laughing, forgetting your words, total humiliation. Then you do it \u2014 it\u2019s a bit awkward but fine. All that dread was for nothing.",
    mcq_question: "What is Seneca saying about most of our worries?",
    mcq_options: [
      "Real problems are always worse than expected",
      "We stress ourselves out over things that haven\u2019t even happened",
      "Worrying helps us prepare for the worst"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. The fear is almost always worse than the thing itself.",
    mcq_feedback_incorrect: "Seneca\u2019s point: the suffering we create in our heads is usually bigger than the actual problem."
  },
  {
    id: "epictetus-judgment-teen",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 5",
    quote_text: "It is not things that disturb us, but our judgments about things. Death is nothing dreadful, or else Socrates would have thought so.",
    tags: ["judgment", "perception", "reframing"],
    mode: "teen",
    core_meaning: "The event itself is neutral. It\u2019s the story you tell yourself about it \u2014 \u201Cthis is the worst thing ever\u201D or \u201Ceveryone hates me\u201D \u2014 that makes it feel unbearable. Change the story, change how you feel.",
    scenario_generic: "You don\u2019t get invited to a party and your brain says \u201Cnobody likes me.\u201D But that\u2019s a judgment, not a fact. Maybe they barely know you. Maybe the group is small. The sting comes from the story, not the event.",
    mcq_question: "What does Epictetus say actually causes your emotional pain?",
    mcq_options: [
      "The bad things that happen to you",
      "The story and meaning you attach to events",
      "The people who treat you unfairly"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Spot on. The event is neutral \u2014 your interpretation is where the pain lives.",
    mcq_feedback_incorrect: "It\u2019s not the event that hurts you, it\u2019s the judgment you wrap around it."
  },
  {
    id: "marcus-present-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 36",
    quote_text: "Do not disturb yourself by picturing your life as a whole. Do not assemble in your mind the many troubles which have come or may come. Ask only: what is unbearable in this moment?",
    tags: ["present", "anxiety", "overwhelm"],
    mode: "teen",
    core_meaning: "When exams, friendships, and the future all pile up in your head at once, everything feels impossible. The trick: zoom in. Just handle the one thing in front of you. Right now, that\u2019s usually doable.",
    scenario_generic: "You\u2019ve got three assignments due, a fight with your best friend, and you\u2019re stressing about next year. It feels like your whole life is falling apart. But right now? The only thing to do is open that first assignment. Start there.",
    mcq_question: "What does Marcus Aurelius say to do when everything feels like too much?",
    mcq_options: [
      "Make a detailed plan for your entire future",
      "Focus only on what\u2019s actually hard right now",
      "Push through everything at once to get it over with"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That\u2019s it. Zoom into this moment \u2014 it\u2019s almost always manageable on its own.",
    mcq_feedback_incorrect: "The move is to stop bundling everything together and just face this one moment."
  },
  {
    id: "seneca-time-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 1, Section 2",
    quote_text: "While we are postponing, life speeds by. Hold every hour in your grasp. Lay hold of today\u2019s task, and you will not need to depend so much upon tomorrow\u2019s.",
    tags: ["time", "procrastination", "urgency"],
    mode: "teen",
    core_meaning: "You keep saying \u201CI\u2019ll do it later\u201D but later stacks up fast. Time doesn\u2019t wait for you to feel ready. Starting now \u2014 even messily \u2014 beats the perfect plan you never begin.",
    scenario_generic: "You tell yourself you\u2019ll study for the test over the weekend, but Saturday turns into gaming, Sunday into panic. Ten minutes tonight would have been enough to start. The hardest part wasn\u2019t the work \u2014 it was starting.",
    mcq_question: "What is Seneca\u2019s main warning here?",
    mcq_options: [
      "You should never relax or take breaks",
      "Time passes while you put things off, so start now",
      "Rushing through tasks leads to better results"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. The biggest enemy isn\u2019t the task \u2014 it\u2019s the delay.",
    mcq_feedback_incorrect: "It\u2019s not about rushing. It\u2019s about not waiting for the perfect moment that never comes."
  },
  {
    id: "marcus-revenge-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 6",
    quote_text: "The best revenge is not to be like your enemy.",
    tags: ["character", "revenge", "integrity"],
    mode: "teen",
    core_meaning: "When someone is mean to you, the urge is to be mean back. But copying their behaviour means they\u2019ve already won \u2014 they\u2019ve turned you into them. The real power move is staying who you are.",
    scenario_generic: "Someone spreads a rumour about you. Your first instinct is to spread something worse about them. But if you do, you\u2019re now playing the same game. The person who walks away with their dignity intact is the one who actually wins.",
    mcq_question: "According to Marcus Aurelius, how do you really \u2018win\u2019 against someone who wrongs you?",
    mcq_options: [
      "By refusing to become like them",
      "By getting back at them harder",
      "By making sure everyone knows what they did"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That\u2019s the real flex \u2014 not sinking to their level.",
    mcq_feedback_incorrect: "The point isn\u2019t to hit back harder. It\u2019s to protect your own character."
  },
  {
    id: "epictetus-wish-teen",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 8",
    quote_text: "Do not seek to have everything that happens happen as you wish, but wish for everything to happen as it actually does, and your life will be serene.",
    tags: ["acceptance", "serenity", "expectations"],
    mode: "teen",
    core_meaning: "Life doesn\u2019t follow your script. The more you demand things go exactly your way, the more frustrated you\u2019ll be. Learning to roll with what actually happens doesn\u2019t make you weak \u2014 it makes you adaptable.",
    scenario_generic: "You planned the whole weekend with friends but half of them cancel. You can either mope about the \u2018ruined\u2019 plan, or make something good out of who\u2019s left. The people who adapt fastest are usually the happiest.",
    mcq_question: "What does Epictetus say leads to peace of mind?",
    mcq_options: [
      "Making sure everything goes according to plan",
      "Accepting things as they happen instead of fighting them",
      "Lowering your expectations so you\u2019re never disappointed"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That\u2019s it. Adapt to reality instead of demanding it match your plan.",
    mcq_feedback_incorrect: "It\u2019s not about lowering expectations \u2014 it\u2019s about adjusting your wishes to fit what\u2019s actually happening."
  },
  {
    id: "seneca-live-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 101, Section 10",
    quote_text: "Begin at once to live, and count each separate day as a separate life.",
    tags: ["present", "time", "intentionality"],
    mode: "teen",
    core_meaning: "Stop waiting for life to \u201Creally start\u201D after school, after you turn 18, after whatever milestone. Today is already your life. Make it count, even in small ways.",
    scenario_generic: "You keep thinking \u201Cmy real life starts in uni\u201D or \u201Cthings will be better when I\u2019m older.\u201D But the friendships, interests, and habits you build right now are your life. Don\u2019t sleepwalk through today waiting for a future that isn\u2019t guaranteed.",
    mcq_question: "What perspective shift is Seneca recommending?",
    mcq_options: [
      "Set big goals and work toward them patiently",
      "Treat today as if it\u2019s its own complete life",
      "Don\u2019t worry about the future at all"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Don\u2019t wait for life to start \u2014 it\u2019s already happening.",
    mcq_feedback_incorrect: "It\u2019s not about ignoring the future. It\u2019s about being fully alive today, not just tomorrow."
  },
  {
    id: "marcus-action-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 10, Section 16",
    quote_text: "Waste no more time arguing about what a good person should be. Be one.",
    tags: ["action", "virtue", "simplicity"],
    mode: "teen",
    core_meaning: "You already know the right thing to do most of the time. You don\u2019t need another motivational video or inspirational quote. You need to actually do the thing. Action over talk.",
    scenario_generic: "You follow accounts about self-improvement, save workout plans, and pin study tips. But you haven\u2019t started any of them. Marcus would say: close the app, open the textbook, do ten push-ups. Five minutes of doing beats five hours of planning.",
    mcq_question: "What is Marcus Aurelius pushing you to do?",
    mcq_options: [
      "Stop overthinking and start acting",
      "Read more philosophy before making decisions",
      "Find someone to guide you first"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That\u2019s the message. You already know enough. Now do it.",
    mcq_feedback_incorrect: "The whole point is to stop preparing and start doing. Action is the move."
  },

  // ========================================
  // MODE: PARENT
  // ========================================
  {
    id: "epictetus-control-parent",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 1",
    quote_text: "Some things are within our control, and some things are not. Within our control are our opinions, desires, and aversions. Not within our control are our bodies, possessions, and reputations.",
    tags: ["control", "acceptance", "fundamentals"],
    mode: "parent",
    core_meaning: "You can raise your children with care, model good values, and create a stable home. But you cannot control who they become, what they believe, or every choice they make. That distinction is where parental peace begins.",
    scenario_generic: "Your teenager chooses friends you don\u2019t approve of. You\u2019ve shared your concerns, but they\u2019re not budging. You can\u2019t pick their friends for them. What you can do: keep the door open, stay connected, and trust that the values you\u2019ve modelled matter.",
    mcq_question: "As a parent, what does this idea say is within your control?",
    mcq_options: [
      "Your own responses, values, and the home you create",
      "Your child\u2019s choices, friendships, and beliefs",
      "The outcomes of your parenting decisions"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. You shape the environment and model the values. The rest is theirs.",
    mcq_feedback_incorrect: "The hard truth: you control your own behaviour as a parent, not your child\u2019s choices."
  },
  {
    id: "marcus-thoughts-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 16",
    quote_text: "Your mind will take the shape of what you frequently hold in thought, for the human spirit is coloured by such impressions.",
    tags: ["mindset", "habits", "thoughts"],
    mode: "parent",
    core_meaning: "If you constantly dwell on what your child is doing wrong, your whole relationship becomes defined by correction. If you practise noticing what\u2019s going well, you become a parent your child actually wants to talk to.",
    scenario_generic: "You catch yourself only speaking up when your kid makes a mistake. Over time, they stop sharing things with you. When you start noticing and naming what they\u2019re doing right \u2014 even small things \u2014 the whole dynamic shifts.",
    mcq_question: "What does this quote suggest about your mindset as a parent?",
    mcq_options: [
      "What you habitually focus on shapes your parenting style",
      "You should avoid thinking about problems altogether",
      "Your child\u2019s behaviour determines your mood"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. A correction-heavy focus creates a correction-heavy relationship. Shift the lens.",
    mcq_feedback_incorrect: "It\u2019s not about avoiding problems \u2014 it\u2019s about not letting problems be the only lens you see through."
  },
  {
    id: "seneca-imagination-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 13, Section 4",
    quote_text: "We suffer more often in imagination than in reality.",
    tags: ["anxiety", "fear", "perception"],
    mode: "parent",
    core_meaning: "Parental worry is almost unlimited. You can build catastrophic futures for your child in seconds. But most of those scenarios never happen. The fear itself is often more exhausting than the actual challenges.",
    scenario_generic: "Your child is late coming home and isn\u2019t answering their phone. Your mind spirals: accident, danger, the worst. Twenty minutes later, they walk in \u2014 their phone died. The crisis was entirely in your head, but your body felt every second of it.",
    mcq_question: "What does Seneca\u2019s observation mean for parental worry?",
    mcq_options: [
      "Parents should always prepare for the worst",
      "Most of the suffering from worry is imagined, not real",
      "If you worry enough, you can prevent bad things"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. The worry itself does more damage than most of the things you\u2019re worried about.",
    mcq_feedback_incorrect: "Seneca\u2019s point: imagined catastrophes cause real suffering, even when nothing bad has happened."
  },
  {
    id: "epictetus-judgment-parent",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 5",
    quote_text: "It is not things that disturb us, but our judgments about things. Death is nothing dreadful, or else Socrates would have thought so.",
    tags: ["judgment", "perception", "reframing"],
    mode: "parent",
    core_meaning: "Your child\u2019s behaviour isn\u2019t the thing that upsets you \u2014 it\u2019s the meaning you attach to it. \u201CThey\u2019re disrespecting me\u201D or \u201CI\u2019ve failed as a parent\u201D are judgments, not facts. Separate the event from the story.",
    scenario_generic: "Your teenager slams their door after a disagreement. You could interpret it as \u201Cthey hate me\u201D or \u201Cthey need space to process big feelings.\u201D The door slam is the same. Your reaction depends entirely on which story you choose.",
    mcq_question: "According to Epictetus, what actually triggers your frustration as a parent?",
    mcq_options: [
      "Your child\u2019s difficult behaviour",
      "Your interpretation of their behaviour",
      "The lack of respect in today\u2019s generation"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That\u2019s the insight. The event is neutral \u2014 your judgment is where the upset lives.",
    mcq_feedback_incorrect: "The key Stoic move: it\u2019s never the behaviour alone. It\u2019s the meaning you wrap around it."
  },
  {
    id: "marcus-present-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 36",
    quote_text: "Do not disturb yourself by picturing your life as a whole. Do not assemble in your mind the many troubles which have come or may come. Ask only: what is unbearable in this moment?",
    tags: ["present", "anxiety", "overwhelm"],
    mode: "parent",
    core_meaning: "Parenting overwhelm comes from trying to solve every stage at once \u2014 today\u2019s tantrum, next year\u2019s school choice, their future career. The antidote: just handle what\u2019s in front of you today.",
    scenario_generic: "You\u2019re worried about your child\u2019s grades, their screen time, their social skills, and whether they\u2019ll cope in the real world. That bundle is crushing. But today, the only task is being present at dinner and listening. Start there.",
    mcq_question: "What does Marcus Aurelius suggest when parenting feels overwhelming?",
    mcq_options: [
      "Research every possible solution ahead of time",
      "Focus only on what needs handling right now",
      "Accept that parenting is supposed to feel this hard"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That\u2019s the move. Shrink the frame to today. Most moments are manageable on their own.",
    mcq_feedback_incorrect: "The Stoic approach: don\u2019t bundle every concern together. Just face this one moment."
  },
  {
    id: "seneca-time-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 1, Section 2",
    quote_text: "While we are postponing, life speeds by. Hold every hour in your grasp. Lay hold of today\u2019s task, and you will not need to depend so much upon tomorrow\u2019s.",
    tags: ["time", "procrastination", "urgency"],
    mode: "parent",
    core_meaning: "Children grow up faster than you expect. The window for bedtime stories, Saturday morning cartoons, and them actually wanting your company is shorter than it feels. Don\u2019t postpone presence.",
    scenario_generic: "You keep saying \u201Cwe\u2019ll do that trip when things settle down.\u201D But they\u2019re ten now, and soon they\u2019ll be fifteen with their own plans. The walk after school today, the board game tonight \u2014 those are the moments. They won\u2019t wait.",
    mcq_question: "How does Seneca\u2019s warning about time apply to parenting?",
    mcq_options: [
      "You should schedule every moment with your children",
      "Childhood passes fast, so be present now rather than deferring",
      "Time pressure makes you a more efficient parent"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. The time with them is finite and moving fast. Don\u2019t wait for \u2018someday.\u2019",
    mcq_feedback_incorrect: "It\u2019s not about scheduling \u2014 it\u2019s about recognising that these years pass and choosing to show up now."
  },
  {
    id: "marcus-revenge-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 6",
    quote_text: "The best revenge is not to be like your enemy.",
    tags: ["character", "revenge", "integrity"],
    mode: "parent",
    core_meaning: "When your child pushes your buttons \u2014 and they will \u2014 the temptation is to match their energy: yelling back, being petty, withdrawing love. But they\u2019re watching. Your calm in the storm teaches more than any lecture.",
    scenario_generic: "Your kid says something hurtful during an argument. Everything in you wants to fire back with something equally sharp. Instead, you pause, take a breath, and respond with firmness but not cruelty. Later, they come to apologise. They saw the difference.",
    mcq_question: "What does this quote mean for how you handle conflict with your child?",
    mcq_options: [
      "Don\u2019t match their worst behaviour with your own",
      "Never show your child that you\u2019re upset",
      "Let them win every argument to keep the peace"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Your self-control in those moments teaches them more than your words ever could.",
    mcq_feedback_incorrect: "It\u2019s not about hiding feelings or avoiding conflict. It\u2019s about not sinking to the level of the behaviour you\u2019re trying to correct."
  },
  {
    id: "epictetus-wish-parent",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 8",
    quote_text: "Do not seek to have everything that happens happen as you wish, but wish for everything to happen as it actually does, and your life will be serene.",
    tags: ["acceptance", "serenity", "expectations"],
    mode: "parent",
    core_meaning: "Your child will not follow the path you imagined for them. The more rigidly you hold your vision of who they should be, the more friction you\u2019ll both feel. Accepting who they actually are is the foundation of a real relationship.",
    scenario_generic: "You pictured your child becoming a doctor, but they\u2019re passionate about music. Fighting their nature creates resentment on both sides. Letting go of your script and supporting their actual interests doesn\u2019t mean lowering standards \u2014 it means raising trust.",
    mcq_question: "How does Epictetus\u2019 advice apply to parenting expectations?",
    mcq_options: [
      "Push harder to keep your child on the path you chose",
      "Accept your child\u2019s actual nature instead of forcing your script",
      "Have no expectations so you\u2019re never disappointed"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That\u2019s the move. A real relationship starts with seeing who they actually are.",
    mcq_feedback_incorrect: "It\u2019s not about having zero expectations. It\u2019s about aligning your hopes with who your child really is."
  },
  {
    id: "seneca-live-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 101, Section 10",
    quote_text: "Begin at once to live, and count each separate day as a separate life.",
    tags: ["present", "time", "intentionality"],
    mode: "parent",
    core_meaning: "It\u2019s easy to spend your parenting years in survival mode, waiting for \u201Cwhen things get easier.\u201D But today\u2019s messy, exhausting, beautiful chapter is the one you\u2019ll miss. Be in it.",
    scenario_generic: "You\u2019re counting down to when the baby sleeps through the night, then to when they start school, then to when they\u2019re independent. But each stage has moments you\u2019ll never get back. The 3am feed, the hand reaching for yours \u2014 those are the life, not the obstacle to it.",
    mcq_question: "What does Seneca\u2019s advice mean for parents in the thick of it?",
    mcq_options: [
      "Plan ahead so you don\u2019t waste any time",
      "Be present in this stage instead of wishing it away",
      "Focus on the long game, not the daily grind"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. This stage \u2014 chaotic as it is \u2014 is the life. Don\u2019t wish it away.",
    mcq_feedback_incorrect: "Seneca isn\u2019t saying ignore the future. He\u2019s saying don\u2019t miss today while waiting for an easier tomorrow."
  },
  {
    id: "marcus-action-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 10, Section 16",
    quote_text: "Waste no more time arguing about what a good person should be. Be one.",
    tags: ["action", "virtue", "simplicity"],
    mode: "parent",
    core_meaning: "You can read every parenting book and still feel unsure. But your child doesn\u2019t need a perfect parent \u2014 they need a present one. Less theory, more showing up. They learn from what you do, not what you know.",
    scenario_generic: "You\u2019ve listened to six parenting podcasts this week but still lost your temper at breakfast. Marcus would say: stop studying the ideal and start practising it in small, imperfect ways. Apologise when you get it wrong. That\u2019s the teaching.",
    mcq_question: "What is Marcus Aurelius telling parents to do?",
    mcq_options: [
      "Stop trying to be perfect and just show up with integrity",
      "Study parenting techniques more thoroughly",
      "Set strict rules so children know what\u2019s expected"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That\u2019s it. Your kids learn from your actions, not your research.",
    mcq_feedback_incorrect: "Marcus is pushing for action over theory. Show your child what a good person looks like by being one."
  }
];
