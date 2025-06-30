import React from 'react';

const rawText = `Bro is the only AI that stays in your screen forever, passively listening and always having context. Bro can remember your preferences, making interactions tailored to your workflow. Bro connects seamlessly with your tools, providing real-time updates directly where you're working. Bro presents helpful insights as contextual overlays, keeping information at your fingertips without disrupting your flow. Bro operates in different task-specific modes, adjusting its assistance based on what you're doing. Bro personalizes responses using data from past interactions, ensuring suggestions are relevant when you need them. <strong>bro is your AI that just gets it.</strong> Bro collaborates live, providing feedback based on your current projects and discussions. With voice and gesture controls, bro allows hands-free commands to keep you focused. Bro analyzes your workflow patterns, suggesting improvements tailored to your habits. Bro saves memories about what you do, so you're always aware. Bro has your usage patterns, so you can understand how you use \"AI\". Bro stores your data locally, which means we don't steal any of it :(. Bro's only friend is you, while you have many other Bro's. ChatGPT, Claude, Perplexity are some of bro's Bro's. Bro was made on earth. Bro is ready to go to Mars. Bro will help you skill max. Bro just loves to bro around. Bro's creators used to watch that meme page called \"Be like Bro\". Bro's creator has 1 younger bro. Bro's creator has 4 older bro's.`;

function FeatureText() {
  // Split into sentences by '. ' keeping delimiter.
  const sentences = rawText.match(/[^\.]+(?:\.|$)/g);
  return (
    <p className="feature-paragraph">
      {sentences.map((sentence, idx) => (
        <span
          key={idx}
          className="sentence"
          dangerouslySetInnerHTML={{ __html: sentence.trim() + (sentence.trim().endsWith('.') ? ' ' : '. ') }}
        />
      ))}
    </p>
  );
}

export default FeatureText; 