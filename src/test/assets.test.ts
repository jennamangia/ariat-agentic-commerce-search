import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import manifest from "../../docs/asset-manifest.json";

const root = resolve(import.meta.dirname, "../..");

describe("Original image migration", () => {
  it("retains every original upload with its recorded bytes and hash", () => {
    expect(manifest).toHaveLength(63);
    expect(new Set(manifest.map((asset) => asset.path)).size).toBe(63);
    for (const asset of manifest) {
      const bytes = readFileSync(resolve(root, asset.path));
      expect(bytes.length, asset.path).toBe(asset.size);
      expect(createHash("sha256").update(bytes).digest("hex"), asset.path).toBe(asset.sha256);
    }
  });

  it("contains only local image imports and no remaining asset proxy pointers", () => {
    const files = readdirSync(resolve(root, "src"), { recursive: true }) as string[];
    expect(files.filter((file) => file.endsWith(".asset.json"))).toEqual([]);
    for (const file of files.filter((file) => /\.(ts|tsx|css)$/.test(file))) {
      if (file === "test/assets.test.ts") continue;
      const source = readFileSync(resolve(root, "src", file), "utf8");
      expect(source, file).not.toMatch(/__l5e|@lovable\.dev|__lovable/);
    }
  });
});
