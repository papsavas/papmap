import { describe, expect, it, vi } from "vitest";
import { PapMap } from "..";

describe('Monitored Collection', () => {
  const [k, v] = ["key", "val"];
  const mockMonitor = vi.fn();
  const papmap = new PapMap<string, string>(undefined, {
    get: mockMonitor,
    set: mockMonitor,
    delete: mockMonitor,
    sweep: mockMonitor
  });

  it('should trigger monitor', () => {
    mockMonitor.mockClear();
    papmap.set(k, v, true);
    papmap.get(k, true);
    papmap.delete(k, true);
    papmap.sweep(() => true, true);
    expect(mockMonitor).toBeCalledTimes(4)
  });

  it('should not trigger monitor', () => {
    mockMonitor.mockClear();
    papmap.set(k, v);
    papmap.get(k, false);
    papmap.delete(k);
    papmap.sweep(() => true);
    expect(mockMonitor).not.toBeCalled()
  });
});