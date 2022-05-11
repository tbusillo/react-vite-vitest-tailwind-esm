import shiki from 'shiki';

const highlighter = async () => {
  shiki
    .getHighlighter({
      theme: 'nord'
    })
    .then((highlighter) => {
      console.log(
        highlighter.codeToHtml(`console.log('shiki');`, { lang: 'js' })
      );
      highlighter.codeToHtml(`console.log('shiki');`, { lang: 'js' });
    });
};
