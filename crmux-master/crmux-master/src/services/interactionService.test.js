import { getInteractions } from "./interactionService";
import axios from "axios";

jest.mock("axios");

describe(" Interaction Service ", () => {
  it("Should return a list of interactions ", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: "1",
          customerId: "1",
          date: "12/8/2020 18:00:00",
          comments: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ligula tristique, dignissim nunc at, hendrerit orci. Vestibulum in odio eu lacus pretium molestie at sit amet urna. Aenean ullamcorper ante a augue dignissim scelerisque. Proin id nunc turpis. Morbi mauris mi, lobortis vitae dictum quis, bibendum vitae odio. Nam sem nulla, lacinia id diam quis, varius ullamcorper tellus. Vestibulum ut venenatis ante. Vestibulum ac diam commodo, fringilla tellus at, pellentesque metus. Nunc vel dapibus nibh. Duis tempor, ex sit amet pulvinar malesuada, massa mauris cursus sem, imperdiet consequat mauris nulla sit amet odio. Proin est justo, interdum lobortis congue vitae, condimentum at diam. Proin maximus libero vitae massa feugiat molestie. Ut id odio sit amet libero scelerisque scelerisque posuere ultrices urna. Maecenas tellus erat, rhoncus non lacinia facilisis, pulvinar ac justo. Aenean sed odio ac ex maximus blandit. Donec id elementum elit.
              \n
              Nullam ut tellus maximus, interdum ipsum at, ullamcorper urna. Duis a purus nisi. Praesent non metus eget nulla pretium tincidunt faucibus eget nulla. Proin id dolor nisl. Donec lacinia, nunc vel accumsan efficitur, sapien metus lacinia tortor, sit amet tincidunt est arcu vitae lorem. Nam libero augue, porttitor in elit nec, faucibus sollicitudin orci. Sed fringilla urna quis vulputate tempus. Nulla non massa sapien. Morbi vitae sollicitudin magna, eu maximus ligula. Sed mattis, nunc sed consequat dapibus, magna neque pharetra urna, at ornare velit justo ut neque. Sed sed dapibus nisi, sed feugiat magna. Suspendisse massa nulla, sodales vel faucibus a, consequat et justo. Cras gravida elit quis orci pretium finibus. Nam imperdiet condimentum quam, dignissim vulputate sapien aliquam sed. Curabitur in sodales nulla, vestibulum varius ante. Sed lacus odio, semper non orci vel, vestibulum consectetur erat.
              \n
              Pellentesque ut neque magna. Praesent mattis lectus purus, sit amet porta turpis aliquet ac. Curabitur ipsum felis, laoreet in justo at, porttitor condimentum justo. Integer consequat porta tortor. Pellentesque ullamcorper quam eros, quis tristique tellus viverra non. Quisque faucibus dolor id tortor hendrerit ultrices. Fusce dictum hendrerit purus ac feugiat. Duis vitae quam posuere, elementum elit quis, iaculis nisi. Vivamus at neque maximus, facilisis metus sit amet, laoreet nibh. Integer eu nulla lacinia, dapibus nunc ac, aliquam ligula. Donec eget urna eget lacus tincidunt porttitor at eget tellus. Quisque scelerisque dolor cursus metus maximus mollis. Praesent eu dui eget justo facilisis tempor. Suspendisse non lacus mi. Morbi laoreet mi sollicitudin metus maximus, ac lobortis diam euismod.`,
        },
        {
          id: "2",
          customerId: "1",
          date: "13/8/2020 18:55:12",
          comments: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mattis dui. Vestibulum nec odio sit amet nisi maximus faucibus nec sit amet purus. Cras sit amet lacus molestie, lacinia est non, malesuada libero. Nam pharetra ligula et diam euismod luctus. Donec eu facilisis lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi in condimentum orci. Vivamus sagittis, lacus a volutpat tincidunt, quam ligula fringilla nisi, non posuere augue risus vel felis.
              \n
              Morbi in mi pulvinar, laoreet lacus sed, tincidunt lorem. Mauris convallis vehicula sapien sit amet sodales. Curabitur finibus sed nulla fermentum vulputate. Ut ligula dui, mollis vel venenatis vitae, varius non orci. Quisque sagittis nibh eget massa rutrum, id posuere orci luctus.`,
        },
        {
          id: "3",
          customerId: "1",
          date: "12/8/2020 14:12:55",
          comments: "Talking points",
        },
      ],
    });
    const interactions = await getInteractions("1");
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
