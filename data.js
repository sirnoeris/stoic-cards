const QUOTE_CARDS = [
  // ========================================
  // MODE: ALL (General audience) — 50 cards
  // ========================================
  {
    id: "epictetus-control-01",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 1",
    quote_text: "Some things are within our control, and some things are not. Within our control are our opinions, desires, and aversions. Not within our control are our bodies, possessions, and reputations.",
    tags: ["control","acceptance","fundamentals"],
    mode: "all",
    core_meaning: "The foundation of Stoicism: sharply distinguish what you can influence (your own thoughts, choices, responses) from what you cannot (other people, events, outcomes). Peace comes from working only within your sphere.",
    scenario_generic: "You spent weeks preparing a proposal at work, but your manager shelves it without explanation. You can’t control their decision. You can control whether you ask for feedback, learn from the process, and channel your energy into the next opportunity.",
    mcq_question: "According to this idea, where should you direct most of your energy?",
    mcq_options: [
      "Toward your own judgments and responses",
      "Toward changing other people’s opinions",
      "Toward predicting every possible outcome"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Focus on what’s actually yours to shape — your own mind and actions.",
    mcq_feedback_incorrect: "Close, but the key move here is turning inward — focusing on your own judgments, not on controlling externals."
  },

  {
    id: "marcus-thoughts-01",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 16",
    quote_text: "Your mind will take the shape of what you frequently hold in thought, for the human spirit is coloured by such impressions.",
    tags: ["mindset","habits","thoughts"],
    mode: "all",
    core_meaning: "Your habitual thoughts shape who you become. If you repeatedly dwell on grievances, your whole outlook turns bitter. If you practise noticing what’s good and within reach, your character follows.",
    scenario_generic: "You scroll social media before bed and absorb a stream of outrage and comparison. Over weeks, you feel more anxious and dissatisfied. Swapping that last 20 minutes for something calm — a book, a few notes on the day — gradually shifts your baseline mood.",
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
    tags: ["anxiety","fear","perception"],
    mode: "all",
    core_meaning: "Most of what torments us hasn’t actually happened — we create suffering by rehearsing worst-case scenarios. When you catch yourself spiralling, pause and ask: is this real right now, or just a story I’m telling myself?",
    scenario_generic: "You send a message to a friend and they don’t reply for hours. Your mind builds a case: they’re upset, you said something wrong, the friendship is strained. Then they reply cheerfully — they were just busy. The suffering was entirely invented.",
    mcq_question: "What is Seneca’s main observation about human suffering?",
    mcq_options: [
      "Real hardships are worse than we expect",
      "Much of our pain comes from imagining problems that haven’t occurred",
      "Suffering builds resilience over time"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Spot on. Seneca noticed we often hurt ourselves with fears that never materialise.",
    mcq_feedback_incorrect: "Not quite. Seneca’s point is that imagined suffering is usually the bigger problem — not real events."
  },

  {
    id: "epictetus-judgment-01",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 5",
    quote_text: "It is not things that disturb us, but our judgments about things. Death is nothing dreadful, or else Socrates would have thought so.",
    tags: ["judgment","perception","reframing"],
    mode: "all",
    core_meaning: "Events don’t carry built-in emotional charges. It’s the story you attach — “this is terrible,” “I can’t handle this” — that creates your distress. Change the judgment, and the feeling shifts.",
    scenario_generic: "Your flight gets cancelled and you’re stuck at the airport for six hours. One traveller fumes and berates staff. Another buys a coffee, calls an old friend, and reads a book. Same event, completely different experiences — shaped by judgment alone.",
    mcq_question: "According to Epictetus, what is the real source of our disturbance?",
    mcq_options: [
      "External events and circumstances",
      "Our judgments and interpretations of events",
      "Other people’s behaviour toward us"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the core Stoic insight — your interpretation is the lever you can actually pull.",
    mcq_feedback_incorrect: "Epictetus says the disturbance lives in your judgment about the event, not in the event itself."
  },

  {
    id: "marcus-present-01",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 36",
    quote_text: "Do not disturb yourself by picturing your life as a whole. Do not assemble in your mind the many troubles which have come or may come. Ask only: what is unbearable in this moment?",
    tags: ["present","anxiety","overwhelm"],
    mode: "all",
    core_meaning: "Overwhelm comes from trying to face your entire life at once. The Stoic move is to shrink the frame: deal only with this present moment. In isolation, most difficulties are manageable.",
    scenario_generic: "You have a mountain of tasks: a deadline tomorrow, a difficult conversation next week, a health check-up you’ve been avoiding. It feels crushing as a bundle. But right now, the only real task is the next one on the list. Just do that.",
    mcq_question: "What does Marcus Aurelius recommend when you feel overwhelmed?",
    mcq_options: [
      "Plan every detail of your future to regain control",
      "Narrow your focus to what is actually unbearable right now",
      "Distract yourself until the feeling passes"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s it — shrink the frame to the present moment, and most problems become handleable.",
    mcq_feedback_incorrect: "The key move is narrowing focus to the present difficulty. In isolation, it’s usually bearable."
  },

  {
    id: "seneca-time-01",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 1, Section 2",
    quote_text: "While we are postponing, life speeds by. Hold every hour in your grasp. Lay hold of today’s task, and you will not need to depend so much upon tomorrow’s.",
    tags: ["time","procrastination","urgency"],
    mode: "all",
    core_meaning: "Time is the one resource you cannot get back, and it’s constantly leaking away. Seneca’s advice: stop treating time as abundant. Act on what matters today instead of deferring it to a future that isn’t guaranteed.",
    scenario_generic: "You keep telling yourself you’ll start that side project next month, after things calm down. But things never calm down. Spending just 30 minutes on it today — imperfect, incomplete — is infinitely more than the perfect plan you’ll start ‘someday.’",
    mcq_question: "What is Seneca’s core warning about time?",
    mcq_options: [
      "We should work harder and sleep less",
      "Life passes while we postpone, so act on what matters now",
      "Time pressure makes us more productive"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Seneca saw postponement as the biggest thief of a meaningful life.",
    mcq_feedback_incorrect: "It’s not about working harder — it’s about recognising time is finite and starting now rather than deferring."
  },

  {
    id: "marcus-revenge-01",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 6",
    quote_text: "The best revenge is not to be like your enemy.",
    tags: ["character","revenge","integrity"],
    mode: "all",
    core_meaning: "When someone wrongs you, the temptation is to mirror their behaviour — to get even. Marcus says the real victory is refusing to become what hurt you. Protect your character; that’s the thing of lasting value.",
    scenario_generic: "A colleague takes credit for your idea in a meeting. Your gut says to undermine them next chance you get. Instead, you keep doing good work and let it speak. Over time, people notice consistency. Your reputation is built on substance, not retaliation.",
    mcq_question: "According to Marcus Aurelius, what is the best response when someone wrongs you?",
    mcq_options: [
      "Refuse to lower yourself to their level",
      "Confront them immediately and forcefully",
      "Remove them from your life entirely"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. The real win is keeping your own character intact.",
    mcq_feedback_incorrect: "Marcus’ point is about protecting who you are — the best revenge is simply not becoming like the person who wronged you."
  },

  {
    id: "epictetus-wish-01",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 8",
    quote_text: "Do not seek to have everything that happens happen as you wish, but wish for everything to happen as it actually does, and your life will be serene.",
    tags: ["acceptance","serenity","expectations"],
    mode: "all",
    core_meaning: "Frustration is the gap between how you want things to be and how they are. Instead of demanding reality match your script, align your expectations with what’s actually unfolding. This isn’t passivity — it’s choosing peace over resistance.",
    scenario_generic: "You plan an outdoor birthday party and it rains. You can spend the day bitter that the weather ‘ruined’ things, or you can move inside, light some candles, and let the day be what it is. The party still happens — just differently than planned.",
    mcq_question: "What does Epictetus say leads to a serene life?",
    mcq_options: [
      "Working harder to make things go your way",
      "Wishing for things to happen as they actually do",
      "Avoiding situations you cannot predict"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the move — align your wishes with reality rather than fighting what is.",
    mcq_feedback_incorrect: "The Stoic approach here isn’t about control or avoidance, but about adjusting your wishes to match what actually happens."
  },

  {
    id: "seneca-live-01",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 101, Section 10",
    quote_text: "Begin at once to live, and count each separate day as a separate life.",
    tags: ["present","time","intentionality"],
    mode: "all",
    core_meaning: "Stop waiting for the right moment to truly start living. Treat each day as complete in itself — not a rehearsal for some future life. If today were the whole story, would you be satisfied with how you spent it?",
    scenario_generic: "You keep thinking ‘I’ll enjoy life once I get the promotion’ or ‘once the kids are older.’ But Seneca says the day in front of you is the life. Cook the good meal tonight. Take the walk this morning. Don’t outsource your living to a future version of yourself.",
    mcq_question: "What shift in perspective does Seneca recommend?",
    mcq_options: [
      "Plan your life in five-year blocks for clarity",
      "Treat each day as its own complete life",
      "Focus only on long-term goals, not daily details"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Each day is not a stepping stone — it is the life.",
    mcq_feedback_incorrect: "Seneca’s point is about shrinking the horizon to today — living fully now, not deferring to the future."
  },

  {
    id: "marcus-action-01",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 10, Section 16",
    quote_text: "Waste no more time arguing about what a good person should be. Be one.",
    tags: ["action","virtue","simplicity"],
    mode: "all",
    core_meaning: "Talking about goodness is easy; living it is the work. Marcus is telling himself — and us — to stop theorising and start acting. Character is built in what you do, not in what you discuss or plan.",
    scenario_generic: "You’ve read ten books on productivity, watched hours of videos on habit-building, and bookmarked a dozen frameworks. But you haven’t actually started the one habit that matters most. Close the tab. Do the thing. The gap between knowing and doing is where most people live.",
    mcq_question: "What is Marcus Aurelius urging in this quote?",
    mcq_options: [
      "Stop debating virtue and start practising it",
      "Study philosophy more deeply before acting",
      "Find a mentor who can model good behaviour"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s it. Less talk, more action. Be the thing you keep discussing.",
    mcq_feedback_incorrect: "Marcus is pushing toward action, not more study. The point is to stop deliberating and start doing."
  },

  {
    id: "epictetus-foolish-04",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 13",
    quote_text: "If you want to improve, be content to be thought foolish and stupid.",
    tags: ["growth","ego","humility"],
    mode: "all",
    core_meaning: "Real growth requires asking the questions you’re afraid look dumb, admitting what you don’t know, and enduring the awkward early phase of any skill. The moment you protect your image over your progress, learning stops.",
    scenario_generic: "You join a new team with far more experience than you. You’re tempted to bluff your way through meetings rather than ask basic questions. But the colleague who asks “can someone walk me through this?” learns fastest — and earns more respect in the long run.",
    mcq_question: "What does Epictetus say you must be willing to accept if you want to grow?",
    mcq_options: [
      "Being seen as less capable while you learn",
      "Slowing down to avoid making mistakes",
      "Seeking approval before trying new things"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Protecting your reputation is the enemy of genuine improvement.",
    mcq_feedback_incorrect: "The key is ego: Epictetus says you have to be willing to look foolish. Image-protection kills growth."
  },

  {
    id: "epictetus-dinner-05",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 15",
    quote_text: "Remember that you must behave in life as at a dinner party.",
    tags: ["patience","moderation","manners"],
    mode: "all",
    core_meaning: "Epictetus uses the dinner party as a model for living: take what comes to you gracefully, don’t grab or demand more, and don’t cling when things pass. Practice patience and moderation in all things, not just at the table.",
    scenario_generic: "You’re being considered for a promotion that hasn’t been officially announced. You could push aggressively, drop hints, or lobby colleagues. Or you could do good work, wait for the opportunity to come around naturally, and respond with grace when it does — however it turns out.",
    mcq_question: "What is the core lesson Epictetus is teaching with the dinner party image?",
    mcq_options: [
      "Be polite and formal in all social situations",
      "Enjoy life’s pleasures whenever they’re offered",
      "Take what comes gracefully and don’t grasp for more"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. Accept what comes, don’t demand more, and don’t cling when it passes.",
    mcq_feedback_incorrect: "It’s not about politeness or pleasure-seeking — the deeper lesson is about moderation and not grasping."
  },

  {
    id: "epictetus-freewill-06",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 1",
    quote_text: "No one can rob us of our free will.",
    tags: ["freedom","will","autonomy"],
    mode: "all",
    core_meaning: "No matter what external forces constrain you — a difficult boss, financial pressure, illness, loss — your will to choose how you respond remains yours. This is the one thing that cannot be taken. It’s the basis of all inner freedom.",
    scenario_generic: "You’re stuck in a job you can’t immediately leave due to financial obligations. The conditions are draining. But you still choose how you carry yourself, how you treat colleagues, what you work on outside hours, and what you’re building toward. No one owns that space.",
    mcq_question: "What does Epictetus say no one can ever take from you?",
    mcq_options: [
      "Your possessions and reputation",
      "Your relationships and support network",
      "Your freedom to choose how you respond"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Exactly. Your will — how you choose to respond — is always yours, no matter the circumstances.",
    mcq_feedback_incorrect: "The untouchable thing Epictetus points to is internal: your will, your choice of response."
  },

  {
    id: "epictetus-demand-07",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 51",
    quote_text: "How long are you going to wait before you demand the best for yourself?",
    tags: ["urgency","self-worth","action"],
    mode: "all",
    core_meaning: "There’s no perfect time to start living with intention. Waiting until you’re more settled, more prepared, or more deserving is a trap. Demanding the best from yourself starts now — not as an aspiration, but as a decision made today.",
    scenario_generic: "You’ve been telling yourself you’ll get serious about your health, your relationships, or your career growth “after this busy season.” But busy seasons stack. Epictetus is asking you to stop waiting for permission or perfect conditions and claim the standard you want to live by — starting with today.",
    mcq_question: "What is Epictetus challenging you to stop doing?",
    mcq_options: [
      "Setting goals that are too ambitious",
      "Waiting for the right time before holding yourself to a higher standard",
      "Comparing yourself to others who seem more successful"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s it. Stop deferring your best self to a future moment. The time is now.",
    mcq_feedback_incorrect: "The challenge here is about delay — specifically, the habit of waiting for conditions to improve before demanding better of yourself."
  },

  {
    id: "epictetus-best-09",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 1",
    quote_text: "Make the best of what is in our power, and take the rest as it naturally happens.",
    tags: ["acceptance","effort","balance"],
    mode: "all",
    core_meaning: "Pour full effort into what you can actually influence, then release your grip on what you can’t. This isn’t resignation — it’s clarity. Distinguish your arena from everything else, and act fully within it.",
    scenario_generic: "You’re preparing for a job interview. You can research the company, practise your answers, and show up rested and prepared. You can’t control who else applied or what the panel thinks. Do everything within your power, then let the outcome be what it will be.",
    mcq_question: "What two-part approach does Epictetus recommend here?",
    mcq_options: [
      "Set high goals, then accept whatever results you get",
      "Do your best where you have influence, and accept the rest as it comes",
      "Focus on outcomes, and work backward to the actions that produce them"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the balance — full effort within your power, then release what isn’t.",
    mcq_feedback_incorrect: "The key is the split: maximum effort on what’s yours to affect, genuine acceptance of what isn’t."
  },

  {
    id: "epictetus-identity-10",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 3, Chapter 23",
    quote_text: "First say to yourself what you would be; and then do what you have to do.",
    tags: ["identity","action","purpose"],
    mode: "all",
    core_meaning: "Decide who you want to be before you decide what to do. When your identity is clear — the kind of professional, friend, or person you’re becoming — the right actions follow more naturally. Purpose is the compass, and actions are the steps.",
    scenario_generic: "You’re offered an opportunity that pays well but conflicts with how you see yourself professionally. Before calculating the numbers, ask the prior question: what kind of professional am I becoming? If the answer is clear, the decision usually is too.",
    mcq_question: "What does Epictetus say should come before deciding what to do?",
    mcq_options: [
      "Clarifying who you want to be",
      "Consulting people with more experience than you",
      "Weighing up the likely outcomes of each option"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Identity before action. Know who you’re becoming, and the right moves tend to clarify.",
    mcq_feedback_incorrect: "Epictetus starts with character, not options or outcomes. Define who you’d be first."
  },

  {
    id: "epictetus-freedom-11",
    author: "Epictetus",
    source_work: "Fragment 35 (attributed; from Stobaeus)",
    source_reference: "Fragment 35",
    quote_text: "No man is free who is not master of himself.",
    tags: ["freedom","discipline","self-mastery"],
    mode: "all",
    core_meaning: "External freedom — no one telling you what to do — means nothing if you’re enslaved by your own impulses, moods, or appetites. True freedom is the ability to choose your actions rather than be driven by reactions. Self-mastery is the foundation.",
    scenario_generic: "You’re your own boss, work from home, and set your own hours. But you spend half the day on your phone, avoid difficult tasks, and feel out of control. External freedom without internal discipline isn’t freedom — it’s just a different kind of cage.",
    mcq_question: "What kind of freedom does Epictetus consider the most important?",
    mcq_options: [
      "Freedom from obligations and responsibilities",
      "The ability to master your own impulses and responses",
      "Financial independence from other people"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. If you’re at the mercy of your own reactions, you’re not truly free.",
    mcq_feedback_incorrect: "External freedoms are secondary. The freedom that matters is mastery of your own inner world."
  },

  {
    id: "epictetus-will-12",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 1",
    quote_text: "You may fetter my leg, but my will not even Zeus himself can overpower.",
    tags: ["willpower","resilience","inner-freedom"],
    mode: "all",
    core_meaning: "Epictetus, who was born a slave, knew that the body and circumstances could be constrained but the will cannot be. Even in the most constricted conditions, your inner attitude — what you make of your situation, how you choose to face it — remains completely your own.",
    scenario_generic: "You’re recovering from an illness that has taken months from your life — your plans, your mobility, your routines. Your body is constrained. But you still choose what you read, how you speak to those around you, and whether you approach the recovery with bitterness or patience. That inner freedom is real.",
    mcq_question: "What is Epictetus asserting about the limits of external power over a person?",
    mcq_options: [
      "Physical strength is the most important kind of resilience",
      "Even the most powerful forces cannot touch your inner will",
      "True freedom comes from escaping difficult circumstances"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the core claim. The will is the one thing no external force — not even the greatest — can conquer.",
    mcq_feedback_incorrect: "The point isn’t about escaping or physical strength. It’s about what remains yours even when everything else is constrained."
  },

  {
    id: "epictetus-anger-13",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 18",
    quote_text: "Any person capable of angering you becomes your master.",
    tags: ["anger","control","power"],
    mode: "all",
    core_meaning: "When someone can reliably trigger your anger, they hold power over your state of mind. Every time you react with fury, you’ve handed control to someone else. The Stoic move is to notice the trigger, pause, and choose your response — reclaiming that power.",
    scenario_generic: "A difficult client sends a rude email and your whole afternoon is consumed by anger and rehearsed replies. They’ve essentially stolen hours of your mental energy without even knowing it. You gave them that power. The next time it happens, you can choose not to.",
    mcq_question: "What does Epictetus say happens when someone is able to make you angry?",
    mcq_options: [
      "You become stronger through the experience",
      "They gain power over your emotional state",
      "You have the right to respond with equal force"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. When they can trigger your anger, they’re controlling you — not the other way around.",
    mcq_feedback_incorrect: "It’s a power dynamic: the person who can make you angry is the one in control. Recognising that is the first step."
  },

  {
    id: "epictetus-wealth-14",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 4, Chapter 10 (paraphrase)",
    quote_text: "Wealth consists not in having great possessions, but in having few wants.",
    tags: ["contentment","desire","simplicity"],
    mode: "all",
    core_meaning: "Real wealth is the gap between what you have and what you want. You can grow that gap by acquiring more — but you can also grow it by wanting less. The second path is more reliable and doesn’t depend on external conditions.",
    scenario_generic: "You upgrade your phone and feel satisfied for about two weeks. Then you notice the newer model. The appetite returns. Rather than chasing the next upgrade, ask: what would it feel like to be genuinely content with what you already have? That contentment is a kind of wealth no purchase can provide.",
    mcq_question: "According to Epictetus, how do you become truly wealthy?",
    mcq_options: [
      "By reducing your desires rather than accumulating more",
      "By earning enough to afford everything you desire",
      "By sharing what you have with those who need it more"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Wealth isn’t the size of what you have — it’s the smallness of what you need.",
    mcq_feedback_incorrect: "The Stoic insight is about desire, not income or generosity. True wealth comes from wanting less."
  },

  {
    id: "epictetus-fear-15",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 5 (alt translation)",
    quote_text: "What really frightens and dismays us is not external events but the way in which we think about them.",
    tags: ["fear","perception","reframing"],
    mode: "all",
    core_meaning: "The event itself carries no built-in emotional charge. The fear and distress you feel is produced by your interpretation — the meaning you assign to what happened. Change the lens, and the same event stops being terrifying.",
    scenario_generic: "You receive critical feedback on a presentation. One interpretation: “I’m not good enough.” Another: “This is useful data that will make the next one better.” The feedback is identical in both cases. Your response — paralysis or improvement — comes entirely from the interpretation you choose.",
    mcq_question: "What does Epictetus identify as the true source of fear and distress?",
    mcq_options: [
      "Our interpretation of what those events mean",
      "The severity of the events that happen to us",
      "The uncertainty about what will happen next"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s the core insight. The event doesn’t frighten you — your story about it does.",
    mcq_feedback_incorrect: "Events are neutral until you assign meaning to them. The fear lives in the interpretation, not the thing itself."
  },

  {
    id: "marcus-obstacle-20",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 20",
    quote_text: "The impediment to action advances action. What stands in the way becomes the way.",
    tags: ["obstacles","growth","resilience"],
    mode: "all",
    core_meaning: "Obstacles aren’t the enemy of progress — they’re part of the path. When you stop treating setbacks as detours and start treating them as the terrain itself, they lose their power to stop you. The resistance is where the growth happens.",
    scenario_generic: "Your project hits an unexpected technical problem that threatens the deadline. You can treat it as a disaster, or ask: what does solving this teach us? What alternative approach does it force? Often, the workaround becomes more elegant than the original plan. The obstacle made the work better.",
    mcq_question: "What does Marcus Aurelius suggest you do when you encounter an obstacle?",
    mcq_options: [
      "Pause and reassess whether the goal is worth pursuing",
      "Find a way around the obstacle as quickly as possible",
      "Treat the obstacle itself as the path forward"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. The obstacle is the way. Work with it, not around it.",
    mcq_feedback_incorrect: "It’s not about avoiding or bypassing — Marcus says the obstacle itself becomes the path. Engage with it directly."
  },

  {
    id: "marcus-power-21",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 8",
    quote_text: "You have power over your mind, not outside events. Realise this, and you will find strength.",
    tags: ["control","mindset","strength"],
    mode: "all",
    core_meaning: "Strength doesn’t come from controlling what happens around you — it comes from mastering your own mind. When you stop spending energy trying to force the world to behave and redirect it inward, you find a source of stability that external events can’t touch.",
    scenario_generic: "The market shifts and your business takes a hit. The external event is real and serious. But your mental response — whether you collapse into panic or think clearly and adapt — is entirely within your power. Your strength isn’t in the outcome; it’s in how you meet it.",
    mcq_question: "Where does Marcus Aurelius say real strength comes from?",
    mcq_options: [
      "Surrounding yourself with the right people and resources",
      "Preparing thoroughly for every possible outcome",
      "Mastering your own mind rather than trying to control events"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. The mind is your power base — and it’s the only one you fully own.",
    mcq_feedback_incorrect: "Preparation and community help, but Marcus’ point is more fundamental: power over your mind is the strength that never fails."
  },

  {
    id: "marcus-mortality-22",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 2, Section 11",
    quote_text: "You could leave life right now. Let that determine what you do and say and think.",
    tags: ["mortality","urgency","presence"],
    mode: "all",
    core_meaning: "Remembering that life could end at any moment isn’t meant to be morbid — it’s a clarifying tool. When you hold the brevity of life in mind, petty grievances shrink, genuine priorities surface, and the present moment gains weight.",
    scenario_generic: "You’re spending your Sunday stewing over a work argument that happened on Friday. The irritation is real, but if you held Marcus’ thought for just a moment — this is one of the days you have — would you spend it on that grudge? Mortality doesn’t depress; it filters.",
    mcq_question: "What effect does Marcus Aurelius intend from remembering you could leave life right now?",
    mcq_options: [
      "To clarify your priorities and make what matters stand out",
      "To make you anxious and careful about every decision",
      "To remind you that achievements have no lasting importance"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Mortality is a filter. It shows you what actually matters and strips away the rest.",
    mcq_feedback_incorrect: "The intention isn’t anxiety or nihilism. Holding mortality in mind sharpens focus on what genuinely matters right now."
  },

  {
    id: "marcus-gratitude-23",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 2, Section 4",
    quote_text: "When you arise in the morning, think of what a privilege it is to be alive, to think, to enjoy, to love.",
    tags: ["gratitude","morning","perspective"],
    mode: "all",
    core_meaning: "Marcus starts each day by naming what he already has: life, a working mind, the capacity for pleasure and love. Gratitude isn’t a reaction to good luck — it’s a discipline you practise before the day has a chance to colour your mood.",
    scenario_generic: "Your alarm goes off and your first thought is dread — the inbox, the commute, the difficult meeting. Marcus’ move: before you reach for your phone, pause for ten seconds and name three things you have access to today that aren’t guaranteed to everyone. The day starts differently.",
    mcq_question: "What is Marcus Aurelius’ core habit in this quote?",
    mcq_options: [
      "Starting each day by counting his blessings before the day begins",
      "Pushing through difficult mornings with sheer willpower",
      "Reminding himself of all the tasks he needs to complete"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Gratitude as a morning discipline — not a reaction, but a choice made before the day unfolds.",
    mcq_feedback_incorrect: "The quote is about actively choosing gratitude first thing — treating being alive as a privilege worth noticing."
  },

  {
    id: "marcus-happiness-24",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 7, Section 67",
    quote_text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    tags: ["happiness","simplicity","mindset"],
    mode: "all",
    core_meaning: "Marcus is pointing out that happiness isn’t an acquisition problem — it’s an orientation problem. The conditions for a good life are already available to most people. What changes the experience is how you interpret and relate to what you already have.",
    scenario_generic: "You upgrade your phone, your salary goes up, or you finally get the apartment you wanted — and the satisfaction lasts about three weeks. Then you’re looking for the next thing. Marcus is observing that the upgrade was never the source of the feeling. Your thinking is.",
    mcq_question: "Where does Marcus Aurelius say happiness actually comes from?",
    mcq_options: [
      "Your own way of thinking",
      "Having the right circumstances and resources",
      "Being surrounded by supportive people"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Happiness is an inside job — it lives in how you think, not what you have.",
    mcq_feedback_incorrect: "Marcus points inward: happiness is in your way of thinking, not your external situation."
  },

  {
    id: "marcus-fate-25",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 39",
    quote_text: "Accept the things to which fate binds you, and love the people with whom fate brings you together.",
    tags: ["acceptance","love","community"],
    mode: "all",
    core_meaning: "You didn’t choose your family, your community, or many of your circumstances. The Stoic path isn’t resistance — it’s acceptance paired with genuine care for whoever is in your orbit.",
    scenario_generic: "You’re placed in a new team at work — people you wouldn’t have chosen. You can spend six months wishing things were different, or you can decide to actually know and care about the people in front of you. Marcus would say the second path is both wiser and more fulfilling.",
    mcq_question: "What is Marcus Aurelius suggesting about the people and situations life gives us?",
    mcq_options: [
      "Choose your circumstances carefully to avoid difficulty",
      "Keep people at a distance to protect yourself from loss",
      "Accept what fate brings and genuinely care for those around you"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. Accept what is, and love who’s there. That’s where peace — and connection — lives.",
    mcq_feedback_incorrect: "Marcus is pointing toward acceptance and love, not avoidance. Work with what fate gives you."
  },

  {
    id: "marcus-future-26",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 7, Section 8",
    quote_text: "Never let the future disturb you. You will meet it with the same weapons of reason which today arm you against the present.",
    tags: ["future","anxiety","confidence"],
    mode: "all",
    core_meaning: "Anxiety about the future is often anxiety about your imagined inability to cope with it. Marcus’ point: whatever comes, you’ll face it with the same faculties you’re using right now. You’ve handled hard things before. The tools travel with you.",
    scenario_generic: "You’re up at 2am imagining every way a big decision could go wrong next year. But the version of you dealing with those problems will have the same capacity for reasoning, adaptation, and resilience that got you through every previous difficulty. The future isn’t coming for a different, weaker you.",
    mcq_question: "Why does Marcus Aurelius say the future shouldn’t disturb you?",
    mcq_options: [
      "Because the future is unlikely to be as bad as you imagine",
      "Because you’ll face whatever comes with the same reasoning ability you have now",
      "Because worrying wastes energy you’ll need later"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Your capacity for reason and resilience goes with you into whatever the future holds.",
    mcq_feedback_incorrect: "Marcus’ specific insight: you already have the tools. The same reason handling today will handle tomorrow."
  },

  {
    id: "marcus-estimate-27",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 47",
    quote_text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it.",
    tags: ["perception","pain","reframing"],
    mode: "all",
    core_meaning: "Pain from external events isn’t delivered by the event — it’s constructed by your assessment of it. Change the estimate and you change the experience. This doesn’t mean denying difficulty; it means recognising that your interpretation is the part you can actually work with.",
    scenario_generic: "You receive critical feedback on a project and it stings. The feedback itself is just words on a page. The pain comes from your estimate: “this means I’m not good enough.” A different estimate — “this is information I can use” — changes the same event into something entirely different.",
    mcq_question: "According to Marcus Aurelius, what actually causes your distress from external events?",
    mcq_options: [
      "The severity of the event itself",
      "Your judgment and assessment of the event",
      "The people who caused the situation"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. The event is the trigger. Your estimate is where the pain is constructed.",
    mcq_feedback_incorrect: "Marcus is pointing at your estimate — your interpretation — as the real source. The event itself is neutral."
  },

  {
    id: "marcus-anger-28",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 11, Section 18",
    quote_text: "How much more grievous are the consequences of anger than the causes of it.",
    tags: ["anger","consequences","restraint"],
    mode: "all",
    core_meaning: "The trigger that fires anger is almost always smaller than the damage anger itself creates. A minor provocation leads to a major reaction, and we spend far longer on the fallout than we would have spent tolerating the irritation.",
    scenario_generic: "A colleague makes a dismissive comment in a meeting. You snap back sharply. Now there’s an awkward atmosphere, someone feels humiliated, and you’ve spent the rest of the day replaying it. The comment cost you five seconds. The anger cost you the afternoon.",
    mcq_question: "What is Marcus Aurelius’ observation about anger?",
    mcq_options: [
      "Anger is always unjustified and should be suppressed",
      "Expressing anger honestly is better than holding it in",
      "The damage caused by anger usually outweighs what triggered it"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. The cause is small; the consequences ripple out far further. That asymmetry is worth pausing on.",
    mcq_feedback_incorrect: "Marcus isn’t saying anger is always wrong — he’s pointing out that the damage it causes is almost always greater than what caused it."
  },

  {
    id: "marcus-prepare-29",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 2, Section 1",
    quote_text: "When you wake up in the morning, tell yourself: the people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly.",
    tags: ["preparation","patience","human-nature"],
    mode: "all",
    core_meaning: "This isn’t cynicism — it’s preparation. Marcus was reminding himself that difficult people are a normal part of any day, not a personal attack. By expecting human imperfection, you stop being derailed by it. You arrive ready rather than blindsided.",
    scenario_generic: "You head into a big meeting expecting collegial professionalism. Instead, someone talks over you, someone else takes credit for a shared idea, and a third person shows up fifteen minutes late. If you expected easy, you’ll stew. If you expected human, you’ll take it in stride and keep doing your work.",
    mcq_question: "Why does Marcus Aurelius suggest mentally preparing for difficult people each morning?",
    mcq_options: [
      "To develop resentment toward people who behave badly",
      "To avoid interacting with difficult people whenever possible",
      "So that human imperfection doesn’t catch you off guard or throw you off course"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. Preparation isn’t pessimism — it’s a buffer that keeps you steady when the inevitable happens.",
    mcq_feedback_incorrect: "Marcus isn’t building resentment or avoidance — he’s inoculating himself so difficult behaviour doesn’t derail his equanimity."
  },

  {
    id: "marcus-clarity-30",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 9",
    quote_text: "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
    tags: ["clarity","calm","truth"],
    mode: "all",
    core_meaning: "These two rules work together: staying calm lets you see clearly, and seeing things as they really are prevents unnecessary fear. Panic distorts reality. Equanimity gives you the stable ground from which to actually understand what’s happening.",
    scenario_generic: "A crisis lands at work — a client is threatening to leave. Your first instinct is alarm. Marcus’ two-step: first, settle your nerves so you’re not reacting from panic. Second, look at the situation exactly as it is — not catastrophised, not minimised. Then respond from a clear view rather than a distorted one.",
    mcq_question: "Why does Marcus pair an untroubled spirit with seeing things clearly?",
    mcq_options: [
      "Panic distorts your perception; settling first lets you see reality accurately",
      "Calm makes you more persuasive in difficult conversations",
      "You need both to avoid making emotional decisions"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. The untroubled spirit isn’t the goal itself — it’s the prerequisite for seeing clearly.",
    mcq_feedback_incorrect: "The connection is specific: calm enables accurate perception. Without settling first, you can’t see what’s actually there."
  },

  {
    id: "marcus-urgency-31",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 4, Section 17",
    quote_text: "Do not act as if you were going to live ten thousand years. Death hangs over you.",
    tags: ["mortality","urgency","action"],
    mode: "all",
    core_meaning: "Marcus is using mortality not as a morbid warning but as a clarifying lens. When you remember that time is genuinely finite, the question “should I bother?” collapses. The things that matter become obvious. The things you’ve been putting off become urgent.",
    scenario_generic: "You keep deferring a conversation with someone you care about, a creative project, or a health appointment — telling yourself there’s time. Marcus is asking: are you certain? Act on what matters while the window is open, because it will close and you won’t know when.",
    mcq_question: "What is Marcus Aurelius using the awareness of death to do?",
    mcq_options: [
      "Create anxiety so you work harder",
      "Remind you to enjoy life instead of working so much",
      "Clarify what actually matters and motivate action now"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Exactly. Death isn’t the point — urgency and clarity about what matters are.",
    mcq_feedback_incorrect: "It’s not about anxiety or enjoyment. Marcus is using mortality as a lens to make priorities obvious and action necessary."
  },

  {
    id: "marcus-injury-32",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 4, Section 7",
    quote_text: "Reject your sense of injury and the injury itself disappears.",
    tags: ["perception","forgiveness","letting-go"],
    mode: "all",
    core_meaning: "Offence is not a passive event that happens to you — it requires your participation. You have to pick it up and carry it. The moment you decide something doesn’t wound you, it loses its power. The injury lives in the holding, not in the original act.",
    scenario_generic: "A friend makes a thoughtless comment and you spend the next three days replaying it. The comment happened once. The injury happens every time you revisit it. Marcus is saying: set it down. Not for them — for you. The wound only persists as long as you keep tending it.",
    mcq_question: "What does Marcus Aurelius mean when he says the injury disappears if you reject your sense of it?",
    mcq_options: [
      "The harm only continues if you keep holding onto the sense of being wronged",
      "Pretend nothing bad happened so you can move on",
      "Forgiving others releases them from responsibility"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. The injury lives in the carrying, not the original act. Let it go and it loses its grip.",
    mcq_feedback_incorrect: "It’s not pretending or forgiving others — it’s recognising that the injury requires your participation to persist."
  },

  {
    id: "marcus-detachment-33",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 33",
    quote_text: "Receive without pride, let go without attachment.",
    tags: ["detachment","humility","balance"],
    mode: "all",
    core_meaning: "Accept what comes — success, praise, comfort — without making it your identity. When it goes, release it without clinging. Both pride and attachment create suffering; this is the middle path.",
    scenario_generic: "You get a promotion. The Stoic move: accept it with gratitude, do the work, but don’t build your self-worth around the title. Because titles change, projects end, and companies restructure. What you receive is temporary. Who you are isn’t contingent on keeping it.",
    mcq_question: "What does Marcus Aurelius mean by receiving without pride and letting go without attachment?",
    mcq_options: [
      "Don’t seek success and don’t care when you lose things",
      "Hold good things gratefully, don’t make them your identity, release freely",
      "Stay emotionally neutral about everything that happens to you"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the balance. Hold things lightly — not coldly, but without gripping.",
    mcq_feedback_incorrect: "It’s not about indifference or avoiding success. It’s about holding what you have without pride, and releasing it without grief."
  },

  {
    id: "marcus-change-35",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 21",
    quote_text: "If someone is able to show me that what I think or do is not right, I will happily change.",
    tags: ["humility","growth","open-mindedness"],
    mode: "all",
    core_meaning: "Marcus sees being wrong as an opportunity, not a threat. The goal isn’t to be right — it’s to get to the right answer. That reframe makes disagreement useful rather than something to win or avoid. Ego defends positions; wisdom updates them.",
    scenario_generic: "A colleague challenges your approach in a project meeting. Your first instinct might be to defend it. But if their argument is sound, the better move — Marcus’ move — is to say: you’re right, let’s adjust. That takes more confidence than digging in, and it gets better outcomes.",
    mcq_question: "What does Marcus Aurelius’ attitude toward being corrected reveal?",
    mcq_options: [
      "He values being right above all else",
      "He is reluctant to change but accepts it when forced",
      "He sees being shown a better way as a reason for genuine gratitude"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. For Marcus, finding out you were wrong isn’t embarrassing — it’s useful.",
    mcq_feedback_incorrect: "Marcus is enthusiastic about correction, not reluctant. The word ‘happily’ is the tell — he genuinely welcomes it."
  },

  {
    id: "seneca-luck-39",
    author: "Seneca",
    source_work: "De Beneficiis",
    source_reference: "attributed",
    quote_text: "Luck is what happens when preparation meets opportunity.",
    tags: ["preparation","opportunity","effort"],
    mode: "all",
    core_meaning: "What looks like luck from the outside is usually the intersection of consistent effort and a moment that opens up. You can’t manufacture the moment, but you can control whether you’re ready for it. Preparation is the part of luck that belongs to you.",
    scenario_generic: "A contact reaches out with an unexpected opportunity in your field. To someone watching, you got lucky. But you spent three years building skills, staying curious, and staying in touch with people in your industry. The opportunity came to you because you were already positioned to receive it.",
    mcq_question: "What is Seneca saying about the relationship between luck and preparation?",
    mcq_options: [
      "What seems like luck is really readiness meeting the right moment",
      "Lucky people were born with better timing and opportunities",
      "Preparation alone guarantees success regardless of circumstance"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Luck isn’t random — it’s where your preparation intersects with an opening.",
    mcq_feedback_incorrect: "Seneca is making luck less mysterious: it’s not born or guaranteed — it’s created by being ready when the moment arrives."
  },

  {
    id: "seneca-waste-40",
    author: "Seneca",
    source_work: "On the Shortness of Life",
    source_reference: "Section 1",
    quote_text: "It is not that we have a short time to live, but that we waste a lot of it.",
    tags: ["time","waste","intentionality"],
    mode: "all",
    core_meaning: "Life isn’t short by nature — we make it short by filling it with distractions, trivial pursuits, and passivity. The time available to a well-directed life is actually generous. The question is whether you’re spending it or squandering it.",
    scenario_generic: "You reach the end of a Sunday and wonder where the day went: two hours of news, an hour of scrolling, a nap you didn’t need. Nothing terrible happened, but nothing meaningful did either. The day wasn’t too short. It was misused.",
    mcq_question: "What is Seneca’s real complaint about human life?",
    mcq_options: [
      "We squander the time we actually have",
      "We are given too little time to do what matters",
      "Modern life is too busy to allow reflection"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Seneca’s argument isn’t that life is short — it’s that we waste it.",
    mcq_feedback_incorrect: "Seneca isn’t blaming the length of life. He’s blaming how we spend it."
  },

  {
    id: "seneca-expectancy-41",
    author: "Seneca",
    source_work: "On the Shortness of Life",
    source_reference: "Section 9",
    quote_text: "The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today.",
    tags: ["present","expectations","living"],
    mode: "all",
    core_meaning: "We defer real living to a future moment — the promotion, the holiday, the right circumstances. But by always waiting for tomorrow to begin, we let today pass unlived. The present is the only place life actually happens.",
    scenario_generic: "You keep telling yourself you’ll invest in friendships, exercise, and the things you care about once work calms down. But work never calms down. The waiting is the obstacle. What you keep postponing is your actual life.",
    mcq_question: "What does Seneca identify as the biggest barrier to actually living?",
    mcq_options: [
      "Constantly waiting for better conditions in the future",
      "Having too many responsibilities in the present",
      "Setting expectations that are too high"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. The habit of deferring to tomorrow is how today gets lost.",
    mcq_feedback_incorrect: "The obstacle Seneca names is the habit of waiting — always looking to tomorrow instead of being here now."
  },

  {
    id: "seneca-company-42",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 7, Section 8",
    quote_text: "Associate with people who are likely to improve you.",
    tags: ["influence","friendship","growth"],
    mode: "all",
    core_meaning: "Who you spend time with shapes who you become. It isn’t about cutting off everyone who isn’t perfect — it’s about being intentional. Seek out people whose habits, thinking, and character raise your own standard.",
    scenario_generic: "You notice that after certain social groups, you feel inspired and motivated. After others, you feel drained and cynical. Seneca would say the difference is real and worth paying attention to. Quietly invest more time in the relationships that make you better.",
    mcq_question: "What principle does Seneca recommend for choosing who to spend time with?",
    mcq_options: [
      "Spend time with people whose character and habits will lift yours",
      "Choose people who are entertaining and make you feel good",
      "Avoid anyone whose values differ from your own"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. The standard is growth — choose people who pull you upward.",
    mcq_feedback_incorrect: "It’s not about comfort or similarity. Seneca is pointing to people who actively make you better."
  },

  {
    id: "seneca-direction-43",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 71, Section 3",
    quote_text: "If a man knows not to which port he sails, no wind is favourable.",
    tags: ["purpose","direction","clarity"],
    mode: "all",
    core_meaning: "Without a clear sense of where you’re going, every option looks equally valid or equally pointless. Clarity of purpose is what turns daily choices into meaningful steps rather than random motion.",
    scenario_generic: "You’re busy every day — meetings, tasks, messages — but by Friday you’re not sure what you actually moved forward. The activity was real, but the direction was unclear. Seneca’s prompt: what are you actually trying to build, and does today’s work connect to that?",
    mcq_question: "What does Seneca’s sailing metaphor teach about purpose?",
    mcq_options: [
      "Without a clear destination, effort and opportunity go to waste",
      "Hard work is enough to get you where you want to go",
      "External circumstances determine whether you succeed"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Even a perfect wind won’t help if you don’t know where you’re headed.",
    mcq_feedback_incorrect: "Seneca’s point is that direction matters more than effort or conditions — without a destination, nothing is truly helpful."
  },

  {
    id: "seneca-present-44",
    author: "Seneca",
    source_work: "De Vita Beata",
    source_reference: "Attributed",
    quote_text: "True happiness is to enjoy the present, without anxious dependence upon the future.",
    tags: ["happiness","present","anxiety"],
    mode: "all",
    core_meaning: "Happiness attached to a future condition is always one step away. Tying your contentment to “when I get X” means you’re never fully here. Real satisfaction comes from engaging fully with what’s in front of you now, without constantly hedging it against what might go wrong.",
    scenario_generic: "You’re on a good streak at work, but instead of enjoying it, you’re already worrying about how long it’ll last. The good thing is happening now — but anxiety about losing it prevents you from experiencing it. Seneca would say: be in the good moment while it’s here.",
    mcq_question: "What does Seneca say true happiness depends on?",
    mcq_options: [
      "Being fully engaged with the present without anxious waiting",
      "Securing a stable and comfortable future",
      "Eliminating all sources of stress and uncertainty"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s it. Happiness isn’t something you arrive at — it’s something you practise now.",
    mcq_feedback_incorrect: "Seneca’s point is that happiness tied to the future is always conditional. The present is where it actually lives."
  },

  {
    id: "seneca-premature-45",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 13, paraphrase",
    quote_text: "He suffers more than necessary, who suffers before it is necessary.",
    tags: ["anticipation","suffering","patience"],
    mode: "all",
    core_meaning: "Pre-emptive suffering — worrying about something bad before it happens — doubles your pain. You bear the imagined version first, then the real one if it arrives. And most of the time, the real thing either doesn’t come or is far less severe than imagined.",
    scenario_generic: "A difficult performance review is coming up. You spend two weeks dreading it, replaying worst-case scenarios, losing sleep. The review happens and it’s tough but manageable. You suffered twice — once in your head, once in reality. Seneca would say: wait for the actual problem.",
    mcq_question: "What is Seneca’s specific warning about how we approach anticipated problems?",
    mcq_options: [
      "Worrying before a problem arrives adds unnecessary suffering",
      "We should mentally rehearse every possible difficulty",
      "It’s better to avoid difficult situations entirely"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Face difficulties when they actually arrive, not in advance.",
    mcq_feedback_incorrect: "Seneca’s point is that pre-suffering is self-inflicted. Don’t borrow pain from a future that hasn’t happened."
  },

  {
    id: "seneca-courage-46",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 78",
    quote_text: "Sometimes even to live is an act of courage.",
    tags: ["courage","perseverance","resilience"],
    mode: "all",
    core_meaning: "Courage isn’t only visible in dramatic acts. Sometimes it’s getting up again after grief, illness, loss, or failure. Simply continuing — choosing to stay engaged with life when it’s hard — is a form of bravery that deserves recognition.",
    scenario_generic: "You’ve been going through a prolonged rough patch — health issues, a relationship ending, work that feels meaningless. Getting through each day without drama or fanfare is its own quiet act of courage. Seneca would call that worthy.",
    mcq_question: "What does Seneca mean by calling living an act of courage?",
    mcq_options: [
      "Simply continuing through hardship, without giving up, takes real bravery",
      "Physical danger is always present in everyday life",
      "Courage is only relevant in extreme or life-threatening situations"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Endurance and persistence through difficulty are their own form of courage.",
    mcq_feedback_incorrect: "Seneca isn’t talking about physical danger. He’s honouring the quiet courage of continuing when life is genuinely hard."
  },

  {
    id: "seneca-spirit-47",
    author: "Seneca",
    source_work: "On Anger",
    source_reference: "Book 2, Section 32",
    quote_text: "It is the mark of a great spirit to regard wrongs as beneath contempt.",
    tags: ["dignity","forgiveness","greatness"],
    mode: "all",
    core_meaning: "Reacting strongly to every slight or offence keeps you at the level of the person who wronged you. True dignity isn’t in the counter-attack — it’s in recognising that most wrongs are too small to deserve your full attention or energy.",
    scenario_generic: "A colleague sends a passive-aggressive email copying your manager. Your instinct is to fire back with equal sharpness. Instead, you respond simply and professionally. You didn’t lower yourself. That restraint isn’t weakness — it’s exactly the “great spirit” Seneca is describing.",
    mcq_question: "What does Seneca say distinguishes a person of great spirit?",
    mcq_options: [
      "They refuse to let minor wrongs command their full attention",
      "They respond to every wrong with strength and force",
      "They are never offended by anything"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Elevating yourself above the petty is exactly Seneca’s meaning.",
    mcq_feedback_incorrect: "It’s not about being unaffected by everything. It’s about choosing not to give every wrong the dignity of a full response."
  },

  {
    id: "seneca-heal-48",
    author: "Seneca",
    source_work: "On Anger",
    source_reference: "Book 3, Section 27",
    quote_text: "How much better it is to heal an injury than to avenge it.",
    tags: ["healing","revenge","compassion"],
    mode: "all",
    core_meaning: "Revenge might feel satisfying in anticipation, but it doesn’t close the wound. Healing — through forgiveness, perspective, or simply moving forward — actually resolves the harm. Vengeance prolongs it.",
    scenario_generic: "A former business partner acted badly and cost you money and reputation. You could spend months planning a counter-move. Or you could document, recover what’s recoverable, rebuild, and let the experience make you sharper. One path keeps you stuck; the other moves you forward.",
    mcq_question: "What does Seneca say is more effective than seeking revenge?",
    mcq_options: [
      "Focusing on healing and moving forward rather than retaliating",
      "Exposing the person who wronged you to others",
      "Accepting the wrong without any response"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Healing closes the wound. Revenge keeps you in it.",
    mcq_feedback_incorrect: "Seneca isn’t saying do nothing. He’s saying the energy is better spent on recovery than retaliation."
  },

  {
    id: "seneca-wisdom-49",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 76",
    quote_text: "No man was ever wise by chance.",
    tags: ["wisdom","effort","discipline"],
    mode: "all",
    core_meaning: "Wisdom doesn’t accumulate passively. It requires deliberate effort: reflection, reading, confronting your own mistakes, and sitting with hard questions. The wise aren’t lucky — they’ve chosen to do the work most people avoid.",
    scenario_generic: "You admire a colleague who always seems to make calm, grounded decisions. What you don’t see is the years of journaling, the books, the therapy, the habit of pausing before reacting. That clarity wasn’t handed to them. They built it, one choice at a time.",
    mcq_question: "What does Seneca say is required for wisdom?",
    mcq_options: [
      "Deliberate effort and intentional practice",
      "Natural intelligence and good instincts",
      "Learning from the mistakes of others"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Wisdom is earned through sustained, intentional effort — not stumbled upon.",
    mcq_feedback_incorrect: "Seneca’s point is that wisdom never arrives by accident. It takes active, deliberate work."
  },

  {
    id: "seneca-lightness-50",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 123",
    quote_text: "Nothing is burdensome if taken lightly, and nothing need arouse irritation so long as one doesn’t make it bigger by getting irritated.",
    tags: ["attitude","irritation","perspective"],
    mode: "all",
    core_meaning: "The weight of most annoyances is something we add ourselves. A minor inconvenience becomes a major one when we meet it with strong resistance. How you receive a difficulty largely determines how heavy it feels.",
    scenario_generic: "Your internet drops mid-call. You can spiral into frustration that colours the rest of your morning, or note it as an inconvenience, fix what you can, and move on. The second option isn’t denial — it’s just not making a small thing bigger than it is.",
    mcq_question: "What does Seneca say amplifies the burden of irritating things?",
    mcq_options: [
      "Our own reaction of getting irritated makes things feel worse",
      "The actual severity of the problem itself",
      "Not having the right support system in place"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Getting irritated amplifies the problem. A lighter touch keeps it manageable.",
    mcq_feedback_incorrect: "Seneca’s insight: the difficulty doesn’t make itself bigger — your irritation does."
  },

  {
    id: "seneca-feardeath-51",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 4",
    quote_text: "He who fears death will never do anything worthy of a living man.",
    tags: ["courage","death","action"],
    mode: "all",
    core_meaning: "A deep fear of loss — of reputation, security, life — creates a paralysing caution. People in its grip avoid risk, avoid boldness, avoid anything that might cost them. Seneca argues that accepting mortality is what frees you to actually live fully.",
    scenario_generic: "You’ve been sitting on a business idea, a difficult conversation, a creative project for years. The real obstacle isn’t logistics — it’s fear of failure, of looking foolish, of losing what you have. Confronting the fact that you’re finite is oddly liberating: what’s actually stopping you?",
    mcq_question: "What does Seneca say happens to someone who lives in fear of death or loss?",
    mcq_options: [
      "They end up avoiding anything meaningful or bold",
      "They become more careful and make better decisions",
      "They appreciate life more deeply than others"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Fear of loss contracts your life. Accepting it opens it up.",
    mcq_feedback_incorrect: "Seneca’s observation: fear of death leads to caution, not appreciation. It shrinks what you’re willing to do."
  },

  {
    id: "marcus-accept-34",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 9, Section 42",
    quote_text: "Is a world without shameless people possible? No. So this person you’ve just met is one of them. Get over it.",
    tags: ["acceptance","patience","realism"],
    mode: "all",
    core_meaning: "Difficult people are not an aberration — they are a permanent feature of human life. Expecting otherwise is the source of endless frustration. The Stoic adjustment: accept their existence as part of reality, and stop being surprised when they show up.",
    scenario_generic: "A client is being unreasonable and rude and you’re fuming. Marcus would ask: did you expect everyone you’d meet in business to be fair and gracious? Difficult people are simply part of the landscape. You can manage the situation without burning energy on outrage.",
    mcq_question: "What is Marcus Aurelius’ core argument in this passage?",
    mcq_options: [
      "Difficult people are inevitable, so stop being shocked when you meet them",
      "Shameless people should be avoided whenever possible",
      "Most people are fundamentally good and deserve your patience"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Acceptance that difficult people exist is the starting point, not the defeat.",
    mcq_feedback_incorrect: "Marcus isn’t advising avoidance or optimism. He’s saying: this is reality, adjust to it."
  },

  // ========================================
  // MODE: TEEN — 50 cards
  // ========================================
  {
    id: "epictetus-control-teen",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 1",
    quote_text: "Some things are within our control, and some things are not. Within our control are our opinions, desires, and aversions. Not within our control are our bodies, possessions, and reputations.",
    tags: ["control","acceptance","fundamentals"],
    mode: "teen",
    core_meaning: "You can’t control who likes you, what people say behind your back, or whether the teacher is fair. You can control how you respond, what you focus on, and the kind of person you choose to be.",
    scenario_generic: "Someone screenshots your message and shares it around, twisting what you meant. People are talking. You can’t unsend it or control the gossip. But you can decide not to retaliate, talk to someone you trust, and not let the drama define your week.",
    mcq_question: "According to this idea, what’s actually within your control?",
    mcq_options: [
      "Your own thoughts, choices, and reactions",
      "What people think and say about you",
      "How teachers and classmates treat you"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s it. You can’t control the noise around you, but your response is always yours.",
    mcq_feedback_incorrect: "The key insight: other people’s actions are outside your control. Your own mindset isn’t."
  },

  {
    id: "marcus-thoughts-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 16",
    quote_text: "Your mind will take the shape of what you frequently hold in thought, for the human spirit is coloured by such impressions.",
    tags: ["mindset","habits","thoughts"],
    mode: "teen",
    core_meaning: "What you scroll through, watch, and replay in your head slowly becomes your default mood. Feed your mind junk and you’ll feel like junk. Choose better inputs and your headspace shifts.",
    scenario_generic: "You spend an hour comparing yourself to influencers online and feel terrible after. A friend who limits their feed to stuff they actually enjoy seems way more chill. The difference isn’t luck — it’s what they’re letting into their head every day.",
    mcq_question: "What does this quote say shapes who you become?",
    mcq_options: [
      "The thoughts and content you regularly take in",
      "Your natural talent and abilities",
      "The school and neighbourhood you’re in"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Your repeated thoughts literally shape your mindset over time.",
    mcq_feedback_incorrect: "It’s not about what’s around you — it’s about what you repeatedly let into your mind."
  },

  {
    id: "seneca-imagination-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 13, Section 4",
    quote_text: "We suffer more often in imagination than in reality.",
    tags: ["anxiety","fear","perception"],
    mode: "teen",
    core_meaning: "That thing you’re dreading? It almost never turns out as bad as your brain is making it. Most of your stress is coming from a movie your mind is playing, not from what’s actually happening.",
    scenario_generic: "You have to present in front of the class tomorrow and your stomach is in knots. You picture everyone laughing, forgetting your words, total humiliation. Then you do it — it’s a bit awkward but fine. All that dread was for nothing.",
    mcq_question: "What is Seneca saying about most of our worries?",
    mcq_options: [
      "Real problems are always worse than expected",
      "We stress ourselves out over things that haven’t even happened",
      "Worrying helps us prepare for the worst"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. The fear is almost always worse than the thing itself.",
    mcq_feedback_incorrect: "Seneca’s point: the suffering we create in our heads is usually bigger than the actual problem."
  },

  {
    id: "epictetus-judgment-teen",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 5",
    quote_text: "It is not things that disturb us, but our judgments about things. Death is nothing dreadful, or else Socrates would have thought so.",
    tags: ["judgment","perception","reframing"],
    mode: "teen",
    core_meaning: "The event itself is neutral. It’s the story you tell yourself about it — “this is the worst thing ever” or “everyone hates me” — that makes it feel unbearable. Change the story, change how you feel.",
    scenario_generic: "You don’t get invited to a party and your brain says “nobody likes me.” But that’s a judgment, not a fact. Maybe they barely know you. Maybe the group is small. The sting comes from the story, not the event.",
    mcq_question: "What does Epictetus say actually causes your emotional pain?",
    mcq_options: [
      "The bad things that happen to you",
      "The story and meaning you attach to events",
      "The people who treat you unfairly"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Spot on. The event is neutral — your interpretation is where the pain lives.",
    mcq_feedback_incorrect: "It’s not the event that hurts you, it’s the judgment you wrap around it."
  },

  {
    id: "marcus-present-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 36",
    quote_text: "Do not disturb yourself by picturing your life as a whole. Do not assemble in your mind the many troubles which have come or may come. Ask only: what is unbearable in this moment?",
    tags: ["present","anxiety","overwhelm"],
    mode: "teen",
    core_meaning: "When exams, friendships, and the future all pile up in your head at once, everything feels impossible. The trick: zoom in. Just handle the one thing in front of you. Right now, that’s usually doable.",
    scenario_generic: "You’ve got three assignments due, a fight with your best friend, and you’re stressing about next year. It feels like your whole life is falling apart. But right now? The only thing to do is open that first assignment. Start there.",
    mcq_question: "What does Marcus Aurelius say to do when everything feels like too much?",
    mcq_options: [
      "Make a detailed plan for your entire future",
      "Focus only on what’s actually hard right now",
      "Push through everything at once to get it over with"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s it. Zoom into this moment — it’s almost always manageable on its own.",
    mcq_feedback_incorrect: "The move is to stop bundling everything together and just face this one moment."
  },

  {
    id: "seneca-time-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 1, Section 2",
    quote_text: "While we are postponing, life speeds by. Hold every hour in your grasp. Lay hold of today’s task, and you will not need to depend so much upon tomorrow’s.",
    tags: ["time","procrastination","urgency"],
    mode: "teen",
    core_meaning: "You keep saying “I’ll do it later” but later stacks up fast. Time doesn’t wait for you to feel ready. Starting now — even messily — beats the perfect plan you never begin.",
    scenario_generic: "You tell yourself you’ll study for the test over the weekend, but Saturday turns into gaming, Sunday into panic. Ten minutes tonight would have been enough to start. The hardest part wasn’t the work — it was starting.",
    mcq_question: "What is Seneca’s main warning here?",
    mcq_options: [
      "You should never relax or take breaks",
      "Time passes while you put things off, so start now",
      "Rushing through tasks leads to better results"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. The biggest enemy isn’t the task — it’s the delay.",
    mcq_feedback_incorrect: "It’s not about rushing. It’s about not waiting for the perfect moment that never comes."
  },

  {
    id: "marcus-revenge-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 6",
    quote_text: "The best revenge is not to be like your enemy.",
    tags: ["character","revenge","integrity"],
    mode: "teen",
    core_meaning: "When someone is mean to you, the urge is to be mean back. But copying their behaviour means they’ve already won — they’ve turned you into them. The real power move is staying who you are.",
    scenario_generic: "Someone spreads a rumour about you. Your first instinct is to spread something worse about them. But if you do, you’re now playing the same game. The person who walks away with their dignity intact is the one who actually wins.",
    mcq_question: "According to Marcus Aurelius, how do you really ‘win’ against someone who wrongs you?",
    mcq_options: [
      "By refusing to become like them",
      "By getting back at them harder",
      "By making sure everyone knows what they did"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s the real flex — not sinking to their level.",
    mcq_feedback_incorrect: "The point isn’t to hit back harder. It’s to protect your own character."
  },

  {
    id: "epictetus-wish-teen",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 8",
    quote_text: "Do not seek to have everything that happens happen as you wish, but wish for everything to happen as it actually does, and your life will be serene.",
    tags: ["acceptance","serenity","expectations"],
    mode: "teen",
    core_meaning: "Life doesn’t follow your script. The more you demand things go exactly your way, the more frustrated you’ll be. Learning to roll with what actually happens doesn’t make you weak — it makes you adaptable.",
    scenario_generic: "You planned the whole weekend with friends but half of them cancel. You can either mope about the ‘ruined’ plan, or make something good out of who’s left. The people who adapt fastest are usually the happiest.",
    mcq_question: "What does Epictetus say leads to peace of mind?",
    mcq_options: [
      "Making sure everything goes according to plan",
      "Accepting things as they happen instead of fighting them",
      "Lowering your expectations so you’re never disappointed"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s it. Adapt to reality instead of demanding it match your plan.",
    mcq_feedback_incorrect: "It’s not about lowering expectations — it’s about adjusting your wishes to fit what’s actually happening."
  },

  {
    id: "seneca-live-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 101, Section 10",
    quote_text: "Begin at once to live, and count each separate day as a separate life.",
    tags: ["present","time","intentionality"],
    mode: "teen",
    core_meaning: "Stop waiting for life to “really start” after school, after you turn 18, after whatever milestone. Today is already your life. Make it count, even in small ways.",
    scenario_generic: "You keep thinking “my real life starts in uni” or “things will be better when I’m older.” But the friendships, interests, and habits you build right now are your life. Don’t sleepwalk through today waiting for a future that isn’t guaranteed.",
    mcq_question: "What perspective shift is Seneca recommending?",
    mcq_options: [
      "Set big goals and work toward them patiently",
      "Treat today as if it’s its own complete life",
      "Don’t worry about the future at all"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Don’t wait for life to start — it’s already happening.",
    mcq_feedback_incorrect: "It’s not about ignoring the future. It’s about being fully alive today, not just tomorrow."
  },

  {
    id: "marcus-action-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 10, Section 16",
    quote_text: "Waste no more time arguing about what a good person should be. Be one.",
    tags: ["action","virtue","simplicity"],
    mode: "teen",
    core_meaning: "You already know the right thing to do most of the time. You don’t need another motivational video or inspirational quote. You need to actually do the thing. Action over talk.",
    scenario_generic: "You follow accounts about self-improvement, save workout plans, and pin study tips. But you haven’t started any of them. Marcus would say: close the app, open the textbook, do ten push-ups. Five minutes of doing beats five hours of planning.",
    mcq_question: "What is Marcus Aurelius pushing you to do?",
    mcq_options: [
      "Stop overthinking and start acting",
      "Read more philosophy before making decisions",
      "Find someone to guide you first"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s the message. You already know enough. Now do it.",
    mcq_feedback_incorrect: "The whole point is to stop preparing and start doing. Action is the move."
  },

  {
    id: "epictetus-foolish-teen",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 13",
    quote_text: "If you want to improve, be content to be thought foolish and stupid.",
    tags: ["growth","ego","humility"],
    mode: "teen",
    core_meaning: "Every time you stay quiet because you’re scared of looking dumb, you miss a chance to actually get better. The people who improve the fastest are the ones willing to ask, fail, and look awkward in front of others.",
    scenario_generic: "You don’t understand something in class but everyone else seems to get it, so you say nothing. Later, you bomb the test. The person who raised their hand and asked — and maybe got a few eye-rolls — is the one who actually learned it.",
    mcq_question: "What is Epictetus saying gets in the way of real improvement?",
    mcq_options: [
      "Not having the right teachers or resources",
      "Caring too much about how you appear to others",
      "Trying to learn too many things at once"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s it. Worrying about looking stupid is what actually keeps you stuck.",
    mcq_feedback_incorrect: "The obstacle here is ego — the fear of being judged. That fear is what blocks improvement."
  },

  {
    id: "epictetus-dinner-teen",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 15",
    quote_text: "Remember that you must behave in life as at a dinner party.",
    tags: ["patience","moderation","manners"],
    mode: "teen",
    core_meaning: "Think of life like passing food around a table. Take your share when it comes to you, don’t reach across and grab, and if it doesn’t reach you this time, wait patiently. Forcing things or demanding more than what naturally comes your way usually backfires.",
    scenario_generic: "There’s one spot left on the team and two of you want it. You could make it awkward by constantly selling yourself and putting the other person down. Or you could show your best, let the coach decide, and respect the outcome. Patience and dignity tend to win in the long run.",
    mcq_question: "What does the dinner party metaphor say about how to handle things you want?",
    mcq_options: [
      "Go after what you want before someone else takes it",
      "Wait patiently and take what comes to you gracefully",
      "Make sure everyone else gets served before you do"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Take your turn calmly — don’t lunge, don’t hold on too tight.",
    mcq_feedback_incorrect: "The lesson is about patience and moderation, not pure selflessness or aggressive pursuit."
  },

  {
    id: "epictetus-freewill-teen",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 1",
    quote_text: "No one can rob us of our free will.",
    tags: ["freedom","will","autonomy"],
    mode: "teen",
    core_meaning: "Even when you’re told what to do, where to be, and how to act, the way you respond is still yours. People can pressure you, restrict you, and try to shape you — but your inner choice stays untouched if you protect it.",
    scenario_generic: "Everyone in your group is pressuring you to do something you’re not comfortable with. You can feel the pull. But choosing your own response — even if it means standing out — is the one thing they genuinely can’t force. That’s not a small thing.",
    mcq_question: "What is the one thing Epictetus says others cannot take from you?",
    mcq_options: [
      "Your popularity and social standing",
      "Your grades and achievements",
      "Your freedom to choose how you respond"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. No matter the pressure, your response is always your own.",
    mcq_feedback_incorrect: "It’s not about what you own or achieve — it’s your will, your inner choice of how to respond."
  },

  {
    id: "epictetus-demand-teen",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 51",
    quote_text: "How long are you going to wait before you demand the best for yourself?",
    tags: ["urgency","self-worth","action"],
    mode: "teen",
    core_meaning: "You keep saying “maybe next year,” “when I’m older,” “when things calm down.” But Epictetus is calling you out: you already deserve to take yourself seriously. Don’t wait for someone to give you permission to try.",
    scenario_generic: "You want to start a project, try out for a team, or get better at something — but you keep putting it off because it’s not the “right time.” Here’s the thing: there is no right time. The version of you who starts now is already ahead of the one who waits.",
    mcq_question: "What does this question from Epictetus push you to do?",
    mcq_options: [
      "Stop waiting and start holding yourself to a higher standard now",
      "Be patient and let opportunities come to you naturally",
      "Ask for help before you take on anything challenging"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. Stop deferring. The demand starts with you, right now.",
    mcq_feedback_incorrect: "It’s about urgency and self-worth — not patience or seeking help first."
  },

  {
    id: "epictetus-best-teen",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 1",
    quote_text: "Make the best of what is in our power, and take the rest as it naturally happens.",
    tags: ["acceptance","effort","balance"],
    mode: "teen",
    core_meaning: "Give everything you’ve got to the things you can actually affect — your preparation, your effort, your attitude. Then stop stressing about the stuff outside your hands. That’s not giving up; that’s smart energy management.",
    scenario_generic: "You’ve studied hard for an exam. You’ve done practice papers, slept well, eaten breakfast. On exam day, your mind goes to who got a better score or what questions might come up. Stop. You’ve done everything you can. The rest is out of your hands. Let it land where it lands.",
    mcq_question: "What does Epictetus say you should do with things outside your control?",
    mcq_options: [
      "Work harder to bring them within your control",
      "Ignore them completely and don’t think about them",
      "Accept them as they naturally unfold after you’ve done your part"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. Do your part fully, then release the rest. That’s the balance.",
    mcq_feedback_incorrect: "You can’t force everything into your control, and ignoring things isn’t the same as accepting them. The move is to act, then let go."
  },

  {
    id: "epictetus-identity-teen",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 3, Chapter 23",
    quote_text: "First say to yourself what you would be; and then do what you have to do.",
    tags: ["identity","action","purpose"],
    mode: "teen",
    core_meaning: "Before asking “what should I do?” ask “who do I want to be?” When you know what kind of person you’re trying to become, a lot of daily decisions start making sense on their own.",
    scenario_generic: "Your friends are pressuring you to go along with something that doesn’t sit right. Instead of trying to figure out the right move in that moment, ask yourself: what kind of person am I trying to be? If that’s clear, you already know what to do.",
    mcq_question: "According to Epictetus, what question should you ask yourself first?",
    mcq_options: [
      "What will make the most people happy with me?",
      "What kind of person do I want to become?",
      "What’s the safest choice in this situation?"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Start with identity. When that’s clear, the actions tend to follow.",
    mcq_feedback_incorrect: "It’s not about making others happy or playing it safe — it’s about knowing who you are first."
  },

  {
    id: "epictetus-freedom-teen",
    author: "Epictetus",
    source_work: "Fragment 35 (attributed; from Stobaeus)",
    source_reference: "Fragment 35",
    quote_text: "No man is free who is not master of himself.",
    tags: ["freedom","discipline","self-mastery"],
    mode: "teen",
    core_meaning: "Freedom isn’t just about no one telling you what to do. Real freedom is being able to control yourself — your reactions, your habits, your impulses. If you can’t do that, you’re still being controlled, just from the inside.",
    scenario_generic: "You tell yourself you’ll stop scrolling at 10pm but you never do. You know you should study but you keep finding reasons to delay. That pull you feel — toward distraction, toward the easier option — is what Epictetus means. Until you master it, it masters you.",
    mcq_question: "What does Epictetus mean by being “master of yourself”?",
    mcq_options: [
      "Being able to control your own impulses and reactions",
      "Achieving independence from your parents and teachers",
      "Earning enough to make your own decisions"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s it. Mastering yourself means choosing your actions, not just being driven by impulses.",
    mcq_feedback_incorrect: "External independence isn’t the point. Epictetus means self-control — mastery over your own inner drives."
  },

  {
    id: "epictetus-will-teen",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 1",
    quote_text: "You may fetter my leg, but my will not even Zeus himself can overpower.",
    tags: ["willpower","resilience","inner-freedom"],
    mode: "teen",
    core_meaning: "People can restrict what you do — your parents, your school, your circumstances. But how you think about all of it, and who you decide to be inside it, is completely yours. No one can reach into your head and change that without your permission.",
    scenario_generic: "You’re grounded, your phone is taken, your options are limited. Everything feels controlled from the outside. But you still decide whether to sulk for a week or use the time to do something unexpected with it. Your inner response is yours, even when your outer options aren’t.",
    mcq_question: "What point is Epictetus making about what others can and can’t control?",
    mcq_options: [
      "People can control your body and actions but not your inner will",
      "Your will depends on your physical freedom",
      "Other people’s opinions shape who you become"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. They can limit what you do, but your will — your inner response — stays yours.",
    mcq_feedback_incorrect: "The key distinction is between the outer (which can be constrained) and the inner will (which cannot)."
  },

  {
    id: "epictetus-anger-teen",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 18",
    quote_text: "Any person capable of angering you becomes your master.",
    tags: ["anger","control","power"],
    mode: "teen",
    core_meaning: "Every time someone gets a rise out of you, they’ve won. If a person can push your buttons on demand, they’re the one in control — not you. Staying calm isn’t weakness. It’s taking your power back.",
    scenario_generic: "Someone online keeps posting things specifically designed to wind you up, and it keeps working. You rage-comment, you screenshot, you stew about it for hours. Meanwhile, they’ve barely thought about you. The moment you stop reacting, you stop being their puppet.",
    mcq_question: "What is Epictetus saying about the person who can make you angry?",
    mcq_options: [
      "They probably have their own issues worth feeling sorry for",
      "They deserve a direct and honest response",
      "They are controlling you every time you react"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s the insight. Every reaction is a transfer of control. Keep your reaction, keep your power.",
    mcq_feedback_incorrect: "It’s a control question, not an empathy or confrontation question. Reacting gives them power over you."
  },

  {
    id: "epictetus-wealth-teen",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 4, Chapter 10 (paraphrase)",
    quote_text: "Wealth consists not in having great possessions, but in having few wants.",
    tags: ["contentment","desire","simplicity"],
    mode: "teen",
    core_meaning: "The person who always wants the newest thing is never actually satisfied. Real richness is being okay with what you have — not because you’ve given up, but because you’ve stopped chasing the next thing as if it will finally make you happy.",
    scenario_generic: "Everyone’s getting the new trainers, the new phone, the new whatever. You feel left out if you don’t have it. But the people who keep up with every trend are almost never the most content — they just have more stuff and a longer list of things they still want.",
    mcq_question: "What does Epictetus say is the real source of wealth and satisfaction?",
    mcq_options: [
      "Saving up until you can afford what you want",
      "Appreciating what you already have and wanting less",
      "Being generous with what you own"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s it. Contentment isn’t about having more — it’s about needing less.",
    mcq_feedback_incorrect: "Saving and generosity are good, but Epictetus’ point is specifically about desire — wanting less is the key."
  },

  {
    id: "epictetus-fear-teen",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 5 (alt translation)",
    quote_text: "What really frightens and dismays us is not external events but the way in which we think about them.",
    tags: ["fear","perception","reframing"],
    mode: "teen",
    core_meaning: "The thing you’re scared of isn’t actually scaring you — your thoughts about it are. The rejection, the embarrassment, the failure: those are events. The terror is the story your brain runs about what they mean. You can question that story.",
    scenario_generic: "You’re dreading asking someone out because your brain has already written the humiliating rejection scene in detail. But none of that has happened. The fear is entirely in your head — a movie you’re playing on repeat. The actual conversation will probably be five awkward seconds, whatever the answer.",
    mcq_question: "According to Epictetus, where does fear actually come from?",
    mcq_options: [
      "From the real dangers in the situations we face",
      "From the way we think about and interpret situations",
      "From past experiences that taught us to be cautious"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. The fear is in the thinking, not the event. Change the thought, change the feeling.",
    mcq_feedback_incorrect: "It’s not about the situation or past experience — Epictetus points to the interpretation as the source of fear."
  },

  {
    id: "marcus-obstacle-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 20",
    quote_text: "The impediment to action advances action. What stands in the way becomes the way.",
    tags: ["obstacles","growth","resilience"],
    mode: "teen",
    core_meaning: "The thing blocking you isn’t a sign you should stop — it’s actually where the growth is. Every time you push through something hard instead of around it, you come out the other side stronger and more capable.",
    scenario_generic: "You want to join a sport but you’re not good enough yet. That gap — the obstacle — is actually the whole point. Practising past it is what makes you an athlete. The block isn’t in your way. It is the way.",
    mcq_question: "What is Marcus Aurelius saying about the things that get in your way?",
    mcq_options: [
      "They are signs that you need to change direction",
      "They are actually the path to improvement",
      "They test whether your goal is really worth it"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s it. The obstacle is where the progress lives. Work through it, not around it.",
    mcq_feedback_incorrect: "The insight here isn’t about quitting or re-evaluating — it’s that the obstacle itself is where growth happens."
  },

  {
    id: "marcus-power-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 8",
    quote_text: "You have power over your mind, not outside events. Realise this, and you will find strength.",
    tags: ["control","mindset","strength"],
    mode: "teen",
    core_meaning: "You can’t control what happens at school, what people think of you, or how things turn out. But you have full power over your own thinking — how you frame things, what you focus on, how you respond. That’s where real strength comes from.",
    scenario_generic: "Results day arrives and you didn’t get the grade you wanted. You can’t change the result. But you’re still in charge of what you do next — whether you spiral or regroup. The strength Marcus is talking about isn’t in the outcome. It’s in how your mind handles what it’s given.",
    mcq_question: "What does Marcus Aurelius say is your actual source of power?",
    mcq_options: [
      "Your ability to change the situations around you",
      "Your control over your own mind and how you respond",
      "The support of people who believe in you"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. You can’t always change what happens. But your mind is always yours to direct.",
    mcq_feedback_incorrect: "External support matters, but Marcus points to something inside: your power over your own mind is the real source of strength."
  },

  {
    id: "marcus-mortality-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 2, Section 11",
    quote_text: "You could leave life right now. Let that determine what you do and say and think.",
    tags: ["mortality","urgency","presence"],
    mode: "teen",
    core_meaning: "You’re not invincible, even though it feels that way. And that’s not a dark thought — it’s actually useful. Knowing that your time is limited makes you less likely to waste it on things that don’t actually matter to you.",
    scenario_generic: "You spend a week arguing with someone online about something you won’t even remember in a year. If you actually held the thought “this could be one of my last weeks” — would that be how you’d spend it? Marcus isn’t trying to freak you out. He’s helping you zoom in on what’s real.",
    mcq_question: "Why does Marcus Aurelius want you to remember that life could end right now?",
    mcq_options: [
      "To prepare you for the possibility of losing people you love",
      "To encourage you to take more risks while you’re young",
      "To help you focus on what genuinely matters and cut the noise"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. Remembering your mortality isn’t scary — it’s clarifying. It shows you what’s worth your time.",
    mcq_feedback_incorrect: "It’s not about grief or risk-taking. It’s a tool to filter out what doesn’t matter and bring the real stuff into focus."
  },

  {
    id: "marcus-gratitude-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 2, Section 4",
    quote_text: "When you arise in the morning, think of what a privilege it is to be alive, to think, to enjoy, to love.",
    tags: ["gratitude","morning","perspective"],
    mode: "teen",
    core_meaning: "It’s easy to wake up and immediately start scrolling or dreading the day. Marcus is saying: before any of that, notice what you actually have. Being alive, being able to think, laugh, and care about people — those aren’t small things.",
    scenario_generic: "You wake up miserable about school. Your phone is already in your hand before you’re even fully awake. Try something different: before you open any app, name one thing you’re glad exists in your life. It sounds too simple, but it shifts the starting point of your whole day.",
    mcq_question: "What is Marcus Aurelius suggesting you do first thing in the morning?",
    mcq_options: [
      "Plan out every task for the day ahead",
      "Motivate yourself by thinking about your goals",
      "Recognise the privilege of simply being alive and able to feel"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Exactly. Noticing what you have before the noise starts — that’s the whole move.",
    mcq_feedback_incorrect: "It’s simpler than that: stop, notice that you’re alive and can think and love. Start there."
  },

  {
    id: "marcus-happiness-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 7, Section 67",
    quote_text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    tags: ["happiness","simplicity","mindset"],
    mode: "teen",
    core_meaning: "Social media constantly tells you happiness is one purchase, one follower count, or one relationship away. Marcus says that’s backwards. The shift you’re actually looking for isn’t outside you — it’s in how you think about what you already have.",
    scenario_generic: "You see someone’s highlight reel online and feel like your life is missing something. But that person almost certainly feels the same way looking at someone else’s feed. The comparison loop never ends. What Marcus is describing is stepping off that treadmill by realising the thing you’re chasing was inside you the whole time.",
    mcq_question: "What is Marcus Aurelius saying about where happiness comes from?",
    mcq_options: [
      "It comes from achieving your goals and gaining status",
      "It’s found by cutting out negative people",
      "It comes from your mindset, not your circumstances"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Exactly. The feeling you’re chasing is already within reach — it’s a thinking shift, not an upgrade.",
    mcq_feedback_incorrect: "Marcus says happiness lives in how you think — not what you achieve or who you remove from your life."
  },

  {
    id: "marcus-fate-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 39",
    quote_text: "Accept the things to which fate binds you, and love the people with whom fate brings you together.",
    tags: ["acceptance","love","community"],
    mode: "teen",
    core_meaning: "You didn’t pick your family, your school, or half the people in your life. But Marcus says: the people right in front of you are worth investing in, even unchosen. Some of your most important relationships come from exactly that.",
    scenario_generic: "You get put in a group project with people you barely know and would never hang out with by choice. It feels annoying. But you commit to it, and one of them turns out to be genuinely funny and interesting. The people fate drops into your life can surprise you if you let them.",
    mcq_question: "What does Marcus Aurelius say about the people life puts in our path?",
    mcq_options: [
      "Avoid people you didn’t choose to be around",
      "Only invest in friendships you chose yourself",
      "Accept and care for the people fate brings you, even if you didn’t pick them"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Exactly. Some of your best connections will come from people you didn’t choose. Give them a real chance.",
    mcq_feedback_incorrect: "Marcus is saying the opposite: accept and love who fate brings. Don’t only value what you chose."
  },

  {
    id: "marcus-future-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 7, Section 8",
    quote_text: "Never let the future disturb you. You will meet it with the same weapons of reason which today arm you against the present.",
    tags: ["future","anxiety","confidence"],
    mode: "teen",
    core_meaning: "Stressing about the future is really stressing about whether a future version of you will be able to cope. Marcus says: that version of you will still have your brain, your reasoning, and the experience you’ve built up. You’ve handled hard things. You’ll handle the next ones too.",
    scenario_generic: "You’re anxious about what happens after school — uni, jobs, figuring out adulthood. It feels overwhelming from here. But the 19-year-old version of you will have everything you’re building right now: your ability to think, adapt, and work things out. You don’t need to solve the future today.",
    mcq_question: "What is Marcus Aurelius’ reason not to fear the future?",
    mcq_options: [
      "The future will probably be easier than the present",
      "You’ll handle future challenges with the same mind you use right now",
      "Anxiety doesn’t change anything, so it’s pointless"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. Your mind travels with you into the future. You’re already carrying the tools you’ll need.",
    mcq_feedback_incorrect: "It’s more than just “worry is useless.” Marcus is saying you already have the reason and strength you’ll need when the time comes."
  },

  {
    id: "marcus-estimate-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 47",
    quote_text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it.",
    tags: ["perception","pain","reframing"],
    mode: "teen",
    core_meaning: "When something hurts — a rejection, a bad mark, someone ignoring you — it’s not the thing itself that’s causing the pain. It’s the story you’re putting on top of it. Shift the story, and the same thing hurts differently.",
    scenario_generic: "Someone you like doesn’t text you back. Your brain immediately decides: they’re not interested, you embarrassed yourself, it’s over. But that’s your estimate — not fact. They might be busy, their phone might be dead. The pain you’re feeling is from the story, not from a silence.",
    mcq_question: "What does Marcus say is the real cause of emotional pain from things that happen to you?",
    mcq_options: [
      "The people who treat you badly",
      "Your own estimate or interpretation of what happened",
      "Things being objectively unfair"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s it. The story you wrap around an event is where the pain lives — not the event itself.",
    mcq_feedback_incorrect: "Marcus is pointing at your own interpretation. The pain lives in your estimate, not in the thing."
  },

  {
    id: "marcus-anger-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 11, Section 18",
    quote_text: "How much more grievous are the consequences of anger than the causes of it.",
    tags: ["anger","consequences","restraint"],
    mode: "teen",
    core_meaning: "Think about the last time you blew up over something. Whatever started it — a comment, a look, a snub — was it really worth what happened next? Marcus noticed that anger almost always costs more than the thing that set it off.",
    scenario_generic: "Someone makes a dig at you in the group chat and you fire back hard. Now it’s a whole thing — people are picking sides, the friendship is strained, and you’ve been stressed about it for days. The original comment was a sentence. The fallout was a week. Marcus would say: was it worth it?",
    mcq_question: "What point is Marcus Aurelius making about getting angry?",
    mcq_options: [
      "The mess anger creates is usually worse than what caused it",
      "You should never show anger, even when it’s justified",
      "Anger gives you energy to stand up for yourself"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. The trigger was small; the consequences were big. That’s the pattern Marcus is flagging.",
    mcq_feedback_incorrect: "Marcus isn’t saying suppress everything. He’s saying look at the ratio: the cause is small, the damage is large."
  },

  {
    id: "marcus-prepare-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 2, Section 1",
    quote_text: "When you wake up in the morning, tell yourself: the people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly.",
    tags: ["preparation","patience","human-nature"],
    mode: "teen",
    core_meaning: "People can be annoying, two-faced, and difficult. That’s not a surprise — it’s just how people are sometimes. Marcus is saying: expect it, so when it happens you’re not shocked or thrown off. It’s not that people are terrible; it’s that they’re human.",
    scenario_generic: "You go to school expecting your group of friends to be normal and chill, but someone’s moody, someone makes a backhanded comment, and someone ignores you for reasons you don’t understand. If you expected sunshine, that stings. If you expected humans being human, you can just move through it and not make it a whole thing.",
    mcq_question: "What is Marcus Aurelius’ reason for this morning mental exercise?",
    mcq_options: [
      "To make you distrust everyone around you",
      "To help you identify who isn’t worth your time",
      "So difficult behaviour doesn’t ruin your day because you already expected it"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. When you’re already prepared for it, difficult behaviour loses its power to wreck your day.",
    mcq_feedback_incorrect: "It’s not about distrust or cutting people off — it’s about expecting human imperfection so it doesn’t blindside you."
  },

  {
    id: "marcus-clarity-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 9",
    quote_text: "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
    tags: ["clarity","calm","truth"],
    mode: "teen",
    core_meaning: "When something stressful happens, your first job is to not spiral. Your second job is to actually look at the situation clearly — not worse than it is, not better. Calm first, then clear eyes. In that order.",
    scenario_generic: "You fail a test and your brain immediately goes to: I’m going to fail the year, I’m not smart enough, this is a disaster. But that’s panic talking, not reality. Marcus’ move: breathe first, then look at what actually happened — one test, specific topics, fixable. Calm unlocks clear sight.",
    mcq_question: "What is the correct order in Marcus’ two rules?",
    mcq_options: [
      "Understand the problem first, then calm down",
      "Ignore your feelings and focus on the facts immediately",
      "Stay calm first, then look at the situation for what it really is"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. Settle first, then see clearly. Panic makes everything look worse than it is.",
    mcq_feedback_incorrect: "Marcus is clear about the sequence: calm comes first. You can’t see straight when you’re in panic mode."
  },

  {
    id: "marcus-urgency-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 4, Section 17",
    quote_text: "Do not act as if you were going to live ten thousand years. Death hangs over you.",
    tags: ["mortality","urgency","action"],
    mode: "teen",
    core_meaning: "This sounds dark but it’s actually useful. When you act like you’ve got forever, you keep putting off the things that matter. The moment you remember you don’t have forever, those things feel more real and worth doing now.",
    scenario_generic: "You keep meaning to reach out to a grandparent, start that thing you’ve been quietly excited about, or have an honest conversation with someone. You tell yourself there’s time. Marcus is reminding you there isn’t infinite time — and that’s not a reason to panic, it’s a reason to move.",
    mcq_question: "What does Marcus want you to do with the awareness that life is finite?",
    mcq_options: [
      "Stop deferring things that actually matter and act now",
      "Stress less because life is short and nothing matters",
      "Focus on leaving a legacy people will remember"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s it. Finite time isn’t a scary thought — it’s a useful one. Use it to stop deferring.",
    mcq_feedback_incorrect: "It’s not about nihilism or legacy. It’s about letting the awareness of finite time push you to act on what matters."
  },

  {
    id: "marcus-injury-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 4, Section 7",
    quote_text: "Reject your sense of injury and the injury itself disappears.",
    tags: ["perception","forgiveness","letting-go"],
    mode: "teen",
    core_meaning: "When someone does you wrong, the hurt keeps going as long as you keep picking it back up. You don’t have to forgive them or pretend it was fine. But you can choose to stop carrying it — because the longer you hold it, the more it costs you, not them.",
    scenario_generic: "Someone was genuinely unkind to you at school. It was real. But a week later you’re still replaying it, checking if they’ve texted, going over what you should have said. They’ve probably moved on. The injury is now yours to maintain. You can put it down.",
    mcq_question: "What is Marcus saying about how a sense of injury works?",
    mcq_options: [
      "If you ignore it long enough, the person will apologise",
      "Only time heals a genuine injustice",
      "Holding onto a sense of injury is what keeps the wound alive"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. The injury persists because you keep tending it. Letting go is how it actually ends.",
    mcq_feedback_incorrect: "Marcus isn’t about waiting for apologies or time. He’s saying you’re the one keeping the injury alive by holding onto it."
  },

  {
    id: "marcus-detachment-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 33",
    quote_text: "Receive without pride, let go without attachment.",
    tags: ["detachment","humility","balance"],
    mode: "teen",
    core_meaning: "When something good happens — you do well on a test, you get praised, someone likes you — enjoy it without building your whole identity around it. And when it shifts or ends, don’t fall apart trying to hold onto it. Hold things lightly.",
    scenario_generic: "You get a lot of positive attention for something you did — a result, a post that did well, a moment in the spotlight. It feels amazing. But if you start needing that level of attention to feel okay, you’ve handed your stability over to something you can’t control. Enjoy it, then let it pass.",
    mcq_question: "What is Marcus Aurelius’ advice about things going well?",
    mcq_options: [
      "Enjoy what comes but don’t let it define you, and release it when it goes",
      "Work harder to make the good times last as long as possible",
      "Be cautious about good things because they always end badly"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Enjoy what’s good without gripping it. That’s how you keep your balance when things shift.",
    mcq_feedback_incorrect: "It’s not about caution or extending good things. It’s about receiving them without pride and releasing them without pain."
  },

  {
    id: "marcus-change-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 21",
    quote_text: "If someone is able to show me that what I think or do is not right, I will happily change.",
    tags: ["humility","growth","open-mindedness"],
    mode: "teen",
    core_meaning: "Being told you’re wrong can feel awful. But Marcus had it figured out: if someone has a better point, that’s actually a gift. Being willing to update your views when the evidence is there isn’t weakness — it’s what makes you someone worth listening to.",
    scenario_generic: "You get into an argument and realise halfway through that the other person is making a genuinely good point. Do you keep going to save face, or do you say: “actually, you might be right”? The second option is harder but it’s also what earns real respect — not the kind that comes from winning arguments.",
    mcq_question: "What does Marcus Aurelius think about being shown you’re wrong?",
    mcq_options: [
      "It’s a sign of weakness that others will use against you",
      "It’s genuinely welcome — a chance to improve, not an attack to defend against",
      "It’s only worth accepting from people you respect"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the mindset. Being correctable is a strength, not a vulnerability.",
    mcq_feedback_incorrect: "Marcus doesn’t filter by who’s telling him — if the point is right, he updates. That openness is the strength."
  },

  {
    id: "seneca-luck-teen",
    author: "Seneca",
    source_work: "De Beneficiis",
    source_reference: "attributed",
    quote_text: "Luck is what happens when preparation meets opportunity.",
    tags: ["preparation","opportunity","effort"],
    mode: "teen",
    core_meaning: "It can feel like some people just get lucky — the right chance falls into their lap. But look closer and you’ll usually find they put in the hours before the opportunity showed up. Preparation is the part of luck you actually control.",
    scenario_generic: "The captain of the team seems to always get noticed by coaches and get opportunities that others don’t. But they’ve been training outside of practice, watching footage, and showing up early for years. The ‘lucky’ moment came to someone who was already ready for it. That’s not random — that’s how it works.",
    mcq_question: "What does Seneca mean when he says luck is preparation meeting opportunity?",
    mcq_options: [
      "If you work hard enough, opportunities will always come",
      "Some people are naturally luckier than others and that’s just life",
      "Being ready is the part of luck you’re actually in charge of"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Exactly. You can’t force the opportunity, but you can make sure you’re ready when it comes.",
    mcq_feedback_incorrect: "Seneca isn’t promising outcomes. He’s saying that preparation is the part of luck you control. Do that part."
  },

  {
    id: "seneca-waste-teen",
    author: "Seneca",
    source_work: "On the Shortness of Life",
    source_reference: "Section 1",
    quote_text: "It is not that we have a short time to live, but that we waste a lot of it.",
    tags: ["time","waste","intentionality"],
    mode: "teen",
    core_meaning: "You’re not running out of time — you’re often spending it on things that don’t matter to you. The hours are there. The question is whether you’re doing anything with them that you’ll actually care about.",
    scenario_generic: "You look up and it’s midnight on a school night. You’ve been watching videos for three hours and don’t even remember most of them. You weren’t happy, you weren’t resting — you were just filling time. That’s the waste Seneca is talking about.",
    mcq_question: "What does Seneca say is the real problem with how we spend our lives?",
    mcq_options: [
      "Life is too short no matter what we do",
      "We fill our time with things that don’t actually matter to us",
      "Young people don’t have enough responsibilities yet"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. It’s not about the clock — it’s about what you’re doing with the time you have.",
    mcq_feedback_incorrect: "Seneca’s point isn’t about time being scarce. It’s about wasting what you already have."
  },

  {
    id: "seneca-expectancy-teen",
    author: "Seneca",
    source_work: "On the Shortness of Life",
    source_reference: "Section 9",
    quote_text: "The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today.",
    tags: ["present","expectations","living"],
    mode: "teen",
    core_meaning: "Waiting for life to really start — after exams, after you’re older, after things get easier — is a trap. You keep delaying the good stuff and missing what’s right in front of you. Today is not a rehearsal.",
    scenario_generic: "You’re telling yourself you’ll enjoy things more once the exams are over, once summer starts, once you’re at uni. Meanwhile, the conversations, laughs, and moments happening right now are the ones you’ll actually remember. Don’t skip them waiting for later.",
    mcq_question: "What’s the trap Seneca is warning about?",
    mcq_options: [
      "Setting too many goals for the future",
      "Always waiting for tomorrow and missing what’s happening today",
      "Expecting too much from other people"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Life doesn’t start later — it’s already going. Don’t miss it waiting.",
    mcq_feedback_incorrect: "Seneca’s warning is specifically about the habit of deferring — always putting life off until some better tomorrow."
  },

  {
    id: "seneca-company-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 7, Section 8",
    quote_text: "Associate with people who are likely to improve you.",
    tags: ["influence","friendship","growth"],
    mode: "teen",
    core_meaning: "Your friends shape you more than you realise. The people you hang around most affect your habits, your confidence, your ambitions. It’s worth asking: do the people in your life make you better, or do they just make you comfortable?",
    scenario_generic: "You have one friend group that pushes you to try new things and takes your goals seriously. Another crowd is fun but always ends up wasting time or encouraging you to skip things that matter. You don’t have to choose, but you should notice the difference.",
    mcq_question: "What does Seneca say you should look for in the people you spend time with?",
    mcq_options: [
      "People who are popular and make you feel included",
      "People who challenge and improve you",
      "People who share all the same interests as you"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. The best friendships push you to be more, not just make you comfortable.",
    mcq_feedback_incorrect: "Seneca isn’t talking about popularity or shared interests. He means people whose company makes you genuinely better."
  },

  {
    id: "seneca-direction-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 71, Section 3",
    quote_text: "If a man knows not to which port he sails, no wind is favourable.",
    tags: ["purpose","direction","clarity"],
    mode: "teen",
    core_meaning: "If you don’t have even a rough sense of what you’re working toward, it’s hard to make good decisions. Every opportunity looks the same. Having some direction — even loosely — makes choices much clearer.",
    scenario_generic: "You’re trying to decide between subjects, activities, or how to spend your time, and nothing feels obvious. That’s partly because you haven’t asked what you’re actually aiming for. You don’t need a five-year plan — just a direction. What kind of person do you want to be?",
    mcq_question: "What is Seneca saying you need before anything else can help you?",
    mcq_options: [
      "Better resources and support from others",
      "A clear enough sense of where you’re trying to go",
      "More experience before making any decisions"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s it. Without a direction, even great opportunities don’t land.",
    mcq_feedback_incorrect: "Resources and experience matter — but Seneca says they’re useless without knowing your destination first."
  },

  {
    id: "seneca-present-teen",
    author: "Seneca",
    source_work: "De Vita Beata",
    source_reference: "Attributed",
    quote_text: "True happiness is to enjoy the present, without anxious dependence upon the future.",
    tags: ["happiness","present","anxiety"],
    mode: "teen",
    core_meaning: "If you keep telling yourself you’ll be happy once exams are over, once you get more followers, once you fit in better — you’re training yourself to never be satisfied. Happiness that depends on something future never fully arrives.",
    scenario_generic: "You’re at a party but keep worrying about whether people are judging you or whether something better is happening elsewhere. You’re physically there but mentally somewhere else. The moment exists — you’re just not in it.",
    mcq_question: "What does Seneca say gets in the way of real happiness?",
    mcq_options: [
      "Not having enough good things in your life",
      "Anxiously depending on the future to feel okay",
      "Spending too much time alone with your thoughts"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. Chasing future happiness means missing what’s actually available now.",
    mcq_feedback_incorrect: "It’s not about having more. It’s about the habit of tying happiness to something that hasn’t happened yet."
  },

  {
    id: "seneca-premature-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 13, paraphrase",
    quote_text: "He suffers more than necessary, who suffers before it is necessary.",
    tags: ["anticipation","suffering","patience"],
    mode: "teen",
    core_meaning: "Dreading something before it happens is its own kind of suffering — and you feel it for longer than the actual event. You’re essentially punishing yourself twice: once in anticipation, once when (or if) it actually happens.",
    scenario_generic: "You’ve been sick with nerves for a week about asking someone out. When you finally do it, the no lasts about ten seconds and you feel fine. The week of dread was way worse than the actual moment. Seneca would say: you paid that price unnecessarily.",
    mcq_question: "What does Seneca say about dreading things before they happen?",
    mcq_options: [
      "Dreading things helps you prepare and stay safe",
      "You end up suffering more by worrying in advance than by facing things when they arrive",
      "You should try to eliminate all situations that cause dread"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. The anticipation is often worse than the thing itself. Save your energy.",
    mcq_feedback_incorrect: "Dread isn’t a useful preparation tool. Seneca says it just means you suffer more, and earlier, than you needed to."
  },

  {
    id: "seneca-courage-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 78",
    quote_text: "Sometimes even to live is an act of courage.",
    tags: ["courage","perseverance","resilience"],
    mode: "teen",
    core_meaning: "Courage isn’t just doing something extreme or dramatic. Sometimes it’s getting out of bed when everything feels heavy, showing up when you’d rather disappear, or just keeping going when you’re not sure why. That counts.",
    scenario_generic: "You’re going through something genuinely hard — maybe mentally, socially, or at home. You don’t feel brave. But showing up to school, reaching out to someone, or just making it through the day? Seneca would call that courage. It doesn’t need to look heroic.",
    mcq_question: "What kind of courage is Seneca pointing to in this quote?",
    mcq_options: [
      "Doing something daring or physically risky",
      "The quiet bravery of continuing when things are genuinely tough",
      "Standing up to authority or peer pressure"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. The courage to keep going through hard times is real — even when it’s invisible.",
    mcq_feedback_incorrect: "This isn’t about dramatic acts. Seneca is recognising the courage it takes just to keep living through difficulty."
  },

  {
    id: "seneca-spirit-teen",
    author: "Seneca",
    source_work: "On Anger",
    source_reference: "Book 2, Section 32",
    quote_text: "It is the mark of a great spirit to regard wrongs as beneath contempt.",
    tags: ["dignity","forgiveness","greatness"],
    mode: "teen",
    core_meaning: "Not every insult, snub, or shade deserves your energy. When you react dramatically to every slight, you show that it got to you. The move with more power: decide it isn’t worth your time. That’s not weakness — it’s the opposite.",
    scenario_generic: "Someone posts something indirectly shading you online. Half your class is waiting to see how you’ll react. Seneca’s answer: don’t. Not out of fear — out of genuine indifference. The most powerful response is sometimes just not caring enough to reply.",
    mcq_question: "What does Seneca say is the sign of real strength when someone wrongs you?",
    mcq_options: [
      "Calling them out publicly so everyone knows what they did",
      "Deciding the wrong isn’t worth the energy of a full reaction",
      "Pretending you weren’t affected at all"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the move. Real strength is choosing what’s actually worth your attention.",
    mcq_feedback_incorrect: "It’s not about pretending — it’s about genuinely deciding that some wrongs don’t deserve your energy."
  },

  {
    id: "seneca-heal-teen",
    author: "Seneca",
    source_work: "On Anger",
    source_reference: "Book 3, Section 27",
    quote_text: "How much better it is to heal an injury than to avenge it.",
    tags: ["healing","revenge","compassion"],
    mode: "teen",
    core_meaning: "Getting back at someone might feel like justice in the moment, but it usually just extends the drama. Actually dealing with the hurt — talking it through, letting it go, moving on — gets you out of it much faster.",
    scenario_generic: "A friend betrayed your trust and told people something private. You want to retaliate by exposing something about them. But if you do, the war goes on indefinitely. The faster exit is to be honest about the hurt, decide if the friendship is worth repairing, and move either way.",
    mcq_question: "What does Seneca suggest is the smarter response to being hurt?",
    mcq_options: [
      "Make sure the other person feels what you felt",
      "Focus on your own healing rather than making them pay",
      "Ignore what happened and act like nothing is wrong"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Healing gets you out of the cycle. Revenge just keeps it going.",
    mcq_feedback_incorrect: "Ignoring it isn’t healing. And retaliation extends the damage. Seneca’s move is genuine resolution."
  },

  {
    id: "seneca-wisdom-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 76",
    quote_text: "No man was ever wise by chance.",
    tags: ["wisdom","effort","discipline"],
    mode: "teen",
    core_meaning: "Nobody stumbles into maturity or good judgment. The people who seem wise — who handle pressure well, make decent decisions, stay calm — got there by paying attention and doing the work of actually thinking about their life.",
    scenario_generic: "That one person in your year who always seems to handle drama without getting drawn in? They didn’t just wake up that way. They’ve probably thought a lot about what matters to them and what doesn’t. Wisdom is a skill, and skills take practice.",
    mcq_question: "According to Seneca, how do you actually become wiser?",
    mcq_options: [
      "By getting older and accumulating life experience naturally",
      "By deliberately reflecting and putting in the effort to think better",
      "By finding the right mentor who can share their wisdom with you"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. Wisdom is built intentionally, not passively absorbed.",
    mcq_feedback_incorrect: "Age and mentors help — but Seneca’s point is that wisdom requires your own active effort. It won’t just happen to you."
  },

  {
    id: "seneca-lightness-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 123",
    quote_text: "Nothing is burdensome if taken lightly, and nothing need arouse irritation so long as one doesn’t make it bigger by getting irritated.",
    tags: ["attitude","irritation","perspective"],
    mode: "teen",
    core_meaning: "A lot of things that ruin your mood only have that power because you give it to them. A bad comment, a slow class, a small inconvenience — they’re only as big as you make them by reacting.",
    scenario_generic: "Someone in your group chat says something annoying. You spend the next hour stewing about it, firing back, reading their replies over and over. The original thing was a two on the annoyance scale. Your reaction turned it into a nine. Seneca would ask: did you need to do that?",
    mcq_question: "What does Seneca say is the main thing that makes small annoyances feel huge?",
    mcq_options: [
      "The bad intentions of the people around you",
      "Letting yourself get irritated and feeding the feeling",
      "Not having enough time or space to deal with problems"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. Your reaction is usually what turns a small thing into a big one.",
    mcq_feedback_incorrect: "Seneca isn’t blaming others. He’s saying the irritation you add is what makes things genuinely burdensome."
  },

  {
    id: "seneca-feardeath-teen",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 4",
    quote_text: "He who fears death will never do anything worthy of a living man.",
    tags: ["courage","death","action"],
    mode: "teen",
    core_meaning: "Fear of failure, embarrassment, or rejection can shrink your world down to nothing if you let it. Playing it completely safe to avoid any risk of loss means you never try anything worth trying. Some things are worth the risk.",
    scenario_generic: "You want to audition for something, try out for a team, or put your work out there — but the fear of being rejected or humiliated is keeping you frozen. Seneca’s point: the fear of a bad outcome is keeping you from the good ones. You can’t protect yourself into a life worth having.",
    mcq_question: "What does Seneca say is the result of letting fear of bad outcomes run your decisions?",
    mcq_options: [
      "You stay safer and avoid unnecessary pain",
      "You end up never doing anything that actually matters",
      "You become more thoughtful about the risks you take"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Fear-driven safety doesn’t protect you from a bad life — it creates one.",
    mcq_feedback_incorrect: "Caution has its place, but Seneca’s warning is that excessive fear of loss stops you from ever really living."
  },

  {
    id: "marcus-accept-teen",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 9, Section 42",
    quote_text: "Is a world without shameless people possible? No. So this person you’ve just met is one of them. Get over it.",
    tags: ["acceptance","patience","realism"],
    mode: "teen",
    core_meaning: "There will always be people who are rude, two-faced, or just genuinely difficult to deal with. That’s not a bug in the world — it’s how it is. Burning yourself out being shocked and upset every time you run into one is wasted energy.",
    scenario_generic: "There’s someone in your year who constantly stirs drama, says things behind people’s backs, and seems to get away with it. You keep being outraged by them. Marcus would shrug and say: yes, that person exists. They will always exist. Don’t let their predictable behaviour drain you.",
    mcq_question: "What’s Marcus Aurelius saying about the difficult people in your life?",
    mcq_options: [
      "You should stand up to them and call them out every time",
      "They’re an unavoidable part of life, so stop being continually surprised",
      "Most difficult people will improve if you’re patient enough with them"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. Accept they exist, stop being shocked, and save your energy for what actually matters.",
    mcq_feedback_incorrect: "Marcus isn’t asking you to confront them or wait them out. He’s saying: this is the world. Adjust your expectations accordingly."
  },

  // ========================================
  // MODE: PARENT — 50 cards
  // ========================================
  {
    id: "epictetus-control-parent",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 1",
    quote_text: "Some things are within our control, and some things are not. Within our control are our opinions, desires, and aversions. Not within our control are our bodies, possessions, and reputations.",
    tags: ["control","acceptance","fundamentals"],
    mode: "parent",
    core_meaning: "You can raise your children with care, model good values, and create a stable home. But you cannot control who they become, what they believe, or every choice they make. That distinction is where parental peace begins.",
    scenario_generic: "Your teenager chooses friends you don’t approve of. You’ve shared your concerns, but they’re not budging. You can’t pick their friends for them. What you can do: keep the door open, stay connected, and trust that the values you’ve modelled matter.",
    mcq_question: "As a parent, what does this idea say is within your control?",
    mcq_options: [
      "Your own responses, values, and the home you create",
      "Your child’s choices, friendships, and beliefs",
      "The outcomes of your parenting decisions"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. You shape the environment and model the values. The rest is theirs.",
    mcq_feedback_incorrect: "The hard truth: you control your own behaviour as a parent, not your child’s choices."
  },

  {
    id: "marcus-thoughts-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 16",
    quote_text: "Your mind will take the shape of what you frequently hold in thought, for the human spirit is coloured by such impressions.",
    tags: ["mindset","habits","thoughts"],
    mode: "parent",
    core_meaning: "If you constantly dwell on what your child is doing wrong, your whole relationship becomes defined by correction. If you practise noticing what’s going well, you become a parent your child actually wants to talk to.",
    scenario_generic: "You catch yourself only speaking up when your kid makes a mistake. Over time, they stop sharing things with you. When you start noticing and naming what they’re doing right — even small things — the whole dynamic shifts.",
    mcq_question: "What does this quote suggest about your mindset as a parent?",
    mcq_options: [
      "What you habitually focus on shapes your parenting style",
      "You should avoid thinking about problems altogether",
      "Your child’s behaviour determines your mood"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. A correction-heavy focus creates a correction-heavy relationship. Shift the lens.",
    mcq_feedback_incorrect: "It’s not about avoiding problems — it’s about not letting problems be the only lens you see through."
  },

  {
    id: "seneca-imagination-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 13, Section 4",
    quote_text: "We suffer more often in imagination than in reality.",
    tags: ["anxiety","fear","perception"],
    mode: "parent",
    core_meaning: "Parental worry is almost unlimited. You can build catastrophic futures for your child in seconds. But most of those scenarios never happen. The fear itself is often more exhausting than the actual challenges.",
    scenario_generic: "Your child is late coming home and isn’t answering their phone. Your mind spirals: accident, danger, the worst. Twenty minutes later, they walk in — their phone died. The crisis was entirely in your head, but your body felt every second of it.",
    mcq_question: "What does Seneca’s observation mean for parental worry?",
    mcq_options: [
      "Parents should always prepare for the worst",
      "Most of the suffering from worry is imagined, not real",
      "If you worry enough, you can prevent bad things"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. The worry itself does more damage than most of the things you’re worried about.",
    mcq_feedback_incorrect: "Seneca’s point: imagined catastrophes cause real suffering, even when nothing bad has happened."
  },

  {
    id: "epictetus-judgment-parent",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 5",
    quote_text: "It is not things that disturb us, but our judgments about things. Death is nothing dreadful, or else Socrates would have thought so.",
    tags: ["judgment","perception","reframing"],
    mode: "parent",
    core_meaning: "Your child’s behaviour isn’t the thing that upsets you — it’s the meaning you attach to it. “They’re disrespecting me” or “I’ve failed as a parent” are judgments, not facts. Separate the event from the story.",
    scenario_generic: "Your teenager slams their door after a disagreement. You could interpret it as “they hate me” or “they need space to process big feelings.” The door slam is the same. Your reaction depends entirely on which story you choose.",
    mcq_question: "According to Epictetus, what actually triggers your frustration as a parent?",
    mcq_options: [
      "Your child’s difficult behaviour",
      "Your interpretation of their behaviour",
      "The lack of respect in today’s generation"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the insight. The event is neutral — your judgment is where the upset lives.",
    mcq_feedback_incorrect: "The key Stoic move: it’s never the behaviour alone. It’s the meaning you wrap around it."
  },

  {
    id: "marcus-present-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 36",
    quote_text: "Do not disturb yourself by picturing your life as a whole. Do not assemble in your mind the many troubles which have come or may come. Ask only: what is unbearable in this moment?",
    tags: ["present","anxiety","overwhelm"],
    mode: "parent",
    core_meaning: "Parenting overwhelm comes from trying to solve every stage at once — today’s tantrum, next year’s school choice, their future career. The antidote: just handle what’s in front of you today.",
    scenario_generic: "You’re worried about your child’s grades, their screen time, their social skills, and whether they’ll cope in the real world. That bundle is crushing. But today, the only task is being present at dinner and listening. Start there.",
    mcq_question: "What does Marcus Aurelius suggest when parenting feels overwhelming?",
    mcq_options: [
      "Research every possible solution ahead of time",
      "Focus only on what needs handling right now",
      "Accept that parenting is supposed to feel this hard"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the move. Shrink the frame to today. Most moments are manageable on their own.",
    mcq_feedback_incorrect: "The Stoic approach: don’t bundle every concern together. Just face this one moment."
  },

  {
    id: "seneca-time-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 1, Section 2",
    quote_text: "While we are postponing, life speeds by. Hold every hour in your grasp. Lay hold of today’s task, and you will not need to depend so much upon tomorrow’s.",
    tags: ["time","procrastination","urgency"],
    mode: "parent",
    core_meaning: "Children grow up faster than you expect. The window for bedtime stories, Saturday morning cartoons, and them actually wanting your company is shorter than it feels. Don’t postpone presence.",
    scenario_generic: "You keep saying “we’ll do that trip when things settle down.” But they’re ten now, and soon they’ll be fifteen with their own plans. The walk after school today, the board game tonight — those are the moments. They won’t wait.",
    mcq_question: "How does Seneca’s warning about time apply to parenting?",
    mcq_options: [
      "You should schedule every moment with your children",
      "Childhood passes fast, so be present now rather than deferring",
      "Time pressure makes you a more efficient parent"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. The time with them is finite and moving fast. Don’t wait for ‘someday.’",
    mcq_feedback_incorrect: "It’s not about scheduling — it’s about recognising that these years pass and choosing to show up now."
  },

  {
    id: "marcus-revenge-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 6",
    quote_text: "The best revenge is not to be like your enemy.",
    tags: ["character","revenge","integrity"],
    mode: "parent",
    core_meaning: "When your child pushes your buttons — and they will — the temptation is to match their energy: yelling back, being petty, withdrawing love. But they’re watching. Your calm in the storm teaches more than any lecture.",
    scenario_generic: "Your kid says something hurtful during an argument. Everything in you wants to fire back with something equally sharp. Instead, you pause, take a breath, and respond with firmness but not cruelty. Later, they come to apologise. They saw the difference.",
    mcq_question: "What does this quote mean for how you handle conflict with your child?",
    mcq_options: [
      "Don’t match their worst behaviour with your own",
      "Never show your child that you’re upset",
      "Let them win every argument to keep the peace"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Your self-control in those moments teaches them more than your words ever could.",
    mcq_feedback_incorrect: "It’s not about hiding feelings or avoiding conflict. It’s about not sinking to the level of the behaviour you’re trying to correct."
  },

  {
    id: "epictetus-wish-parent",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 8",
    quote_text: "Do not seek to have everything that happens happen as you wish, but wish for everything to happen as it actually does, and your life will be serene.",
    tags: ["acceptance","serenity","expectations"],
    mode: "parent",
    core_meaning: "Your child will not follow the path you imagined for them. The more rigidly you hold your vision of who they should be, the more friction you’ll both feel. Accepting who they actually are is the foundation of a real relationship.",
    scenario_generic: "You pictured your child becoming a doctor, but they’re passionate about music. Fighting their nature creates resentment on both sides. Letting go of your script and supporting their actual interests doesn’t mean lowering standards — it means raising trust.",
    mcq_question: "How does Epictetus’ advice apply to parenting expectations?",
    mcq_options: [
      "Push harder to keep your child on the path you chose",
      "Accept your child’s actual nature instead of forcing your script",
      "Have no expectations so you’re never disappointed"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the move. A real relationship starts with seeing who they actually are.",
    mcq_feedback_incorrect: "It’s not about having zero expectations. It’s about aligning your hopes with who your child really is."
  },

  {
    id: "seneca-live-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 101, Section 10",
    quote_text: "Begin at once to live, and count each separate day as a separate life.",
    tags: ["present","time","intentionality"],
    mode: "parent",
    core_meaning: "It’s easy to spend your parenting years in survival mode, waiting for “when things get easier.” But today’s messy, exhausting, beautiful chapter is the one you’ll miss. Be in it.",
    scenario_generic: "You’re counting down to when the baby sleeps through the night, then to when they start school, then to when they’re independent. But each stage has moments you’ll never get back. The 3am feed, the hand reaching for yours — those are the life, not the obstacle to it.",
    mcq_question: "What does Seneca’s advice mean for parents in the thick of it?",
    mcq_options: [
      "Plan ahead so you don’t waste any time",
      "Be present in this stage instead of wishing it away",
      "Focus on the long game, not the daily grind"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. This stage — chaotic as it is — is the life. Don’t wish it away.",
    mcq_feedback_incorrect: "Seneca isn’t saying ignore the future. He’s saying don’t miss today while waiting for an easier tomorrow."
  },

  {
    id: "marcus-action-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 10, Section 16",
    quote_text: "Waste no more time arguing about what a good person should be. Be one.",
    tags: ["action","virtue","simplicity"],
    mode: "parent",
    core_meaning: "You can read every parenting book and still feel unsure. But your child doesn’t need a perfect parent — they need a present one. Less theory, more showing up. They learn from what you do, not what you know.",
    scenario_generic: "You’ve listened to six parenting podcasts this week but still lost your temper at breakfast. Marcus would say: stop studying the ideal and start practising it in small, imperfect ways. Apologise when you get it wrong. That’s the teaching.",
    mcq_question: "What is Marcus Aurelius telling parents to do?",
    mcq_options: [
      "Stop trying to be perfect and just show up with integrity",
      "Study parenting techniques more thoroughly",
      "Set strict rules so children know what’s expected"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s it. Your kids learn from your actions, not your research.",
    mcq_feedback_incorrect: "Marcus is pushing for action over theory. Show your child what a good person looks like by being one."
  },

  {
    id: "epictetus-foolish-parent",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 13",
    quote_text: "If you want to improve, be content to be thought foolish and stupid.",
    tags: ["growth","ego","humility"],
    mode: "parent",
    core_meaning: "Parenting constantly humbles you — you’ll read the wrong books, give the wrong advice, and get it wrong in front of your own kids. The parents who grow are the ones who can admit mistakes rather than defend their authority. Modelling fallibility is actually a strength.",
    scenario_generic: "You snap at your child and later realise you overreacted. The instinct is to move on without saying anything — you’re the parent, after all. But going back and saying “I got that wrong, I’m sorry” teaches them more about growth and integrity than any lecture ever could.",
    mcq_question: "How does Epictetus’ advice apply when you make a mistake as a parent?",
    mcq_options: [
      "Acknowledge it openly rather than protecting your image",
      "Focus on explaining your reasoning so they understand",
      "Move on quickly so it doesn’t affect your authority"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Admitting mistakes to your kids isn’t weakness — it’s the best kind of modelling.",
    mcq_feedback_incorrect: "Epictetus’ point is about letting go of image. Owning your errors in front of your child is exactly that."
  },

  {
    id: "epictetus-dinner-parent",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 15",
    quote_text: "Remember that you must behave in life as at a dinner party.",
    tags: ["patience","moderation","manners"],
    mode: "parent",
    core_meaning: "Parenting has a rhythm you can’t force. Stages arrive and pass like dishes at a table — the toddler years, the teenage years, closeness and distance. Trying to hold on when a stage has passed, or rushing the next one, creates tension. Accept each phase as it comes.",
    scenario_generic: "Your child is pulling away and wants more independence. Your instinct is to tighten your grip — more questions, more rules. But Epictetus would say: this dish has passed. Don’t reach for it. Let this stage come to you on its own terms and meet it with grace.",
    mcq_question: "How does the dinner party idea apply to watching your child grow and change?",
    mcq_options: [
      "Accept each phase as it comes rather than clinging or rushing",
      "Guide each stage carefully so nothing goes to waste",
      "Set the pace yourself so transitions happen smoothly"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Each stage passes naturally — clinging or forcing only creates friction.",
    mcq_feedback_incorrect: "The key insight is about letting go — accepting each stage as it naturally arrives and departs."
  },

  {
    id: "epictetus-freewill-parent",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 1",
    quote_text: "No one can rob us of our free will.",
    tags: ["freedom","will","autonomy"],
    mode: "parent",
    core_meaning: "Parenting can feel like you’re constantly reacting — to tantrums, to crises, to the needs of others. But even in those moments, your will is intact. You always have a choice in how you respond. That small gap between stimulus and response is where your character lives.",
    scenario_generic: "The house is chaos: kids fighting, dinner burning, a work message you haven’t answered. Everything demands you right now. You feel like you have no choice but to explode. But you do have a choice — take one breath, prioritise one thing, respond instead of react. That gap is always there.",
    mcq_question: "What does this idea offer a parent who feels completely overwhelmed?",
    mcq_options: [
      "A reminder that your response is still your own choice",
      "Reassurance that the chaos will eventually end",
      "Permission to step back from your responsibilities temporarily"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. In the middle of the storm, your will is still yours. That’s where your power sits.",
    mcq_feedback_incorrect: "It’s not about the situation changing — it’s about recognising that your response is always a choice."
  },

  {
    id: "epictetus-demand-parent",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 51",
    quote_text: "How long are you going to wait before you demand the best for yourself?",
    tags: ["urgency","self-worth","action"],
    mode: "parent",
    core_meaning: "Parents often put themselves last — indefinitely. Your needs, your growth, your wellbeing get pushed to “when the kids are older.” But neglecting yourself doesn’t make you a better parent. Demanding the best for yourself is not selfish — it’s sustainable.",
    scenario_generic: "You haven’t exercised, seen friends properly, or pursued anything that’s purely yours in months. You keep saying the time will come. But your kids are watching how you live. A parent who models self-respect and personal growth teaches that lesson better than any conversation.",
    mcq_question: "How does Epictetus’ challenge apply to parents who constantly deprioritise themselves?",
    mcq_options: [
      "It suggests you should put your needs ahead of your children’s",
      "It reminds you to set higher expectations for your children",
      "It asks how long you’ll keep deferring your own growth and wellbeing"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. You can’t sustainably give from an empty well. Demanding the best for yourself matters.",
    mcq_feedback_incorrect: "It’s not about your children’s expectations or putting yourself first — it’s about stopping the indefinite deferral of your own growth."
  },

  {
    id: "epictetus-best-parent",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 1",
    quote_text: "Make the best of what is in our power, and take the rest as it naturally happens.",
    tags: ["acceptance","effort","balance"],
    mode: "parent",
    core_meaning: "You can give your children a loving home, good values, and consistent support. You cannot guarantee their choices, their happiness, or their outcomes. Do everything within your power as a parent — and then practise the hard art of letting go of what isn’t yours to control.",
    scenario_generic: "You’ve helped your child prepare for a school assessment — practising together, building their confidence. On the day, they freeze up and don’t do their best. You’ve done everything in your power. The result isn’t a reflection of your failure. Offer comfort and move on.",
    mcq_question: "As a parent, what is “within your power” according to this idea?",
    mcq_options: [
      "Ensuring your children succeed at the things they attempt",
      "Your own behaviour, support, and the environment you create",
      "Shielding your children from failure and disappointment"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Exactly. Your effort, love, and presence are yours. Their outcomes are not.",
    mcq_feedback_incorrect: "You can’t guarantee your children’s results or shield them from all difficulty. Your power is in how you show up."
  },

  {
    id: "epictetus-identity-parent",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 3, Chapter 23",
    quote_text: "First say to yourself what you would be; and then do what you have to do.",
    tags: ["identity","action","purpose"],
    mode: "parent",
    core_meaning: "The best parenting decisions come from a clear sense of the parent you’re trying to be. Not the perfect parent — but the specific qualities you want to embody: patient, present, honest, calm. When that’s defined, the daily choices get easier to navigate.",
    scenario_generic: "You’re unsure whether to intervene in a conflict between your kids or let them work it out. Before deciding, ask: what kind of parent am I trying to be in this moment? A parent who builds independence might step back. That clarity makes the choice easier.",
    mcq_question: "How does “what you would be” guide parenting decisions?",
    mcq_options: [
      "It gives you a fixed rulebook for every situation",
      "It encourages you to copy the parenting style you admire most",
      "It connects your daily choices to the kind of parent you’re actively becoming"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. When identity is clear, individual decisions become easier to make with confidence.",
    mcq_feedback_incorrect: "It’s not a rulebook or a template to copy — it’s your own internal compass, grounded in who you’re becoming."
  },

  {
    id: "epictetus-freedom-parent",
    author: "Epictetus",
    source_work: "Fragment 35 (attributed; from Stobaeus)",
    source_reference: "Fragment 35",
    quote_text: "No man is free who is not master of himself.",
    tags: ["freedom","discipline","self-mastery"],
    mode: "parent",
    core_meaning: "Parenting tests your self-mastery constantly. You can’t be a calming presence for your children if you’re enslaved to your own stress, anger, or anxiety. The work of self-mastery isn’t separate from parenting — it’s central to it.",
    scenario_generic: "Your child does something that triggers a disproportionate reaction — maybe it reminds you of your own childhood, or your stress from work spills over. In that moment, you’re not responding to your child; you’re being driven by something else. Recognising that is the first step to mastery.",
    mcq_question: "Why does Epictetus’ idea about self-mastery matter so much for parents?",
    mcq_options: [
      "Because children only respect parents who are strict",
      "Because showing emotion makes you seem less authoritative",
      "Because you can’t guide others well if your own reactions are running you"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. Your self-mastery — or lack of it — shapes the entire atmosphere your children grow up in.",
    mcq_feedback_incorrect: "It’s not about strictness or hiding emotion. It’s about being genuinely in charge of your own responses."
  },

  {
    id: "epictetus-will-parent",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 1",
    quote_text: "You may fetter my leg, but my will not even Zeus himself can overpower.",
    tags: ["willpower","resilience","inner-freedom"],
    mode: "parent",
    core_meaning: "Parenting can feel like you’re hemmed in on all sides — finances, your child’s needs, a difficult co-parent, exhaustion. But your inner disposition stays yours. How you meet each moment — with patience or resentment, presence or distraction — is a choice no one makes for you.",
    scenario_generic: "Co-parenting is difficult and the other parent is being uncooperative. You feel stuck, like your hands are tied. But you can’t control their behaviour. What you can control is how you show up for your child in your own time — the quality of attention, the steadiness of your presence. That can’t be taken.",
    mcq_question: "What does this quote offer a parent who feels trapped by their circumstances?",
    mcq_options: [
      "A reminder that your inner will and response remain entirely yours",
      "Hope that circumstances will eventually change for the better",
      "The suggestion that you need help before you can act freely"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Right. Even in constrained circumstances, your inner response belongs to you.",
    mcq_feedback_incorrect: "It’s not about waiting for change or getting help first. It’s about what remains yours regardless."
  },

  {
    id: "epictetus-anger-parent",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 1, Chapter 18",
    quote_text: "Any person capable of angering you becomes your master.",
    tags: ["anger","control","power"],
    mode: "parent",
    core_meaning: "Children are remarkably good at finding parental triggers. When your child’s behaviour can reliably send you into fury, they’ve inadvertently become your master. Reclaiming your calm isn’t about suppressing feelings — it’s about not surrendering your composure on demand.",
    scenario_generic: "Your child knows exactly how to provoke you — the eye-roll, the tone of voice, the delay when you’ve asked three times. When those buttons get pushed and you explode, the dynamic shifts. They’ve gotten a reaction, and you’ve lost the ground. The pause before the response is where your authority actually lives.",
    mcq_question: "When your child reliably triggers your anger, what dynamic is Epictetus describing?",
    mcq_options: [
      "Your child is being deliberately disrespectful and needs firmer boundaries",
      "They have unintentionally gained control over your emotional state",
      "You need more parental support and self-care"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. When they can reliably trigger you, the emotional control has shifted. Reclaiming your pause reclaims your authority.",
    mcq_feedback_incorrect: "It’s not primarily about boundaries or burnout — it’s about who’s in control of your emotional state."
  },

  {
    id: "epictetus-wealth-parent",
    author: "Epictetus",
    source_work: "Discourses",
    source_reference: "Book 4, Chapter 10 (paraphrase)",
    quote_text: "Wealth consists not in having great possessions, but in having few wants.",
    tags: ["contentment","desire","simplicity"],
    mode: "parent",
    core_meaning: "It’s natural to want to give your children everything — every opportunity, every advantage. But teaching them to want less, to find satisfaction in simple things, is a more durable gift than filling their lives with possessions or options.",
    scenario_generic: "Your child is unhappy because they don’t have what their friends have. The instinct is to provide it. But modelling contentment — “we have enough, and enough is good” — teaches them something that a new purchase never can. They’re watching how you relate to having and wanting.",
    mcq_question: "What gift does Epictetus’ idea suggest parents could give their children?",
    mcq_options: [
      "The skills to earn what they want themselves",
      "A clear understanding of financial priorities",
      "The habit of finding contentment rather than chasing more"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. A child who can find contentment in what they have is more resilient than one who always needs more.",
    mcq_feedback_incorrect: "It’s not about financial skills or earning — it’s about modelling and teaching the practice of wanting less."
  },

  {
    id: "epictetus-fear-parent",
    author: "Epictetus",
    source_work: "Enchiridion",
    source_reference: "Chapter 5 (alt translation)",
    quote_text: "What really frightens and dismays us is not external events but the way in which we think about them.",
    tags: ["fear","perception","reframing"],
    mode: "parent",
    core_meaning: "Parental fear is often mind-generated, not event-driven. Your child does something unexpected and your brain writes the worst-case story. Practising the pause — asking whether your interpretation is accurate — spares you and your child a lot of unnecessary distress.",
    scenario_generic: "Your child comes home unusually quiet. Your brain jumps: something terrible has happened, they’re struggling, you’ve missed something. You confront them anxiously and they pull away further. Turns out they just had a tiring day. The distress was your interpretation running ahead of the facts.",
    mcq_question: "How does this idea help parents manage the fear and anxiety that come with raising children?",
    mcq_options: [
      "By removing the need to worry about children altogether",
      "By pointing to interpretation as the real source of distress, not the event",
      "By suggesting that most parental fears are well-founded"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. The story you write about what’s happening is usually more frightening than reality. Question the story first.",
    mcq_feedback_incorrect: "It’s not about eliminating worry or validating it — it’s about locating the fear in interpretation and questioning that."
  },

  {
    id: "marcus-obstacle-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 20",
    quote_text: "The impediment to action advances action. What stands in the way becomes the way.",
    tags: ["obstacles","growth","resilience"],
    mode: "parent",
    core_meaning: "Parenting is filled with friction — tantrums, setbacks, stages that feel impossible. But each one is an opportunity to practise patience, creativity, and presence. The hardest parenting moments are often the ones that shape both you and your child the most.",
    scenario_generic: "Your child is going through a brutal phase — refusing sleep, refusing food, refusing to cooperate with anything. It’s exhausting. But this resistance is teaching you patience you didn’t know you had, and teaching your child that you don’t leave when things get hard. That’s not an obstacle. That’s the work.",
    mcq_question: "How does Marcus Aurelius’ idea apply to the most difficult phases of parenting?",
    mcq_options: [
      "The hardest phases are where the most growth — yours and theirs — happens",
      "Difficult phases mean you need more outside support",
      "Consistency matters more than how you respond to obstacles"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. The hardest phase is the work. It’s not in the way of parenting — it is the parenting.",
    mcq_feedback_incorrect: "Support and consistency matter, but the deeper insight is that the hard moments are where real growth happens for everyone."
  },

  {
    id: "marcus-power-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 8",
    quote_text: "You have power over your mind, not outside events. Realise this, and you will find strength.",
    tags: ["control","mindset","strength"],
    mode: "parent",
    core_meaning: "You can’t control your child’s struggles, the world they’re growing up in, or half the things that affect their wellbeing. But you do have power over your own mind — how you interpret what you see, how you respond under pressure. That inner work is your most real contribution.",
    scenario_generic: "Your child is going through something you can’t fix — social pain, a loss, a failure. You feel helpless. But the strength Marcus describes isn’t about solving it. It’s about showing up with a steady mind instead of panic or despair. That calm is a resource your child can draw on.",
    mcq_question: "What does this idea offer a parent who feels powerless over their child’s circumstances?",
    mcq_options: [
      "The strength that comes from mastering their own mind and response",
      "The reminder that they should seek more practical solutions",
      "Permission to accept the limits of parental influence"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. When you can’t change the situation, the power over your own mind is still real and it matters.",
    mcq_feedback_incorrect: "It’s not about finding new solutions or accepting helplessness — it’s about the genuine strength that comes from owning your mental response."
  },

  {
    id: "marcus-mortality-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 2, Section 11",
    quote_text: "You could leave life right now. Let that determine what you do and say and think.",
    tags: ["mortality","urgency","presence"],
    mode: "parent",
    core_meaning: "As a parent, the brevity of life applies in two directions: your own and your child’s childhood. Both are shorter than they feel. This thought isn’t meant to create fear — it’s meant to dissolve the trivial so the real moments have room to matter.",
    scenario_generic: "You’re about to lose your temper over a spilled drink, a mess, a minor inconvenience. Hold Marcus’ thought for just a second: this is one of the days you have with them at this age. Would you trade that moment for anger over a spill? The thought reorders everything.",
    mcq_question: "How can a parent use Marcus Aurelius’ reminder about mortality?",
    mcq_options: [
      "To become less attached to outcomes and more spontaneous",
      "To filter petty frustrations and focus on what actually matters with their kids",
      "To prepare themselves emotionally for the challenges ahead"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. The mortality lens clears the noise instantly. What’s actually worth your energy in these finite days with them?",
    mcq_feedback_incorrect: "It’s not about spontaneity or emotional preparation. It’s a daily filter that helps you choose the real over the trivial."
  },

  {
    id: "marcus-gratitude-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 2, Section 4",
    quote_text: "When you arise in the morning, think of what a privilege it is to be alive, to think, to enjoy, to love.",
    tags: ["gratitude","morning","perspective"],
    mode: "parent",
    core_meaning: "Parenting mornings can feel like a drill: breakfasts, lunches, arguments about shoes. Marcus is nudging you to reclaim the first moment of the day as your own — to notice the people in your home and the fact that you get to be there for them.",
    scenario_generic: "Before the kids wake up and the chaos starts, you have one quiet minute. Instead of doom-scrolling or jumping straight into tasks, you sit with your coffee and think: these people exist and I love them. That small act of noticing can be the difference between surviving the morning and actually being present for it.",
    mcq_question: "How can Marcus’ morning habit help a parent?",
    mcq_options: [
      "By pausing to appreciate what you have before the day’s demands take over",
      "By creating more structure before the household wakes up",
      "By setting a productivity intention for the day"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s it. One quiet moment of gratitude before the chaos is a small but powerful reset.",
    mcq_feedback_incorrect: "The quote is about noticing the privilege of life and love — a moment of appreciation before the day consumes you."
  },

  {
    id: "marcus-happiness-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 7, Section 67",
    quote_text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    tags: ["happiness","simplicity","mindset"],
    mode: "parent",
    core_meaning: "It’s tempting to believe family life will feel better once the kids sleep through the night, once the mortgage eases, once you get a holiday. But Marcus is saying contentment isn’t in those milestones — it’s in how you’re choosing to see the life you already have.",
    scenario_generic: "You’re exhausted, the house is a mess, and you haven’t had five minutes to yourself all day. It would be easy to think: I’ll be happy when things settle down. Marcus is gently pushing back: very little is actually needed. The chaos around you doesn’t have to determine how you feel inside it.",
    mcq_question: "What does this quote suggest about finding contentment as a parent?",
    mcq_options: [
      "Very little outside you actually determines your happiness — it’s how you think",
      "Contentment comes from solving the practical problems first",
      "You need regular time alone to reset your mindset"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s the insight. Contentment isn’t waiting at the end of a checklist. It’s a perspective you choose.",
    mcq_feedback_incorrect: "Marcus is pointing inward: the way you think about your life is the real lever, not the circumstances."
  },

  {
    id: "marcus-fate-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 39",
    quote_text: "Accept the things to which fate binds you, and love the people with whom fate brings you together.",
    tags: ["acceptance","love","community"],
    mode: "parent",
    core_meaning: "You didn’t fully choose the child who arrived — their temperament, their quirks, their challenges. Marcus is saying: your job isn’t to fix them into someone you imagined. It’s to accept who they actually are and love them from there.",
    scenario_generic: "Your child is nothing like you expected — quieter, louder, more anxious, more defiant. You keep trying to nudge them toward what you pictured. But the real relationship starts when you stop pushing against who they are and start building on who they actually are. Acceptance is the foundation of love in action.",
    mcq_question: "How does this quote apply to parenting the child you actually have?",
    mcq_options: [
      "Detach emotionally so you can parent more objectively",
      "Work harder to guide them toward the person you envisioned",
      "Accept who your child actually is and love them from there"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s the heart of it. Acceptance isn’t giving up — it’s the starting point of genuine love.",
    mcq_feedback_incorrect: "Marcus isn’t suggesting detachment — he’s calling for real acceptance of who fate gave you, and love from there."
  },

  {
    id: "marcus-future-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 7, Section 8",
    quote_text: "Never let the future disturb you. You will meet it with the same weapons of reason which today arm you against the present.",
    tags: ["future","anxiety","confidence"],
    mode: "parent",
    core_meaning: "Parental anxiety loves to project forward: what if they struggle later, make bad choices as a teen, can’t cope as an adult? The parent you are today is the same parent you’ll be then. You’re already building the skills you’ll need.",
    scenario_generic: "You lie awake worrying about your five-year-old’s teenage years. What if they rebel badly? What if you don’t know how to handle it? But the you who faces that moment will have ten more years of parenting experience, self-awareness, and relationship-building behind you. Trust the accumulation.",
    mcq_question: "What does Marcus’ idea mean for a parent worried about future challenges with their child?",
    mcq_options: [
      "Read as much as possible now to prepare for every scenario",
      "Trust that your capacity to handle things will grow with you into the future",
      "Focus on preventing problems before they happen"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s it. The parent you’re becoming today will be there for those future challenges too.",
    mcq_feedback_incorrect: "Marcus isn’t about prevention or preparation plans — he’s saying your reason and resilience come with you. Trust them."
  },

  {
    id: "marcus-estimate-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 47",
    quote_text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it.",
    tags: ["perception","pain","reframing"],
    mode: "parent",
    core_meaning: "When your child does something frustrating, the upset you feel isn’t automatic — it’s built from the meaning you assign. “They don’t respect me” or “I’ve failed” are estimates, not facts. Catching that gap gives you room to respond rather than react.",
    scenario_generic: "Your child rolls their eyes and walks away mid-conversation. Your instinct says: “disrespect.” But is that the only reading? They might be overwhelmed, embarrassed, or avoiding a feeling they don’t have words for yet. Your estimate shapes your reaction. A different estimate can open a door instead of slamming one.",
    mcq_question: "What does this quote suggest when a child’s behaviour upsets you?",
    mcq_options: [
      "Address the behaviour immediately before it becomes a pattern",
      "Examine your interpretation of the behaviour — it may not be the only reading",
      "Trust your instincts about what their behaviour means"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the move. Pause on the estimate before reacting to it — you might be reading the situation wrong.",
    mcq_feedback_incorrect: "Marcus is asking you to interrogate your estimate first. The interpretation shapes your response more than the behaviour does."
  },

  {
    id: "marcus-anger-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 11, Section 18",
    quote_text: "How much more grievous are the consequences of anger than the causes of it.",
    tags: ["anger","consequences","restraint"],
    mode: "parent",
    core_meaning: "Children test limits constantly. But when you lose it over a spilled drink or a slammed door, the rupture in the relationship takes far longer to heal than the original offence. The consequence almost always outweighs the cause.",
    scenario_generic: "Your child asks the same question for the fifth time right as you’re trying to concentrate. You snap loudly. They go quiet. Now you’re managing your guilt, they’re managing their hurt, and the rest of the evening is tense. The question was irritating. The snapping costs more. Marcus is asking you to do the maths before you react.",
    mcq_question: "What does Marcus’ observation mean for moments when parenting frustration builds?",
    mcq_options: [
      "The damage from losing your temper usually exceeds the original cause",
      "Suppress your feelings to avoid upsetting your child",
      "Set clearer boundaries so small things don’t build up"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s the insight. The spillover from anger costs more than the irritation that caused it. Pause before the reaction.",
    mcq_feedback_incorrect: "It’s not about suppressing feelings — it’s about recognising the consequences of anger are almost always bigger than the cause."
  },

  {
    id: "marcus-prepare-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 2, Section 1",
    quote_text: "When you wake up in the morning, tell yourself: the people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly.",
    tags: ["preparation","patience","human-nature"],
    mode: "parent",
    core_meaning: "Children will be irrational, unfair, dramatic, and exhausting — often before breakfast. That’s not failure; that’s development. If you expect easy and get chaos, you’ll feel like something is wrong. If you expect chaos and get moments of ease, you’ll feel grateful.",
    scenario_generic: "You wake up hoping for a smooth school morning. Within ten minutes there’s a meltdown about the wrong cup, a refusal to put shoes on, and someone crying for a reason no one can explain. Marcus’ approach: expect this. Build it into your morning plan. Then when the chaos comes, you’re already in the right gear for it.",
    mcq_question: "How does Marcus’ morning preparation habit apply to parenting?",
    mcq_options: [
      "By lowering your standards so you’re never disappointed",
      "By mentally expecting difficulty so it doesn’t catch you off guard",
      "By planning punishments in advance for likely misbehaviour"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "Right. When you expect the chaos, you can meet it calmly instead of with frustration.",
    mcq_feedback_incorrect: "It’s not about lowering standards or planning punishments. It’s about being mentally ready so the inevitable doesn’t knock you over."
  },

  {
    id: "marcus-clarity-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 5, Section 9",
    quote_text: "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
    tags: ["clarity","calm","truth"],
    mode: "parent",
    core_meaning: "Parenting tests your ability to stay steady and see straight at the same time. When your child comes home with a problem, your anxiety can turn a manageable situation into an emergency. Settle first, then assess. That sequence matters.",
    scenario_generic: "Your child tells you something worrying — a falling-out with friends, a low grade, something that happened online. Everything in you wants to jump into fix mode. But Marcus’ first rule is to keep your own spirit untroubled. From that place, you can actually see the situation as it is — not amplified by your fear.",
    mcq_question: "What does Marcus’ two-rule sequence mean for a parent responding to a child’s problem?",
    mcq_options: [
      "Steady your own response first, then assess the situation clearly",
      "Act quickly before the situation gets worse",
      "Gather as much information as possible before reacting"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s the sequence. Your calm is the prerequisite for seeing what’s actually needed.",
    mcq_feedback_incorrect: "Speed and information aren’t the first steps. An untroubled spirit comes first — then clear sight."
  },

  {
    id: "marcus-urgency-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 4, Section 17",
    quote_text: "Do not act as if you were going to live ten thousand years. Death hangs over you.",
    tags: ["mortality","urgency","action"],
    mode: "parent",
    core_meaning: "Not just your time — your children’s childhoods are finite too. Each stage passes and doesn’t come back. Marcus’ reminder about mortality isn’t morbid; it’s a call to stop acting like you have unlimited tomorrows with the people you love most.",
    scenario_generic: "You keep meaning to do the thing your kid keeps asking for — the weekend away, the hour of your undivided attention, the conversation you’ve been meaning to have. You assume you’ll get to it when things ease up. But they’re growing up while you wait for the right moment. This moment is the right moment.",
    mcq_question: "How does Marcus’ reminder about mortality apply to a busy parent?",
    mcq_options: [
      "Prioritise work now so you can give more time later",
      "Spend more quality time with your partner, not just your kids",
      "Stop acting like presence with your children can always wait until later"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Right. The time with your children is finite and moving. Don’t defer presence.",
    mcq_feedback_incorrect: "Marcus isn’t about work-life balance theory. He’s pointing out that this time is limited — stop assuming there’s always a later."
  },

  {
    id: "marcus-injury-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 4, Section 7",
    quote_text: "Reject your sense of injury and the injury itself disappears.",
    tags: ["perception","forgiveness","letting-go"],
    mode: "parent",
    core_meaning: "Children say stinging things in the heat of an argument. The injury only continues if you keep carrying it. Setting it down doesn’t mean it was acceptable — it means choosing your peace over nursing a wound.",
    scenario_generic: "Your teenager says something cutting in an argument — “I hate you” or “you never understand me.” It lands hard. But holding that injury changes how you show up for the next week of parenting. They almost certainly don’t mean it the way it sounded. You get to choose whether to carry it or put it down.",
    mcq_question: "What does Marcus’ idea mean when a child says something hurtful?",
    mcq_options: [
      "Choose not to keep the wound alive — the injury ends when you stop holding it",
      "Let them know the impact of their words so they can apologise",
      "Give yourself time before responding so the emotion passes"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "That’s the move. Set the injury down — not to excuse the behaviour, but to free yourself from carrying it.",
    mcq_feedback_incorrect: "It’s not about communication or waiting — it’s about recognising that the injury persists only as long as you keep it."
  },

  {
    id: "marcus-detachment-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 8, Section 33",
    quote_text: "Receive without pride, let go without attachment.",
    tags: ["detachment","humility","balance"],
    mode: "parent",
    core_meaning: "Parenting asks for both constantly: celebrate your child’s wins without claiming them, and let them grow away without clinging. Both require the same discipline — not letting what you gain or lose define you.",
    scenario_generic: "Your child does something remarkable — a performance, an award, a milestone. It’s tempting to let their success become your pride. And when they need you less, or choose differently than you hoped, it’s hard not to grieve it. Marcus is asking for the same poise in both directions: hold their journey lightly.",
    mcq_question: "How does this idea apply to a parent navigating their child’s growth?",
    mcq_options: [
      "Stay emotionally distant to protect yourself from disappointment",
      "Celebrate their wins without owning them, and release them as they grow",
      "Let your child lead so you don’t project your expectations onto them"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the balance. Their wins aren’t yours to own. Their growing away isn’t yours to resist.",
    mcq_feedback_incorrect: "It’s not about distance or stepping back entirely. It’s about holding both the good and the hard parts of parenting without gripping either."
  },

  {
    id: "marcus-change-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 6, Section 21",
    quote_text: "If someone is able to show me that what I think or do is not right, I will happily change.",
    tags: ["humility","growth","open-mindedness"],
    mode: "parent",
    core_meaning: "Parenting involves being wrong — about how to handle a situation, about what your child needs, about the call you made. The parents who model this quote openly show their children that changing your mind when you’re shown a better way is what wisdom looks like in practice.",
    scenario_generic: "You make a call your teenager pushes back on, and they make a fair point you hadn’t considered. You could double down to maintain authority. Or you could say: you’re right, I’m changing my mind. That second response teaches them something about intellectual honesty that no lecture could.",
    mcq_question: "What does Marcus’ openness to being corrected model for children?",
    mcq_options: [
      "That changing your mind when shown a better way is strength, not weakness",
      "That authority figures can’t always be trusted",
      "That rules should always be flexible depending on the situation"
    ],
    mcq_correct_index: 0,
    mcq_feedback_correct: "Exactly. When you model this openly, you teach your child what intellectual courage actually looks like.",
    mcq_feedback_incorrect: "It’s not about flexible rules — it’s about showing that updating your view when evidence demands it is what good thinking looks like."
  },

  {
    id: "seneca-luck-parent",
    author: "Seneca",
    source_work: "De Beneficiis",
    source_reference: "attributed",
    quote_text: "Luck is what happens when preparation meets opportunity.",
    tags: ["preparation","opportunity","effort"],
    mode: "parent",
    core_meaning: "As a parent, you can’t hand your child luck. But you can help them develop the habits, skills, and resilience that mean when an opportunity does arrive, they’re ready to take it. That’s the best version of ‘setting them up for success.’",
    scenario_generic: "You watch another child get a scholarship, a role, or a break and feel a pang of envy on your own child’s behalf. But the child who ‘got lucky’ was probably building the habit of preparation quietly for years. What you can give your child isn’t the opportunity — it’s the readiness for when it comes.",
    mcq_question: "How can parents apply Seneca’s idea about luck to raising their children?",
    mcq_options: [
      "Create as many opportunities as possible for your child to succeed",
      "Focus on your child’s preparation and readiness, not chasing outcomes",
      "Teach them that hard work guarantees results"
    ],
    mcq_correct_index: 1,
    mcq_feedback_correct: "That’s the focus. You can’t manufacture the opportunity. But you can raise someone who’s ready for it.",
    mcq_feedback_incorrect: "Creating opportunities is useful, but Seneca’s point is that readiness is what makes them count. Build that first."
  },

  {
    id: "seneca-waste-parent",
    author: "Seneca",
    source_work: "On the Shortness of Life",
    source_reference: "Section 1",
    quote_text: "It is not that we have a short time to live, but that we waste a lot of it.",
    tags: ["time","waste","intentionality"],
    mode: "parent",
    core_meaning: "Parenting years feel endless in the moment and shockingly brief in hindsight. The time isn’t the problem — it’s the hours spent distracted, stressed about things that won’t matter, or deferring presence for a calmer day that never quite arrives.",
    scenario_generic: "You’re physically home but mentally elsewhere — scrolling through work emails while your child talks at you. It’s not that there’s no time. It’s that the time keeps slipping by unoccupied. Ten minutes of full attention beats an hour of half-presence.",
    mcq_question: "How does Seneca’s idea apply to your time as a parent?",
    mcq_options: [
      "Parenting leaves no room for personal time",
      "You need to plan every moment to avoid wasting it",
      "The years are there — what matters is how fully you use them"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. The time exists. The question is whether you’re actually in it.",
    mcq_feedback_incorrect: "It’s not about scheduling tighter. It’s about noticing when you’re drifting away from what actually matters."
  },

  {
    id: "seneca-expectancy-parent",
    author: "Seneca",
    source_work: "On the Shortness of Life",
    source_reference: "Section 9",
    quote_text: "The greatest obstacle to living is expectancy, which hangs upon tomorrow and loses today.",
    tags: ["present","expectations","living"],
    mode: "parent",
    core_meaning: "It’s easy to spend the parenting years waiting for a calmer phase — when the baby sleeps, when the toddler tantrums stop, when the teenager settles down. But each waiting phase costs you the one you’re actually in.",
    scenario_generic: "You catch yourself thinking “it’ll be easier when they’re a bit older” — again. Meanwhile, your six-year-old is asking you to come outside and play. The phase you’re waiting to escape is the one they’ll remember. Step into it.",
    mcq_question: "How does Seneca’s idea challenge the “it’ll be better when...” mindset in parenting?",
    mcq_options: [
      "It suggests you should stop having expectations for your children",
      "It tells you to plan further ahead so you’re never caught off guard",
      "It warns that always waiting for a better phase means missing the one you’re in"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. The phase you’re waiting through is the life. Be in it.",
    mcq_feedback_incorrect: "The point isn’t about planning — it’s about recognising that waiting for tomorrow costs you today."
  },

  {
    id: "seneca-company-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 7, Section 8",
    quote_text: "Associate with people who are likely to improve you.",
    tags: ["influence","friendship","growth"],
    mode: "parent",
    core_meaning: "This applies both to you and your kids. You model the quality of relationships you keep. If your children see you surrounded by people who lift you up, challenge you, and act with integrity, they learn that’s the standard worth aiming for.",
    scenario_generic: "Your child is drawn to a friend who always seems to drag them toward worse choices. Rather than banning the friendship, you start having honest conversations about what a good friend actually does — and whether this one fits that description. The goal is to help them build their own radar.",
    mcq_question: "How does Seneca’s advice apply to parenting?",
    mcq_options: [
      "Parents should control which friends their children see",
      "Children will naturally gravitate toward the right people without guidance",
      "Both you and your children benefit from relationships that bring out better versions of yourselves"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. Model quality relationships yourself, and help your child learn to value theirs.",
    mcq_feedback_incorrect: "It’s not about control. It’s about modelling and cultivating discernment in your child."
  },

  {
    id: "seneca-direction-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 71, Section 3",
    quote_text: "If a man knows not to which port he sails, no wind is favourable.",
    tags: ["purpose","direction","clarity"],
    mode: "parent",
    core_meaning: "Parenting without a sense of what you actually want to cultivate in your child leads to reactive rather than intentional parenting. What values, qualities, and capabilities do you genuinely want to build in them? That answer shapes every smaller decision.",
    scenario_generic: "You’re making a dozen parenting decisions each week — screen time rules, which activities to push, how to handle conflict — but they feel inconsistent and exhausting. A clearer sense of your actual goal as a parent makes each individual call easier and more coherent.",
    mcq_question: "How does Seneca’s metaphor apply to your role as a parent?",
    mcq_options: [
      "You need to plan every stage of your child’s development",
      "The best parents trust their instincts rather than planning ahead",
      "Knowing what you’re trying to raise makes daily parenting decisions clearer"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Exactly. Clarity about the destination makes the daily choices easier to navigate.",
    mcq_feedback_incorrect: "It’s not about rigid planning or pure instinct — it’s about having a guiding sense of what you’re working toward."
  },

  {
    id: "seneca-present-parent",
    author: "Seneca",
    source_work: "De Vita Beata",
    source_reference: "Attributed",
    quote_text: "True happiness is to enjoy the present, without anxious dependence upon the future.",
    tags: ["happiness","present","anxiety"],
    mode: "parent",
    core_meaning: "Parental anxiety about the future — will they be okay, are they behind, did we make the right choices — can crowd out the actual joy of being with your child today. You can care about their future without letting that worry consume the present.",
    scenario_generic: "Your child is laughing at the dinner table, telling you something silly. But half your mind is on their upcoming test, whether they’re developing fast enough, and what their teenage years will look like. You’re missing the laugh. That’s what Seneca is pointing at.",
    mcq_question: "How does Seneca’s idea about happiness apply to parenting?",
    mcq_options: [
      "Stop worrying about your children’s future entirely",
      "Happiness as a parent depends on raising successful children",
      "Don’t let anxiety about what’s ahead rob you of the good moments you have now"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Exactly. Care about their future, but don’t let that care swallow today.",
    mcq_feedback_incorrect: "It’s not about abandoning concern for the future. It’s about not letting it colonise every good moment you have right now."
  },

  {
    id: "seneca-premature-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 13, paraphrase",
    quote_text: "He suffers more than necessary, who suffers before it is necessary.",
    tags: ["anticipation","suffering","patience"],
    mode: "parent",
    core_meaning: "Parents are world-class pre-emptive worriers. You can spend years dreading your child’s teenage years before they arrive, or catastrophising about struggles they may never face. That sustained anxiety costs you — and doesn’t protect them.",
    scenario_generic: "Your eight-year-old is shy and you’re already imagining bullying, social isolation, and struggles a decade from now. You’ve been quietly grieving a future that hasn’t happened. Meanwhile your eight-year-old is perfectly happy. Don’t let an imagined future steal your present peace.",
    mcq_question: "What does Seneca’s quote suggest about parental worry?",
    mcq_options: [
      "Parents need to anticipate every problem to stay prepared",
      "Worry is a sign of how much you love your child",
      "Pre-emptive suffering about your child’s future adds pain without benefit"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. Caring and catastrophising are different things. Don’t borrow pain from a future that may never arrive.",
    mcq_feedback_incorrect: "Worry doesn’t protect your child. Seneca’s point: pre-suffering costs you real wellbeing for imaginary problems."
  },

  {
    id: "seneca-courage-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 78",
    quote_text: "Sometimes even to live is an act of courage.",
    tags: ["courage","perseverance","resilience"],
    mode: "parent",
    core_meaning: "There are seasons of parenting that are genuinely depleting — a sick child, a difficult marriage, burnout, mental health struggles, financial pressure. Getting through those seasons without shutting down is a quiet, underrated form of courage.",
    scenario_generic: "You’re running on fumes: the baby hasn’t slept, work is overwhelming, and you’re not sure you’re doing any of this right. You keep going anyway — feeding, showing up, loving through the exhaustion. Seneca would say: that is courage. It just doesn’t get a trophy.",
    mcq_question: "What does this quote mean for parents in difficult seasons?",
    mcq_options: [
      "Parents should seek help rather than enduring hardship alone",
      "Courage in parenting means never letting your children see you struggle",
      "The act of continuing to show up through genuine difficulty is a form of real courage"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. Enduring and showing up through hard times counts. It’s worthy of recognition.",
    mcq_feedback_incorrect: "Seneca’s point isn’t about hiding struggle or seeking rescue. It’s about honoring the courage in simply continuing."
  },

  {
    id: "seneca-spirit-parent",
    author: "Seneca",
    source_work: "On Anger",
    source_reference: "Book 2, Section 32",
    quote_text: "It is the mark of a great spirit to regard wrongs as beneath contempt.",
    tags: ["dignity","forgiveness","greatness"],
    mode: "parent",
    core_meaning: "Children will say hurtful things in heat. Other parents will judge you. Teachers will misread your kid. How you respond to these small wrongs teaches your children something about dignity. Not every slight requires a battle.",
    scenario_generic: "Another parent makes a snide comment about your parenting in front of others. You feel the sting and the urge to clap back. Instead, you respond calmly or not at all. Later, your child mentions noticing how you handled it. Your restraint did more than any comeback would have.",
    mcq_question: "How does Seneca’s idea about great spirit apply to parents?",
    mcq_options: [
      "Parents should always defend themselves against criticism",
      "Great parents don’t experience anger or frustration",
      "Not every slight deserves a reaction — and your child is watching how you choose"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "Exactly. Your response to small wrongs models something important for your children.",
    mcq_feedback_incorrect: "It’s not about being emotionless. It’s about choosing which battles are worth your dignity — and showing your child what that looks like."
  },

  {
    id: "seneca-heal-parent",
    author: "Seneca",
    source_work: "On Anger",
    source_reference: "Book 3, Section 27",
    quote_text: "How much better it is to heal an injury than to avenge it.",
    tags: ["healing","revenge","compassion"],
    mode: "parent",
    core_meaning: "When your child hurts you — a cruel word, ingratitude, defiance — the instinct can be to withdraw, punish sharply, or score a point. But what actually heals the relationship is turning toward repair rather than retribution.",
    scenario_generic: "Your teenager says something genuinely hurtful and slams their door. You want to respond with a punishment that makes them feel the weight of it. Or — after a breath — you knock on the door later and say, “That hurt. Let’s talk.” The second path actually heals something.",
    mcq_question: "What does Seneca’s quote suggest for handling hurt caused by your child?",
    mcq_options: [
      "Enforce a consequence that matches the severity of what they said",
      "Let the moment pass without addressing it",
      "Prioritise repairing the relationship over making a point"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. Repair is more powerful than punishment when it comes to the relationship.",
    mcq_feedback_incorrect: "Consequences have their place, but Seneca’s emphasis is on healing — which means turning toward the relationship, not away from it."
  },

  {
    id: "seneca-wisdom-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 76",
    quote_text: "No man was ever wise by chance.",
    tags: ["wisdom","effort","discipline"],
    mode: "parent",
    core_meaning: "Good parenting judgment doesn’t arrive automatically with the baby. It requires reflection, being willing to examine your own patterns, learning from missteps, and actively working to become the kind of parent you want to be.",
    scenario_generic: "You notice you keep repeating a pattern from your own upbringing that you said you’d never use. Recognising it is step one — but changing it takes deliberate effort. Reading, talking to other parents, and reflecting on what went wrong are how wisdom actually forms.",
    mcq_question: "What does Seneca’s quote mean for developing as a parent?",
    mcq_options: [
      "Parenting instincts improve naturally over time with experience",
      "Wisdom in parenting comes from trial and error alone",
      "Becoming a wiser parent requires intentional reflection and effort"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. Parenting wisdom is built through honest reflection and deliberate work, not just time.",
    mcq_feedback_incorrect: "Experience matters, but Seneca’s point is that wisdom requires intention. You have to choose to pursue it."
  },

  {
    id: "seneca-lightness-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 123",
    quote_text: "Nothing is burdensome if taken lightly, and nothing need arouse irritation so long as one doesn’t make it bigger by getting irritated.",
    tags: ["attitude","irritation","perspective"],
    mode: "parent",
    core_meaning: "Parenting is full of small irritants: spills, whining, repeated questions, forgotten things. None of them are large in themselves. What makes them feel overwhelming is when irritation stacks on top of irritation until you snap. The load is partly made by how you carry it.",
    scenario_generic: "Your child asks the same question for the fourth time. By itself, no big deal. But you’re tired, and your patience has been eroding all day, and now this feels like too much. Seneca would notice the stacking: the question didn’t get bigger. Your reaction did. A breath helps more than you’d think.",
    mcq_question: "What does Seneca’s idea suggest about parenting irritations?",
    mcq_options: [
      "Children should learn not to irritate their parents",
      "Parents who get irritated are failing to practise enough patience",
      "Much of parenting stress is amplified by how we respond, not by the difficulty itself"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. The irritation is often self-generated. A lighter response keeps things in proportion.",
    mcq_feedback_incorrect: "It’s not about blaming yourself for getting irritated. It’s about noticing that your reaction often makes things heavier than they need to be."
  },

  {
    id: "seneca-feardeath-parent",
    author: "Seneca",
    source_work: "Letters to Lucilius",
    source_reference: "Letter 4",
    quote_text: "He who fears death will never do anything worthy of a living man.",
    tags: ["courage","death","action"],
    mode: "parent",
    core_meaning: "An anxious need to protect your children from every possible harm can become its own kind of cage — for them and for you. Children need the room to try, fail, and take managed risks. Excessive fear of what might go wrong limits what can go right.",
    scenario_generic: "You want to let your child walk to school alone, but fear stops you. You want to let them fail a test without intervening, but you can’t stand it. At some point, your own fear of loss — of their pain, of their failure, of losing them — becomes the obstacle to their growth.",
    mcq_question: "What does Seneca’s quote suggest about fear in parenting?",
    mcq_options: [
      "The more protective you are, the better parent you are",
      "Death and danger are too serious for children to face without full protection",
      "Excessive fear of harm can stop both you and your child from doing what matters"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. Over-protection driven by fear limits your child’s growth and your own peace.",
    mcq_feedback_incorrect: "Protecting your child is natural, but Seneca’s warning applies: living in fear prevents anything worthy from happening."
  },

  {
    id: "marcus-accept-parent",
    author: "Marcus Aurelius",
    source_work: "Meditations",
    source_reference: "Book 9, Section 42",
    quote_text: "Is a world without shameless people possible? No. So this person you’ve just met is one of them. Get over it.",
    tags: ["acceptance","patience","realism"],
    mode: "parent",
    core_meaning: "Your child will meet selfish classmates, unfair teachers, and unkind peers. You’ll encounter difficult parents, rigid administrators, and people who behave badly. Marcus’ gift: stop being outraged by the existence of difficult people. Expect them, respond practically, and move on.",
    scenario_generic: "Another parent is undermining your child at sports, or a teacher is consistently dismissive, and you’re carrying that frustration home every day. Marcus would say: yes, this person is genuinely difficult. That’s not a surprise. Handle what you can and don’t let their behaviour live in you rent-free.",
    mcq_question: "How does Marcus Aurelius’ realism help parents dealing with difficult people?",
    mcq_options: [
      "It tells you to avoid all toxic situations for your family’s sake",
      "It suggests that difficult people will eventually change if you’re consistent",
      "It removes the surprised outrage, leaving you free to respond practically"
    ],
    mcq_correct_index: 2,
    mcq_feedback_correct: "That’s it. No more shock. Just a practical, grounded response to what was always going to be there.",
    mcq_feedback_incorrect: "It’s not about avoidance or hope for change. Marcus is freeing you from the drain of constant outrage."
  }
];
