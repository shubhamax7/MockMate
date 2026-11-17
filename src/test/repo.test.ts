import { beforeEach, describe, expect, it } from "vitest";

import { DEMO_INTERVIEWS } from "@/data/fixtures";
import { defaultConfig, listInterviews } from "@/lib/repo";

const SESSIONS_KEY = "interview-coach-sessions";

describe("demo interview repository", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("lists the bundled demo interviews for a fresh browser", () => {
    const interviews = listInterviews();

    expect(interviews).toHaveLength(DEMO_INTERVIEWS.length);
    expect(interviews.map((interview) => interview.id)).toEqual([
      "demo-1",
      "demo-2",
      "demo-3",
      "demo-4",
    ]);
  });

  it("uses a locally persisted session once when it overrides a fixture", () => {
    const localOverride = {
      summary: {
        ...DEMO_INTERVIEWS[0],
        status: "in_progress" as const,
        reportAvailable: false,
      },
      config: defaultConfig("mock"),
    };
    window.localStorage.setItem(SESSIONS_KEY, JSON.stringify([localOverride]));

    const interviews = listInterviews();

    expect(interviews).toHaveLength(DEMO_INTERVIEWS.length);
    expect(interviews.filter((interview) => interview.id === "demo-1")).toEqual(
      [localOverride.summary],
    );
  });
});
