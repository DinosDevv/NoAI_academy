DAY 01:
  - Kicked off the 1st project, learned quite a few about grid vs flexbox in css, made an ULTRA basic scaffolding of how the portfolio is going to look, looking forward into adding mobile responsiveness soon.

DAY 02:
  - Continued progressing on the 1st project, I had the idea of making a very plain, no-css site that upon clicking on the profile picture, changes into a very fascinating, modern, techy vibe (it's probably gonna take more time than I initially anticipated)
    - For that, I used JS, I am not sure if that's cheating or not!
  - Started working on the device responsiveness, although, I am nowhere close to making something actually useable
  (DAY 02.5):
    - I actually added some mobile responsiveness, it works kind of better. I have an issue creating a sticky navbar, but I might scrap the idea completely, so it's fine.
    - Still figuring out how I want the animation to turn out, and frankly I think my css code is kind of spaghetti

DAY 03:
  - Completely changed direction for the UI/UX and design of the portfolio, the vision of flashy animations is still the same, but I'm thinking of a more always-animated approach. I still struggle with mobile responsiveness and I realized that I hate writing CSS

DAY 04:
  - I finally have something that I like. I made a lot of changes regarding the mobile responsiveness component of the website. 
  - I'm thinking of even hosting the site as my actual portfolio/CV. I'm thinking about it!
  - I took some assistance from an LLM to make the color of the font more readable because there was a moment in the animation where font color and background color were the same, making the text unreadable
  - I deployed my app https://dinosdevv.com

DAY 05:
  - I started the second project (Wordle clone with Typescript, HTML, CSS), so far it seems very easy, didn't encounter many problems except maybe the fact that I don't know when to use types in typescript and how

DAY 06:
  - I added most of the functionality to the game.
  - The way it works is:
    - 30 (rows = 6 * cols = 5) cells are generated and added to an array
    - Typing works through an index that points to an item in the cell array (Typing a valid character -> index + 1, Backspace -> index - 1)
    - I restricted being able to edit previous rows' values by disallowing further character deletion when index is pointing to the first column
    - I also prevent the user from typing to the next row unless "Enter" is pressed. Then:
      - The validity of the word is checked ('ASDFG' is not a valid word, 'APPLE'/'HELLO' are.)
      - The program checks whether letters exist and if so if they are at the correct position or not, paints the cells accordingly
    - Only then, the user can make another guess on the next row
DAY 07:
  - I left the Wordle project a bit prematurely, out of enthusiasm to go on to the next project
  - Got started with the devlog CLI
DAY 08:
  - Added the Add-Entry feature for the CLI
  - Had an issue with writing to the json file. The issue: `returned: [object Object]`, `output: {}` (empty). Realized that the fs.readFile() is asynchronous and as a result, the parent readContent() function returned the empty output before the content of the file was read and saved. The temporary `dataToSave[]` array ended up just keeping the current entry, as well as an empty object `{}`. What I did is I re-wrote the function in a synchronous way by using `try/catch`.