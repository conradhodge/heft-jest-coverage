import { doSomething } from "./do-not-ignore";

const mockConsoleLog = jest.spyOn(console, "log").mockImplementation(jest.fn());

describe("Do not ignore", () => {
  it("Should do something", () => {
    doSomething();

    expect(mockConsoleLog).toBeCalled();
    expect(mockConsoleLog).toBeCalledWith('Hi');
  });
});
