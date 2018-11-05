import Anteater from "./app/models/Anteater.js";
import Buffalo from "./app/models/Buffalo.js";
import Cow from "./app/models/Cow.js";
import Deer from "./app/models/Deer.js";
import Elephant from "./app/models/Elephant.js";
import Fox from "./app/models/Fox.js";
import Giraffe from "./app/models/Giraffe.js";
import Hippo from "./app/models/Hippo.js";
import Impala from "./app/models/Impala.js";
import Jellyfish from "./app/models/Jellyfish.js";
import Koala from "./app/models/Koala.js";
import Lion from "./app/models/Lion.js";
import Monkey from "./app/models/Monkey.js";
import Nightingale from "./app/models/Nightingale.js";
import Octopus from "./app/models/Octopus.js";
import Panda from "./app/models/Panda.js";
import Quail from "./app/models/Quail.js";
import Rabbit from "./app/models/Rabbit.js";
import Sheep from "./app/models/Sheep.js";
import Tiger from "./app/models/Tiger.js";
import Urchin from "./app/models/Urchin.js";
import Vulture from "./app/models/Vulture.js";
import Wolf from "./app/models/Wolf.js";
import Xray from "./app/models/Xray Fish.js";
import Yak from "./app/models/Yak.js";
import Zebra from "./app/models/Zebra.js";

let farmAnimals = [
  new Cow("Carrie", "white"),
  new Rabbit("Chase", "white"),
  new Sheep("Joe", "white"),
  new Yak("Mitch", "brown")
]

let safariAnimals = [
  new Elephant("Harry", "grey"),
  new Lion("Simba", "orange"),
  new Tiger("Baloo", "red-orange"),
  new Zebra("Zoe", "black")
]

let allAnimals = [...farmAnimals, ...safariAnimals]


