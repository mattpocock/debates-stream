# THE SUPREME COURT OF TYPESCRIPT

We will be debating the most contentious topics in TypeScript. I will be arguing BOTH sides of every debate, with help from my crack legal team (you).

## Debates

We'll be debating four main topics:

1. Enums. Should you use them?

**Verdict**: Don't use them

2. `no-explicit-any` - should you allow developers to submit any's into your codebase?

**Verdict**: Enable in applications (but allow exceptions for rare cases). Disable in library code. Disable in test suites.

3. Types vs Interfaces. Which should you use?

**Verdict**: It depends. Use whatever your team use.

4. `noImplicitReturns` - should you force your developers to specify return types in all cases?

**Verdict**: The more consumers your function has, the more benefit you get from adding a return type. Many functions do not have consumers, or their consumers are hidden in a framework (React components). So, forcing developers to explicitly pass return types is bad.

## Exhibits

If you want to help argue your case, you'll need to submit exhibits. PR some TypeScript into the `src/exhibits` folder, and I'll see if it's useful in court. Who knows - your code could become a star witness.
