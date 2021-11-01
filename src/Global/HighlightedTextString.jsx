import React from "react";

/**
 *
 * @param {object} highlight        An array of highlighted words (multiple highlighted words in a string) that need to have a color change based on highlight color passed in
 * @param {string} highlightColor   A single color for all highlight words passed in
 * @param {string} children         The child prop that renders the text
 * @returns {React Component}       Returns a component that renders the string with highlighted words
 */
export const HighlightedTextString = ({
  styledDiv: StyledDiv,
  highlightedWords,
  highlightColor,
  children,
}) => {
  const formattedTexts = [];

  // traverse highlight to see if it exists in the children string
  // first sort highlighted words based on their index on children string if they exist
  let highlightedWordsSorted = [];
  highlightedWords.forEach((highlight) => {
    const hasCurrHighlightedWord = children.search(highlight);
    if (hasCurrHighlightedWord) {
        highlightedWordsSorted.push({highlightedIndex: hasCurrHighlightedWord, word: highlight});
    }
  });
  highlightedWordsSorted = highlightedWordsSorted.sort((a, b) => a.highlightedIndex - b.highlightedIndex);

  highlightedWordsSorted.forEach((highlight, index) => {
    let beforeHighlighted, afterHighlighted;

    // if a string has multiple highlighted word, do not start from 
    if (index === 0) {
        beforeHighlighted = Array.from(children)
        .slice(0, highlight.highlightedIndex)
        .join("")
        .toString();
      afterHighlighted = Array.from(children)
        .slice(highlight.highlightedIndex + highlight.word.length, highlightedWordsSorted[index + 1].highlightedIndex)
        .join("")
        .toString();
    } else if (index !== highlightedWordsSorted.length - 1) {
        // middle iteration
        beforeHighlighted = "";
      afterHighlighted = Array.from(children)
        .slice(highlight.highlightedIndex + highlight.word.length, highlightedWordsSorted[index + 1].highlightedIndex)
        .join("")
        .toString();
    } else {
        // last iteration; append the rest
        beforeHighlighted = "";
      afterHighlighted = Array.from(children)
        .slice(highlight.highlightedIndex + highlight.word.length, children.length)
        .join("")
        .toString();
    }
    
      const currHighlightWord = [
        { text: beforeHighlighted, type: "before", color: null },
        { text: highlight.word, type: "highlight", color: highlightColor },
        { text: afterHighlighted, type: "after", color: null },
      ];

      formattedTexts.push(currHighlightWord);
  });

  return (
    <StyledDiv>
      {formattedTexts.length > 0 ? (
        <HighlightedTextFormat texts={formattedTexts}></HighlightedTextFormat>
      ) : (
        { children }
      )}
    </StyledDiv>
  );
};

export const HighlightedTextFormat = ({ texts }) => {
  return (
    <p>
      {texts.map((formattedText) => {
        return formattedText.map((text) => {
          const { text: textContent } = text;
          if (text.type === "highlight") {
            return (
              <span style={{ color: `${text.color}` }}>{textContent}</span>
            );
          } else {
            return <span>{textContent}</span>;
          }
        });
      })}
    </p>
  );
};
