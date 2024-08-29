import React, { useEffect, useState } from "react";

function decodeHTML(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

const FormatHtml = ({ htmlString }) => {
  const [decodedHTML, setDecodedHTML] = useState("");

  useEffect(() => {
    let html = htmlString
      ?.replace(/['"]/g, "")
      .replace(/\\"/g, '"')
      .replace(/\\r\\n/g, "<br/>");
    const decoded = decodeHTML(html);
    setDecodedHTML(decoded);
  }, [htmlString]);

  const createReactElements = (html) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return <>{createReactElements(decodedHTML)}</>;
};

export default FormatHtml;
