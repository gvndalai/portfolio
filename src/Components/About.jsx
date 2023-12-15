import React from "react";
export const About = () => {
  return (
    <div class="about-wrapper sm:w-[1440px] h-a uto sm:px-24 sm:py-20 flex bg-gray-50 flex-col  items-center">
      <div class="flex flex-col gap-12 py-8 items-center p-4">
        <button class="About-me-text w-[105px] h-[28px] px-5 py-1 rounded-xl flex items-center justify-center font-medium text-sm bg-custom-color-about-me bg-custom-gray-light">
          About me
        </button>
        <div class=" flex gap-12 justify-between flex-col sm:flex-row sm:items-center">
          <div class="flex justify-center sm:items-start sm:justify-start sm:w-1/2 h-full ">
            <img
              class="flex sm:w-[380px] w-[280px] h-[360px] sm:h-[480px] shadow-custom"
              src="https://i.pinimg.com/564x/68/c6/18/68c6180f7a51cf32456a977c8c2ea8c2.jpg"
            ></img>
          </div>
          <div class="flex flex-col h-full sm:w-1/2 ">
            <h1 class="text-[30px] ">Curious about me? Here you have it</h1>
            <p>
              Erwin was a complex character, portrayed as serious, calculating,
              and always planning far in the future. While he trusted his men,
              he was the first to realize that there was a spy interfering with
              the Survey Corps, and was able to come up with a reasonable
              criteria to determine which of his soldiers to trust with vital
              information, and which to keep in the dark. An eloquent speaker,
              Erwin was able to sway many people, such as the military tribunal
              held to judge Eren and the trainees into choosing which
              recruitment branches to join.
            </p>
            <p>
              Erwin was often seen as a very grim individual. He accepted all
              news, good or bad, mockery or praise, with the same stoic
              attitude. His ultimate goal was for humanity to once again rise up
              and become the dominant species over the Titans, a goal he was
              willing to sacrifice anything for, such as when ordering everyone
              to save Eren even after being caught in the jaws of a Titan,
              resulting in the loss of his right arm.[6]
            </p>
            <p>
              He shared this unique stoic quality with men such as Garrison
              Commander Dot Pixis, team leader Ian Dietrich, and
              Commander-in-Chief Darius Zackly. As Armin Arlert put it, Erwin,
              like the aforementioned three men, had the ability to send his men
              to die if it would further the cause of humanity. He and they
              would sacrifice their own humanity in order to bring change to a
              world where those who cannot sacrifice things important to them
              will not change anything. Since he was able to make such
              commitments, he was a master strategist, shown multiple times
              through actions like capturing the Female Titan and leading a
              group of Titans to distract the Armored Titan so the military
              could save Eren.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
