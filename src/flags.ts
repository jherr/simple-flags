import { unstable_flag as flag } from "@vercel/flags/next";

export const allowExpensiveAI = flag({
  key: "expensive-ai",
  description: "Use the expensive AI model",
  decide: async () => {
    const response = await fetch(
      "https://jherr-feature-flags.s3.us-west-1.amazonaws.com/flags.json"
    );
    const flags = await response.json();
    return flags["expensive-ai"];
  },
  defaultValue: true,
});

export const precomputeFlags = [allowExpensiveAI] as const;
