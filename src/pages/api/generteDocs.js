export default function handler(req, res) {
  const { code } = req.body;

  try {
    // Basic example to generate documentation
    const lines = code.split("\n");
    let docs = "Code Documentation:\n\n";

    lines.forEach((line) => {
      if (line.trim().startsWith("//")) {
        docs += `Comment: ${line.trim()}\n`;
      } else if (line.includes("function")) {
        const funcName = line.match(/function (\w+)/);
        if (funcName) {
          docs += `Function: ${funcName[1]}\n`;
        }
      } else if (
        line.includes("const") ||
        line.includes("let") ||
        line.includes("var")
      ) {
        const varName = line.match(/(const|let|var) (\w+)/);
        if (varName) {
          docs += `Variable: ${varName[2]}\n`;
        }
      }
    });

    res.status(200).json({ docs });
  } catch (error) {
    res.status(500).json({ error: "Error generating documentation" });
  }
}
