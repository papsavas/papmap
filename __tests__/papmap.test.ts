import { describe, expect, it, vi } from "vitest";
import { PapMap } from "../src";

describe('Monitored Collection', () => {
  const [k, v] = ["key", "val"];
  const mockMonitor = vi.fn();
  const papmap = new PapMap<string, string>(undefined, {
    get: mockMonitor,
    set: mockMonitor,
    delete: mockMonitor,
    sweep: mockMonitor
  });

  it('should trigger monitor by default', () => {
    mockMonitor.mockClear();
    papmap.set(k, v, true);
    papmap.get(k);
    papmap.delete(k,);
    papmap.sweep(() => true, true);
    expect(mockMonitor).toBeCalledTimes(4)
  });

  it('should not trigger monitor', () => {
    mockMonitor.mockClear();
    papmap.set(k, v, false);
    papmap.get(k, false);
    papmap.delete(k, false);
    papmap.sweep(() => true, false);
    expect(mockMonitor).not.toBeCalled()
  });
});