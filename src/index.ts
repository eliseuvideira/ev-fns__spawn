import { spawn as _spawn } from "child_process";

export const spawn = async (cmd: string) => {
  const event = _spawn(cmd, { shell: true, stdio: "inherit" });
  await new Promise<void>((resolve, reject) => {
    event.on("exit", (code, signal) => {
      if (signal) {
        reject(new Error(`exited signal ${signal}`));
      }
      if (code !== 0) {
        reject(new Error(`exited code ${code}`));
      }
      return resolve();
    });
    event.on("error", reject);
  });
};
