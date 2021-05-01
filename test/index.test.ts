import EventEmitter from "events";

const event = new EventEmitter();
const spawnFn = jest.fn(() => event);

jest.mock("child_process", () => ({ spawn: spawnFn }));

import { spawn } from "../src/index";

describe("spawn", () => {
  it("works", async () => {
    expect.assertions(2);
    const cmd = "echo Hello World!";
    const promise = spawn(cmd);
    event.emit("exit", 0);
    await promise;
    expect(spawnFn).toHaveBeenCalledTimes(1);
    expect(spawnFn).toHaveBeenCalledWith(cmd, {
      shell: true,
      stdio: "inherit",
    });
  });
});
