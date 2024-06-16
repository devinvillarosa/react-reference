import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { MyModal } from "./components/MyModal";

import viteLogo from "/vite.svg";
import "./App.css";

const SMALL_CONTENT =
  "Bacon ipsum dolor amet tenderloin tri-tip chicken fatback, alcatra ground round swine ribeye filet mignon. Capicola swine rump, jerky frankfurter drumstick pancetta pig kevin bresaola. Pork chop brisket drumstick pork loin venison ham shoulder. Beef leberkas bresaola spare ribs andouille. Strip steak cupim kielbasa, turducken andouille meatball corned beef beef chislic ground round jerky";

const MEDIUM_CONTENT = `
  Bacon ipsum dolor amet beef ribs pork belly buffalo landjaeger leberkas beef, pastrami alcatra ham hock swine prosciutto pork jerky doner boudin. Pastrami burgdoggen cupim, jerky chicken rump landjaeger doner chuck. Tail shank pork belly, kielbasa capicola prosciutto filet mignon meatloaf ribeye. Short loin tail frankfurter, sirloin leberkas bresaola biltong rump. Bacon kevin flank, turkey kielbasa tail boudin short loin cow jowl. Short loin spare ribs turducken, pork chop shankle doner beef corned beef t-bone picanha swine.

Ribeye turducken brisket, ham short ribs turkey cupim pancetta tail jowl fatback. Picanha prosciutto short loin shoulder short ribs landjaeger pork loin kielbasa ham beef ribs kevin cupim venison. Andouille filet mignon meatball meatloaf. Picanha drumstick jowl, prosciutto bresaola ham hock andouille shank jerky pork loin rump. Strip steak ribeye tongue tail porchetta. Pork pork loin hamburger rump cupim short loin tri-tip.
  `;

const LARGE_CONTENT = `
  Bacon ipsum dolor amet cow hamburger meatball, beef t-bone pancetta pork chop. Cow burgdoggen rump boudin sirloin fatback ground round bacon pig venison chicken andouille bresaola chislic. Sirloin fatback turducken pork belly chuck burgdoggen ribeye capicola beef ribs. Burgdoggen frankfurter pork chop brisket ground round meatloaf capicola salami t-bone chicken kevin andouille. Salami tongue picanha t-bone pig tail.

Doner spare ribs cow, chislic sausage ham prosciutto shank kielbasa hamburger corned beef pork belly. Frankfurter cupim rump, brisket strip steak swine shoulder beef pancetta tail t-bone andouille burgdoggen. Bacon swine frankfurter meatloaf pancetta jowl. Jerky pork chop chuck biltong shankle, salami burgdoggen pork belly t-bone pig ham hock.

Boudin meatloaf filet mignon burgdoggen short loin bresaola. Pork belly beef tenderloin cupim salami. Strip steak ground round tail, flank beef ham hock bresaola tri-tip prosciutto shankle buffalo. Pancetta shoulder fatback, pastrami tenderloin ham t-bone cow landjaeger beef.

Bacon rump beef ribs biltong swine ham short loin pancetta alcatra. Capicola doner picanha shoulder ham hock tri-tip alcatra. Shoulder andouille chicken tenderloin short loin pork chop boudin salami pork belly kevin. Drumstick beef biltong, t-bone chislic swine leberkas corned beef fatback pork beef ribs cow pastrami pig rump. Kielbasa leberkas pig, corned beef burgdoggen cupim fatback porchetta. Boudin spare ribs ribeye meatball tenderloin turducken hamburger. Landjaeger shankle kevin, flank tri-tip turducken ham prosciutto meatloaf bacon venison buffalo burgdoggen biltong ham hock.

Tri-tip tenderloin sausage shoulder. Biltong short loin pork ball tip shank, t-bone ground round. Biltong ground round doner, cupim tongue bacon tail rump chislic buffalo strip steak boudin shoulder beef tri-tip. Flank beef ribs ham hock, cow cupim corned beef rump pork belly bresaola salami ground round. Pancetta doner swine porchetta ham hock frankfurter hamburger short loin turducken drumstick leberkas jowl pastrami t-bone. Pork chop andouille pig bacon, pork belly corned beef meatball strip steak jerky spare ribs. Chuck salami pancetta, kielbasa ham fatback shoulder.
  `;

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const handleToggleModal = () => setShow((curr) => !curr);
  const handleCloseModal = () => setShow(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleToggleModal}>Toggle modal</button>
      <MyModal show={show} onClose={handleCloseModal} size="medium">
        <h4>Welcome to my Modal!!</h4>

        <p>{SMALL_CONTENT}</p>

        <p>{SMALL_CONTENT}</p>

        <p>{SMALL_CONTENT}</p>
      </MyModal>
    </>
  );
}

export default App;
