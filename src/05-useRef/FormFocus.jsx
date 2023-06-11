import { useRef } from 'react'

export const FormFocus = () => {
  const inputRef = useRef()

  const handleFocusBtnClick = () => {
    inputRef.current.select()
  }

  return (
    <>
      <h1>Form focus</h1>

      <input
        type="text"
        placeholder="Input focus"
        ref={inputRef}
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={handleFocusBtnClick}>
        Set focus
      </button>
    </>
  )
}
