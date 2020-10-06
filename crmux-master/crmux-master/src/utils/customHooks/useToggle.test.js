import { renderHook, act } from "@testing-library/react-hooks";
import useToggle from "../customHooks/useToggle";

// instsall npm install --save-dev @testing-library/react-hooks
describe("useToggle hook", () => {
  it("should handle toggling", () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => result.current.handleStatusChange());

    expect(result.current.status).toEqual(true);

    act(() => result.current.handleStatusChange());

    expect(result.current.status).toEqual(false);
  });
});
