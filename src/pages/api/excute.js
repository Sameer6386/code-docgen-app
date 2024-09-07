// src/pages/api/execute.js
import { VM } from "vm2";

export default function handler(req, res) {
  const { code } = req.body;

  try {
    const vm = new VM({
      timeout: 1000,
      sandbox: {},
    });

    const result = vm.run(code);
    res.status(200).json({ result: result.toString() });
  } catch (error) {
    res.status(500).json({ result: `Error: ${error.message}` });
  }
}
