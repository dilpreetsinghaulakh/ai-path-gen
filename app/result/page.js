"use client";
import { OpenAI } from "openai";
import { useEffect } from "react";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

async function makeChatRequest(promptInput) {
  return openai.chat.completions.create({
    messages: [{ role: "system", content: promptInput }],
    model: "gpt-3.5-turbo",
  });
}
async function getResult(languages, frameworks) {
  // TEST INPUT
  let prompt = `Give me the JSON for an array object called "paths" containing 10 learning paths that suggest user for learning new programming skills which are related to what he knows. Paths should be in the form of objects which have title, description and skills (new or old) as keys. The user knows [${languages}] language(s).`;

  if (frameworks) {
    prompt += ` The user knows [${frameworks}] frameworks.`;
  }

  console.log(prompt);

  let ideas;

  const paths = await makeChatRequest(prompt)
    .then((res) => {
      ideas = res.choices[0].message.content;
      return Promise.resolve(ideas);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(paths);
}

export default function Home() {
  useEffect(() => {
    if (sessionStorage.getItem("userKnowledge")) {
      const userKnowledge = JSON.parse(sessionStorage.getItem("userKnowledge"));
      sessionStorage.clear();

      console.log(userKnowledge);

      getResult(userKnowledge.lang, userKnowledge.framework);
    }
  }, []);

  return (
    <main
      className=" max-w-7xl mx-auto px-8 sm:px-16 w-screen"
      id="mainContent"
    >
      <div className="flex flex-col items-center h-full gap-10 justify-center">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Result here
        </h1>
      </div>
    </main>
  );
}
