import shiki from 'shiki';

const highlighter = async () => {
  shiki
    .getHighlighter({
      theme: 'nord'
    })
    .then((highlighter) => {
      const element = document.querySelector('code');
      console.log(
        highlighter.codeToHtml(`${element?.innerHTML});`, { lang: 'js' })
      );
      highlighter.codeToHtml(`console.log('shiki');`, { lang: 'js' });
    });
};
