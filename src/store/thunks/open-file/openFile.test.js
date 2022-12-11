import { openFile } from "./openFile";

describe("open file", () => {
  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn(
    )
  })

  it("should not open a node if it has children", () => {
    const node = { id: "1", children: [{ id: 2 }] }
    openFile(node)(dispatch, getState)
    expect(dispatch).not.toHaveBeenCalled()
    expect(getState).not.toHaveBeenCalled()
  })

  it("should open a node if it has not already opened", () => {
    getState.mockReturnValue({ files: { activeFilesIds: [] } })
    const node = {
      id: "1"
    }
    openFile(node)(dispatch, getState)
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/addActiveFile', payload: '1' }])
    expect(dispatch.mock.calls[1]).toEqual([{ type: 'files/setEditorActiveFile', payload: '1' }])
  })

  it("should open a node if it has already opened", () => {
    getState.mockReturnValue({ files: { activeFilesIds: ["1"] } })
    const node = {
      id: "1"
    }
    openFile(node)(dispatch, getState)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch.mock.calls[0]).toEqual([{ type: 'files/setEditorActiveFile', payload: '1' }])
  })
})