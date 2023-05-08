const schema = {
  type: "object",
  properties: {
    author: { type: "string", format: "email" },
    content: { type: "string" },
    title: { type: "string", maxLength: 25 },
  },
  required: ["author", "content", "title"],
  additionalProperties: false,
};

export default schema;
