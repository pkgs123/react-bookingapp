export const modules = {
  toolbar: [
    [{ "header": [1, 2, false] }],
    ["bold", "italic", "underline","strike"],//, "blockquote"],
    [{"list": "ordered"}, {"list": "bullet"}],//, {"indent": "-1"}, {"indent": "+1"}
    ["link"],
    [{"color": ["black","red","green","blue"]}],
    ["clean"]
  ],
};

export const formats = [
  "header",
  "bold", "italic", "underline", "strike", "blockquote",
  "link",
  "list", "bullet",// "indent",
  "color"
]