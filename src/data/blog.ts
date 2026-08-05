export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: { name: string; role: string };
  image: string; // cover art in /public/blog
  content: string[]; // paragraphs (supports "## " headings)
};

export const posts: Post[] = [
  {
    slug: "design-is-how-it-works",
    title: "Design is how it works, not how it looks",
    excerpt:
      "The most beautiful interface is worthless if it confuses. Here's how we keep aesthetics and usability on the same team.",
    category: "Design",
    date: "2026-07-22",
    readingTime: "5 min read",
    author: { name: "Akash M G", role: "Founder" },
    image: "/blog/design-is-how-it-works.svg",
    content: [
      "There's a myth that beautiful and usable are opposites — that you trade one for the other. We've never found that to be true. The most usable products we admire are also the most beautiful, and it isn't a coincidence.",
      "## Beauty is a signal",
      "When something looks considered, users assume it works well. That assumption isn't shallow — it's a shortcut the brain uses to decide whether to trust you. A polished interface buys patience; a sloppy one spends it.",
      "But the trust is only repaid if the product actually delivers. Beauty writes a cheque that function has to cash.",
      "## Every pixel is a decision",
      "We treat visual design as a decision-making tool, not decoration. Contrast directs attention. Spacing creates rhythm. Motion explains cause and effect. When a screen feels calm, it's usually because someone made a hundred quiet decisions so the user has to make none.",
      "## The test",
      "Our rule of thumb: if you removed all the colour and animation, would the product still be obvious to use? If yes, the beauty is amplifying clarity. If no, the beauty is hiding confusion. Only one of those wins awards — and keeps users.",
    ],
  },
  {
    slug: "shipping-ai-people-trust",
    title: "Shipping AI features people actually trust",
    excerpt:
      "Most AI features fail not on capability but on credibility. Trust is a design problem — here's how we engineer it.",
    category: "AI",
    date: "2026-06-30",
    readingTime: "7 min read",
    author: { name: "Akash M G", role: "Founder" },
    image: "/blog/shipping-ai-people-trust.svg",
    content: [
      "We've shipped enough AI features to know the hard part isn't the model. It's convincing a skeptical human to rely on it. Capability is table stakes; credibility is the product.",
      "## Show your work",
      "The single biggest trust lever is citations. When an assistant answers with 'according to your Q3 report, page 4' and links to it, the user can verify in one click. Verification is the antidote to hallucination anxiety.",
      "## Measure quality like you mean it",
      "You can't improve what you don't evaluate. We build an eval suite early — a set of real questions with known-good answers — and track accuracy on every change. It turns 'it feels better' into a number.",
      "## Fail honestly",
      "A good AI feature knows what it doesn't know. 'I couldn't find that in your documents' beats a confident wrong answer every time. Designing the graceful failure is as important as designing the success.",
      "Get these three right — citations, evals, honest failure — and adoption stops being a fight.",
    ],
  },
  {
    slug: "speed-is-a-feature",
    title: "Speed is a feature, not an optimisation",
    excerpt:
      "Performance isn't something you sprinkle on at the end. It's a product decision that shapes everything before it.",
    category: "Engineering",
    date: "2026-05-19",
    readingTime: "6 min read",
    author: { name: "Akash M G", role: "Founder" },
    image: "/blog/speed-is-a-feature.svg",
    content: [
      "Every hundred milliseconds you make a user wait, you lose a little of them. Speed isn't a nice-to-have you bolt on before launch — it's a feature you design toward from the first commit.",
      "## Budgets, not hopes",
      "We set a performance budget at the start: a target for load time, bundle size and interaction latency. Every decision — a font, a library, an animation — is weighed against it. Hope is not a strategy; a budget is.",
      "## The right work at the right time",
      "Most slowness comes from doing work at the wrong moment. Render on the server what can be. Defer what the user can't see. Stream what's slow. The fastest code is the code that never runs on the critical path.",
      "## Perceived speed",
      "Real speed matters, but so does perceived speed. Optimistic UI, skeletons and instant feedback make a product feel fast even while work happens. We design both — the milliseconds and the feeling of them.",
    ],
  },
  {
    slug: "brand-before-build",
    title: "Why we insist on brand before build",
    excerpt:
      "Jumping straight to design without positioning is like decorating a house with no foundation. Here's our order of operations.",
    category: "Brand",
    date: "2026-04-08",
    readingTime: "4 min read",
    author: { name: "Akash M G", role: "Founder" },
    image: "/blog/brand-before-build.svg",
    content: [
      "Clients sometimes ask us to skip strategy and 'just make it look good'. We understand the impulse — and we push back, gently but firmly. Design without positioning is guesswork with good taste.",
      "## Positioning is the brief",
      "Before we choose a colour, we answer three questions: who is this for, what do they believe, and why should they choose you? The answers become the brief every design decision is measured against.",
      "## Consistency compounds",
      "A clear brand makes every future decision faster and every touchpoint stronger. The site, the app, the deck, the invoice — they all pull in the same direction. That coherence is what people mistake for 'big company energy'.",
      "## It ages better",
      "Trend-chasing design looks dated in eighteen months. Design rooted in a real position stays relevant because it's true, not fashionable. We build brands to age like architecture, not fast fashion.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
